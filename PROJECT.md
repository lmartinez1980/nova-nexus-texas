# Nova Nexus Texas — Website Rebuild

**Client:** Lupe Martinez (sir)
**Business:** Nova Nexus Texas — creative consulting / marketing company. Helps local businesses grow, rebrand, and get seen, leveraging AI-assisted web builds as a differentiator.
**Current site:** https://novanexustexas.com (GoDaddy Website Builder 9.0; generic template, mismatched SEO that says "IT / networking" instead of marketing).
**Goal:** Fresh, modern, open-source rebuild that doubles as Nova Nexus's own calling card — "this is what we can build for you."

## Brand voice (from sir's own copy)
- "Transform Local businesses into Standout Brands with confidence, clarity, and Texas-built grit."
- Texas pride, grounded, approachable.
- Mission: strategy + design + real community insight.
- No-commitment 30-min discovery call is the primary CTA.

## Pages to build
1. Home
2. About
3. Services
4. Gallery (portfolio / before-and-after)
5. Blog (stub — we'll seed with 1-2 posts)
6. Contact
7. Consultation (booking) — either embed GoDaddy's existing booking or integrate a new one

## Tech stack (decision)
- **Astro** — static, fast, SEO-friendly, easy to deploy anywhere.
- **Tailwind CSS** — clean utility styling, no component library lock-in.
- **Plain HTML/CSS fallback** if sir wants something lighter.
- **Hosting target:** Vercel or Netlify (free tier fine for a consulting site).
- **Domain:** already owns novanexustexas.com — eventual DNS cutover from GoDaddy.

## SEO fix (critical)
The current title + meta target "networking/IT consulting." It should target **marketing / web design / small-business growth** in the DFW / Arlington / Texas area. I'll rewrite all meta.

## Open questions for sir
(asked in chat; captured here once answered)
1. Visual vibe
2. Color feelings
3. Logo status
4. Real photos or stock
5. Booking / contact method

## Status
- 2026-04-21: Audited current site, agreed on Option A (full rebuild). Awaiting brand answers.
- 2026-04-23: Built v1 — 6 pages, Astro+Tailwind, production build passing. Ready for Vercel deploy + DNS cutover.
