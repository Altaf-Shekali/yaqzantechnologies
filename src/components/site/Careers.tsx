import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Careers() {
  return (
    <section id="careers" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">CAREERS</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Join <span className="text-gradient">Yaqzan Technologies</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            We're building the tools and systems that will define the next decade. If you obsess over craft, we want to meet you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="font-display text-2xl md:text-3xl font-semibold">
            No open roles right now
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We're an early, small team focused on shipping our first products. We're not actively
            hiring yet — but if you care about privacy-first, India-first AI and want to build with
            us, introduce yourself. We keep every note for when we grow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.02] transition-all"
            >
              Say hello
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="mailto:careers@yaqzantechnologies.online" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              careers@yaqzantechnologies.online
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
