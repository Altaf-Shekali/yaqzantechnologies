import {
  Rocket,
  Cpu,
  ShieldCheck,
  Languages,
  HeartHandshake,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

// Honest, concrete "how we build" points — no agency filler.
const reasons = [
  {
    icon: Rocket,
    title: "Prototype fast, learn faster",
    text: "We ship small prototypes early and put them in front of real people, instead of polishing in private for months.",
  },
  {
    icon: Cpu,
    title: "On-device by design",
    text: "App scans, link checks and breach lookups are built to run on your phone — your data doesn't need our servers to work.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy in the architecture",
    text: "No accounts you don't need, no data sold, no hidden trackers. Privacy is a design constraint, not a marketing line.",
  },
  {
    icon: Languages,
    title: "Kannada-first, not translated-last",
    text: "We design in Kannada from the start so the product feels native to Karnataka. English is always one tap away.",
  },
  {
    icon: HeartHandshake,
    title: "Built for local threats",
    text: "We focus on the frauds actually hitting India — OTP, UPI, KYC, 'digital arrest' and fake-loan-app scams.",
  },
  {
    icon: Zap,
    title: "Talk to the makers",
    text: "We're a small team. Bugs, feedback and ideas reach the people writing the code directly.",
  },
];

// Current, honest status of each product. Update the status label as things ship.
const status = [
  {
    name: "The Inference",
    stage: "Live",
    to: "/products/inference",
    points: [
      "Autonomous video studio running end-to-end today",
      "Publishing to multiple YouTube channels on a schedule",
      "English, Hindi & Kannada content",
    ],
  },
  {
    name: "Namma Kaval",
    stage: "Working · Pre-launch",
    to: "/products/kaval",
    points: [
      "Working build: app scan, link/Wi-Fi checks, breach & password tools",
      "Scam Academy (Kannada + English) built out",
      "Polishing toward a Google Play beta in 2026",
    ],
  },
  {
    name: "HADI",
    stage: "Working · Unreleased",
    to: "/products/hadi",
    points: [
      "Memory + task-automation core works and runs locally",
      "Not deployed publicly yet — that's the current step",
      "Waitlist / demo available on request",
    ],
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">HOW WE BUILD</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A small team that ships in the <span className="text-gradient">open</span>
          </h2>
        </Reveal>

        {/* Honest development status — replaces the old animated stat counters */}
        <Reveal className="mb-16">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Where we are right now
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {status.map((s) => (
                <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="font-display text-2xl font-bold">{s.name}</div>
                    <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">
                      {s.stage}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.to}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    See details & roadmap
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              We'll add screenshots, a demo video and beta numbers here as they become real — not
              before.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <RevealItem
              key={r.title}
              className="group glass-card rounded-2xl p-6 flex gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[var(--glow-primary)] transition-shadow">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.text}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
