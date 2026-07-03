import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Brain, Zap, Calendar, Mail, Cpu, Lock, Shield, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/products/hadi/")({
  head: () => ({
    meta: [
      { title: "HADI — AI Operating System | Yaqzan Technologies" },
      { name: "description", content: "HADI is an AI Operating System that remembers you, automates daily tasks, manages your career, monitors your devices, and protects your digital life." },
      { property: "og:title", content: "HADI — AI Operating System" },
      { property: "og:description", content: "An AI OS with long-term memory, autonomous workflows, and digital security." },
    ],
  }),
  component: HadiPage,
});

const features = [
  { icon: Brain, title: "Long-term memory", desc: "HADI remembers your context, preferences, and history across sessions to act as a true personal AI." },
  { icon: Zap, title: "Autonomous workflows", desc: "Multi-step automations that run in the background — research, drafting, follow-ups, and task chains." },
  { icon: Calendar, title: "Daily task automation", desc: "Calendar, reminders, scheduling, email triage, and inbox-to-action routines done for you." },
  { icon: Mail, title: "Career & life tools", desc: "Job tracking, resume tools, learning plans, and life logistics — managed from one interface." },
  { icon: Cpu, title: "System monitoring", desc: "Keep an eye on your devices, processes, storage, and performance with proactive alerts." },
  { icon: Lock, title: "Digital security", desc: "Account hygiene, breach monitoring, and recommendations to protect your digital footprint." },
];

function HadiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">In Development</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            HADI <span className="text-gradient">— Your AI OS</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            HADI is an AI Operating System that remembers you, automates your daily tasks, manages your career, monitors your devices, and helps protect your digital life. It combines conversational AI with long-term memory, autonomous workflows, productivity tools, system management, and security features in one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--glow-primary)] transition-all">
              Join the waitlist <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/products/hadi/privacy" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-primary/40 hover:text-primary transition-all">
              <Shield className="h-4 w-4" /> Privacy Policy
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-16">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
