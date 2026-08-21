import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Brain,
  Zap,
  Calendar,
  Mail,
  Cpu,
  Lock,
  Shield,
  ArrowUpRight,
  Wrench,
  CircleDashed,
  FlaskConical,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/hadi/")({
  head: () => ({
    meta: [
      { title: "HADI — Personal AI Assistant | Yaqzan Technologies" },
      {
        name: "description",
        content:
          "HADI is a personal AI assistant with long-term memory and task automation. It works and runs locally today, not yet deployed publicly. The broader 'AI OS' is the long-term vision.",
      },
      { property: "og:title", content: "HADI — Personal AI Assistant" },
      {
        property: "og:description",
        content:
          "A personal AI assistant with long-term memory and task automation — working locally, not yet deployed.",
      },
      { property: "og:url", content: "https://yaqzantechnologies.online/products/hadi" },
    ],
    links: [{ rel: "canonical", href: "https://yaqzantechnologies.online/products/hadi" }],
  }),
  component: HadiPage,
});

// Extremely clear status split. HADI works and runs locally today — it just isn't
// deployed publicly yet — so the core is "Working" while the wider vision is Planned.
type Status = "Working" | "In development" | "Planned";
const STATUS_STYLE: Record<Status, string> = {
  Working: "bg-primary/15 text-primary border-primary/30",
  "In development": "bg-primary/10 text-primary/90 border-primary/25",
  Planned: "bg-white/5 text-muted-foreground border-white/10",
};

const features: { icon: typeof Brain; title: string; desc: string; status: Status }[] = [
  {
    icon: Brain,
    title: "Long-term memory",
    status: "Working",
    desc: "Remembers context and preferences across sessions — working today in the local build.",
  },
  {
    icon: Zap,
    title: "Task automation",
    status: "Working",
    desc: "Turns a request into a short chain of steps HADI carries out for you — working locally.",
  },
  {
    icon: Calendar,
    title: "Calendar & reminders",
    status: "Planned",
    desc: "Scheduling, reminders and simple daily routines — designed, not yet built.",
  },
  {
    icon: Mail,
    title: "Email & inbox triage",
    status: "Planned",
    desc: "Summarising and routing your inbox into actions. Planned for a later phase.",
  },
  {
    icon: Cpu,
    title: "System monitoring",
    status: "Planned",
    desc: "Keeping an eye on your devices and storage with proactive alerts. Long-term vision.",
  },
  {
    icon: Lock,
    title: "Digital security",
    status: "Planned",
    desc: "Breach monitoring and account-hygiene tips. Planned once the core is solid.",
  },
];

const roadmap = [
  {
    phase: "Done",
    title: "Assistant core",
    text: "Memory store and the conversational assistant loop — built and running locally.",
  },
  {
    phase: "Now",
    title: "Deployment",
    text: "Hardening and packaging HADI so it can run somewhere other than a dev machine.",
  },
  {
    phase: "Next",
    title: "Private early access",
    text: "A small, invite-only test once it's deployed and stable enough to share.",
  },
  {
    phase: "Vision",
    title: "Toward an AI OS",
    text: "Calendar, email, monitoring and security — added only when each earns its place.",
  },
];

const faqs = [
  {
    q: "Can I use HADI today?",
    a: "It works and runs locally today, but it isn't deployed anywhere public yet — so there's nothing to sign into. Join the waitlist and we'll invite you once it's deployed, or ask us for a demo.",
  },
  {
    q: "Isn't 'AI Operating System' a big claim?",
    a: "It's the long-term vision, not what exists today. HADI works now as a focused assistant — memory and task automation — and we'll only add the rest when each part earns its place.",
  },
  {
    q: "How is my data handled?",
    a: "Privacy is a first-class goal, the same as Namma Kaval. As the design firms up we'll publish exactly what's processed where in HADI's privacy policy.",
  },
];

function HadiPage() {
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

          {/* Hero — narrowed, honest definition */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Working · Not yet deployed
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              HADI <span className="text-gradient">— a personal AI assistant</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl">
              HADI is a personal AI assistant with{" "}
              <strong className="text-foreground">long-term memory</strong> and{" "}
              <strong className="text-foreground">task automation</strong> — one that remembers your
              context and can actually do multi-step things for you. It{" "}
              <strong className="text-foreground">works and runs locally today</strong>; we just
              haven't deployed it publicly yet. The broader idea of an "AI operating system" for
              your whole digital life is the long-term vision — we're shipping the useful core first
              and being honest about what exists.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--glow-primary)] transition-all"
              >
                Join the waitlist <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/products/hadi/privacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                <Shield className="h-4 w-4" /> Privacy Policy
              </Link>
            </div>
          </Reveal>

          {/* What it is / isn't yet */}
          <Reveal className="mt-20 glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Layers className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">What HADI is today</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">A focused assistant that works.</strong> The
                core — memory plus small, reliable task chains — runs locally today.
              </p>
              <p>
                <strong className="text-foreground">Not deployed yet.</strong> It lives on a dev
                machine for now; making it easy to run anywhere is the current step.
              </p>
              <p>
                <strong className="text-foreground">Privacy-minded from the start.</strong> The same
                principle behind Namma Kaval guides HADI's design.
              </p>
              <p>
                <strong className="text-foreground">Honest about stage.</strong> Everything below is
                labelled Working, In development, or Planned — no inflated claims.
              </p>
            </div>
          </Reveal>

          {/* Architecture concept */}
          <Reveal className="mt-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <FlaskConical className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">Architecture concept</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Brain,
                  t: "Memory layer",
                  d: "A persistent store of what HADI knows about you, retrieved as context for each request.",
                },
                {
                  icon: Zap,
                  t: "Action loop",
                  d: "A plan-then-do loop that breaks a request into steps and executes the safe, useful ones.",
                },
                {
                  icon: Shield,
                  t: "Privacy boundary",
                  d: "Clear lines around what's processed locally vs. remotely — to be documented before any release.",
                },
              ].map((x) => (
                <div key={x.t} className="glass-card rounded-2xl p-6">
                  <div className="h-11 w-11 rounded-xl glass flex items-center justify-center mb-4">
                    <x.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-semibold">{x.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Feature status */}
          <Reveal className="mt-20">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-primary">
                <Wrench className="h-5 w-5" />
                <span className="text-xs tracking-[0.3em] uppercase">Working now vs planned</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <FlaskConical className="h-3 w-3 text-primary" /> Working
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Wrench className="h-3 w-3 text-primary" /> In development
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CircleDashed className="h-3 w-3" /> Planned
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

          {/* Preview placeholder */}
          <Reveal className="mt-20">
            <div className="glass-card rounded-3xl p-8 md:p-10 text-center">
              <FlaskConical className="h-8 w-8 text-muted-foreground/50 mx-auto" />
              <p className="mt-3 text-sm text-muted-foreground">
                HADI runs locally today, but there's no public build or screenshots to share yet.
                Want to see it work? Ask us for a demo, or join the waitlist for access once it's
                deployed.
              </p>
            </div>
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

          {/* Waitlist */}
          <Reveal className="mt-20">
            <div
              id="waitlist"
              className="relative glass-card rounded-3xl p-8 md:p-12 text-center overflow-hidden scroll-mt-28"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  Join the HADI waitlist
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  It's early. Leave your email and we'll reach out when there's a private test worth
                  your time.
                </p>
                <a
                  href="mailto:hello@yaqzantechnologies.online?subject=HADI%20waitlist&body=Hi%2C%20I'd%20like%20to%20join%20the%20HADI%20waitlist."
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.02] transition-all"
                >
                  Join the waitlist <ArrowUpRight className="h-4 w-4" />
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
