import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discover", text: "We dig into your goals, users, and constraints to define what success looks like." },
  { icon: PenTool, title: "Design", text: "Wireframes, design systems, and interaction prototypes — refined until pixel-perfect." },
  { icon: Code2, title: "Develop", text: "Production-grade engineering with clean architecture, automated tests, and reviews." },
  { icon: Rocket, title: "Deploy", text: "Zero-downtime releases on resilient cloud infrastructure with CI/CD pipelines." },
  { icon: LifeBuoy, title: "Support", text: "Monitoring, iteration, and continuous improvement so your product keeps compounding." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">OUR PROCESS</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            From idea to <span className="text-gradient">impact</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A repeatable five-stage process that keeps every engagement clear, measured, and momentum-driven.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-10 md:space-y-16">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`${left ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}>
                    <div className="glass-card rounded-2xl p-6 md:p-8 inline-block w-full hover:border-primary/40 transition-colors">
                      <div className={`flex items-center gap-3 mb-3 ${left ? "md:justify-end" : ""}`}>
                        <Icon className="h-5 w-5 text-primary" />
                        <div className="text-xs tracking-[0.2em] text-primary">STEP 0{i + 1}</div>
                      </div>
                      <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary shadow-[var(--glow-primary)]" />
                  </div>
                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
