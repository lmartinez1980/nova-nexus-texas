export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  // SVG path snippets rendered inside a 24x24 viewBox
  iconSvg: string;
  accent: "cyan" | "violet" | "magenta" | "amber" | "royal";
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    tagline: "Sites that look sharp, load fast, and sell.",
    description:
      "Custom websites built mobile-first, tuned for speed, and written so search engines — and humans — actually get it. Not another cookie-cutter template.",
    bullets: [
      "Mobile-first responsive design",
      "Lightning-fast static hosting",
      "On-page SEO baked in",
      "Bookings, forms, and CRM wire-ups",
    ],
    iconSvg: `<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v10a2.5 2.5 0 0 1-2.5 2.5H14l1 3h-6l1-3H4.5A2.5 2.5 0 0 1 2 15.5z"/><path d="M2 14h20"/>`,
    accent: "cyan",
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    tagline: "A look that earns a second glance.",
    description:
      "Logos, color, type, voice — the full story. We build identities local businesses can wear with pride, from the truck door to the Instagram grid.",
    bullets: [
      "Logo + wordmark system",
      "Color palette & typography",
      "Brand voice guidelines",
      "Social + print templates",
    ],
    iconSvg: `<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/><path d="M5.6 5.6l12.8 12.8"/><path d="M18.4 5.6L5.6 18.4"/>`,
    accent: "magenta",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Get found by the people next door.",
    description:
      "When somebody in Arlington, Fort Worth, or Dallas types “best near me,” you show up. We handle Google Business, local schema, reviews, and the boring stuff that actually moves the needle.",
    bullets: [
      "Google Business Profile tune-up",
      "Local schema & citations",
      "Review strategy that isn't creepy",
      "Rank tracking you can read",
    ],
    iconSvg: `<circle cx="12" cy="10" r="3"/><path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"/>`,
    accent: "amber",
  },
  {
    slug: "ai-content",
    title: "AI-Assisted Content",
    tagline: "Faster, smarter, still yours.",
    description:
      "We use AI the right way — as a tool, not a crutch. Blog posts, service pages, newsletters, social captions. Drafted with AI, shaped by 20 years of real experience.",
    bullets: [
      "Blog posts tuned for local search",
      "Service page copy that converts",
      "Email & newsletter cadence",
      "On-brand social caption packs",
    ],
    iconSvg: `<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M5 17l.8 1.8L7.5 19l-1.7.8L5 21l-.8-1.2L2.5 19l1.7-.8z"/><path d="M19 15l.6 1.4L21 17l-1.4.6L19 19l-.6-1.4L17 17l1.4-.6z"/>`,
    accent: "violet",
  },
  {
    slug: "community-marketing",
    title: "Community-Focused Marketing",
    tagline: "Texas-built. Neighborhood-tested.",
    description:
      "Your best customers live nearby. We design campaigns around real community — events, partnerships, stories — not just feeds and funnels.",
    bullets: [
      "Event & sponsorship strategy",
      "Partnership outreach",
      "Hyperlocal ad campaigns",
      "Story-first content plans",
    ],
    iconSvg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    accent: "royal",
  },
  {
    slug: "consulting",
    title: "Strategy & Consulting",
    tagline: "Sometimes you just need the plan.",
    description:
      "A 30-minute discovery call, a real conversation, and a roadmap that fits your budget and your business. No fluff, no lock-in.",
    bullets: [
      "Free 30-min discovery session",
      "Honest assessment of what works",
      "Written roadmap & priorities",
      "Tool & vendor recommendations",
    ],
    iconSvg: `<path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 10l3 3 7-7"/>`,
    accent: "cyan",
  },
];
