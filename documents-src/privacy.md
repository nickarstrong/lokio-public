---
title: "LOKIO. Privacy Policy."
docTitle: "Privacy"
ogTitle: "LOKIO Privacy Policy"
description: "What LOKIO collects, why, how long, and your rights under GDPR and CCPA. Beta policy."
slug: "privacy"
lang: "en"
tocTag: "Privacy Policy"
eyebrow: "Privacy Policy"
heading: "Privacy Policy."
lede: "What LOKIO collects, why, for how long, who sees it, and the rights you have over it. GDPR-aligned. CCPA-aligned."
effective: "8 May 2026"
updated: "8 May 2026"
version: "Beta · v1"
toc:
  - { href: "#summary",       label: "At a glance" }
  - { href: "#who",           label: "Who we are" }
  - { href: "#what",          label: "Data we collect" }
  - { href: "#why",           label: "Why we collect it" }
  - { href: "#legal-basis",   label: "Legal basis (GDPR)" }
  - { href: "#retention",     label: "Retention" }
  - { href: "#sharing",       label: "Who sees your data" }
  - { href: "#third-parties", label: "Third-party processors" }
  - { href: "#international", label: "International transfers" }
  - { href: "#rights-eu",     label: "Your rights · EU/UK (GDPR)" }
  - { href: "#rights-us",     label: "Your rights · California (CCPA)" }
  - { href: "#security",      label: "Security" }
  - { href: "#breach",        label: "Breach notification" }
  - { href: "#children",      label: "Age (18+)" }
  - { href: "#cookies",       label: "Cookies and tracking" }
  - { href: "#dnt",           label: "Do Not Track" }
  - { href: "#changes",       label: "Changes to this policy" }
  - { href: "#contact",       label: "Contact" }
---

::: beta-notice "Beta-stage policy"
LOKIO is in pre-revenue beta. The operating legal entity is scheduled to incorporate at first paid transaction (Q4 2026). Until then, the controller of your data is the natural person operating the LOKIO project under the contact at the bottom of this page.

This policy will be re-issued under the operating company's name at incorporation. The privacy substance (what we collect, why, retention, your rights) does not change.
:::

::: section id=summary num="01 · At a glance"
## The short version.

- You sign in with Google or a passkey. We do not see your password.
- You drop a thought on a map. The thought is visible to people physically nearby for up to 24 hours, then it decays automatically.
- We do not sell your data. We do not run third-party advertising on LOKIO.
- You can read everything we hold about you, export it, and delete your account at any time.
- LOKIO is for adults aged 18 and over. We do not knowingly accept anyone younger.
- We use platform-native sign-in and payments. We do not store passwords or card numbers.

The full policy below explains the legal basis, retention, third-party processors, and your specific rights under GDPR and CCPA.{.muted}
:::

---

::: section id=who num="02 · Who we are"
## Data controller.

The "data controller" is the natural or legal person responsible for deciding why and how your data is processed. For LOKIO during the beta period, that controller is the natural person operating the LOKIO project, reachable at:

**Email:** [hello&#64;lokio.org](mailto:hello&#64;lokio.org){.inline}  
**Postal correspondence:** available on written request to the email above.

At incorporation (Q4 2026), the operating company will assume controller status and this section will be updated with the company's registered name, registration number, and registered address.

For the purposes of GDPR, the contact above also acts as the point of contact for data subject requests until a Data Protection Officer is formally designated.
:::

---

::: section id=what num="03 · Data we collect"
## What LOKIO holds about you.

| Category | Examples | Source |
|---|---|---|
| **Account identifier** | Google OAuth subject ID, WebAuthn passkey credential ID, optional Telegram phone number | You, via sign-in |
| **Profile content** | Display name, avatar, bio, links you choose to publish, interests | You, when you fill it in |
| **Location data** | Approximate device location at the moment you publish a topic. Used to verify Proof of Presence and to show your pin on the map. | Device geolocation API, with your consent |
| **Topics and messages** | Text you type into a topic or topic chat | You |
| **Presence** | The fact that you are currently on the map and your approximate viewport. Held only in volatile memory. | Your active session |
| **Reports** | Reports you file against other users or content; reports filed against you | You and other users |
| **Technical metadata** | Device type, browser, IP address (for fraud prevention and rate limiting), short-lived session tokens | Standard web traffic |
| **Payment instruments** | None. When billing activates, payment is processed by Apple Pay or Google Pay. LOKIO does not see, receive, or store card numbers. | Platform processor |

### What we explicitly do not collect

- Passwords. We do not have a password system.
- Card numbers, CVV, or banking credentials. Payment is platform-native.
- Government identity documents. We do not run identity verification.
- Continuous background location. Location is captured only at the moment you publish a topic, and only with your consent at that moment.
- Microphone or camera contents.
- Contacts list, photo library, or other on-device data.
:::

---

::: section id=why num="04 · Why we collect it"
## Purposes of processing.

Each category of data is collected for one or more of the following purposes:

- **To operate the service.** An account identifier is needed to authenticate you. Topics and messages are the product. Profile content is what other users see.
- **To verify Proof of Presence.** Location at the moment of publishing prevents users from publishing pins in places they are not in. This is a structural anti-spam measure and a core safety property of the product.
- **To deliver real-time presence.** Your viewport, while you are on the map, is used to deliver nearby-user events to your device.
- **To enforce safety rules.** Reports help us identify abuse. Technical metadata helps us identify automated abuse.
- **To bill you, when billing activates.** Records of which paid upsells you purchased, for the purpose of providing them and complying with tax law.
- **To comply with legal obligations.** Where law requires us to retain or disclose data.
:::

---

::: section id=legal-basis num="05 · Legal basis (GDPR)"
## Why we are allowed to process your data.

If you are in the European Economic Area, the United Kingdom, or another GDPR-aligned jurisdiction, the legal basis on which we rely for each purpose is one of the following:

| Purpose | Legal basis (GDPR Art. 6) |
|---|---|
| Operating your account | Contract performance (Art. 6(1)(b)) |
| Showing your topic on the map | Contract performance (Art. 6(1)(b)) |
| Capturing location for Proof of Presence | Explicit consent (Art. 6(1)(a)) at the moment of publishing |
| Anti-abuse and security | Legitimate interest (Art. 6(1)(f)) in operating a safe service |
| Reports and moderation | Legitimate interest (Art. 6(1)(f)) and, where applicable, legal obligation (Art. 6(1)(c)) |
| Tax records on paid transactions | Legal obligation (Art. 6(1)(c)) |

You can withdraw consent for the geolocation prompt at any time at the operating-system level. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. Withdrawing geolocation prevents future publishing but does not affect topics already on the map.
:::

---

::: section id=retention num="06 · Retention"
## How long we keep things.

| Data | Retention |
|---|---|
| Topics and topic chat content | Default 24 hours of visibility plus a short audit window for moderation, then automatic removal. Author can delete earlier. |
| Account and profile | Until you delete your account. |
| Reports filed | Up to 24 months from filing, then anonymised or deleted. |
| Presence | Volatile only. Held in memory while your session is active. Not written to disk. |
| Payment records | Period required by tax law in the operating company's jurisdiction (typically 5–10 years), even if the account is deleted. |
| Technical logs | Up to 90 days for security incident review, then rotated. |

**Topic decay is a structural privacy feature.** By design, LOKIO does not accumulate a permanent searchable record of what its users said. After the topic's lifetime ends and the audit window closes, the message content is deleted from the primary database. Backups are rotated on a schedule consistent with disaster-recovery best practice and are not used for retrieval of deleted content except in cases of confirmed data loss.
:::

---

::: section id=sharing num="07 · Who sees your data"
## Inside the product.

By default, LOKIO is pseudonymous. Other users see:

- Your display name (if you have set one) or a hash-style identifier (e.g. `@user_a1b2c`) if you have not.
- Your avatar, bio, links, and interests, when they look at your public profile.
- Topics you have published, while those topics are within their lifetime.
- The approximate location of any pin you publish, since the pin is on a map.
- Your replies in topic chats you participate in.
- Your name as a reporter, if you file a report against them. **Reports are public to the reported party** as part of the safety architecture.

### Outside the product

We do not sell, rent, or trade your data. We do not run third-party advertising. We do not share your data with anyone except:

- Service providers who process data on our behalf under written contracts (see Third-party processors below).
- Law enforcement or regulators where we are legally compelled. We will notify you of such a request unless we are legally prohibited from doing so.
- A successor entity in the event of a merger, acquisition, or sale of assets, subject to the same privacy commitments.
:::

---

::: section id=third-parties num="08 · Third-party processors"
## Companies that help run LOKIO.

The following processors handle parts of the service. Each operates under a written data processing agreement and is bound to confidentiality.

| Processor | Role | Data accessed |
|---|---|---|
| **Google LLC** | OAuth identity provider (sign-in) | Your Google account email address and OAuth subject ID |
| **Cloudflare, Inc.** | CDN, DDoS protection, edge delivery of static assets | IP address, request metadata. No application data. |
| **Railway Corp.** | Application hosting, database, Redis | All application data, encrypted at rest |
| **OpenStreetMap / MapLibre** | Map tiles | Tile request coordinates only. No account data. |
| **Apple Inc. / Google LLC (Pay)** | Payment processing, when billing activates | Card data is held by them, not by LOKIO. We receive a transaction confirmation only. |

If a processor changes, this list is updated and the change is announced in the changelog (Changes section).{.muted}
:::

---

::: section id=international num="09 · International transfers"
## Where your data is stored.

Application data is stored in databases hosted by Railway, with a default region in the United States (US-West). If you are accessing LOKIO from the European Economic Area, the United Kingdom, or another jurisdiction with cross-border transfer rules, your data is transferred to the United States.

For such transfers we rely on the European Commission's **Standard Contractual Clauses** (SCCs) as the lawful transfer mechanism, supplemented where required by appropriate technical and organisational measures including encryption in transit (TLS) and at rest.

EU enterprise customers and regulators may request EU data residency and a Data Processing Addendum by writing to [hello&#64;lokio.org](mailto:hello&#64;lokio.org){.inline}. We will engage with such requests in good faith ahead of any onboarding.
:::

---

::: section id=rights-eu num="10 · Your rights · EU/UK"
## GDPR rights.

If GDPR applies to you, you have the following rights, exercisable free of charge except where requests are manifestly unfounded or excessive:

- **Right to access.** Confirm whether we hold your data and obtain a copy. Most of it is visible inside the product. A formal export endpoint is scheduled for Q4 2026.
- **Right to rectification.** Correct inaccurate data. Profile fields are user-editable.
- **Right to erasure ("right to be forgotten").** Delete your account in settings. Cascades to your topics, messages, and presence. Not undoable.
- **Right to restrict processing.** Ask us to limit processing while a dispute is resolved.
- **Right to data portability.** Receive your personal data in a structured, commonly used, machine-readable format. Available on request via email until the in-product export endpoint ships.
- **Right to object.** Object to processing based on legitimate interest, including safety processing, on grounds related to your particular situation.
- **Right not to be subject to automated decision-making.** LOKIO does not use automated decision-making with legal or similarly significant effect.
- **Right to withdraw consent.** Where processing is based on consent (e.g. geolocation prompt), you may withdraw at any time at the operating-system level.
- **Right to lodge a complaint.** You may complain to your local data protection supervisory authority. We would prefer that you contact us first so we can resolve the issue.

To exercise any right, write to [hello&#64;lokio.org](mailto:hello&#64;lokio.org?subject=GDPR%20request){.inline}. We will respond within 30 days, extendable by a further 60 days for complex requests with notice to you. We may ask you to verify control of your account before we act on a request, to prevent impersonation.
:::

---

::: section id=rights-us num="11 · Your rights · California"
## CCPA / CPRA rights.

If you are a California resident, you have the following rights under the California Consumer Privacy Act and California Privacy Rights Act:

- **Right to know.** What personal information we collect, where it comes from, why, and to whom we disclose it. This policy answers all four.
- **Right to delete.** Delete your account and associated personal information.
- **Right to correct.** Correct inaccurate personal information.
- **Right to opt out of sale or sharing.** **We do not sell or share your personal information.** No opt-out is required because no sale occurs.
- **Right to limit use of sensitive information.** The only sensitive category we may handle is precise geolocation, captured only at the moment of publishing with your consent. We do not use it to infer characteristics about you.
- **Right to non-discrimination.** We will not deny service, charge a different price, or provide a lower quality of service because you exercised any of these rights.

To exercise any right, write to [hello&#64;lokio.org](mailto:hello&#64;lokio.org?subject=CCPA%20request){.inline}. You may designate an authorised agent. We may verify your identity before acting.
:::

---

::: section id=security num="12 · Security"
## How we protect your data.

- All traffic is served over HTTPS (TLS 1.2 or higher). Insecure HTTP requests are redirected.
- WebSocket presence is served over WSS.
- Authentication uses Google OAuth (authorisation-code flow) and WebAuthn passkeys. **We do not have a password database to breach.**
- Application data is encrypted at rest by the database provider.
- Server-side input filters block URLs, phone numbers, and card numbers from being posted in topic content (the contentGuard, described in our whitepaper).
- Card data is never seen or stored by LOKIO. Payment is platform-native (Apple Pay / Google Pay).

No system can guarantee absolute security. The protections above are industry-standard for products of this scale, applied deliberately to minimise the surface area of any incident.
:::

---

::: section id=breach num="13 · Breach notification"
## If something goes wrong.

If we become aware of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:

- Notify the relevant supervisory authority within 72 hours of becoming aware, where GDPR applies.
- Notify affected users without undue delay, by email and an in-product notice, with a description of the nature of the breach, the data categories affected, the likely consequences, and the measures we are taking.
- Maintain a public incident log for material incidents.
:::

---

::: section id=children num="14 · Age"
## LOKIO is for adults.

::: callout-warn
**LOKIO is not for anyone under 18 years of age.** The product enables real-world meetings between strangers. We do not believe this is appropriate for minors.
:::

You confirm at sign-up that you are 18 or older. If we become aware that an account is held by a person under 18, we will close the account and delete the data without further notice. Parents or guardians who believe their child has created an account may write to [hello&#64;lokio.org](mailto:hello&#64;lokio.org?subject=Underage%20account){.inline} and we will act promptly.

Where stricter local thresholds apply (such as the United Kingdom's Age Appropriate Design Code or jurisdictions defining minority above 18), the higher threshold prevails.
:::

---

::: section id=cookies num="15 · Cookies and similar technologies"
## What we set on your device.

- **Session cookies.** Required to keep you signed in. Without them you would have to authenticate on every page load.
- **Local storage.** Used for client-side preferences (e.g. language, last seen viewport). You can clear it from your browser settings; the service will continue to work but will reset some preferences.
- **No third-party advertising cookies. No cross-site tracking. No fingerprinting.**

Because LOKIO does not run advertising and does not use third-party analytics that build cross-site profiles, no separate cookie consent banner is presented for non-essential tracking. The cookies set are strictly necessary to operate the service.
:::

---

::: section id=dnt num="16 · Do Not Track"
## Browser signals.

LOKIO does not track you across other websites or services. We do not need to interpret a Do Not Track or Global Privacy Control signal to provide a tracking-free experience: tracking is not part of the product. Where applicable law requires us to honour a specific signal (e.g. California's GPC for opt-out of sale), we honour it; since we do not sell or share, no further action is taken.
:::

---

::: section id=changes num="17 · Changes"
## How we update this policy.

We may update this policy to reflect changes in the product, the law, or the operating entity. Material changes will be:

- Posted to this page with an updated "Last updated" date.
- Announced inside the product to all signed-in users at least 14 days before they take effect, unless a faster change is required by law or to protect users.
- Logged in a publicly accessible changelog.

Continued use of the service after the effective date of an updated policy means acceptance of it. If you do not agree with the changes, you may delete your account.
:::

---

::: section id=contact num="18 · Contact"
## How to reach us.

For any privacy question, request, or complaint:

::: contact-block
[hello&#64;lokio.org](mailto:hello&#64;lokio.org?subject=Privacy%20inquiry){.em}

We aim to respond within 5 business days for general inquiries and within 30 days for formal data subject requests.
:::

If you are not satisfied with our response, you may lodge a complaint with your local data protection authority. In the EU, a list is maintained at `edpb.europa.eu`. In the UK, the Information Commissioner's Office at `ico.org.uk`.{.muted}
:::
