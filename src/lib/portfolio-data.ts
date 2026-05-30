export const portfolio = {
  name: "Basundhara Chakrabarty",
  shortName: "Basundhara",
  siteUrl: "https://basundara.dev",
  tagline: "Secure cloud networking and distributed systems",
  location: "Mountain View, CA",
  email: "basundhara17061996@gmail.com",
  intro:
    "Basundhara is a software engineer focused on secure cloud-native networking infrastructure, open-source proxy systems, and distributed systems.",
  current:
    "She currently works at Databricks on datapath networking features for network proxies, after leading reverse tunnel and API gateway work at Nutanix and building a foundation in network security at Cisco.",
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
  stats: [
    { label: "Current", value: "Databricks" },
    { label: "OSS", value: "Envoy" },
    { label: "Research", value: "70 cites" },
  ],
  highlights: [
    {
      label: "Open-source impact",
      value: "Envoy v1.36 reverse tunnels",
      description:
        "Led and upstreamed reverse tunnel support into Envoy Proxy for secure cross-boundary service communication.",
    },
    {
      label: "Project leadership",
      value: "Envoy code owner",
      description:
        "Reviews and approves work in a widely adopted open-source network proxy used in cloud-native infrastructure.",
    },
    {
      label: "Research",
      value: "CASPER at IGSC 2023",
      description:
        "Published carbon-aware distributed scheduling research from UMass Amherst's Lab for Advanced Software Systems.",
    },
    {
      label: "Security foundation",
      value: "Cisco CCNA / CCNP Security",
      description:
        "Built early expertise across firewalls, IPS, VPNs, malware analysis, and access-control systems.",
    },
  ],
  work: [
    {
      title: "Databricks Network Proxy Infrastructure",
      role: "Software Engineer",
      year: "2026 - Present",
      description:
        "Developing datapath networking features for network proxies using C++, Rust, and Scala, with a focus on low-latency components that support high-throughput distributed systems.",
      logo: "databricks",
      tags: ["Databricks", "Network proxies", "C++", "Rust", "Scala"],
    },
    {
      title: "Envoy Reverse Tunneling",
      role: "Open-source networking infrastructure",
      year: "2024 - 2025",
      description:
        "Led the design and implementation of reverse tunnel support in Envoy Proxy, enabling protected services behind firewalls or NAT to initiate secure outbound tunnels instead of exposing inbound ports.",
      logo: "envoy",
      tags: ["Envoy v1.36", "Code owner", "Zero trust", "Nutanix"],
    },
    {
      title: "Nutanix Hybrid-Cloud Traffic Management",
      role: "Member of Technical Staff 4",
      year: "2023 - 2026",
      description:
        "Built critical datapath and control-plane components for Nutanix's high-performance API Gateway and distributed traffic management across hybrid-cloud environments.",
      logo: "nutanix",
      tags: ["API Gateway", "C++", "Go", "Hybrid cloud"],
    },
    {
      title: "CASPER Carbon-Aware Distributed Scheduling",
      role: "Graduate research, UMass Amherst",
      year: "2022 - 2023",
      description:
        "Co-developed carbon-aware scheduling research for distributed web applications at the Lab for Advanced Software Systems; the work was presented at IGSC 2023.",
      logo: "research",
      tags: ["UMass Amherst", "Distributed systems", "IGSC 2023", "Research"],
    },
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
      period: "Oct 2024 - Sep 2025",
      title: "Envoy reverse tunnels",
      description:
        "Designed and upstreamed reverse tunnel support for Envoy Proxy, reducing exposed inbound attack surfaces for cross-cluster communication.",
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
      logo: "research",
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
export type WorkEntry = (typeof portfolio.work)[number];
export type TimelineEntry = (typeof portfolio.timeline)[number];
