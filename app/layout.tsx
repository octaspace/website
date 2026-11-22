import "@/app/globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import type { CSSProperties } from "react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/sticky";
import { siteConfig } from "@/config/site";
import { inter } from "@/lib/fonts";

// Maps the semantic theme variables to the `octa` brand (styles/theme.css).
const octaBrand = {
  "--brand-foreground": "var(--brand-octa-foreground)",
  "--brand": "var(--brand-octa)",
  "--primary": "light-dark(var(--brand-octa), oklch(0.985 0 0))",
  "--background": "var(--background-octa)",
  "--muted": "var(--background-titanium)",
  "--radius": "var(--radius-default)",
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url), // Use main domain
  description:
    "Unleash the power of AI and cloud computing with OctaSpace, a decentralized GPU network. Experience high-performance, cost-effective, and secure computing for all your workloads.",
  keywords: [
    "decentralized GPU cloud",
    "decentralized cloud computing",
    "GPU as a service",
    "rent GPUs",
    "on-demand GPU",
    "AI training",
    "machine learning",
    "deep learning",
    "rendering platform",
    "HPC",
    "blockchain nodes",
    "remote gaming",
    "Docker",
    "containers",
    "NVIDIA",
    "RTX 4090",
    "H100",
    "A100",
    "DePIN",
    "Web3",
    "crypto project",
    "blockchain",
    "OctaSpace",
    "OCTA token",
  ],
  authors: [
    {
      name: "OctaSpace",
      url: "https://octa.space/",
    },
  ],
  creator: "OctaSpace",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@octa_space",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OctaSpace",
    url: "https://octa.space/",
    logo: "https://octa.space/og.jpg",
    sameAs: [
      siteConfig.links.x,
      siteConfig.links.telegram,
      siteConfig.links.discord,
      siteConfig.links.github,
      siteConfig.links.reddit,
      siteConfig.links.blog,
      siteConfig.links.youtube,
      siteConfig.links.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@octa.space",
      contactType: "customer support",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OctaSpace",
    url: "https://octa.space/",
  };

  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CQJXWVFMH5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQJXWVFMH5');
          `}
        </Script>

        <script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <div className="flex min-h-screen flex-col" style={octaBrand}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
