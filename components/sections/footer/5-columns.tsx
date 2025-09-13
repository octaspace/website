import * as React from "react";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";

import { SocialIcons } from "./socials";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  socials?: SocialLink[];
  className?: string;
}

export default function FooterSection({
  logo,
  name = "OctaSpace",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "API", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Guides", href: "#" },
        { text: "Examples", href: "#" },
        { text: "Webinars", href: "#" },
        { text: "Case Studies", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Cookie Policy", href: "#" },
      ],
    },
  ],
  copyright = "© 2025 OctaSpace. All rights reserved.",
  socials = [
    { icon: SocialIcons.x, href: "https://x.com/octaspace", label: "X" },
    { icon: SocialIcons.github, href: "https://github.com/octaspace", label: "GitHub" },
    { icon: SocialIcons.reddit, href: "https://reddit.com/r/octaspace", label: "Reddit" },
    { icon: SocialIcons.telegram, href: "https://t.me/octaspace", label: "Telegram" },
    { icon: SocialIcons.discord, href: "https://discord.gg/octaspace", label: "Discord" },
    { icon: SocialIcons.medium, href: "https://medium.com/@octaspace", label: "Medium" },
    { icon: SocialIcons.youtube, href: "https://youtube.com/@octaspace", label: "YouTube" },
    { icon: SocialIcons.instagram, href: "https://instagram.com/octaspace", label: "Instagram" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer className="border-border dark:border-border/15 border-t pt-8">
          <FooterContent className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            
            {/* Logo + Socials */}
            <FooterColumn className="col-span-2 md:col-span-1 flex flex-col items-start gap-6 border-b pb-8 md:border-b-0">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <span className="sr-only">{social.label}</span>
                    {React.cloneElement(
                      social.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                      { className: "h-5 w-5 sm:h-6 sm:w-6" } // responsive size
                    )}
                  </Link>
                ))}
              </div>
            </FooterColumn>

            {/* Footer Links */}
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}

          </FooterContent>

          <FooterBottom className="border-0">
            <div className="text-muted-foreground text-sm">{copyright}</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
