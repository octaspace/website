import "@/app/globals.css";

import type { Metadata } from "next";
import Head from "next/head";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: [
    // Core Value Proposition Keywords
    "decentralized GPU cloud",
    "decentralized cloud computing",
    "GPU as a service",
    "rent GPUs",
    "on-demand GPU",

    // Use Case & Application-Specific Keywords
    "AI training",
    "machine learning",
    "deep learning",
    "rendering platform",
    "HPC",
    "blockchain nodes",
    "remote gaming",

    // Technology Stack Keywords
    "Docker",
    "containers",
    "NVIDIA",
    "RTX 4090",
    "H100",
    "A100",

    // Web3 & Crypto-specific Keywords
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
    url: siteConfig.getStartedUrl,
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
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <Head>
        <link rel="canonical" href={siteConfig.getStartedUrl} />
      </Head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
