import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  FileSearch,
  FileText,
  Mic,
  Clapperboard,
  Youtube,
  Languages,
  CalendarClock,
  LayoutDashboard,
  Radio,
  Film,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/inference/")({
  head: () => ({
    meta: [
      { title: "The Inference — Autonomous AI Content Studio | Yaqzan Technologies" },
      {
        name: "description",
        content:
          "The Inference is an autonomous AI video studio: it discovers topics, writes scripts, generates multilingual voiceovers, renders videos with captions and B-roll, and publishes to YouTube — across channels and languages, from one machine.",
      },
      { property: "og:title", content: "The Inference — An AI content studio that runs itself" },
      {
        property: "og:description",
        content:
          "End-to-end autonomous video production and publishing — discovery to scheduled YouTube upload, across English, Hindi and Kannada.",
      },
      { property: "og:url", content: "https://yaqzantechnologies.online/products/inference" },
    ],
    links: [{ rel: "canonical", href: "https://yaqzantechnologies.online/products/inference" }],
  }),
  component: InferencePage,
});

const pipeline = [
  { icon: Search, step: "Discover", desc: "Finds trending, relevant topics via web search." },
  {
    icon: FileSearch,
    step: "Research",
    desc: "Gathers facts and sources so the content holds up.",
  },
  {
    icon: FileText,
    step: "Script",
    desc: "AI writes scene-by-scene scripts (NVIDIA Nemotron + Google Gemini).",
  },
  {
    icon: Mic,
    step: "Build",
    desc: "Generates TTS voiceovers and auto-sources B-roll from Pexels.",
  },
  {
    icon: Clapperboard,
    step: "Render",
    desc: "Renders full videos via Remotion — 4 visual templates, 9 scene types, captions.",
  },
  {
    icon: Youtube,
    step: "Publish",
    desc: "Auto-publishes to YouTube with thumbnails, tags and scheduled release.",
  },
];

const stack: [string, string][] = [
  ["Video engine", "Remotion — React-based programmatic rendering"],
  ["AI / LLM", "NVIDIA Nemotron + Google Gemini"],
  ["Text-to-speech", "Microsoft Edge TTS + Kokoro (local)"],
  ["Media", "Pexels API (stock footage)"],
  ["Publishing", "YouTube Data API v3 (OAuth2)"],
  ["Interface", "React 19 + Tailwind CSS 4 dashboard"],
];

const features = [
  {
    icon: Radio,
    title: "Multi-channel",
    desc: "Runs several YouTube channels at once — for example English AI news, Kannada stories and Hindi psychology — each on its own schedule.",
  },
  {
    icon: Languages,
    title: "Multi-language",
    desc: "English, Hindi and Kannada content, with automatic translation between them.",
  },
  {
    icon: CalendarClock,
    title: "Daily automation",
    desc: "Scheduled tasks kick off the pipeline and publish hands-off, every day.",
  },
  {
    icon: LayoutDashboard,
    title: "Local dashboard",
    desc: "A web UI to preview, control and monitor every stage of the pipeline.",
  },
  {
    icon: Film,
    title: "Multiple formats",
    desc: "Long-form 16:9, vertical 9:16 Shorts, and auto-generated thumbnails.",
  },
  {
    icon: Cpu,
    title: "Runs on one machine",
    desc: "The whole studio operates locally — from topic discovery to scheduled upload.",
  },
];

function InferencePage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </a>

          {/* Hero */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Live · Publishing daily
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              The Inference{" "}
              <span className="text-gradient">— an AI content studio that runs itself</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl">
              The Inference is an end-to-end autonomous video production and publishing system. On a
              schedule, it discovers topics, researches sources, writes structured scripts,
              generates multilingual voiceovers, sources B-roll, renders complete videos with
              captions and visual templates, and publishes them to YouTube — across multiple
              channels and languages, all from a single machine. Unlike tools that only script,
              voice, or edit, it coordinates the whole workflow from topic discovery to scheduled
              upload.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@TheInference-T"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--glow-primary)] transition-all"
              >
                <Youtube className="h-4 w-4" /> Watch it in action
              </a>
              <a
                href="mailto:hello@yaqzantechnologies.online?subject=The%20Inference&body=Hi%2C%20I'd%20like%20to%20learn%20more%20about%20The%20Inference."
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* How it works — pipeline */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">How it works</span>
            </div>
            <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pipeline.map((p, i) => (
                <RevealItem key={p.step} className="glass-card rounded-2xl p-6 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-11 w-11 rounded-xl glass flex items-center justify-center">
                      <p.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Step {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{p.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          {/* Key features */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Radio className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">Key capabilities</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6 flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Tech stack */}
          <Reveal className="mt-20">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Cpu className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase">Under the hood</span>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden">
              {stack.map(([layer, tech], i) => (
                <div
                  key={layer}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <div className="sm:w-48 shrink-0 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {layer}
                  </div>
                  <div className="text-sm text-foreground/90">{tech}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Why it's different */}
          <Reveal className="mt-20 glass-card rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Not a tool in the pipeline — <span className="text-gradient">the whole pipeline</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
              Most AI content tools handle a single step: scripting, or voice, or editing. The
              Inference owns the entire chain — discovery, research, scripting, voice, B-roll,
              rendering, thumbnails, metadata and scheduled publishing — and keeps multiple channels
              and languages running on their own schedules without someone driving each stage by
              hand.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-20">
            <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  Curious how it runs?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  Whether you're interested in the system, a collaboration, or content for your own
                  channels — get in touch and we'll show you the studio at work.
                </p>
                <a
                  href="mailto:hello@yaqzantechnologies.online?subject=The%20Inference&body=Hi%2C%20I'd%20like%20to%20learn%20more%20about%20The%20Inference."
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.02] transition-all"
                >
                  Get in touch <ArrowUpRight className="h-4 w-4" />
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
