import {
  Blocks,
  Box,
  Download,
  Globe,
  Hexagon,
  ListChecks,
  Logs,
  Microchip,
  MonitorCog,
  Power,
  Rocket,
  Settings,
  Share2,
  Shield,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";

import MockupBrowserIllustration from "@/components/illustrations/mockup-browser";
import MockupMobileIllustration from "@/components/illustrations/mockup-mobile";
import MockupResponsiveTopIllustration from "@/components/illustrations/mockup-responsive-top";
import PipelineIllustration from "@/components/illustrations/pipeline";
import RisingLargeIllustration from "@/components/illustrations/rising-large";
import SshTerminalIllustration from "@/components/illustrations/terminal";
import TilesIllustration from "@/components/illustrations/tiles";
import BentoGrid from "@/components/sections/bento-grid/3-rows-top";
import CTA from "@/components/sections/cta/default";
import FeatureIllustrationBottom from "@/components/sections/feature/illustration-bottom";
import FeatureStickyLeft from "@/components/sections/feature/sticky-left";
import FeatureStickyRight from "@/components/sections/feature/sticky-right";
import Hero from "@/components/sections/hero/layers";
import Items from "@/components/sections/items/default-brand";
import {
  NetworkPricing,
  NetworkSnapshotProvider,
  NetworkStatsGridBoxed,
  NetworkStatsStrip,
} from "@/components/sections/network-snapshot";
import TabsTop from "@/components/sections/tabs/top";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";
import { siteConfig } from "@/config/site";
import { getOctaNetworkSnapshot } from "@/lib/octa-network";

export const metadata: Metadata = {
  title: "OctaSpace - Decentralized GPU Cloud, AI & Compute Platform",
  description:
    "Run AI, render, and scale globally with decentralized GPU power, ready-made cloud apps, pay-as-you-go pricing, and built-in privacy solutions.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "OctaSpace - Decentralized GPU Cloud, AI & Compute Platform",
    description:
      "Access decentralized GPU cloud infrastructure for AI, rendering, containers, VMs, and privacy-focused workloads.",
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

export default async function HomePage() {
  const networkSnapshot = await getOctaNetworkSnapshot();

  return (
    <NetworkSnapshotProvider initialSnapshot={networkSnapshot}>
      <main className="flex-1">
        <Hero
          title="Unleash AI & Cloud Compute. Powered by a Decentralized GPU Network."
          description="Run AI, render, and scale globally with GPU power, ready-made apps, and built-in privacy solutions."
        />
        <NetworkStatsGridBoxed
          title="The Scale You Need. Ready When You Need It."
          description="From AI model training to complex simulations, thousands of users trust our decentralized compute infrastructure to provide the power they need. Our robust and growing system ensures you always have access to a massive pool of global compute resources."
        />
        <BentoGrid
          title="Your All-in-One Decentralized Platform."
          description="Gain instant access to a full range of decentralized services, giving you the power to run AI, create renders, play games, and more, all from a single platform."
          tiles={[
            {
              title: "A New Kind of Marketplace.",
              description: (
                <>
                  <p className="max-w-[320px] lg:max-w-[460px]">
                    Everyone should have access to powerful computing. Our open
                    marketplace fosters innovation and levels the playing field,
                    making high-performance resources available to anyone,
                    anywhere.
                  </p>
                </>
              ),
              visual: (
                <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
                  <MockupBrowserIllustration />
                </div>
              ),
              size: "col-span-12 md:flex-row",
            },
            {
              title: "Launch Anything. Instantly.",
              description: (
                <p className="max-w-[460px]">
                  Go from selection to execution in a single click. Our
                  marketplace provides pre-configured applications for AI,
                  machine learning, and more, so you can skip manual setup and
                  get straight to work.
                </p>
              ),
              visual: (
                <div className="min-h-[160px] grow items-center self-center">
                  <TilesIllustration />
                </div>
              ),
              icon: (
                <Rocket className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:col-span-6 lg:col-span-5",
              href: siteConfig.console.apps,
            },
            {
              title: "Containers & VMs, Your Choice",
              description: (
                <p className="max-w-[460px]">
                  Our platform empowers you to deploy any way you want. Launch
                  pre-configured Docker containers with a single click for a
                  quick start, or spin up a fully virtualized environment with
                  GPU-passthrough for total control. Access your environment via
                  traditional SSH or our convenient WebSSH, giving you the
                  flexibility to work how you want.
                </p>
              ),
              visual: (
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <SshTerminalIllustration />
                </div>
              ),
              icon: (
                <Terminal className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:col-span-6 lg:col-span-7",
              href: siteConfig.console.apps,
            },
            {
              title: "Rendering built to scale",
              description: (
                <div className="flex max-w-[460px] flex-col gap-4">
                  <p>
                    Looking to render? OctaRender is one of the most advanced
                    and flexible platforms currently on the market. It's a
                    cutting-edge distributed rendering platform that delivers
                    lightning-fast renders with simplicity in mind. By
                    leveraging our global network of nodes, OctaRender offers
                    unmatched performance and multi-render engine support,
                    making it an ideal solution for artists and creators.
                  </p>
                </div>
              ),
              visual: (
                <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
                  <MockupResponsiveTopIllustration />
                </div>
              ),
              icon: <Box className="text-muted-foreground size-6 stroke-1" />,
              size: "col-span-12 md:col-span-6 lg:col-span-6",
              href: siteConfig.console.render,
            },
            {
              title: "OctaVPN. True Privacy, No Subscriptions.",
              description: (
                <p className="max-w-[460px]">
                  OctaVPN is a decentralized VPN service that offers true online
                  freedom, security, and privacy. We provide multi-platform apps
                  for desktop, mobile, and browser extensions, allowing you to
                  secure all your devices simultaneously. With our flexible
                  pay-as-you-go model, you only pay for what you use, without
                  the commitment of a subscription.
                </p>
              ),
              visual: (
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <MockupMobileIllustration />
                </div>
              ),
              icon: (
                <Shield className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:col-span-6 lg:col-span-6",
              href: siteConfig.console.vpn,
            },
            {
              title: "The P2P Principle. Fair & Direct.",
              description: (
                <p className="max-w-[460px]">
                  Our platform is built on a simple principle: connecting
                  hardware providers directly with users, cutting out the
                  middleman and creating a fair, efficient ecosystem. This
                  decentralized approach allows providers to set competitive
                  prices while users get direct access to a vast pool of global
                  compute resources at a fraction of the cost.
                </p>
              ),
              visual: (
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <PipelineIllustration />
                </div>
              ),
              icon: (
                <Share2 className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:flex-row",
              href: siteConfig.console.home,
            },
          ]}
        />
        <FeatureIllustrationBottom
          title="Boundaries? We break them."
          description="Uncompromising capability beyond the cloud you know."
          visual={<RisingLargeIllustration />}
        />
        <NetworkStatsStrip className="py-8 sm:py-12 md:py-6" />
        <div className="bg-off-black relative h-[300px] w-full md:h-[500px]">
          <video
            src="/img/CPU.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/og.jpg"
            controls={false}
            className="absolute h-full w-full object-contain mix-blend-lighten"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <TabsTop
          title="From Click to Compute."
          description="The compute power you need, delivered instantly through an intuitive workflow."
          defaultTab="create-tasks"
          tabs={[
            {
              value: "create-tasks",
              title: "Choose your application",
              description:
                "Discover ready to run applications for every workload from a wide range of categories.",
              icon: (
                <ListChecks className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
              ),
              content: (
                <MockupFrame size="small">
                  <Mockup type="responsive">
                    <Screenshot
                      src="/img/marketplace1.png"
                      alt="OctaSpace marketplace application selection screenshot"
                      width={1248}
                      height={765}
                    />
                  </Mockup>
                </MockupFrame>
              ),
            },
            {
              value: "organize",
              title: "Select your node",
              description:
                "Filter nodes by your needs and budget, then choose the perfect compute to power your workload.",
              icon: (
                <MonitorCog className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
              ),
              content: (
                <MockupFrame size="small">
                  <Mockup type="responsive">
                    <Screenshot
                      src="/img/node.png"
                      alt="OctaSpace compute node selection screenshot"
                      width={1248}
                      height={765}
                    />
                  </Mockup>
                </MockupFrame>
              ),
            },
            {
              value: "collaborate",
              title: "Configure and deploy",
              description:
                "Customize your settings and deploy with a single click.",
              icon: (
                <Share2 className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
              ),
              content: (
                <MockupFrame size="small">
                  <Mockup type="responsive">
                    <Screenshot
                      src="/img/configure.png"
                      alt="OctaSpace deployment configuration screenshot"
                      width={1248}
                      height={765}
                    />
                  </Mockup>
                </MockupFrame>
              ),
            },
          ]}
        />
        <Items
          title="OctaSpace Marketplace Features for AI, GPU & Cloud Computing"
          items={[
            {
              title: "Launch-Ready Apps",
              description:
                "Access over 50 pre-configured AI training, image generation, video generation, and cloud computing applications, ready to deploy in minutes.",
              icon: <Power className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Dockerized Instances",
              description:
                "Our platform offers unparalleled flexibility, allowing you to launch Docker containers from DockerHub and HuggingFace for any computing task.",
              icon: (
                <Download className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Custom App Integration",
              description:
                "Easily integrate, create, and launch your own custom applications directly in our marketplace.",
              icon: (
                <Blocks className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Global Node Network",
              description:
                "Scale your projects globally by running AI models on GPU nodes located around the world.",
              icon: <Globe className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Simplified Management",
              description:
                "The OctaSpace Console provides comprehensive account management, from extensive billing to managing node providers and identifying issues.",
              icon: (
                <Settings className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Logging & Monitoring",
              description:
                "Get detailed insights with advanced container logs and app logs for effective monitoring.",
              icon: <Logs className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Extensive node support",
              description:
                "Our marketplace offers a diverse selection of compute nodes with automated filtering, including options with GPU passthrough for direct virtual machine (VM) use cases.",
              icon: (
                <Hexagon className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Multi-Architecture Support",
              description:
                "Our platform is built for flexibility, supporting various CPU and GPU architectures, including Nvidia, Intel, and AMD. You can choose CPU-only nodes or nodes with a mix of architectures to fit your specific needs.",
              icon: (
                <Microchip className="text-muted-foreground size-6 stroke-1" />
              ),
            },
          ]}
        />
        <div className="bg-off-black relative h-[300px] w-full md:h-[700px]">
          <video
            src="/img/GPU2.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/og.jpg"
            controls={false}
            className="absolute h-full w-full object-contain mix-blend-lighten"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <NetworkPricing className="pt-0 pb-8" />
        <FeatureStickyRight
          title=""
          description={
            <div className="top-32 flex flex-col items-start gap-4 py-4 text-center sm:gap-12 md:sticky md:py-12 md:text-left">
              <h2 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block max-w-[920px] bg-linear-to-r bg-clip-text text-3xl font-semibold text-balance text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Your Animations, Made Instant.
              </h2>
              <div className="text-md text-muted-foreground relative z-10 flex max-w-[620px] flex-col gap-4 font-medium sm:text-xl">
                <p>
                  OctaRender is a cutting edge distributed rendering platform
                  that gives artists and creators unparalleled speed and
                  efficiency. Leverage our global network of nodes to render
                  complex 3D scenes in a fraction of the time, all with
                  simplicity in mind.
                </p>
                <a
                  href={siteConfig.links.render}
                  className="text-foreground inline-block underline-offset-6 hover:underline"
                  style={{ lineHeight: "1.5" }}
                >
                  Learn more about OctaRender
                </a>
              </div>
            </div>
          }
          videoSrc="/img/ship.mp4"
        />
        <FeatureStickyLeft
          title="Total Freedom. Anywhere."
          image="/img/phone.png"
          imageAlt="OctaVPN mobile app screenshot"
          description={
            <>
              <p>
                Your privacy is a priority. Our decentralized VPN provides a new
                level of security for all your devices. Go from mobile to
                desktop with seamless access, securing your connection with a
                flexible pay as you go model.
              </p>
            </>
          }
        />

        <CTA
          title="Ready to Revolutionize Your Computing?"
          buttons={[
            {
              text: "Get Started",
              href: siteConfig.console.compute,
              variant: "glow",
            },
            {
              text: "View documentation",
              href: siteConfig.links.docs,
              variant: "outline",
            },
          ]}
        />
      </main>
    </NetworkSnapshotProvider>
  );
}
