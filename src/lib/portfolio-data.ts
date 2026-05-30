export const portfolio = {
  name: "Basundhara Chakrabarty",
  shortName: "Basundhara",
  siteUrl: "https://basundara.dev",
  tagline: "Secure cloud networking and distributed systems",
  location: "Mountain View, CA",
  email: "basundhara17061996@gmail.com",
  intro:
    "I am a software engineer focused on secure cloud-native networking infrastructure, open-source proxy systems, and distributed systems.",
  current:
    "I currently work at Databricks on datapath networking features for network proxies and remain an active Envoy contributor and code owner, after leading reverse tunnel and API gateway work at Nutanix and building a foundation in network security at Cisco.",
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  profileLinks: [
    {
      label: "Email",
      href: "mailto:basundhara17061996@gmail.com",
      kind: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/basundhara-c",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/basundhara1706/",
      kind: "linkedin",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=vAD0UqwAAAAJ&hl=en",
      kind: "googleScholar",
    },
  ],
  focusAreas: [
    "Envoy Proxy",
    "Zero-trust networking",
    "C++ / Rust / Go",
    "Distributed systems",
  ],
  timeline: [
    {
      period: "Mar 2026 - Present",
      title: "Databricks: network proxy datapath",
      description:
        "Software Engineer working on datapath networking features, low-latency proxy components, and Envoy dynamic modules.",
      logo: "databricks",
    },
    {
      period: "Oct 2024 - Present",
      title: "Envoy open-source networking",
      description:
        "Active Envoy contributor and code owner. Designed and upstreamed reverse tunnel support for Envoy Proxy, and continue work around proxy extensibility and secure service communication.",
      logo: "envoy",
    },
    {
      period: "Jun 2023 - Feb 2026",
      title: "Nutanix: API gateway and hybrid cloud",
      description:
        "Member of Technical Staff 4 building datapath and control-plane features for a high-performance API Gateway and secure hybrid-cloud communication.",
      logo: "nutanix",
    },
    {
      period: "Jun 2022 - Aug 2022",
      title: "Google Shopping Ads infrastructure",
      description:
        "Built C++, ProtoBuf, and gRPC tooling that used historical pipeline data and AutoTFX models to estimate Borg compute impact for indexing changes.",
      logo: "google",
    },
    {
      period: "Sep 2021 - May 2023",
      title: "UMass Amherst MS in Computer Science",
      description:
        "Studied distributed systems, operating systems, reverse engineering, and network security; completed research on carbon-aware distributed scheduling.",
      logo: "umass",
    },
    {
      period: "Jul 2018 - Aug 2021",
      title: "Cisco network security",
      description:
        "Handled escalations and automation for firewalls, IPS, VPN, malware analysis, and access-control systems while leading Cisco Security Innovation Framework automation projects.",
      logo: "cisco",
    },
  ],
  credentials: [
    "MS in Computer Science, University of Massachusetts Amherst",
    "B.Tech in Electronics and Communications Engineering, VIT",
    "CCNA Routing and Switching, CCNA Security, CCNP Security",
    "Peer-reviewed publications across distributed systems and network security",
  ],
  contact: {
    eyebrow: "Contact",
    title: "Secure networking, Envoy, and distributed systems.",
    description:
      "Reach out about cloud networking infrastructure, proxy systems, distributed systems research, or open-source Envoy work.",
    cta: "Email Basundhara",
  },
  footerNote: "Secure cloud networking, distributed systems, and open-source infrastructure.",
} as const;

export type PortfolioLink = (typeof portfolio.profileLinks)[number];
export type TimelineEntry = (typeof portfolio.timeline)[number];
