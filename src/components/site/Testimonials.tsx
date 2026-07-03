import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Languages } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    text: "We build software that works for you, not on you. No accounts you don't need, no data sold, and processing kept on your device wherever it can be.",
  },
  {
    icon: Cpu,
    title: "On-device first",
    text: "Intelligence should live close to the user. We design our products to do as much as possible locally — faster, safer, and yours.",
  },
  {
    icon: Languages,
    title: "Built for real people",
    text: "Kannada-first and India-first. Technology that meets people in their own language and protects them from the scams actually targeting them.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">WHAT WE STAND FOR</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Principles that <span className="text-gradient">shape every build</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
