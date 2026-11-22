import { siteConfig } from "@/config/site";

import OctaLogo from "../../logos/octa";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { SocialIcons } from "./socials";

const { console: consoleLinks, links } = siteConfig;

const columns = [
  {
    title: "Product",
    links: [
      { text: "OctaRender", href: consoleLinks.render },
      { text: "Marketplace", href: consoleLinks.compute },
      { text: "OctaSpace Console", href: consoleLinks.home },
      { text: "Documentation", href: links.docs },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "Privacy Policy", href: links.privacy },
      { text: "Blog", href: links.blog },
      { text: "Contact", href: links.email },
      { text: "Support", href: links.support },
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

export default function FooterSection() {
  return (
    <footer className="bg-background w-full px-4 py-10">
      <div className="max-w-container mx-auto">
        <Footer className="pt-8">
          <FooterContent className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <FooterColumn key={column.title}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground mt-2 block text-sm transition"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>

          <FooterBottom className="mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <OctaLogo className="h-8 w-auto" />
              <h3 className="text-xl font-bold">OctaSpace</h3>
            </div>

            <div className="mt-2 flex gap-3 md:mt-0">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-6 w-auto" />
                </a>
              ))}
            </div>

            <div className="text-muted mt-2 text-sm md:mt-0">
              © {new Date().getFullYear()} OctaSpace. All rights reserved.
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
