import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy - OctaSpace",
  description:
    "Learn how OctaSpace collects, uses, and safeguards user information.",
  alternates: {
    canonical: new URL("/privacy", siteConfig.url).toString(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: new URL("/privacy", siteConfig.url).toString(),
    title: "Privacy Policy - OctaSpace",
    description:
      "Learn how OctaSpace collects, uses, and safeguards user information.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-container mx-auto flex-1 px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6 text-sm">
        Last updated: 08/09/2025
      </p>

      <p className="mb-6">
        OctaSpace (“we”, “our”, “us”) respects your privacy and is committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard information when you use our platform,
        available at{" "}
        <a href="https://octa.space" className="text-blue-500 underline">
          https://octa.space
        </a>
        .
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        1. Information We Collect
      </h2>
      <p className="mb-6">
        We only collect the personal information necessary to operate our
        platform and communicate with our users:
      </p>
      <ul className="mb-6 list-inside list-disc space-y-2">
        <li>
          <strong>Email Address:</strong> Collected at registration to create an
          account, manage access, and send important notifications.
        </li>
        <li>
          We do not collect names, payment details, blockchain private keys, IP
          addresses, or any other personal data.
        </li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        2. How We Use Your Information
      </h2>
      <ul className="mb-6 list-inside list-disc space-y-2">
        <li>
          <strong>Account management:</strong> Sending login confirmations,
          password resets, and security notifications.
        </li>
        <li>
          <strong>Service updates:</strong> Informing users about new features,
          improvements, or changes to the platform.
        </li>
        <li>
          <strong>Project communications:</strong> Occasional updates regarding
          development progress, events, or testnets relevant to registered
          users.
        </li>
      </ul>
      <p className="mb-6">
        All emails include a clear option to unsubscribe or manage your
        preferences.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        3. Sharing and Disclosure of Information
      </h2>
      <p className="mb-6">
        We do not sell, trade, or rent your email address to third parties.
        Information may be shared only if required by law, for legal processes,
        or to protect the rights, safety, and security of OctaSpace or its
        users.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Data Retention</h2>
      <p className="mb-6">
        We retain your email address only for as long as necessary to provide
        you with our services or to comply with legal obligations. If you
        request deletion of your email address, it will be removed promptly from
        our systems.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        5. Security of Information
      </h2>
      <p className="mb-6">
        We implement reasonable technical and organizational measures to protect
        your email address from unauthorized access, disclosure, alteration, or
        destruction. However, no system is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        6. Cookies and Tracking
      </h2>
      <p className="mb-6">
        OctaSpace does not track personal information via cookies or analytics
        tied to individual users’ email addresses. Any non-identifying cookies
        or analytics used on our website are for platform performance
        improvements only.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Your Rights</h2>
      <p className="mb-6">
        As a registered user, you have the following rights regarding your email
        address:
      </p>
      <ul className="mb-6 list-inside list-disc space-y-2">
        <li>
          <strong>Unsubscribe:</strong> You may opt out of receiving emails at
          any time using the unsubscribe link in our communications.
        </li>
        <li>
          <strong>Access and Deletion:</strong> You can request access to or
          deletion of your email address by contacting us at{" "}
          <a href="mailto:hello@octa.space" className="text-blue-500 underline">
            hello@octa.space
          </a>
          .
        </li>
      </ul>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        8. Third-Party Services
      </h2>
      <p className="mb-6">
        OctaSpace may use third-party services to send transactional or update
        emails. These services are obligated to protect your information and may
        only use it to provide the requested service.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        9. Children’s Privacy
      </h2>
      <p className="mb-6">
        OctaSpace does not knowingly collect information from children under the
        age of 13 (or the applicable minimum age in your jurisdiction). If we
        learn that we have inadvertently collected such information, we will
        delete it promptly.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        10. Changes to this Privacy Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Updates will be
        reflected on this page with a revised “Last updated” date. We encourage
        you to review this policy periodically.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">11. Contact Us</h2>
      <p className="mb-2">OctaSpace</p>
      <p className="mb-2">
        Unit 158260, PO Box 7169, Poole, BH15 9EL, United Kingdom
      </p>
      <p>
        Email:{" "}
        <a href="mailto:hello@octa.space" className="text-blue-500 underline">
          hello@octa.space
        </a>
      </p>
    </main>
  );
}
