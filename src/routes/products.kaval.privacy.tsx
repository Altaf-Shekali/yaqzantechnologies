import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/products/kaval/privacy")({
  head: () => ({
    meta: [
      { title: "Namma Kaval Privacy Policy | Yaqzan Technologies" },
      { name: "description", content: "Privacy policy for Namma Kaval — Yaqzan's free, on-device digital-safety app. No accounts, no data sold." },
    ],
  }),
  component: KavalPrivacy,
});

function KavalPrivacy() {
  return (
    <PolicyLayout product="Namma Kaval" title="Privacy Policy" updated="7 August 2026" backTo="/products/kaval">
      <p>
        Namma Kaval is a free digital-safety app by Yaqzan Technologies ("we", "us"). It has <strong>no user accounts, does not collect or sell your personal data, and runs almost entirely on your phone.</strong> This policy explains the little data involved and how the app behaves.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not collect, store, or transmit your personal data to our own servers. Namma Kaval has no backend and no accounts. A few non-personal items — your language, safety score, points, streak, and whether you've seen the intro — are stored <strong>only on your device</strong> and are removed when you uninstall.
      </p>

      <h2>2. On-device Processing (never leaves your phone)</h2>
      <ul>
        <li><strong>Phone Security Scan / App Permissions:</strong> reads installed apps, their permissions, install source, and signing certificate to assess risk — locally only, never uploaded.</li>
        <li><strong>Link Safety:</strong> pasted links are checked locally with built-in rules.</li>
        <li><strong>Wi-Fi Safety:</strong> connection type and VPN status are read locally.</li>
        <li><strong>Password Generator, Daily Tips, Quiz:</strong> fully offline.</li>
        <li><strong>Daily reminders:</strong> scheduled locally on your device.</li>
      </ul>

      <h2>3. Information Sent to Third-party Services</h2>
      <p>Only when you actively use these features:</p>
      <ul>
        <li><strong>Email Breach Check:</strong> the email you enter is sent to <strong>XposedOrNot</strong> to look up known breaches (<a href="https://xposedornot.com/privacy">their policy</a>).</li>
        <li><strong>Password Leak Check:</strong> your password is <strong>never sent</strong>. Only the first 5 characters of its SHA-1 hash go to <strong>Have I Been Pwned</strong> (k-anonymity), so the password cannot be reconstructed (<a href="https://haveibeenpwned.com/Privacy">their policy</a>).</li>
      </ul>

      <h2>4. Advertising</h2>
      <p>
        This version of Namma Kaval shows <strong>no ads</strong> and includes no advertising SDK. If a future update adds ads, this policy will be updated before that release to explain what is collected.
      </p>

      <h2>5. Permissions and Why</h2>
      <ul>
        <li><strong>Query all packages</strong> — to list installed apps for the security scan.</li>
        <li><strong>Internet / Network state</strong> — for the email-breach and password-leak checks.</li>
        <li><strong>Notifications</strong> — for the daily security reminder.</li>
        <li>We do <strong>not</strong> access your SMS, contacts, photos, microphone, camera, or location.</li>
      </ul>

      <h2>6. Children's Privacy</h2>
      <p>Namma Kaval is for a general audience and is not directed at children under 13.</p>

      <h2>7. Data Security &amp; Retention</h2>
      <p>
        Your data stays on your device; we run no servers, so there is no central database to breach. Local data is removed when you uninstall the app.
      </p>

      <h2>8. Your Choices</h2>
      <p>
        Turn off the daily reminder in <em>You → Daily reminder</em>; reset your Advertising ID in Google settings; uninstall to remove all local data.
      </p>

      <h2>9. Changes</h2>
      <p>We may update this policy; the "Last updated" date will change accordingly.</p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy? Contact us at <a href="mailto:hello@yaqzantechnologies.online">hello@yaqzantechnologies.online</a>.
      </p>
    </PolicyLayout>
  );
}
