const consoleUrl = "https://console.octa.space";

export const siteConfig = {
  name: "OctaSpace: Decentralized GPU Cloud, AI & Compute Platform",
  url: "https://octa.space/",
  ogImage: "https://octa.space/og.jpg",
  description:
    "Access a global, decentralized GPU network for AI and cloud computing. Get high-performance, cost-effective compute with no subscriptions and pay-per-minute pricing.",
  // Public API of the platform (oas): `/network`, `/stats/gpu/current`.
  apiUrl: "https://api.octa.space",
  console: {
    home: `${consoleUrl}/`,
    compute: `${consoleUrl}/marketplace/compute`,
    apps: `${consoleUrl}/marketplace/apps`,
    vpn: `${consoleUrl}/marketplace/vpn`,
    render: `${consoleUrl}/render`,
  },
  links: {
    docs: "https://docs.octa.space/",
    privacy: "https://docs.octa.space/privacy-policy",
    terms: "https://docs.octa.space/terms-and-conditions",
    blog: "https://blog.octa.space/",
    email: "mailto:hello@octa.space",
    support:
      "https://discord.com/channels/973249548245925958/1358971594487107787",
    x: "https://x.com/octa_space",
    telegram: "https://t.me/octa_space",
    discord: "https://discord.gg/octaspace",
    github: "https://github.com/octaspace",
    reddit: "https://reddit.com/r/octaspace",
    youtube: "https://www.youtube.com/@octa_space",
    instagram: "https://www.instagram.com/octaspace.official",
  },
};

export type SiteConfig = typeof siteConfig;
