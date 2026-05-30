export const portfolio = {
  name: "Basundara",
  siteUrl: "https://basundara.dev",
  tagline: "Product, design, and writing",
  location: "Remote",
  email: "hello@basundara.dev",
  intro:
    "Basundara builds thoughtful digital products across strategy, design, and operations. Her work sits at the intersection of crisp communication, useful systems, and experiences that are easy to trust.",
  current:
    "Currently, she is developing a public portfolio around workplace products, operational trust, and the craft of making complex systems feel clear.",
  image: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    alt: "Desk with notebook, laptop, and writing tools",
  },
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Timeline", href: "#timeline" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  profileLinks: [
    {
      label: "Email",
      href: "mailto:hello@basundara.dev",
      kind: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/basundara",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/basundara/",
      kind: "linkedin",
    },
  ],
  focusAreas: [
    "Envoy",
    "Operational trust",
    "Product writing",
    "Workplace systems",
  ],
  stats: [
    { label: "Focus", value: "Product" },
    { label: "Mode", value: "Build + write" },
    { label: "Base", value: "Remote" },
  ],
  work: [
    {
      title: "Envoy Workplace Operations",
      role: "Product and operations",
      year: "2026",
      description:
        "Work centered on making workplace workflows clearer, more reliable, and easier for teams to operate across roles.",
      tags: ["Envoy", "Operations", "Trust"],
    },
    {
      title: "Product Clarity System",
      role: "Writing and strategy",
      year: "2025",
      description:
        "A public writing system for turning dense career evidence into concise posts, project notes, and proof of product judgment.",
      tags: ["Writing", "Portfolio", "Systems"],
    },
    {
      title: "Cross-Functional Operating Notes",
      role: "Program design",
      year: "2025",
      description:
        "Structured notes for explaining product tradeoffs to technical, operational, and non-technical audiences.",
      tags: ["Communication", "Research", "Execution"],
    },
  ],
  timeline: [
    {
      period: "Now",
      title: "Workplace product clarity",
      description:
        "Building a public body of work around Envoy-style operational software, trust, and multi-stakeholder product systems.",
    },
    {
      period: "2026",
      title: "Envoy field notes",
      description:
        "Writing about how workplace products make responsibility, state, and next steps visible for busy teams.",
    },
    {
      period: "2025",
      title: "Evidence to narrative",
      description:
        "Translating dense career material into public-safe portfolio language: product judgment, systems thinking, and practical communication.",
    },
    {
      period: "Earlier",
      title: "Product and program foundations",
      description:
        "Building reusable habits around research, stakeholder alignment, documentation, and execution across ambiguous work.",
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Collaborations, writing, and product work.",
    description:
      "Reach out for product strategy, interface audits, editorial systems, or thoughtful launch support.",
    cta: "Email Basundara",
  },
  footerNote: "Make the useful thing easy to find.",
} as const;

export type PortfolioLink = (typeof portfolio.profileLinks)[number];
export type WorkEntry = (typeof portfolio.work)[number];
export type TimelineEntry = (typeof portfolio.timeline)[number];
