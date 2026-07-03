import {
  Brain, Code2, Globe, Smartphone, Cloud, Palette, Plug, GitBranch, BarChart3,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Solutions", text: "ML models, intelligent agents, and AI integrations tailored to your domain." },
  { icon: Code2, title: "Custom Software", text: "Bespoke platforms engineered for performance, reliability, and scale." },
  { icon: Globe, title: "Web Development", text: "Modern, blazing-fast web experiences built with the latest stack." },
  { icon: Smartphone, title: "Mobile Apps", text: "Native-quality iOS & Android apps that feel beautifully crafted." },
  { icon: Cloud, title: "Cloud Infrastructure", text: "Secure, scalable cloud architectures across AWS, GCP, and Azure." },
  { icon: Palette, title: "UI / UX Design", text: "Interfaces with clarity, delight, and a distinct brand voice." },
  { icon: Plug, title: "API Development", text: "Robust REST & GraphQL APIs powering your products and partners." },
  { icon: GitBranch, title: "DevOps", text: "CI/CD pipelines, observability, and zero-downtime deployments." },
  { icon: BarChart3, title: "Data Analytics", text: "Pipelines, dashboards, and insights that move decisions forward." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">WHAT WE DO</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            End-to-end solutions for <span className="text-gradient">every need</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            From ideation to deployment, we help you turn ideas into impactful digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative glass-card rounded-2xl p-7 hover:-translate-y-1 hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[var(--glow-primary)] transition-shadow">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
