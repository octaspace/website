import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";

import OctaLogo from "../../logos/octa";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

const name = "OctaSpace";

const mobileLinks = [
  { text: "Get Started", href: siteConfig.console.compute },
  { text: "Documentation", href: siteConfig.links.docs },
  { text: "OctaRender", href: siteConfig.console.render },
  { text: "OctaSpace Console", href: siteConfig.console.home },
];

export default function Navbar() {
  return (
    <header className="fade-bottom sticky top-0 z-50 px-4 pb-1 backdrop-blur-lg">
      <div className="max-w-container mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <OctaLogo className="h-8 w-auto" />
              {name}
            </a>
          </NavbarLeft>
          <NavbarRight>
            <Button variant="outline" asChild>
              <a href={siteConfig.console.compute}>Get Started</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
