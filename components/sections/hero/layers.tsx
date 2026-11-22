import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
}

interface HeroLayersProps {
  title: string;
  description: string;
  buttons?: HeroButtonProps[] | false;
  className?: string;
  mockups?:
    | {
        left: ReactNode;
        center: ReactNode;
        right: ReactNode;
      }
    | false;
}

export default function Hero({
  title,
  description,
  buttons = [
    {
      href: siteConfig.console.compute,
      text: "Get Started",
      variant: "glow",
    },
  ],
  className,
  mockups = {
    left: (
      <Screenshot
        src="/img/VPNmarket.png"
        alt="OctaVPN marketplace screenshot"
        width={1248}
        height={765}
      />
    ),
    center: (
      <Screenshot
        src="/img/nodes.png"
        alt="OctaSpace node marketplace screenshot"
        width={1248}
        height={765}
      />
    ),
    right: (
      <Screenshot
        src="/img/marketplace1.png"
        alt="OctaSpace application marketplace screenshot"
        width={1248}
        height={765}
      />
    ),
  },
}: HeroLayersProps) {
  return (
    <Section
      className={cn(
        "fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container relative mx-auto flex flex-col gap-12 pt-1">
        <div className="relative z-10 flex flex-col items-start gap-6 sm:gap-8">
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground inline-block max-w-[840px] bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground max-w-[840px] font-medium text-balance opacity-0 delay-100 lg:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear flex gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>{button.text}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
        {mockups !== false && (
          <div className="group relative sm:px-24">
            <div className="relative left-[-24%] z-10 h-[24px] rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:left-[-32%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
              <MockupFrame
                className="animate-appear shadow-mockup opacity-0 delay-500"
                size="small"
              >
                <Mockup type="responsive">{mockups.left}</Mockup>
              </MockupFrame>
            </div>
            <div className="relative z-10 h-[24px] rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:rotate-[-12deg] group-hover:skew-y-6">
              <MockupFrame
                className="animate-appear shadow-mockup opacity-0 delay-1000"
                size="small"
              >
                <Mockup type="responsive">{mockups.center}</Mockup>
              </MockupFrame>
            </div>
            <div className="relative left-[32%] z-10 rotate-[-24deg] skew-y-12 transition-all delay-200 duration-700 ease-in-out group-hover:left-[48%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
              <MockupFrame
                className="animate-appear shadow-mockup opacity-0 delay-1500"
                size="small"
              >
                <Mockup type="responsive">{mockups.right}</Mockup>
              </MockupFrame>
            </div>
          </div>
        )}
        <Glow
          variant="center"
          className="animate-appear-zoom mt-32 opacity-0 delay-2000 lg:-mt-12"
        />
      </div>
    </Section>
  );
}
