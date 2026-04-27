export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  // SVG path snippets rendered inside a 24x24 viewBox
  iconSvg: string;
  accent: "cyan" | "violet" | "magenta" | "amber" | "royal";
  pricingTiers?: PricingTier[];
}

export interface PricingTier {
  name: string;
  priceRange: string;
  bestFor: string;
  features: string[];
  delivery: string;
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    tagline: "Sites that look sharp, load fast, and sell.",
    description:
      "Your website is your storefront. We build custom sites that work on every device, load in seconds, and show up when people search for what you offer. No bloated templates. No cookie-cutter designs. Just clean, professional websites built to turn visitors into customers.",
    bullets: [
      "Mobile-first design that works everywhere",
      "AI-accelerated development (weeks, not months)",
      "Built-in SEO so people can find you",
      "Lightning-fast page speed",
      "Easy-to-update content management",
      "SSL security included",
      "Hosting setup assistance",
    ],
    iconSvg: `<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v10a2.5 2.5 0 0 1-2.5 2.5H14l1 3h-6l1-3H4.5A2.5 2.5 0 0 1 2 15.5z"/><path d="M2 14h20"/>`,
    accent: "cyan",
    pricingTiers: [
      {
        name: "Starter",
        priceRange: "$600-$1,200",
        bestFor: "Simple, effective presence",
        features: [
          "3-5 pages",
          "Template-based with custom branding",
          "Mobile responsive",
          "Basic SEO setup",
          "Contact form",
          "Google Maps integration",
          "2 rounds of revisions",
        ],
        delivery: "2-3 weeks",
      },
      {
        name: "Business",
        priceRange: "$1,500-$3,000",
        bestFor: "Professional & polished",
        features: [
          "5-10 pages",
          "Custom design tailored to brand",
          "AI-assisted development",
          "Advanced SEO optimization",
          "Blog/news section",
          "Photo galleries",
          "Booking integration options",
          "Google Business Profile optimization",
          "3 rounds of revisions",
        ],
        delivery: "3-4 weeks",
      },
      {
        name: "Pro",
        priceRange: "$3,500-$6,000",
        bestFor: "Full-featured powerhouse",
        features: [
          "10+ pages",
          "Fully custom design & development",
          "E-commerce capabilities (if needed)",
          "Advanced integrations (CRM, email marketing, etc.)",
          "Custom forms and functionality",
          "Performance optimization",
          "Security hardening",
          "Training session for site management",
          "4 rounds of revisions",
        ],
        delivery: "4-6 weeks",
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    tagline: "A look that earns a second glance.",
    description:
      "Your brand is more than a logo — it's the first impression, the personality, the promise. We design visual identities that local businesses can wear with pride. From your logo to your business cards to your Instagram grid — we create cohesive, professional branding that makes you look like you mean business.",
    bullets: [
      "Logo design & visual identity system",
      "Color palette that represents your vibe",
      "Typography that fits your industry",
      "Brand style guide for consistency",
      "Brand voice & messaging strategy",
      "Social media asset templates",
      "Business collateral design",
    ],
    iconSvg: `<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/><path d="M5.6 5.6l12.8 12.8"/><path d="M18.4 5.6L5.6 18.4"/>`,
    accent: "magenta",
    pricingTiers: [
      {
        name: "Logo Only",
        priceRange: "$400-$800",
        bestFor: "Just need the logo",
        features: [
          "3 initial logo concepts",
          "3 rounds of revisions",
          "Final files (PNG, JPG, SVG, EPS)",
          "Black/white/color versions",
          "Social media sizes",
          "Basic usage guidelines",
        ],
        delivery: "1-2 weeks",
      },
      {
        name: "Core Brand",
        priceRange: "$1,200-$2,500",
        bestFor: "Complete visual identity",
        features: [
          "Everything in Logo Only",
          "Color palette (primary + secondary)",
          "Typography system (2-3 fonts)",
          "Brand style guide (10-15 pages)",
          "Business card design",
          "Letterhead template",
          "Email signature template",
        ],
        delivery: "2-3 weeks",
      },
      {
        name: "Full Identity",
        priceRange: "$3,000-$5,000",
        bestFor: "Everything you need",
        features: [
          "Everything in Core Brand",
          "Brand voice & messaging framework",
          "Tagline development",
          "Extended style guide (20-30 pages)",
          "Social media templates (5-10 designs)",
          "Brand pattern/texture library",
          "Photography direction & mood boards",
          "Brand story & positioning statement",
          "Presentation template",
        ],
        delivery: "4-5 weeks",
      },
    ],
  },
  {
    slug: "consulting",
    title: "Business Consulting",
    tagline: "Strategy that moves the needle.",
    description:
      "Sometimes you don't need more hustle — you need better direction. We bring 20 years of marketing and technology experience to help you figure out what's next. Whether it's building a marketing roadmap, optimizing your online presence, or exploring AI tools for your business — we provide the outside perspective and strategic clarity you need.",
    bullets: [
      "Digital marketing roadmap development",
      "Local SEO & visibility audits",
      "AI integration opportunities",
      "Growth planning & strategy",
      "Competitive analysis",
      "Marketing channel recommendations",
      "Systems & automation review",
      "Ongoing advisory support",
    ],
    iconSvg: `<path d="M2 3h20v14H2z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 10l3 3 7-7"/>`,
    accent: "violet",
    pricingTiers: [
      {
        name: "Hourly",
        priceRange: "$125-$175/hr",
        bestFor: "Flexible as-needed help",
        features: [
          "Marketing strategy",
          "Business planning",
          "Technology recommendations",
          "Operational efficiency review",
          "Minimum 2-hour booking",
        ],
        delivery: "On-demand",
      },
      {
        name: "Strategy Session",
        priceRange: "$300-$500",
        bestFor: "Intensive deep dive",
        features: [
          "2-3 hour working session",
          "Pre-session questionnaire & research",
          "Focus area of your choice",
          "Written summary & action plan",
          "1 follow-up call (30 minutes) included",
        ],
        delivery: "Plan delivered within 3 days",
      },
      {
        name: "Monthly Retainer",
        priceRange: "$800-$1,500/mo",
        bestFor: "Ongoing partnership",
        features: [
          "4-6 hours of advisory time per month",
          "Email & text support (24hr response)",
          "Monthly strategic planning call",
          "Quarterly deep-dive review",
          "Priority scheduling",
          "Discounted rates on project work",
          "Month-to-month (no long-term contract)",
        ],
        delivery: "Ongoing",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Get found by the people next door.",
    description:
      "When somebody in Arlington, Fort Worth, or Dallas types "best near me," you show up. We handle Google Business, local schema, reviews, and the boring stuff that actually moves the needle.",
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
];
