import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import OctaLogo from "../../logos/octa";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <OctaLogo className="h-8 w-auto" />,
  name = "OctaSpace",
  columns = [
    {
      title: "Product",
      links: [
        { text: "OctaRender", href: "https://render.octa.space/" },
        { text: "Marketplace", href: "https://cube.octa.computer/marketplace/compute" },
        { text: "OctaSpace Cube", href: "https://cube.octa.computer/" },
        { text: "Documentation", href: "https://docs.octa.space/" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Blog", href: "https://blog.octa.space/" },
        { text: "Contact", href: "mailto:hello@octa.space" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "https://discord.gg/octaspace" },
        { text: "X", href: "https://x.com/octa_space" },
        { text: "GitHub", href: "https://github.com/octaspace" },
      ],
    },
  ],
  copyright = "© 2025 OctaSpace. All rights reserved.",
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "https://docs.octa.space/" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
