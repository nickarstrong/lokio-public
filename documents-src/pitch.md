---
title: "LOKIO. Pitch."
docTitle: "Pitch"
ogTitle: "LOKIO Pitch"
description: "Geo-realtime social layer for local economies. The China parallel. Working product, no incumbent."
slug: "pitch"
lang: "en"
tocTag: "Pitch"
eyebrow: "Pitch · v6"
heading: "LOKIO."
lede: "Drop a joke on the map. Or open it and find a free coffee, a concert, a deal around the corner. Five seconds in — everything else follows."
effective: "26 May 2026"
updated: "26 May 2026"
version: "v6 · Live"
toc:
  - { href: "#what",       label: "What this is" }
  - { href: "#soft-entry", label: "Zero-cost entry" }
  - { href: "#daily",      label: "The daily reason" }
  - { href: "#flywheel",   label: "Flywheel" }
  - { href: "#safety",     label: "Safety architecture" }
  - { href: "#competitors",label: "Competitors" }
  - { href: "#business",   label: "Business model" }
  - { href: "#shanghai",   label: "The China parallel" }
  - { href: "#traction",   label: "Traction" }
  - { href: "#founder",    label: "Founder" }
  - { href: "#ask",        label: "The ask" }
---

---

::: section id=what num="01"

## What this actually is

Open the map of your city. Drop a joke, an observation, anything. You are sitting in a park and notice something funny — post it. You hear a good one-liner — put it on the map. You just want company for coffee — write it down. Publish.

A pin appears at your location. People nearby see it. Someone replies. Conversation starts. You meet.

A thought tied to a place. Text, a location, a short lifetime, a chat. Four ingredients, one format. A free pin lives for a few hours. A boosted pin — up to 30 days. When it expires, it disappears. No digital footprint, no archive, no "what will people think a year from now."

The entry is a single text field. The product asks nothing of you before letting you in.

There are two ways people come in. The first is posting: a joke, a thought, an observation — zero effort, zero stakes. The second is browsing: you open the map to decide where to go tonight, and there is already a free coffee deal nearby, a concert in an hour, a theatre discount, a restaurant running a tasting. **The map is never empty of reasons to go somewhere.** One entry point creates content. The other consumes it. Both start with opening the map.

<div class="callout">
<p><strong>This is the entire mechanic. Everything else in the product — friendships, dates, business deals, local discovery — is a downstream use of it.</strong></p>
</div>

:::

---

::: section id=soft-entry num="02"

## The zero-cost entry

Every social product demands something before you can participate. A dating app demands you declare intent. An events platform demands you take responsibility. A content network demands an audience.

LOKIO demands nothing.

You did not declare you wanted to be noticed, so being unnoticed costs you nothing. You asked for nothing, so the reply or its absence carries no rejection. You posted a thought, not an event, so nobody is owed anything if no one comes.

The reply comes anyway. People nearby see it. Someone is thinking the same thing. Conversation begins on its own.

| Product | What it costs you to start |
|---|---|
| Tinder | A declaration of intent |
| Meetup | Responsibility for an event |
| Instagram | Followers and a content plan |
| **LOKIO** | **Nothing** |

<div class="callout">
<p><strong>This is not a feature. This is product-market fit at the level of psychology.</strong></p>
</div>

:::

---

::: section id=daily num="03"

## The daily reason

The functional use cases — company for dinner, a free coffee, a meetup — pull people in when they need something.

Local humour pulls them in every day.

Someone posts from a park bench: "Officially the most interesting person within 300 metres. No evidence to support this." Twenty people see it. Five reply with their own version. A guy on the next street writes: "Stepped out for air 40 minutes ago. Send help." Thirty-one replies. Four people offer to come.

A district develops a shared voice. Inside jokes that only locals get. Observations that only make sense if you are standing right there. This is the Twitter-of-a-place layer that no other product has. **Twitter is global. Local memes have no surface today. LOKIO is that surface.**

The user who came for a free coffee or company for dinner stays for the recognition. And the recognition makes the city feel like a place, not a backdrop.

:::

---

::: section id=flywheel num="04"

## What people do with it without us doing anything

A person enters just to drop something on the map. Does not expect a reply. Reply comes. From there, without a single line of new code:

**Friendship.** Moved to a new city. Wrote a thought on the map. A week later has company for sport, coffee, weekends.

**Dating — without dating.** Not Tinder. Nobody declares "I am looking." You replied to someone's joke on the map. You talked in the thread. Turns out you are both nearby. You went for coffee. No profile form, no swipe, no declared intent — it happened the way it happens in real life: through shared context, not a self-sale.

**Spontaneous groups.** "Who is going to the mountains." "Need a fourth for the sauna." "Anyone want ice cream, it is 40 degrees." Assembled, went, dispersed.

**Local business.** A café wrote "first coffee free." Five people walked in. Three returned the next week. Customer LTV started with one post on a map.

**Discovery.** "Best coffee in this neighbourhood?" — locals answer in five minutes, not in a week on a forum.

**Travel.** Landed in Istanbul. Knows no one. Where are locals eating tonight? Where is the free concert? Where is the street food no guidebook mentions? Opens LOKIO — a living map of the city through the eyes of people standing there right now. A completely different travel experience.

**Expats and relocators.** Moved to a new country. Not a single contact. Writes a thought in their own language on the map — finds their people. Speakers of one language in Berlin, of another in Seoul, English speakers anywhere. The language barrier dissolves because any city has speakers of every major language, and the map makes them visible.

**Events.** A poster on the map. A concert, a theatre, a tasting. One pin — the audience is in the district.

All of these use cases run on a single protocol: a pin with a chat that dies in 24 hours. We built not an app but a format. People find the uses themselves. And in new cities, every feature — including business banners — starts at **$0**. The product is free until the city is busy enough that paid reach is worth paying for.

:::

---

::: section id=safety num="05"

## Safety architecture

Safety is structural, not moderation.

**18+ hard age gate.** LOKIO is not for minors. The product enables real-world meetings between strangers.

**Proof of Presence.** Server-side GPS check — you cannot post from a place where you are not. This kills 90% of spam architecturally, without moderators.

**contentGuard.** Server-side regex filter blocks URLs, phone numbers, and card numbers in all user content. No ML, no remote calls, deterministic.

**Transparent reports.** The person you report sees who reported them and why. Three verified reports in 30 days — automatic shadow ban. Three shadow bans in six months — permanent.

**TTL decay.** Every pin dies after its lifetime expires. The product does not accumulate a permanent record of user statements.

**Pseudonymous identity.** Display names are optional. Every account is cryptographically verified via Google OAuth or WebAuthn passkeys. Privacy-first, not anonymity-first.

:::

---

::: section id=competitors num="06"

## Competitors

None fully. Each occupies a piece of the space. None occupies LOKIO's intersection.

### Tinder, Bumble

**Reputation cost.** Being on a dating app means admitting you cannot meet people in real life. Users hide it from friends. On LOKIO you are not "looking" — you wrote a joke on a map.

**Declared intent.** Every action on Tinder is an explicit signal: "I am alone and searching." On LOKIO there is no intent. You are just nearby.

**Rejection by photo.** A swipe left is a blow to self-worth. Swipe fatigue is a documented phenomenon — people burn out. On LOKIO nobody rejects you by appearance because appearance is not the interface.

**Profile form is a self-sale.** Photo, bio, interests — optimised for the market. In real life people do not meet this way. In real life you were in the same place, started talking, and it clicked.

**The business model depends on loneliness.** If you find a partner, you leave and stop paying. Tinder is financially incentivised for you to not find what you came for.

**Only pairs, only dating.** "Who is going to the mountains" or "need a fourth for board games" is impossible. The format is locked to romantic pairs.

**Bots and fakes.** Half the profiles are bots, escorts, or commercial accounts.

### Instagram, TikTok

**Content, not contact.** You watch someone else's edited life. Likes are not a meeting. A hundred thousand followers does not mean a single person nearby who wants coffee right now.

**Entry barrier.** To post, you need followers, a content plan, the will to perform. "Anyone for coffee?" has nowhere to go — and if you post it, 300 followers see it, 290 of whom are in other cities.

**Feed instead of life.** An algorithmic feed optimised for retention. Real life nearby does not happen. A person sits in a café and scrolls instead of talking to the person at the next table.

**Fake reality.** Filters, staged photos, rented cars for stories. People compare their real life to someone else's curated highlight reel and lose every time.

### Meetup

**Heavy event creation.** Title, description, category, time, venue. For "anyone for coffee in 30 minutes" this is absurd.

**90% never create.** Too much responsibility. Too scary that no one will come. Meetup serves the 10% who organise. The other 90% scroll empty calendars.

**English-first, US-centric.** Many cities outside the US have zero active groups.

### Telegram chats

**Invite-only.** You need a link to join. You cannot discover a stranger nearby — there is no map, no geo, no open surface.

**No geo-realtime.** A Telegram group in "Berlin expats" is 10,000 people across the entire city and three time zones. LOKIO shows you who is within walking distance right now.

**Spam and noise.** Open Telegram location groups fill with dating spam and commercial noise within weeks.

### Foursquare / Swarm

**Check-in is not conversation.** "I was here" is past tense. It tells nobody anything actionable. The product is functionally dead.

### Nextdoor

**US only.** Address verification gate. Nobody outside the United States can use it. Not international by architecture.

### Linktree

**Static page.** A list of links with no location, no presence, no context, no chat. LOKIO profiles are a free Linktree with geolocation, interests, and a living map of what you wrote.

---

Their shared weakness: **not geo-realtime**, or **not open**, or **not built for meeting.** LOKIO sits in the gap between all of them.

The technology has been off-the-shelf for a decade. The reason no one shipped this is the discipline to omit a feed, a follower count, a swipe, a profile form. Each of those is an active anti-feature in this category. Every prior attempt added one back.

<div class="callout">
<p><strong>If Telegram adds a map:</strong> Telegram is a messenger. A map inside it would be a feature, not a product. Every decision in LOKIO — from decay to Proof of Presence — is built around geography. Different architectures. Plus Telegram is blocked in several countries in the target region. LOKIO is independent infrastructure.</p>
</div>

:::

---

::: section id=business num="07"

## The business this becomes

The full product is permanently free. Posting, reading, joining, chatting, profile page — free, in any city, on any device, forever.

Money comes from amplification. **Three single-purchase upsells, no subscriptions.**

| Upsell | Audience | Price |
|---|---|---|
| Extra topic slot | User | **$0.49** |
| City-wide visibility + 12h extension | User | **$1.99** |
| Map banner | Business | **$4.99** |

Single-purchase prices match the impulse model of the product. A subscription would gate casual users out and convert only the 2–3% willing to commit monthly. $0.49–$4.99 purchases capture the median user who pays because the moment is worth it, not because they signed up to a plan. Mobile games discovered this before us.

There is a second-order effect: **payment improves content quality without moderation.** A free pin can be anything. A paid pin — even at $0.49 — makes the author think about what to write. "First coffee free until 7pm, five tables open" beats "aaaa." The price is a natural quality filter. And even free pins self-improve over time: users see which posts get replies and which get ignored. The feedback comes from the environment, not from an algorithm.

### The café example

A small café spends roughly **$3,500** per month on marketing: $2,000 on a marketer, $1,000 on ads, $500 on SEO. The result is unknown until the month closes.

On LOKIO, the same café publishes a banner pin for **$4.99**. The pin appears gold on the map — visually distinct from regular pins. It is visible to every user whose viewport covers the district, and as they zoom out, it stays visible across the city. A free-coffee filter surfaces it to people actively looking for offers right now. Ten people walk in. ROI is measurable on the same day. **Two thousand percent return on a single event.**

This is not advertising people scroll past. This is an invitation they are looking for — because the user has the map open and is deciding where to go right now.

<div class="callout gold">
<p><strong>$4.99 against $3,500 per month.</strong></p>
</div>

### Density-gated pricing

New cities start free. Prices ramp with density. The coefficient is automatic, not set by a human. One-way: once a city moves up, prices do not come back down.

| Tier | When | Banner | Slot | Visibility |
|---|---|---|---|---|
| **0 · Seed** | New city | Free | Free | Free |
| **1 · Early** | First publishers | $1.49 | $0.15 | $0.59 |
| **2 · Growing** | District density | $2.99 | $0.29 | $1.19 |
| **3 · Active** | Threshold crossed | $4.99 | $0.49 | $1.99 |

### Unit economics

| Metric | Per 10k MAU city · tier 3 |
|---|---|
| Infrastructure cost | ~$300 / month |
| Paying users (3–5%) | 300–500 |
| Active paying businesses | 50–100 |
| **Revenue** | **$1,100–1,950 / month** |
| **Margin** | **70–85%** |

| Scale | Monthly revenue | Annualised |
|---|---|---|
| 1 city × 10k MAU | $1,950 | $23k |
| 10 cities × 10k MAU | $19,500 | $234k |
| **10 cities × 100k MAU** | **$195,000** | **$2.3M** |

CAC trends to zero. The product explains itself in the first five seconds of use.

:::

---

::: section id=shanghai num="08"

## The China parallel

### The cycle

In 1978 China's GDP per capita was $156. In 2022 it was $12,663. An **81-fold increase in 44 years**. No other large economy has done this in recorded history.

What drove it was not heavy industry or foreign capital. It was a cycle that never stopped.

The Chinese government systematically supported small business formation — through policy, infrastructure, and platforms. Small businesses grew into medium ones. Medium ones grew into large ones. But the cycle did not end there: **new small businesses kept appearing at the bottom**, because the infrastructure that helped the previous generation grow was still there for the next one. Alibaba did not replace street vendors — it gave them tools to become regional sellers. WeChat Pay did not kill corner shops — it made every one of them a digital business. And the next corner shop that opened got the same tools on day one.

This is the engine. Not 140 million SMEs as a static fact — but 140 million SMEs as a **constantly regenerating layer**, where each generation grows and makes room for the next. Government, large business, and small business in a reinforcing loop. That is what took GDP per capita from $156 to $12,663.

### What it produced

**Meituan.** ~$100B market cap. ~700M active users. 60% of all food orders in China. Started with group-buying coupons in 2010, became the super-app for everything local.

**Dianping.** The local Yelp + booking. 200M MAU. In China, nobody walks into a café without checking Dianping first.

**WeChat location groups.** Tens of millions of micro-chats around a building, a block, a neighbourhood. Closed, invite-only.

What they share: they turned the **local physical world into a digital layer.** Cafés, barbershops, gyms, markets — everything became clickable within walking distance.

### The opposite pattern

Now look at what happens without this cycle. A new café opens. To get customers, it needs advertising. Google Ads cost $3–5 per click. Facebook charges $7–12 per thousand impressions. A marketer costs $2,000 a month. The café cannot afford any of this — but the chain across the street can. The café gets no customers, closes in a year, and the chain expands into its space. No new small business replaces it. The cycle that built China's economy never starts. The local economy hollows out, one district at a time.

In Central Asia, the Middle East, Southeast Asia, Latin America — the digital layer that Meituan and WeChat built in China does not exist. Food delivery apps handle logistics, not discovery. Payment apps handle transactions, not connection. Nobody has closed "local events and businesses around you right now."

### Where LOKIO fits

**LOKIO is this layer.** Built from the bottom up — from spontaneous meetings and thoughts, not from coupons. The social surface comes first. Commerce rides on top of it.

A café reaches every person who opens the map in its district for $4.99. It grows. It becomes a chain. But the new café that opens next door also gets the same $4.99 reach on day one. The cycle continues.

<div class="callout gold">
<p><strong>Every paid post on LOKIO is, by design, an act of small commerce. And every small business that grows on LOKIO makes room for the next one.</strong></p>
</div>

Every government, development fund, and chamber of commerce that recognises this cycle as the foundational growth lever will recognise LOKIO as aligned infrastructure. The data has been in OECD reports for two decades. Nobody in consumer products built around it. **We are.**

And there is a feedback loop. Small businesses on LOKIO get customers. They grow. The district's economy grows. More people with spending power appear on the map. Density rises, LOKIO's tier goes up, revenue increases — and the next small business that opens still gets the same $4.99 reach on day one. **LOKIO grows because local GDP grows. Local GDP grows because LOKIO works.** The incentives are structurally aligned.

:::

---

::: section id=traction num="09"

## Traction

`app.lokio.org` is open right now. Not a mockup. Not a Figma. Not a prototype.

- Live PWA on production infrastructure (Cloudflare + Railway)
- Google OAuth + WebAuthn passkey authentication
- Real-time map with WebSocket presence, topic chat, public profile pages
- Transparent reports, Proof of Presence, contentGuard, full legal documentation
- International from day one: EN + RU, no culture-specific features in core

The public launch was deliberately held until the full end-to-end product was ready. The product is now open. Anyone reading this can verify every claim above.

Pre-launch organic signal: 22+ topics created by external users who arrived without any outreach, advertising, or invitation. This is not traction — it is a format-propagation signal before a single dollar was spent on distribution.

$0 spent on acquisition to date.

:::

---

::: section id=founder num="10"

## Founder

Solo founder, full-stack engineer. Built the entire stack in six months: backend, frontend, design system, documentation, legal base, infrastructure, landing, investor materials. 12,400 lines of frontend, 8,700 lines of backend, 13 database models, production deploy pipeline.

No co-founder. No team yet. No external capital to date.

This is not a constraint. It is a design decision made visible.

The product is built to operate itself. Pricing adjusts automatically by city density — no human sets rates. Moderation is architectural — Proof of Presence, contentGuard, and transparent reports replace a moderation team. Content is created entirely by users. Pins expire on their own. Bans trigger on their own. The infrastructure scales with standard cloud tooling.

One person built and runs a production product with real users, international documentation, legal coverage, and a deploy pipeline — because the architecture was designed from day one to not need a team to function. That is not a limitation. That is a statement about how modern products should be built.

What remains is distribution: community seeding, local partnerships, and native app wraps. That requires capital and people.

:::

---

::: section id=ask num="11"

## The ask

**$50,000–100,000** for 12 months of runway.

**Use of funds:** one mobile engineer (Capacitor/native wraps, push notifications), one community manager (seed content, local partnerships, growth). The founder continues as sole technical lead.

**Launch sequence:** Tashkent → Almaty → Tbilisi → Istanbul. Each city is a separate market. First city proves the model. Each subsequent city is cheaper to launch because the product, tooling, and playbook already exist.

Tashkent is not a test market. It is the **first strategic market.** 3.6 million metro population, 85% smartphone penetration, no incumbent in this category, high density of small business, cultural appetite for spontaneous socialising.

**Milestones on the capital:**

| Period | Milestone |
|---|---|
| **Month 1–2** | Public launch Tashkent. Community seeding. Target: 500+ organic users. |
| **Month 3–4** | Payment integration live. First paying businesses. |
| **Month 5–6** | Almaty launch. iOS + Android wraps submitted. |
| **Month 7–9** | Target: 5,000+ MAU Tashkent. Tbilisi launch. |
| **Month 10–12** | Istanbul prep. Series A materials. Target: 10,000+ MAU across region. |

There is no fixed valuation attached to this document. Terms are determined per conversation.

<div class="callout">
<p><strong>We are not raising on a deck. We are raising on a working product.</strong></p>
</div>

<div class="contact-block">
<a class="em" href="mailto:hello&#64;lokio.org">hello@lokio.org</a>
<p>lokio.org · app.lokio.org</p>
</div>

:::
