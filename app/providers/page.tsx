import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  Cpu,
  Wifi,
  Zap,
  Download,
  Tag,
  LineChart,
  ChevronDown,
} from "lucide-react";

import Navbar from "../../components/sections/navbar/sticky";
import Hero from "../../components/sections/hero/layers";
import {
  NetworkSnapshotProvider,
  NetworkStatsGridBoxed,
} from "../../components/sections/network-snapshot";
import Items from "../../components/sections/items/default-brand";
import CTA from "../../components/sections/cta/default";
import Footer from "../../components/sections/footer/5-columns";
import OctaLogo from "../../components/logos/octa";
import { SocialIcons } from "../../components/sections/footer/socials";
import { Section } from "../../components/ui/section";
import { siteConfig } from "@/config/site";
import { getOctaNetworkSnapshot } from "@/lib/octa-network";

export const metadata: Metadata = {
  title: "Become a Provider - OctaSpace",
  description:
    "Earn OCTA by sharing your GPUs and bandwidth on the OctaSpace decentralized compute network. You set the price — rentals, VPN traffic, and idle-time monetization.",
  alternates: {
    canonical: new URL("/providers", siteConfig.url).toString(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: new URL("/providers", siteConfig.url).toString(),
    title: "Become a Provider - OctaSpace",
    description:
      "Earn OCTA by sharing your GPUs and bandwidth on the OctaSpace decentralized compute network.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

const earnItems = [
  {
    title: "GPU rentals",
    description:
      "List your GPUs on the peer-to-peer marketplace and set your own hourly price. Renters run AI training, 3D renders, and full virtual machines on your hardware.",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "VPN bandwidth",
    description:
      "Serve as a decentralized VPN exit node across WireGuard, OpenVPN, and Shadowsocks with transparent pay-per-GB billing — no subscriptions for anyone.",
    icon: <Wifi className="size-5" />,
  },
  {
    title: "Idle-time monetization",
    description:
      "When nobody is renting, your node keeps earning. Cube automatically monetizes idle hardware, so downtime pays instead of costing you.",
    icon: <Zap className="size-5" />,
  },
];

const steps = [
  {
    icon: <Download className="size-5" />,
    title: "Install the provider software",
    description:
      "Automated setup tools for both Windows and Linux get your node on the network with minimal technical overhead.",
  },
  {
    icon: <Tag className="size-5" />,
    title: "List your hardware, set your price",
    description:
      "It's peer-to-peer: you host the machine, you set the rate. The marketplace matches you with renters worldwide.",
  },
  {
    icon: <LineChart className="size-5" />,
    title: "Earn and monitor in Cube",
    description:
      "Track node performance, hardware verification, sessions, and earnings from a single dashboard.",
  },
];

const faqs = [
  {
    question: "How do I get paid?",
    answer:
      "Providers earn in OCTA, the network's native token. You set your own rental prices on the peer-to-peer marketplace, and everything — earnings, active sessions, and hardware verification — is managed in Cube.",
  },
  {
    question: "What hardware do I need?",
    answer:
      "The network spans consumer GeForce RTX cards all the way to datacenter A100 and H100 GPUs, across NVIDIA, AMD, and Intel hardware. More powerful hardware simply unlocks higher-earning workloads.",
  },
  {
    question: "Do I need to run Linux?",
    answer:
      "No. OctaSpace ships automated provider setup tools for both Windows and Linux, so a gaming PC or a rack server can both join the network.",
  },
  {
    question: "What happens when nobody rents my hardware?",
    answer:
      "Your node keeps earning. Cube includes automated monetization of idle hardware, so you're not left with a depreciating asset between rentals.",
  },
  {
    question: "Is staking required to run a node?",
    answer:
      "OctaSpace's whitepaper describes a staking mechanism for node operators. Check the official documentation for the current requirements before you start.",
  },
];

function Steps() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold text-balance sm:text-5xl sm:leading-tight">
            Live in three steps
          </h2>
          <p className="text-md text-muted-foreground max-w-[640px] font-medium text-balance sm:text-xl">
            From download to first earnings without a DevOps degree.
          </p>
        </div>
        <div className="grid w-full gap-4 text-left sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-card border-border relative flex flex-col gap-4 rounded-2xl border p-6"
            >
              <div className="flex items-center justify-between">
                <div className="bg-brand/10 text-brand flex size-10 items-center justify-center rounded-xl">
                  {step.icon}
                </div>
                <span className="text-muted-foreground/40 text-5xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section>
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 sm:gap-10">
        <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-5xl sm:leading-tight">
          Provider FAQ
        </h2>
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-card border-border group rounded-2xl border px-6 py-4"
            >
              <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <ChevronDown className="text-muted-foreground size-5 shrink-0 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default async function ProvidersPage() {
  const networkSnapshot = await getOctaNetworkSnapshot();

  return (
    <div
      className="flex flex-col"
      style={
        {
          "--brand-foreground": "var(--brand-octa-foreground)",
          "--brand": "var(--brand-octa)",
          "--primary": "light-dark(var(--brand-octa), oklch(0.985 0 0))",
          "--background": "var(--background-octa)",
          "--muted": "var(--background-titanium)",
          "--radius": "var(--radius-default)",
        } as CSSProperties
      }
    >
      <Navbar
        logo={<OctaLogo className="h-8 w-auto" />}
        name="OctaSpace"
        mobileLinks={[
          { text: "Become a provider", href: "/providers" },
          {
            text: "Get Started",
            href: "https://cube.octa.computer/marketplace/compute",
          },
          { text: "Documentation", href: "https://docs.octa.space/" },
          {
            text: "OctaSpace Marketplace",
            href: "https://cube.octa.computer/marketplace/compute",
          },
          { text: "OctaRender", href: "https://render.octa.computer/" },
          { text: "OctaSpace Cube", href: "https://cube.octa.computer" },
        ]}
        actions={[
          {
            text: "Start earning",
            href: "https://cube.octa.computer",
            isButton: true,
            variant: "glow",
          },
        ]}
      />
      <NetworkSnapshotProvider initialSnapshot={networkSnapshot}>
        <main className="flex-1">
          <Hero
            badge={false}
            title="Your hardware is sitting idle. Put it to work."
            description="Join the OctaSpace provider network and earn OCTA from your GPUs and bandwidth — rentals, VPN traffic, and automated idle-time monetization. You set your own prices."
            buttons={[
              {
                text: "Start earning",
                href: "https://cube.octa.computer",
                variant: "glow",
              },
              {
                text: "Read the docs",
                href: "https://docs.octa.space/",
                variant: "outline",
              },
            ]}
            mockups={false}
          />
          <NetworkStatsGridBoxed
            title="Join a network that's already paying providers"
            description="Live network figures — real GPUs, real nodes, real demand for your hardware."
          />
          <Items
            title="Three ways to earn"
            items={earnItems}
          />
          <Steps />
          <Faq />
          <CTA
            title="Ready to earn with your hardware?"
            buttons={[
              {
                text: "Open Cube and start",
                href: "https://cube.octa.computer",
                variant: "glow",
              },
              {
                text: "Read the provider docs",
                href: "https://docs.octa.space/",
                variant: "outline",
              },
            ]}
          />
        </main>
      </NetworkSnapshotProvider>
      <Footer
        logo={<OctaLogo className="h-8 w-auto" />}
        columns={[
          {
            title: "Product",
            links: [
              { text: "OctaRender", href: "https://render.octa.space/" },
              {
                text: "Marketplace",
                href: "https://cube.octa.computer/marketplace/compute",
              },
              { text: "OctaSpace Cube", href: "https://cube.octa.computer/" },
              { text: "Documentation", href: "https://docs.octa.space/" },
            ],
          },
          {
            title: "Company",
            links: [
              { text: "Become a provider", href: "/providers" },
              { text: "Privacy Policy", href: "/privacy" },
              { text: "Blog", href: "https://blog.octa.space/" },
              { text: "Contact", href: "mailto:hello@octa.space" },
            ],
          },
        ]}
        copyright="© 2025 OctaSpace. All rights reserved."
        socials={[
          { label: "X", href: "https://x.com/octa_space", icon: SocialIcons.x },
          {
            label: "Telegram",
            href: "https://t.me/octa_space",
            icon: SocialIcons.telegram,
          },
          {
            label: "Discord",
            href: "https://discord.gg/octaspace",
            icon: SocialIcons.discord,
          },
          {
            label: "GitHub",
            href: "https://github.com/octaspace",
            icon: SocialIcons.github,
          },
          {
            label: "Reddit",
            href: "https://reddit.com/r/octaspace",
            icon: SocialIcons.reddit,
          },
          {
            label: "Medium",
            href: "https://blog.octa.space/",
            icon: SocialIcons.medium,
          },
          {
            label: "YouTube",
            href: "https://www.youtube.com/@octa_space",
            icon: SocialIcons.youtube,
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/octaspace.official",
            icon: SocialIcons.instagram,
          },
        ]}
      />
    </div>
  );
}
