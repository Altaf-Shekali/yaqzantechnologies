import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Yaqzan Technologies" },
      { name: "description", content: "Yaqzan Technologies privacy policy — how we handle data across our website and products." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyLayout product="Yaqzan Technologies" title="Privacy Policy" updated="June 30, 2026" backTo="/">
      <p>
        This Privacy Policy describes how Yaqzan Technologies ("we", "us", "our") collects, uses, and protects
        information when you visit our website or interact with our services. This is a general policy — product-specific
        practices are described in each product's own privacy policy.
      </p>

      <p className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
        <strong className="text-foreground">Note:</strong> This document is a placeholder and will be updated with our
        finalized legal terms. Last meaningful update: June 30, 2026.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Contact information</strong> you provide via forms (name, email, message).</li>
        <li><strong>Usage data</strong> such as pages visited, referrers, and basic analytics.</li>
        <li><strong>Cookies</strong> used to keep the site functional and measure performance.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and provide requested information.</li>
        <li>To operate, maintain, and improve our website.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Product Privacy</h2>
      <p>
        Each Yaqzan product has its own dedicated privacy policy that describes data handling specific to that product:
      </p>
      <ul>
        <li><Link to="/products/hadi/privacy">HADI Privacy Policy</Link> — AI Assistant</li>
        <li><Link to="/products/kaval/privacy">KAVAL Privacy Policy</Link> — Digital Safety App</li>
      </ul>

      <h2>4. Sharing</h2>
      <p>We do not sell personal information. We share data only with infrastructure providers that run our services or when required by law.</p>

      <h2>5. Security</h2>
      <p>Data is encrypted in transit. We restrict access to production systems and follow industry-standard safeguards.</p>

      <h2>6. Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information at any time.</p>

      <h2>7. Changes</h2>
      <p>We may update this policy. Material changes will be communicated on this page.</p>

      <h2>8. Contact</h2>
      <p>
        Questions about this policy? Contact us at <a href="mailto:privacy@yaqzantechnologies.online">privacy@yaqzantechnologies.online</a>.
      </p>
    </PolicyLayout>
  );
}
