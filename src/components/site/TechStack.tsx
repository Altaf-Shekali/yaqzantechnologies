import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const stack = [
  { name: "React", svg: "https://cdn.simpleicons.org/react/3EF2E3" },
  { name: "Next.js", svg: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "TypeScript", svg: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", svg: "https://cdn.simpleicons.org/nodedotjs/3EF2E3" },
  { name: "Python", svg: "https://cdn.simpleicons.org/python/ffffff" },
  { name: "FastAPI", svg: "https://cdn.simpleicons.org/fastapi/3EF2E3" },
  { name: "Docker", svg: "https://cdn.simpleicons.org/docker/3EF2E3" },
  { name: "AWS", svg: "https://cdn.simpleicons.org/amazonwebservices/ffffff" },
  { name: "PostgreSQL", svg: "https://cdn.simpleicons.org/postgresql/ffffff" },
  { name: "MongoDB", svg: "https://cdn.simpleicons.org/mongodb/3EF2E3" },
  { name: "TensorFlow", svg: "https://cdn.simpleicons.org/tensorflow/3EF2E3" },
  { name: "OpenAI", svg: "https://cdn.simpleicons.org/openai/ffffff" },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">TECHNOLOGY STACK</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Tools that power our <span className="text-gradient">craft</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A curated modern toolchain spanning frontend, backend, cloud and AI — and many more.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {stack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
            >
              <img
                src={t.svg}
                alt={t.name}
                loading="lazy"
                className="h-8 w-8 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {t.name}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: stack.length * 0.04 }}
            whileHover={{ y: -6 }}
            className="group glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="h-4 w-4 text-primary" />
            </div>
            <div className="text-xs text-primary font-medium group-hover:text-foreground transition-colors">
              And many more
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

