import "@/app/globals.css";

import type { Metadata } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

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
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

        {/* JSON-LD Schema Markup */}
        <Script id="json-ld-organization" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OctaSpace",
            "url": "https://octa.space/",
            "logo": "https://octa.space/og.jpg",
            "sameAs": [
              "https://x.com/octa_space",
              "https://github.com/octaspace"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "hello@octa.space",
              "contactType": "customer support"
            }
          }
          `}
        </Script>

        <Script id="json-ld-website" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "OctaSpace",
            "url": "https://octa.space/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://octa.space/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </Script>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
