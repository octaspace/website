  "use client";
  import { useEffect, useState } from "react";
  import {
    Lock,
    Network,
    User,
    ArrowRight,
    Cloud,
    Box,
    Terminal,
    Download,
    Server,
    Settings,
    Database,
    MonitorCog,
    Globe,
    Webhook,
    Rocket,
    Shield,
    Share2,
    ListChecks,
    Tag,
    Blocks,
    Power,
    Logs,
    Hexagon,
    Microchip,
  } from "lucide-react";

  import Navbar from "../components/sections/navbar/sticky";
  import { Badge } from "../components/ui/badge";
  import Link from "next/link"; // Make sure Link is imported
  import { ArrowRightIcon } from "lucide-react"; // If you use this in the badge
  import Hero from "../components/sections/hero/layers";
  import { SocialIcons } from "../components/sections/footer/socials";
  import Stats from "../components/sections/stats/grid-boxed";
  import LogosMarquee from "../components/sections/logos/marquee2";
  import BentoGrid from "../components/sections/bento-grid/3-rows-top";
  import FeatureIllustrationBottom from "../components/sections/feature/illustration-bottom";
  import FeatureStickyLeft from "../components/sections/feature/sticky-left";
  import FeatureStickyRight from "../components/sections/feature/sticky-right desktop";
  import Items from "../components/sections/items/default-brand";
  import TestimonialsGrid from "../components/sections/testimonials/grid";
  import Pricing from "../components/sections/pricing/custom";
  import FAQ from "../components/sections/faq/static";
  import CTA from "../components/sections/cta/default";
  import Footer from "../components/sections/footer/5-columns";
  import OctaLogo from "../components/logos/octa";
  import Catalog from "../components/logos/catalog";
  import CoreOS from "../components/logos/coreos";
  import CarouselLarge from "@/components/sections/carousel/small";
  import TabsLeft from "../components/sections/tabs/top";
  import Peregrin from "../components/logos/peregrin";
  import PictelAI from "../components/logos/pictelai";
  import { Mockup, MockupFrame } from "../components/ui/mockup";
  import Screenshot from "../components/ui/screenshot";
  import RisingSmallIllustration from "../components/illustrations/rising-small";
  import RisingLargeIllustration from "../components/illustrations/rising-large";
  import MockupBrowserIllustration from "../components/illustrations/mockup-browser";
  import MockupResponsiveTopIllustration from "../components/illustrations/mockup-responsive-top";
  import PipelineIllustration from "../components/illustrations/pipeline"
  import ChatIllustration from "../components/illustrations/chat";
  import SshTerminalIllustration from "../components/illustrations/terminal";
  import MockupMobileIllustration from "../components/illustrations/mockup-mobile";
  import { Button } from "../components/ui/button";
  import { Input } from "../components/ui/input";
  import TilesIllustration from "@/components/illustrations/tiles";
import Github from "@/components/logos/github";
import { Play } from "next/font/google";

  
  export default function MCPServerPage() {
    const [statsItems, setStatsItems] = useState<any[]>([]);
    const [plans, setPlans] = useState<any[]>([]);
    const [loadingStats, setLoadingStats] = useState(true);
  
    useEffect(() => {
      async function fetchStats() {
        try {
          const res = await fetch("https://api.octa.computer/network");
          const data = await res.json();
  
          // Stats section
          const items = [
            {
              value: data.power?.gpus?.toString(),
              label: "Total GPUs:",
              description: "Available for Rent",
            },
            {
              value: data.nodes?.count?.toString(),
              label: "Total nodes:",
              description: "Offering Compute Power",
            },
            {
              value: data.platform?.users?.toString(),
              label: "Registered users:",
              description: "Users & Growing",
            },
          ];
          setStatsItems(items);
  
          // Pricing section → normalize for PricingColumnProps
          const gpuPriority: Record<string, number> = {
            "NVIDIA A100-SXM4-40GB": 100,
            "NVIDIA GeForce RTX 5090": 90,
            "NVIDIA GeForce RTX 4090": 85,
            "NVIDIA GeForce RTX 5080": 80,
            "NVIDIA GeForce RTX 4080": 75,
            "NVIDIA GeForce RTX 4070": 70,
            "NVIDIA GeForce RTX 3090": 60,
            "NVIDIA GeForce RTX 5070": 50,
          };
          
          const gpuPlans = Object.entries(data.marketplace.gpus)
            .map(([gpuName, gpuData]: [string, any]) => ({
              name: gpuName,
              description: `${gpuData.count} available`,
              price: gpuData.avg_price,
              priceNote: "per hour",
              features: [
                `Average price: ${gpuData.avg_price} $/hr`,
                `Available count: ${gpuData.count}`,
                "Flexible rental terms",
                "Global GPU marketplace",
              ],
              cta: {
                label: "Rent now",
                href: "https://marketplace.octa.space/",
                variant: "glow",
              },
              variant: "default",
              priority: gpuPriority[gpuName] || 0, // fallback to 0 if GPU not in priority list
            }))
            // Sort by priority (highest first), then by availability
            .sort((a, b) => {
              if (b.priority === a.priority) {
                const countA = parseInt(a.features[1].match(/\d+/)?.[0] || "0");
                const countB = parseInt(b.features[1].match(/\d+/)?.[0] || "0");
                return countB - countA;
              }
              return b.priority - a.priority;
            });
          
          setPlans(gpuPlans);
          
          setLoadingStats(false);
        } catch (err) {
          console.error("Failed to fetch network stats:", err);
          setLoadingStats(false);
        }
      }
  
      fetchStats();
    }, []);
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
          } as React.CSSProperties
        }
      >
        <Navbar
          logo={<OctaLogo className="h-8 w-auto" />}
          name="OctaSpace"
          actions={[

            {
              text: "Get Started",
              href: "https://marketplace.octa.space/",
              isButton: true,
              variant: "outline",
            },
          ]}
        />
        <main className="flex-1">
          <Hero
            title="Unleash AI & Cloud Compute. Powered by a Decentralized GPU Network."
            description="Run AI, render, and scale globally with GPU power, ready-made apps, and built-in privacy solutions."
          />
          <Stats
            title="The Scale You Need. Ready When You Need It."
            description="From AI model training to complex simulations, thousands of users trust our decentralized compute infrastructure to provide the power they need. Our robust and growing system ensures you always have access to a massive pool of global compute resources."
            items={statsItems.length ? statsItems : [
              {
                value: "…", // fallback if stats not loaded yet
                label: "Loading...",
                description: "",
              },
            ]}
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
                    Everyone should have access to powerful computing. Our open marketplace fosters innovation and levels the playing field, making high-performance resources available to anyone, anywhere.
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
                    Go from selection to execution in a single click. Our marketplace provides pre-configured applications for AI, machine learning, and more, so you can skip manual setup and get straight to work.
                  </p>
                ),
                visual: (
                  <div className="min-h-[160px] grow items-center self-center">
                    <TilesIllustration />
                  </div>
                ),
                icon: <Rocket className="text-muted-foreground size-6 stroke-1" />,
                size: "col-span-12 md:col-span-6 lg:col-span-5",
              },
              {
                title: "Containers & VMs, Your Choice",
                description: (
                  <p className="max-w-[460px]">
                    Our platform empowers you to deploy any way you want. Launch pre-configured Docker containers with a single click for a quick start, or spin up a fully virtualized environment with GPU-passthrough for total control. Access your environment via traditional SSH or our convenient WebSSH, giving you the flexibility to work how you want.
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
              },
              {
                title: "Rendering built to scale",
                description: (
                  <div className="flex flex-col gap-4 max-w-[460px]">
                    <p>
                      Looking to render? OctaRender is one of the most advanced and flexible
                      platforms currently on the market. It's a cutting-edge distributed
                      rendering platform that delivers lightning-fast renders with simplicity
                      in mind. By leveraging our global network of nodes, OctaRender offers
                      unmatched performance and multi-render engine support, making it an
                      ideal solution for artists and creators.
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
              },
              {
                title: "OctaVPN. True Privacy, No Subscriptions.",
                description: (
                  <p className="max-w-[460px]">
                    OctaVPN is a decentralized VPN service that offers true online freedom, security, and privacy. We provide multi-platform apps for desktop, mobile, and browser extensions, allowing you to secure all your devices simultaneously. With our flexible pay-as-you-go model, you only pay for what you use, without the commitment of a subscription.
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
              },
              {
                title: "The P2P Principle. Fair & Direct.",
                description: (
                  <p className="max-w-[460px]">
                    Our platform is built on a simple principle: connecting hardware providers directly with users, cutting out the middleman and creating a fair, efficient ecosystem. This decentralized approach allows providers to set competitive prices while users get direct access to a vast pool of global compute resources at a fraction of the cost.
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
              },
            ]}
          />
          <FeatureIllustrationBottom
            title="Boundaries? We break them."
            description="Uncompromising capability beyond the cloud you know."
            visual={<RisingLargeIllustration />}
          />
          <TabsLeft
          title="From Click to Compute."
          description="The compute power you need, delivered instantly through an intuitive workflow."
          defaultTab="create-tasks"
          tabs={[
            {
              value: "create-tasks",
              title: "Choose your application",
              description: "Discover ready to run applications for every workload from a wide range of categories."
                ,
              icon: (
                <ListChecks className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
              ),
              content: (
                <MockupFrame size="small">
                  <Mockup type="responsive">
                    <Screenshot
                      srcLight="/img/marketplace1.png"
                      srcDark="/img/marketplace1.png"
                      alt="TodoPluto creating tasks screenshot"
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
              icon: <MonitorCog className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />,
              content: (
                <MockupFrame size="small">
                  <Mockup type="responsive">
                    <Screenshot
                      srcLight="/img/Node.png"
                      srcDark="/img/Node.png"
                      alt="TodoPluto organization screenshot"
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
                      srcLight="/img/configure.png"
                      srcDark="/img/configure.png"
                      alt="TodoPluto sharing screenshot"
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
                icon: <Download className="text-muted-foreground size-6 stroke-1" />,
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
                  "The OctaSpace Cube provides comprehensive account management, from extensive billing to managing node providers and identifying issues.",
                icon: (
                  <Settings className="text-muted-foreground size-6 stroke-1" />
                ),
              },
              {
                title: "Logging & Monitoring",
                description:
                  "Get detailed insights with advanced container logs and app logs for effective monitoring.",
                icon: (
                  <Logs className="text-muted-foreground size-6 stroke-1" />
                ),
              },
              {
                title: "Extensive node support",
                description:
                  "Our marketplace offers a diverse selection of compute nodes with automated filtering, including options with GPU passthrough for direct virtual machine (VM) use cases.",
                icon: <Hexagon className="text-muted-foreground size-6 stroke-1" />,
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
                    <div className="relative w-full h-[300px] md:h-[700px] bg-off-black">
            <video
              src="/img/GPU2.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/services-hero.webp"
              className="absolute w-full h-full object-contain mix-blend-lighten"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {!loadingStats && (
          <Pricing
            title="GPU rental plans for all workloads"
            description="Choose from the latest NVIDIA GPUs with live hourly pricing."
            plans={plans}
            className="pt-0 pb-8"
          />
        )}
         {/*<CarouselLarge></CarouselLarge>*/}
          <FeatureStickyRight
              title=""
              description={
                <div className="top-32 flex flex-col items-start gap-4 py-4 text-center sm:gap-12 md:sticky md:py-12 md:text-left">
                  <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block max-w-[920px] bg-linear-to-r bg-clip-text text-3xl font-semibold text-balance text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                    Your Animations, Made Instant.
                  </h1>
                  <div className="text-md text-muted-foreground relative z-10 max-w-[620px] flex flex-col gap-4 font-medium sm:text-xl">
                    <p>
                      OctaRender is a cutting edge distributed rendering platform that gives artists and creators unparalleled speed and efficiency. Leverage our global network of nodes to render complex 3D scenes in a fraction of the time, all with simplicity in mind.
                    </p>
                    <a
                      href="https://render.octa.space/"
                      className="text-foreground underline-offset-4 hover:underline inline-block"
                      style={{ lineHeight: "1.5" }} // optional for spacing
                    >
                      Learn more about OctaRender
                    </a>
                  </div>
                </div>

              }
              videoSrc="/img/ship.mp4"
            />
         {/* <LogosMarquee />*/}
          <FeatureStickyLeft
            title="Total Freedom. Anywhere."
            description={
              <>
                <p>
                Your privacy is a priority. Our decentralized VPN provides a new level of security for all your devices. Go from mobile to desktop with seamless access, securing your connection with a flexible pay as you go model.
                </p>
              </>
            }
          />

        {/* FAQ, CTA, Footer */}


        {/*  <FAQ
            title="Frequently asked questions"
            items={[
              {
                question: "How quickly can I deploy an MCP server?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                    Deployment typically takes less than 2 minutes. Once
                    you&apos;ve created your account, you can deploy your first
                    MCP server with just a few clicks or a single CLI command. The
                    server will be instantly available across our global network.
                  </p>
                ),
              },
              {
                question: "Can I use my existing edge provider account?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                    Yes, you can connect your existing edge provider account to
                    our platform. This allows you to manage your MCP servers
                    alongside your other services while taking advantage of our
                    specialized MCP management tools.
                  </p>
                ),
              },
              {
                question: "How does scaling work for MCP servers?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                    Our platform automatically scales your MCP servers based on
                    traffic patterns. You can also set manual scaling rules or
                    schedule scaling events for predictable traffic increases. All
                    scaling happens without downtime or performance degradation.
                  </p>
                ),
              },
              {
                question: "Can I run custom code on my MCP servers?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                    Absolutely. Our MCP servers support custom code execution in
                    multiple languages, including JavaScript, Python, Go, and
                    Rust. You can deploy code directly from your Git repositories
                    or upload directly through our interface or API.
                  </p>
                ),
              },
              {
                question: "Do you offer a free trial?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                    Yes, we offer a 14-day free trial of our Business plan with no
                    credit card required. This gives you full access to our
                    platform features so you can evaluate how it works with your
                    applications before making a commitment.
                  </p>
                ),
              },
            ]}
          />*/}
          <CTA
            title="Ready to Revolutionize Your Computing?"
            buttons={[
              {
                text: "Get Started",
                href: "#",
                variant: "glow",
              },
              {
                text: "View documentation",
                href: "https://docs.octa.space/",
                variant: "outline",
              },
            ]}
          />
        </main>
        <Footer
        logo={<OctaLogo className="h-8 w-auto" />}
        columns={[
          {
            title: "Product",
            links: [
              { text: "OctaRender", href: "https://render.octa.space/" },
              { text: "Marketplace", href: "https://marketplace.octa.space/" },
              { text: "OctaSpace Cube", href: "https://cube.octa.computer/" },
              { text: "Documentation", href: "https://docs.octa.space/" },
            ],
          },
          {
            title: "Company",
            links: [
              { text: "Privacy policy", href: "/about" },
              { text: "Blog", href: "#" },
              { text: "Contact", href: "mailto:hello@octa.space" },
            ],
          },
        ]}
        copyright="© 2025 OctaSpace. All rights reserved."
        socials={[
          { label: "X", href: "https://x.com/octa_space", icon: SocialIcons.x },
          { label: "Telegram", href: "https://t.me/octa_space", icon: SocialIcons.telegram },
          { label: "Discord", href: "https://discord.gg/octaspace", icon: SocialIcons.discord },
          { label: "GitHub", href: "https://github.com/octaspace", icon: SocialIcons.github },
          { label: "Reddit", href: "https://reddit.com/r/octaspace", icon: SocialIcons.reddit },
          { label: "Medium", href: "https://blog.octa.space/", icon: SocialIcons.medium },
          { label: "YouTube", href: "https://www.youtube.com/@octa_space", icon: SocialIcons.youtube },
          { label: "Instagram", href: "https://www.instagram.com/octaspace.official", icon: SocialIcons.instagram },
        ]}
      />
      </div>
    );
  }
