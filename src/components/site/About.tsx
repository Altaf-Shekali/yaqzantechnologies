import { Brain, Code2, Cloud, Cog, Sparkles } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const pillars = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Code2, label: "Software Engineering" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: Cog, label: "Automation" },
  { icon: Sparkles, label: "Digital Innovation" },
];

const timeline = [
  {
    year: "2025",
    title: "Founded",
    text: "Yaqzan Technologies founded with a vision to build privacy-first, India-first intelligent software.",
  },
  {
    year: "2026",
    title: "First Products",
    text: "Launching KAVAL — Kannada-first digital safety — and HADI, our AI assistant with memory and automation.",
  },
  {
    year: "2027",
    title: "Next Horizon",
    text: "Scaling our AI OS and expanding into new consumer and developer products.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">ABOUT US</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A startup engineered for the <span className="text-gradient">intelligent era</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg">
            We're an early team building our own products — not an agency. Right now that's KAVAL, a
            Kannada-first digital-safety app, and HADI, a personal AI assistant. Privacy and
            on-device processing come first.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {pillars.map((p) => (
            <RevealItem
              key={p.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm font-medium">{p.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal
                key={t.year}
                direction={i % 2 ? "left" : "right"}
                className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="inline-block font-display text-5xl font-bold text-gradient">
                    {t.year}
                  </div>
                </div>
                <div className={`relative ${i % 2 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:block">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_16px_var(--brand-teal)]" />
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="text-lg font-semibold mb-1">{t.title}</div>
                    <div className="text-sm text-muted-foreground">{t.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
