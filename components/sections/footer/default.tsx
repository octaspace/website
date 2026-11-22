import { siteConfig } from "@/config/site";
import { linkTarget } from "@/lib/utils";

import OctaLogo from "../../logos/octa";
import { SocialIcons } from "./socials";

const { console: consoleLinks, links } = siteConfig;

const columns = [
  {
    title: "Product",
    links: [
      { text: "Compute Marketplace", href: consoleLinks.compute },
      { text: "VPN", href: consoleLinks.vpn },
      { text: "OctaRender", href: consoleLinks.render },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Documentation", href: links.docs },
      { text: "Blog", href: links.blog },
      { text: "Support", href: links.support },
      { text: "Contact", href: links.email },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: links.privacy },
      { text: "Terms of Service", href: links.terms },
    ],
  },
];

const socials = [
  { label: "X", href: links.x, icon: SocialIcons.x },
  { label: "Telegram", href: links.telegram, icon: SocialIcons.telegram },
  { label: "Discord", href: links.discord, icon: SocialIcons.discord },
  { label: "GitHub", href: links.github, icon: SocialIcons.github },
  { label: "Reddit", href: links.reddit, icon: SocialIcons.reddit },
  { label: "Medium", href: links.blog, icon: SocialIcons.medium },
  { label: "YouTube", href: links.youtube, icon: SocialIcons.youtube },
  { label: "Instagram", href: links.instagram, icon: SocialIcons.instagram },
];

export default function Footer() {
  return (
    <footer className="bg-background border-border dark:border-border/15 w-full border-t px-4 py-8">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 text-lg font-bold">
              <OctaLogo className="h-7 w-auto" />
              OctaSpace
            </a>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...linkTarget(href)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-5 w-auto" />
                </a>
              ))}
            </div>
            <div className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} OctaSpace. All rights reserved.
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold">{column.title}</h3>
                {column.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    {...linkTarget(link.href)}
                    className="text-muted-foreground hover:text-foreground text-sm transition"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
