export const portfolio = {
  name: "Basundara",
  siteUrl: "https://basundara.dev",
  tagline: "Product, design, and writing",
  location: "Remote",
  email: "hello@basundara.dev",
  intro:
    "Basundara builds thoughtful digital products across strategy, design, and implementation. Her work sits at the intersection of crisp communication, useful systems, and experiences that are easy to trust.",
  current:
    "Currently, she is shaping a portfolio of product experiments, writing, and advisory work for teams that need cleaner ways to explain, launch, and scale their ideas.",
  image: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    alt: "Desk with notebook, laptop, and writing tools",
  },
  navItems: [
    { label: "Work", href: "#work" },
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
    "Product strategy",
    "UX systems",
    "Technical storytelling",
    "Launch planning",
  ],
  stats: [
    { label: "Focus", value: "Product" },
    { label: "Mode", value: "Build + write" },
    { label: "Base", value: "Remote" },
  ],
  work: [
    {
      title: "Launch Strategy Toolkit",
      role: "Product systems",
      year: "2026",
      description:
        "A practical operating system for turning research, positioning, and launch sequencing into decisions teams can act on.",
      tags: ["Strategy", "Research", "Go-to-market"],
    },
    {
      title: "Editorial Portfolio System",
      role: "Design and implementation",
      year: "2025",
      description:
        "A lean publishing surface for essays, project notes, and public proof-of-work without burying the reader in decoration.",
      tags: ["Next.js", "Writing", "Design systems"],
    },
    {
      title: "Community Learning Programs",
      role: "Program design",
      year: "2025",
      description:
        "Structured workshops and reference materials that help people move from broad intent to specific, repeatable practice.",
      tags: ["Education", "Workshops", "Operations"],
    },
  ],
  writing: [
    {
      title: "Building Trust Into Product Workflows",
      date: "May 2026",
      readTime: "6 mins",
      description:
        "Trust is not a brand claim. It is a sequence of small interface, process, and communication choices that make work easier to verify.",
      tags: ["Product", "Trust", "UX"],
    },
    {
      title: "The Practical Brief: Turning Research Into Action",
      date: "April 2026",
      readTime: "5 mins",
      description:
        "A useful brief does not summarize everything. It narrows attention, names the constraint, and makes the next decision obvious.",
      tags: ["Research", "Strategy", "Writing"],
    },
    {
      title: "Calm Interfaces for Busy Teams",
      date: "March 2026",
      readTime: "4 mins",
      description:
        "Operational software should feel quiet, legible, and quick to scan. The design work is deciding what not to make loud.",
      tags: ["Design", "Systems", "Teams"],
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
export type WritingEntry = (typeof portfolio.writing)[number];
