import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import logo from "@/assets/hero-custom.png";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[oklch(0.5_0.2_260/0.18)] blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Innovate. Build. Elevate.
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Engineering <br />
              <span className="text-gradient">Tomorrow's</span> <br />
              Intelligent Solutions
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Yaqzan Technologies builds AI products for India — from The Inference, a live
              autonomous content studio, to KAVAL, privacy-first digital safety in Kannada, and
              HADI, a personal AI assistant.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.02] transition-all"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover:border-primary/40 transition-all"
              >
                Contact Us
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              {[
                { v: "3", l: "Products" },
                { v: "Privacy", l: "First" },
                { v: "Kannada", l: "& English" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-foreground">{s.v}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full bg-primary/30 blur-[100px] animate-pulse-glow" />
            </div>
            {/* concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[480px] w-[480px] rounded-full border border-primary/15" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[360px] w-[360px] rounded-full border border-primary/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[260px] w-[260px] rounded-full border border-primary/30" />
            </div>

            {/* particles */}
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = (i / 18) * Math.PI * 2;
              const r = 220 + (i % 3) * 30;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-primary"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: 0.6,
                    boxShadow: "0 0 8px var(--brand-teal)",
                    animation: `float ${4 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              );
            })}

            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-3xl bg-primary/40 blur-3xl" />
              <img
                src={logo}
                alt="Yaqzan Technologies logo"
                className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px] rounded-3xl object-cover shadow-[0_0_80px_rgba(62,242,227,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
