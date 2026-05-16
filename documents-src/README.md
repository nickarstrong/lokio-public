# LOKIO docs pipeline

Source-of-truth is **Markdown**. HTML files in `../documents/` are **generated** — do not edit them by hand.

## Layout

```
documents-src/
  _template.html      shared HTML wrapper (CSS, header, footer, scroll-spy JS)
  terms.md            Terms of Service source
  privacy.md          Privacy Policy source
  README.md           this file
scripts/
  build.mjs           MD + frontmatter + template → HTML
package.json          npm install marked && npm run build:docs
documents/
  terms.html          generated. DO NOT EDIT.
  privacy.html        generated. DO NOT EDIT.
  business.html       hand-maintained (slide deck, not in pipeline)
  pitch.html          hand-maintained
  presentation.html   hand-maintained
  whitepaper.html     hand-maintained
```

## How to make a change

```bash
# one-time setup
npm install

# edit documents-src/terms.md  (or privacy.md)
# then:
npm run build:docs

# verify output, then commit BOTH the .md AND the generated .html
git add documents-src/terms.md documents/terms.html
git commit -m "terms: <what changed>"
git push
```

## Custom block syntax

Inside `.md`, these blocks render to the legacy HTML classes:

```
::: section id=summary num="01 · At a glance" [warn=true]
## H2 here
prose, lists, etc.
:::

::: shield "Important · Read carefully"
red protective block (uppercase, bold)
:::

::: callout-warn
red callout
:::

::: callout-gold
yellow callout
:::

::: beta-notice "Beta-stage terms"
yellow notice with tag
:::

::: acceptance "Read this"
red acceptance notice
:::

::: contact-block
[hello@lokio.org](...){.em}
:::
```

Inline class on a link:  `[text](url){.inline}` → `<a class="inline" href="url">text</a>`

Inline class on a paragraph:  end the paragraph line with `{.muted}` → `<p class="muted">...</p>`

## Frontmatter

Each `.md` starts with YAML between `---` markers. Required keys:

- `title` — full `<title>` tag content
- `docTitle` — short header label (e.g. "Terms", "Privacy")
- `ogTitle` — OpenGraph title
- `description` — `<meta name="description">` content
- `slug` — file name without `.html` (also used in og:url)
- `lang` — html lang attr (e.g. `en`)
- `tocTag` — sidebar TOC small heading
- `eyebrow` — coloured eyebrow above H1
- `heading` — H1 text
- `lede` — paragraph under H1
- `effective`, `updated`, `version` — meta row pills
- `toc` — list of `{ href: "#id", label: "Title", warn: true|false }`

Frontmatter parser is minimal — keep it flat, no multi-line strings.
