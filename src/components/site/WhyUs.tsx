import { useEffect, useRef, useState } from "react";
import { Rocket, Cpu, ShieldCheck, Layers, HeartHandshake, Zap } from "lucide-react";

const stats = [
  { v: 2, suffix: "", label: "Flagship Products" },
  { v: 100, suffix: "%", label: "Privacy-First" },
  { v: 2, suffix: "", label: "Languages Supported" },
  { v: 24, suffix: "h", label: "Response Time" },
];

const reasons = [
  { icon: Rocket, title: "Innovation Driven", text: "We move at startup speed with enterprise rigor." },
  { icon: Cpu, title: "Modern Technologies", text: "A future-ready stack across AI, cloud, and data." },
  { icon: ShieldCheck, title: "Secure Solutions", text: "Security and privacy built in from day one." },
  { icon: Layers, title: "Scalable Architecture", text: "Designed to grow with your business — gracefully." },
  { icon: HeartHandshake, title: "Customer Focus", text: "A true partner — committed to your outcomes." },
  { icon: Zap, title: "Performance Optimized", text: "Snappy, efficient, and built for real-world load." },
];

function useCounter(target: number, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return { ref, display: val.toFixed(decimals) };
}

function Stat({ v, suffix, label, decimals = 0 }: { v: number; suffix: string; label: string; decimals?: number }) {
  const { ref, display } = useCounter(v, decimals);
  return (
    <div className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-gradient">
        <span ref={ref}>{display}</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">WHY YAQZAN</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            A team obsessed with <span className="text-gradient">craft & impact</span>
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-14 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group glass-card rounded-2xl p-6 flex gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[var(--glow-primary)] transition-shadow">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
