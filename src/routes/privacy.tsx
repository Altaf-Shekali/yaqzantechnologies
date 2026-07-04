import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Yaqzan Technologies" },
      {
        name: "description",
        content:
          "Yaqzan Technologies privacy policy — how we handle data across our website and products.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyLayout
      product="Yaqzan Technologies"
      title="Website Privacy Policy"
      updated="July 4, 2026"
      backTo="/"
    >
      <p>
        This policy covers <strong>this website</strong> (yaqzantechnologies.online). Our apps
        handle data differently — see the <Link to="/products/kaval/privacy">KAVAL</Link> and{" "}
        <Link to="/products/hadi/privacy">HADI</Link> policies for those. We keep this site
        deliberately light: <strong>no analytics, no tracking cookies, and no accounts.</strong>
      </p>

      <h2>1. What this website collects</h2>
      <ul>
        <li>
          <strong>Nothing automatically.</strong> We don't run Google Analytics or any other
          analytics or advertising tracker, and we don't set tracking cookies. We don't build
          profiles of visitors.
        </li>
        <li>
          <strong>Only what you email us.</strong> Our contact form doesn't send data to a server we
          control — it opens your own email app with the message pre-filled, and you send it. We
          then hold whatever you chose to email (your name, email address and message) in our inbox.
        </li>
      </ul>

      <h2>2. Third parties that can see your request</h2>
      <p>
        Loading this site involves a few external services. Each may receive your IP address and
        basic request info, as any website visit does:
      </p>
      <ul>
        <li>
          <strong>Hosting (Cloudflare):</strong> serves the site and may process request data for
          delivery and security.
        </li>
        <li>
          <strong>Google Fonts:</strong> the site loads fonts from Google, which may log the
          request. (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            policy
          </a>
          )
        </li>
      </ul>
      <p>
        We do not sell or rent any personal information, and we don't share your messages with
        anyone except where required by law.
      </p>

      <h2>3. How we use what you send</h2>
      <ul>
        <li>To reply to your message or request.</li>
        <li>To keep a record of our correspondence with you.</li>
      </ul>
      <p>
        We keep contact emails only as long as needed for that conversation and reasonable
        follow-up, then delete them.
      </p>

      <h2>4. Our products</h2>
      <p>Each product documents its own data handling:</p>
      <ul>
        <li>
          <Link to="/products/kaval/privacy">KAVAL Privacy Policy</Link> — on-device digital-safety
          app (no accounts, no data sold).
        </li>
        <li>
          <Link to="/products/hadi/privacy">HADI Privacy Policy</Link> — personal AI assistant (in
          development).
        </li>
      </ul>

      <h2>5. Your rights</h2>
      <p>
        You can ask us what we hold about you, correct it, or have it deleted — just email us.
        Because we don't run analytics or accounts, in most cases the only thing we hold is an email
        you sent us.
      </p>

      <h2>6. Changes</h2>
      <p>
        If we add anything that changes this — for example a privacy-friendly analytics tool or a
        hosted contact form — we'll update this page and the date above <em>before</em> that change
        goes live.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:hello@yaqzantechnologies.online">hello@yaqzantechnologies.online</a>.
        Security issues?{" "}
        <a href="mailto:security@yaqzantechnologies.online">security@yaqzantechnologies.online</a>.
      </p>
    </PolicyLayout>
  );
}
