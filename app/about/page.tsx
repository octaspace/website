import React from "react";
import Navbar from "../../components/sections/navbar/sticky";
import Footer from "../../components/sections/footer/5-columns";
import OctaLogo from "../../components/logos/octa";

export const metadata = {
  title: "Privacy Policy - OctaSpace",
  description: "Learn how OctaSpace collects, uses, and safeguards user information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={
        {
          "--brand-foreground": "var(--brand-octa-foreground)",
          "--brand": "var(--brand-octa)",
          "--primary": "light-dark(var(--brand-octa), oklch(0.985 0 0))",
          "--background": "var(--background-octa)",
          "--muted": "var(--background-titanium)",
          "--radius": "var(--radius-default)",
        } as React.CSSProperties
      }
    >
      {/* Navbar */}
      <Navbar
        logo={<OctaLogo className="h-8 w-auto" />}
        name="OctaSpace"
        actions={[
          {
            text: "Get Started",
            href: "https://marketplace.octa.space/",
            isButton: true,
            variant: "outline",
          },
        ]}
      />

      {/* Page Content */}
      <main className="max-w-container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: 08/09/2025</p>

        <p className="mb-6">
          OctaSpace (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you use our platform, available at{" "}
          <a href="https://octa.space" className="text-blue-500 underline">
            https://octa.space
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We only collect the personal information necessary to operate our platform and communicate with our users:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Email Address:</strong> Collected at registration to create an account, manage access, and send important notifications.
          </li>
          <li>We do not collect names, payment details, blockchain private keys, IP addresses, or any other personal data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Account management:</strong> Sending login confirmations, password resets, and security notifications.</li>
          <li><strong>Service updates:</strong> Informing users about new features, improvements, or changes to the platform.</li>
          <li><strong>Project communications:</strong> Occasional updates regarding development progress, events, or testnets relevant to registered users.</li>
        </ul>
        <p className="mb-6">All emails include a clear option to unsubscribe or manage your preferences.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing and Disclosure of Information</h2>
        <p className="mb-6">
          We do not sell, trade, or rent your email address to third parties. Information may be shared only if required by law, for legal processes, or to protect the rights, safety, and security of OctaSpace or its users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
        <p className="mb-6">
          We retain your email address only for as long as necessary to provide you with our services or to comply with legal obligations. If you request deletion of your email address, it will be removed promptly from our systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security of Information</h2>
        <p className="mb-6">
          We implement reasonable technical and organizational measures to protect your email address from unauthorized access, disclosure, alteration, or destruction. However, no system is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies and Tracking</h2>
        <p className="mb-6">
          OctaSpace does not track personal information via cookies or analytics tied to individual users’ email addresses. Any non-identifying cookies or analytics used on our website are for platform performance improvements only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
        <p className="mb-6">
          As a registered user, you have the following rights regarding your email address:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Unsubscribe:</strong> You may opt out of receiving emails at any time using the unsubscribe link in our communications.</li>
          <li><strong>Access and Deletion:</strong> You can request access to or deletion of your email address by contacting us at <a href="mailto:hello@octa.space" className="text-blue-500 underline">hello@octa.space</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Services</h2>
        <p className="mb-6">
          OctaSpace may use third-party services to send transactional or update emails. These services are obligated to protect your information and may only use it to provide the requested service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children’s Privacy</h2>
        <p className="mb-6">
          OctaSpace does not knowingly collect information from children under the age of 13 (or the applicable minimum age in your jurisdiction). If we learn that we have inadvertently collected such information, we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to this Privacy Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Updates will be reflected on this page with a revised “Last updated” date. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
        <p className="mb-2">OctaSpace</p>
        <p className="mb-2">PO BOX Poole BH15 XXX, United Kingdom</p>
        <p>Email: <a href="mailto:hello@octa.space" className="text-blue-500 underline">hello@octa.space</a></p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
