import {
  ArrowUpRight,
  Shield,
  Bot,
  Sparkles,
  Calendar,
  Mail,
  Brain,
  Cpu,
  Lock,
  Zap,
  ScanSearch,
  Wifi,
  KeyRound,
  GraduationCap,
  Clapperboard,
  Youtube,
  Mic,
  Search,
  Languages,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const products = [
  {
    name: "HADI",
    tagline: "A personal AI assistant with memory and task automation.",
    desc: "HADI is a personal AI assistant with long-term memory and multi-step task automation — one that remembers your context and actually does things for you. It works and runs locally today; we just haven't deployed it publicly yet. The bigger 'AI operating system' idea is the long-term vision.",
    status: "Working · Unreleased",
    statusColor: "bg-primary/15 text-primary border-primary/30",
    icon: Bot,
    features: [
      { icon: Brain, label: "Long-term memory" },
      { icon: Zap, label: "Autonomous workflows" },
      { icon: Calendar, label: "Daily task automation" },
      { icon: Mail, label: "Career & life tools" },
      { icon: Cpu, label: "System monitoring" },
      { icon: Lock, label: "Digital security" },
    ],
    accent: "from-[#3EF2E3]/30 to-[#3EF2E3]/0",
  },
  {
    name: "KAVAL",
    tagline: "Kannada-first digital safety — spot scams before they cost you.",
    desc: "KAVAL is a free, Kannada-first digital-safety app that helps everyday people in Karnataka and across India stay safe online. It scans installed apps for risky permissions and sideloaded threats, checks link and Wi-Fi safety, tells you if your email or passwords have leaked, and teaches you to recognise real India-specific scams — OTP, UPI, KYC, 'digital arrest', and fake loan apps — through a gamified Scam Academy. Everything runs on your device, with no accounts and nothing sold.",
    status: "Working · Launching 2026",
    statusColor: "bg-primary/15 text-primary border-primary/30",
    icon: Shield,
    features: [
      { icon: ScanSearch, label: "App & permission scan" },
      { icon: Wifi, label: "Link & Wi-Fi safety" },
      { icon: KeyRound, label: "Breach & password check" },
      { icon: GraduationCap, label: "Scam Academy (Kannada)" },
    ],
    accent: "from-[#a78bfa]/30 to-[#a78bfa]/0",
  },

  {
    name: "The Inference",
    tagline: "An AI content studio that runs itself.",
    desc: "The Inference is an end-to-end autonomous video studio. On a schedule, it discovers trending topics, researches sources, writes scene-by-scene scripts, generates multilingual voiceovers, sources B-roll, renders finished videos with captions and templates, and publishes them to YouTube — across multiple channels and languages, all from a single machine. It's live and publishing today.",
    status: "Live",
    statusColor: "bg-primary/15 text-primary border-primary/30",
    icon: Clapperboard,
    features: [
      { icon: Search, label: "Auto topic discovery" },
      { icon: Mic, label: "Multilingual voiceovers" },
      { icon: Youtube, label: "Auto-publish to YouTube" },
      { icon: Languages, label: "English · Hindi · Kannada" },
    ],
    accent: "from-[#fb7185]/25 to-[#fb7185]/0",
  },

  {
    name: "Next Horizon",
    tagline: "What we're exploring next.",
    desc: "Ideas we're looking at once KAVAL and HADI ship — more on-device safety tools and AI helpers made for Indian users. Nothing announced yet; we'll only list it here when it's real.",
    status: "Exploring",
    statusColor: "bg-white/5 text-muted-foreground border-white/10",
    icon: Sparkles,
    features: [],
    accent: "from-[#67e8f9]/20 to-[#67e8f9]/0",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">OUR PRODUCTS</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Software built to <span className="text-gradient">move you forward</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Three products we're building — from a live autonomous studio to apps still in the
            workshop — and an expanding horizon beyond.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            const productLink =
              p.name === "HADI"
                ? "/products/hadi"
                : p.name === "KAVAL"
                  ? "/products/kaval"
                  : p.name === "The Inference"
                    ? "/products/inference"
                    : "#contact";

            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-card rounded-3xl p-8 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all overflow-hidden flex flex-col"
              >
                <div
                  className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${p.accent}`}
                />
                {productLink.startsWith("/products") ? (
                  <Link
                    to={productLink}
                    className="absolute inset-0 z-10"
                    aria-label={`View ${p.name} product details`}
                  />
                ) : (
                  <a
                    href={productLink}
                    className="absolute inset-0 z-10"
                    aria-label="Contact us about this product"
                  />
                )}
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${p.statusColor}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold mb-2">{p.name}</h3>
                  <div className="text-sm text-primary mb-4 font-medium">{p.tagline}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                  {p.features.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {p.features.map((f) => (
                        <div
                          key={f.label}
                          className="flex items-center gap-2 text-xs text-muted-foreground glass rounded-lg px-3 py-2"
                        >
                          <f.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    <span>Learn More</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
