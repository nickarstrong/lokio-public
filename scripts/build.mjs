#!/usr/bin/env node
/**
 * LOKIO docs build pipeline.
 *
 * Reads:   documents-src/*.md (Markdown + YAML frontmatter)
 *          documents-src/_template.html (shared HTML wrapper)
 * Writes:  documents/<slug>.html
 *
 * Markdown engine: marked (zero-dep otherwise).
 * Custom block syntax (handled before marked):
 *   ::: section id=summary num="01 · ..." [warn=true]
 *     # H2 inside, etc.
 *   :::
 *   ::: shield "Optional tag label"
 *     paragraph
 *   :::
 *   ::: callout-warn / callout-gold / beta-notice "tag" / acceptance "tag" / contact-block
 *
 * Inline class on links: [text](url){.inline}  -->  <a class="inline" href="url">text</a>
 * Inline class on paragraphs: text{.muted} on a line by itself sets a class on the previous para.
 *
 * Usage:
 *   npm install
 *   npm run build:docs
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_DIR = join(ROOT, 'documents-src');
const OUT_DIR = join(ROOT, 'documents');

// ─── Minimal YAML frontmatter parser ──────────────────────────────────────
// Supports: scalars (string/number/bool), inline objects on single lines,
//           list of objects in flow style { k: v, k: v }.
// Anything else is left as raw string for the template — keep frontmatter simple.
function parseFrontmatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(src);
  if (!m) return { data: {}, body: src };
  const [, yaml, body] = m;
  const data = {};
  let currentKey = null;
  let currentList = null;
  for (const rawLine of yaml.split(/\r?\n/)) {
    const line = rawLine.replace(/\s+$/, '');
    if (!line.trim()) continue;
    // List item: "  - { ... }"
    if (currentList && /^\s+-\s/.test(line)) {
      const inner = line.replace(/^\s+-\s+/, '').trim();
      currentList.push(parseInlineValue(inner));
      continue;
    }
    // key: or key: value
    const kv = /^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/.exec(line);
    if (!kv) continue;
    const [, key, value] = kv;
    currentKey = key;
    if (value === '') {
      // start of a list/object on next lines
      currentList = [];
      data[key] = currentList;
    } else {
      currentList = null;
      data[key] = parseInlineValue(value);
    }
  }
  return { data, body };
}

function parseInlineValue(v) {
  v = v.trim();
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  // Quoted string
  if (/^["'].*["']$/.test(v)) return v.slice(1, -1);
  // Inline object: { key: val, key: "val", key: true }
  if (v.startsWith('{') && v.endsWith('}')) {
    const obj = {};
    const inner = v.slice(1, -1).trim();
    // Tokenize by comma respecting quoted strings.
    const parts = [];
    let buf = '';
    let inQuote = null;
    for (const ch of inner) {
      if (inQuote) {
        buf += ch;
        if (ch === inQuote) inQuote = null;
        continue;
      }
      if (ch === '"' || ch === "'") { inQuote = ch; buf += ch; continue; }
      if (ch === ',') { parts.push(buf); buf = ''; continue; }
      buf += ch;
    }
    if (buf.trim()) parts.push(buf);
    for (const p of parts) {
      const kv = /^\s*([a-zA-Z_][\w-]*)\s*:\s*(.*)$/.exec(p);
      if (!kv) continue;
      obj[kv[1]] = parseInlineValue(kv[2]);
    }
    return obj;
  }
  return v;
}

// ─── Custom block expansion (runs BEFORE marked) ──────────────────────────
// Transforms ::: blockName "optional tag" attr=value ... ::: into HTML.
// Re-runs until stable to support nesting.
function expandCustomBlocks(md) {
  let prev;
  do {
    prev = md;
    md = md.replace(/^:::\s*([a-zA-Z][\w-]*)([^\n]*)\n([\s\S]*?)\n:::[\t ]*$/m, (_match, name, rest, inner) => {
      return renderBlock(name, rest.trim(), inner);
    });
  } while (md !== prev);
  return md;
}

function renderBlock(name, args, inner) {
  // Args parsing: pull a quoted "tag" first if present, then attrs key=value.
  let tag = null;
  let attrs = {};
  const tagMatch = /^"([^"]+)"\s*(.*)$/.exec(args) || /^'([^']+)'\s*(.*)$/.exec(args);
  if (tagMatch) {
    tag = tagMatch[1];
    args = tagMatch[2];
  }
  for (const m of args.matchAll(/([a-zA-Z][\w-]*)=(?:"([^"]*)"|'([^']*)'|(\S+))/g)) {
    attrs[m[1]] = m[2] ?? m[3] ?? m[4];
  }

  // Recursively expand nested ::: inside inner first.
  inner = expandCustomBlocks(inner);
  // Render marked over inner content NOW so that surrounding raw HTML is preserved.
  // We use a marker so that final pass of marked doesn't re-process it.
  const renderedInner = marked.parse(inner).trim();

  switch (name) {
    case 'section': {
      const id = attrs.id ? ` id="${attrs.id}"` : '';
      const numCls = attrs.warn === 'true' ? ' warn' : '';
      const numHtml = attrs.num ? `<span class="section-num${numCls}">${escapeHtml(attrs.num)}</span>\n` : '';
      return `<section${id}>\n${numHtml}${renderedInner}\n</section>`;
    }
    case 'shield': {
      const tagHtml = tag ? `<span class="shield-tag">${escapeHtml(tag)}</span>\n` : '';
      return `<div class="shield">\n${tagHtml}${renderedInner}\n</div>`;
    }
    case 'beta-notice': {
      const tagHtml = tag ? `<span class="tag">${escapeHtml(tag)}</span>\n` : '';
      return `<div class="beta-notice">\n${tagHtml}${renderedInner}\n</div>`;
    }
    case 'acceptance': {
      const tagHtml = tag ? `<span class="tag">${escapeHtml(tag)}</span>\n` : '';
      return `<div class="acceptance">\n${tagHtml}${renderedInner}\n</div>`;
    }
    case 'callout-warn':
      return `<div class="callout warn">\n${renderedInner}\n</div>`;
    case 'callout-gold':
      return `<div class="callout gold">\n${renderedInner}\n</div>`;
    case 'callout':
      return `<div class="callout">\n${renderedInner}\n</div>`;
    case 'contact-block':
      return `<div class="contact-block">\n${renderedInner}\n</div>`;
    default:
      return `<div class="${name}">\n${renderedInner}\n</div>`;
  }
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── Postprocess marked output ────────────────────────────────────────────
// Convert {.className} suffix to class attribute.
//   Links: <a href="x">text {.inline}</a>  -> rendered by marked as <a href="x">text {.inline}</a>
//          marked actually keeps the {.inline} INSIDE the anchor body if it's
//          in [text](url){.inline} form? No — markdown sees {.inline} AFTER the link.
//          We handle it post-pass with a regex.
//   Paragraph: <p>...{.muted}</p>  ->  <p class="muted">...</p>
//   The custom tables Markdown generates need .tbl wrapper.
function postProcess(html) {
  // <a ...>text</a>{.inline}  ->  <a class="inline" ...>text</a>
  html = html.replace(/<a(\s[^>]*?)>([^<]*)<\/a>\{\.([a-zA-Z_][\w-]*)\}/g, (_, attrs, text, cls) => {
    if (/class\s*=/.test(attrs)) {
      attrs = attrs.replace(/class\s*=\s*"([^"]*)"/, (_m, c) => `class="${c} ${cls}"`);
    } else {
      attrs = `${attrs} class="${cls}"`;
    }
    return `<a${attrs}>${text}</a>`;
  });
  // <p>... {.muted}</p>  ->  <p class="muted">...</p>
  html = html.replace(/<p>([\s\S]*?)\s*\{\.([a-zA-Z_][\w-]*)\}<\/p>/g, '<p class="$2">$1</p>');
  // Wrap <table>...</table> in <div class="tbl">
  html = html.replace(/<table>([\s\S]*?)<\/table>/g, '<div class="tbl"><table>$1</table></div>');
  return html;
}

// ─── TOC renderer ─────────────────────────────────────────────────────────
function renderToc(toc) {
  if (!Array.isArray(toc)) return '';
  return toc.map(item => {
    const cls = item.warn ? ' class="warn"' : '';
    return `      <li><a href="${item.href}"${cls}>${escapeHtml(item.label)}</a></li>`;
  }).join('\n');
}

// ─── Apply template ───────────────────────────────────────────────────────
function applyTemplate(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const v = vars[key];
    return v == null ? '' : String(v);
  });
}

// ─── Render a single document ─────────────────────────────────────────────
function renderDoc(srcPath, templateSrc) {
  const raw = readFileSync(srcPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);

  // Expand custom blocks first; marked is called inside renderBlock.
  // Top-level body may have text outside blocks too — pass it through marked at the end.
  // We treat the entire body as a series of (custom-block | markdown) chunks.
  // Strategy: expand blocks (each renderBlock returns final HTML strings), then run marked
  // over the result. Since the block HTML is already final, marked must NOT touch it.
  // Solution: replace blocks with placeholders, run marked on the rest, then restore.

  const placeholders = [];
  const PH = (i) => `\n\n<!--BLOCK_PH_${i}-->\n\n`;
  // Find top-level ::: blocks (greedy, handles nesting via re-runs in expandCustomBlocks)
  let work = body;
  let prev;
  let i = 0;
  do {
    prev = work;
    work = work.replace(/^:::\s*([a-zA-Z][\w-]*)([^\n]*)\n([\s\S]*?)\n:::[\t ]*$/m, (_match, name, rest, inner) => {
      const html = renderBlock(name, rest.trim(), inner);
      placeholders.push(html);
      return PH(placeholders.length - 1);
    });
  } while (work !== prev);

  // Now run marked on remaining markdown (top-level prose, hr, etc.)
  let html = marked.parse(work);

  // Restore block HTML
  html = html.replace(/<!--BLOCK_PH_(\d+)-->/g, (_, idx) => placeholders[Number(idx)] || '');
  html = postProcess(html);

  // Build the header block (eyebrow, h1, lede, meta-row) — same for every text doc
  const headerBlock = `
    <span class="eyebrow">${escapeHtml(data.eyebrow || '')}</span>
    <h1>${escapeHtml(data.heading || '')}</h1>
    <p class="lede">${escapeHtml(data.lede || '')}</p>
    <div class="meta-row">
      <span>Effective: ${escapeHtml(data.effective || '')}</span>
      <span>Last updated: ${escapeHtml(data.updated || '')}</span>
      <span class="beta">${escapeHtml(data.version || '')}</span>
    </div>
`;

  const body_html = headerBlock + '\n' + html;

  const vars = {
    lang: data.lang || 'en',
    title: data.title || '',
    description: data.description || '',
    ogTitle: data.ogTitle || data.title || '',
    slug: data.slug || '',
    docTitle: data.docTitle || '',
    tocTag: data.tocTag || '',
    toc: renderToc(data.toc),
    body: body_html,
  };

  return applyTemplate(templateSrc, vars);
}

// ─── Main ─────────────────────────────────────────────────────────────────
function main() {
  const tplPath = join(SRC_DIR, '_template.html');
  const template = readFileSync(tplPath, 'utf8');

  const files = readdirSync(SRC_DIR).filter(f =>
    f.endsWith('.md') && !f.startsWith('_') && f.toLowerCase() !== 'readme.md'
  );
  if (files.length === 0) {
    console.log('No .md sources found in documents-src/');
    return;
  }

  for (const f of files) {
    const src = join(SRC_DIR, f);
    const slug = basename(f, '.md');
    const out = join(OUT_DIR, `${slug}.html`);
    const html = renderDoc(src, template);
    writeFileSync(out, html, 'utf8');
    console.log(`✓ ${f} → documents/${slug}.html (${html.length} bytes)`);
  }
}

main();
