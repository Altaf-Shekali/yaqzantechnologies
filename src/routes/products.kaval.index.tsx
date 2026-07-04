import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ScanSearch,
  Wifi,
  KeyRound,
  GraduationCap,
  Languages,
  Shield,
  ArrowUpRight,
  Smartphone,
  AlertTriangle,
  Users,
  Wrench,
  CircleDashed,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import kaval1 from "@/assets/kaval-1.jpeg";
import kaval2 from "@/assets/kaval-2.jpeg";
import kaval3 from "@/assets/kaval-3.jpeg";
import kaval4 from "@/assets/kaval-4.jpeg";
import kaval5 from "@/assets/kaval-5.jpeg";
import kaval6 from "@/assets/kaval-6.jpeg";
import kaval7 from "@/assets/kaval-7.jpeg";
import kaval8 from "@/assets/kaval-8.jpeg";

const screenshots = [
  { src: kaval4, label: "Home — Kannada" },
  { src: kaval8, label: "Home — English" },
  { src: kaval6, label: "Phone security scan" },
  { src: kaval2, label: "Scam Academy" },
  { src: kaval5, label: "Email breach check" },
  { src: kaval7, label: "Password tools" },
  { src: kaval3, label: "Link safety" },
  { src: kaval1, label: "Wi-Fi safety — Kannada" },
];

export const Route = createFileRoute("/products/kaval/")({
  head: () => ({
    meta: [
      { title: "KAVAL — Kannada-first Digital Safety | Yaqzan Technologies" },
      {
        name: "description",
        content:
          "KAVAL is a free, Kannada-first digital-safety app: scan apps, check links & leaks, and learn to spot India-specific scams — all on your device.",
      },
      { property: "og:title", content: "KAVAL — Kannada-first Digital Safety" },
      {
        property: "og:description",
        content:
          "Scan apps, check links & data leaks, and learn to spot scams — in Kannada & English, processed on your device.",
      },
      { property: "og:url", content: "https://yaqzantechnologies.online/products/kaval" },
    ],
    links: [{ rel: "canonical", href: "https://yaqzantechnologies.online/products/kaval" }],
  }),
  component: KavalPage,
});

// These features are all working in the current build (see screenshots above); the app just
// isn't on the Play Store yet. "Working" = functioning today; "Planned" = designed, not built.
type Status = "Working" | "Planned";
const STATUS_STYLE: Record<Status, string> = {
  Working: "bg-primary/15 text-primary border-primary/30",
  Planned: "bg-white/5 text-muted-foreground border-white/10",
};

const features: { icon: typeof ScanSearch; title: string; desc: string; status: Status }[] = [
  {
    icon: ScanSearch,
    title: "Phone security scan",
    status: "Working",
    desc: "Reviews installed apps for risky permissions, sideloaded installs, and untrusted signatures — flagging what deserves a second look.",
  },
  {
    icon: Wifi,
    title: "Link & Wi-Fi safety",
    status: "Working",
    desc: "Check suspicious links before you tap, and see whether the Wi-Fi you're on is protected — checked locally.",
  },
  {
    icon: KeyRound,
    title: "Breach & password tools",
    status: "Working",
    desc: "Find out if your email appears in known breaches, check passwords against leaks (never sent in full), and generate strong ones.",
  },
  {
    icon: GraduationCap,
    title: "Scam Academy",
    status: "Working",
    desc: "Short, gamified lessons and a daily quiz on OTP, UPI, KYC, 'digital arrest', and fake-loan scams hitting India.",
  },
  {
    icon: Languages,
    title: "Kannada & English",
    status: "Working",
    desc: "Fully bilingual — built Kannada-first for Karnataka, with English available at a tap.",
  },
  {
    icon: Shield,
    title: "Private by design",
    status: "Working",
    desc: "No accounts, no ads, nothing sold. Your app list and checks are processed on your device, not on our servers.",
  },
];

const roadmap = [
  {
    phase: "Done",
    title: "Core safety build",
    text: "App-permission scan, link/Wi-Fi checks, breach & password tools — built and working.",
  },
  {
    phase: "Now",
    title: "Content & polish",
    text: "Rounding out the Kannada + English Scam Academy and hardening the app on real phones.",
  },
  {
    phase: "2026",
    title: "Closed beta",
    text: "First testers try KAVAL on their own phones; we fix what breaks before a public release.",
  },
  {
    phase: "Later",
    title: "Google Play launch",
    text: "Public release on the Play Store, free, with no ads in the first version.",
  },
];

const faqs = [
  {
    q: "Is KAVAL available to download yet?",
    a: "Not on the Play Store yet. The app is built and working (see the screenshots above) — we're polishing it toward a Google Play beta in 2026. Join early access below and we'll tell you the moment it's testable.",
  },
  {
    q: "Is it really free?",
    a: "Yes — the first version is free with no ads. If that ever changes, we'll say so clearly before it does.",
  },
  {
    q: "Does KAVAL send my data anywhere?",
    a: "The app is built to run on your device. The only time anything leaves your phone is when you actively use the breach check (your email) or password-leak check (only a partial hash, never the full password). Full details are in the privacy policy.",
  },
  {
    q: "What languages does it support?",
    a: "Kannada and English, designed Kannada-first for users in Karnataka. More Indian languages may come later.",
  },
  {
    q: "Which scams does the Scam Academy cover?",
    a: "The frauds actually targeting India — OTP theft, UPI request scams, fake KYC updates, 'digital arrest' calls, and fake loan apps.",
  },
];

function KavalPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          {/* Hero */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">
                Working build · Launching 2026
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              KAVAL <span className="text-gradient">— Digital safety in your language</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl">
              KAVAL is a free, Kannada-first digital-safety app that helps everyday people in
              Karnataka and across India stay safe from online scams and privacy risks. Scan your
              phone for risky apps, check links and data leaks, and learn to recognise the scams
              actually targeting India — OTP, UPI, KYC, "digital arrest", and fake loan apps.
              Everything runs on your device, with no accounts and nothing sold.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--glow-primary)] transition-all"
              >
                Get early access <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/products/kaval/privacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                <Shield className="h-4 w-4" /> Privacy Policy
              </Link>
            </div>
          </Reveal>

          {/* The problem */}
          <Reveal className="mt-20 glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-primary mb-4">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">The problem</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Scams in India are local. Most safety apps aren't.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
              OTP theft, UPI "collect" requests, fake KYC updates, "digital arrest" calls and
              instant-loan traps are engineered for how people here actually use their phones — and
              they're often delivered in the victim's own language. Meanwhile, most security tools
              are in English, assume technical knowledge, and are built for a Western threat model.
              KAVAL is the opposite: Kannada-first, plain-language, focused on the frauds hitting
              Indian users right now, and private by default.
            </p>
          </Reveal>

          {/* Who it's for */}
          <Reveal className="mt-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Users className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">Who it's for</span>
            </div>
            <RevealGroup className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  t: "First-time smartphone users",
                  d: "Parents, elders and newer internet users who are targeted most and served least.",
                },
                {
                  t: "Kannada speakers",
                  d: "People who understand a warning far better in their own language than in English.",
                },
                {
                  t: "Anyone scam-aware",
                  d: "Users who want a quick, private way to check a link, an app, or whether their data has leaked.",
                },
              ].map((x) => (
                <RevealItem key={x.t} className="glass-card rounded-2xl p-6">
                  <div className="font-semibold">{x.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          {/* Screenshots — from the current build */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Smartphone className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">A look at the app</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Real screens from the current build — Kannada-first, fully bilingual, running
              on-device.
            </p>
            <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {screenshots.map((s) => (
                <RevealItem
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <img
                    src={s.src}
                    alt={`KAVAL — ${s.label}`}
                    loading="lazy"
                    className="w-full aspect-[9/19.5] object-cover object-top"
                  />
                  <div className="px-3 py-2 text-[11px] text-muted-foreground text-center border-t border-white/10">
                    {s.label}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          {/* Feature status matrix */}
          <Reveal className="mt-20">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-primary">
                <Wrench className="h-5 w-5" />
                <span className="text-xs tracking-[0.3em] uppercase">Features & status</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Wrench className="h-3 w-3 text-primary" /> Working — functioning in the current
                  build
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CircleDashed className="h-3 w-3" /> Planned — designed, not started
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl glass flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span
                      className={`text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${STATUS_STYLE[f.status]}`}
                    >
                      {f.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* How privacy works */}
          <Reveal className="mt-20 glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Shield className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">How your privacy works</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">No accounts, no backend.</strong> KAVAL has no
                login and no server storing your data. Your app list, scores and settings live only
                on your phone.
              </p>
              <p>
                <strong className="text-foreground">On-device checks.</strong> App scans, link
                checks and Wi-Fi checks run locally — they don't upload anything.
              </p>
              <p>
                <strong className="text-foreground">Minimal, opt-in lookups.</strong> Only the
                breach check (your email) and password-leak check (a partial hash, never the full
                password) contact an outside service, and only when you ask.
              </p>
              <p>
                <strong className="text-foreground">No ads, nothing sold.</strong> The first version
                has no advertising SDK and sells no data.
              </p>
            </div>
            <Link
              to="/products/kaval/privacy"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Read the full privacy policy <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Roadmap */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2 text-primary mb-6">
              <CircleDashed className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">Roadmap</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmap.map((r) => (
                <div key={r.title} className="glass-card rounded-2xl p-6">
                  <div className="text-xs font-medium text-primary">{r.phase}</div>
                  <div className="mt-2 font-semibold">{r.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Frequently asked
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group glass-card rounded-2xl px-6 py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium list-none">
                    {f.q}
                    <ArrowUpRight className="h-4 w-4 text-primary shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* Early access */}
          <Reveal className="mt-20">
            <div
              id="early-access"
              className="relative glass-card rounded-3xl p-8 md:p-12 text-center overflow-hidden scroll-mt-28"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  Be first to try KAVAL
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  We'll email you when the beta is ready. No spam, no sharing your address — just
                  one message when it's testable.
                </p>
                <a
                  href="mailto:hello@yaqzantechnologies.online?subject=KAVAL%20early%20access&body=Hi%2C%20I'd%20like%20early%20access%20to%20KAVAL."
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.02] transition-all"
                >
                  Request early access <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
