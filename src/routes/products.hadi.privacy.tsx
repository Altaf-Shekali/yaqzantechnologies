import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/products/hadi/privacy")({
  head: () => ({
    meta: [
      { title: "HADI Privacy Policy | Yaqzan Technologies" },
      { name: "description", content: "Privacy policy for HADI — Yaqzan's AI Operating System. Learn how HADI handles your data, memory, and integrations." },
    ],
  }),
  component: HadiPrivacy,
});

function HadiPrivacy() {
  return (
    <PolicyLayout product="HADI" title="Privacy Policy" updated="June 30, 2026" backTo="/products/hadi">
      <p>
        This Privacy Policy describes how Yaqzan Technologies ("we", "us") collects, uses, and protects information in connection with <strong>HADI</strong>, our AI Operating System for productivity, automation, and digital life management.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Account information</strong> — name, email, and authentication identifiers used to create and secure your account.</li>
        <li><strong>Conversation & memory data</strong> — messages you send to HADI and items you choose to save into long-term memory.</li>
        <li><strong>Connected services</strong> — data from third-party integrations (email, calendar, files, devices) that you explicitly authorize.</li>
        <li><strong>Device & system signals</strong> — diagnostics from devices you enroll for monitoring (CPU, storage, process health).</li>
        <li><strong>Usage data</strong> — feature interactions, performance metrics, and crash reports used to improve the product.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To operate HADI's conversational and autonomous capabilities.</li>
        <li>To maintain long-term memory and personalize responses you've opted into.</li>
        <li>To execute workflows and automations you authorize on connected services.</li>
        <li>To protect your account, detect abuse, and improve reliability.</li>
      </ul>

      <h2>3. AI Processing & Long-Term Memory</h2>
      <p>
        HADI uses large language models to process your prompts. Memory items are stored only when you save them or when you enable automatic memory. You can view, edit, and delete memory entries at any time from HADI's memory settings. We do not use your private conversations or memory to train foundation models.
      </p>

      <h2>4. Sharing</h2>
      <p>
        We do not sell your personal information. We share data only with: (a) infrastructure subprocessors that host and run HADI, (b) third-party services you explicitly connect, and (c) authorities when required by law.
      </p>

      <h2>5. Security</h2>
      <p>
        Data is encrypted in transit and at rest. Access to production systems is restricted and logged. Despite reasonable safeguards, no system is perfectly secure — please use strong, unique credentials and enable multi-factor authentication.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, export, or delete your account data.</li>
        <li>Clear or reset HADI's long-term memory.</li>
        <li>Disconnect any third-party integration at any time.</li>
        <li>Withdraw consent for optional processing.</li>
      </ul>

      <h2>7. Retention</h2>
      <p>
        We keep account and memory data for as long as your account is active. When you delete your account, we remove or anonymize personal data within a reasonable period, except where retention is required by law.
      </p>

      <h2>8. Children</h2>
      <p>HADI is not directed to children under 13 and we do not knowingly collect data from them.</p>

      <h2>9. Changes</h2>
      <p>We may update this policy. Material changes will be communicated in-app or by email.</p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy? Contact us at <a href="mailto:privacy@yaqzantechnologies.online">privacy@yaqzantechnologies.online</a>.
      </p>
    </PolicyLayout>
  );
}
