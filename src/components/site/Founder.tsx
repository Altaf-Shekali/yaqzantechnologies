import { Github, Linkedin, Mail, Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

// TODO(Altaf): swap in a real photo (drop e.g. founder.jpg in src/assets and import it).
const FOUNDER = {
  name: "Altaf Shekali",
  role: "Founder & Builder",
  bio: "Altaf is a Computer Science engineer and AI product builder working across generative AI, autonomous systems, and full-stack development. Through Yaqzan he builds complete AI systems — connecting models with real software, automation, APIs and deployment — with a focus on practical, privacy-conscious tools for local and underserved users.",
  initials: "AS",
  experience: [
    { icon: Briefcase, label: "Currently", value: "Generative AI Engineer Intern · Vayavya Labs" },
    {
      icon: GraduationCap,
      label: "Previously",
      value: "AI data & language workflows · IITM Pravartak Technologies Foundation",
    },
  ],
  focus: [
    "Retrieval-augmented generation",
    "AI agents & automation",
    "Multilingual AI workflows",
    "Programmatic media",
    "Privacy-conscious software",
    "Consumer apps",
  ],
  github: "https://github.com/Altaf-Shekali",
  linkedin: "https://www.linkedin.com/in/altaf-shekali",
  email: "hello@yaqzantechnologies.online",
};

export function Founder() {
  return (
    <section id="founder" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs tracking-[0.3em] text-primary mb-4">WHO'S BUILDING THIS</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for problems that deserve{" "}
            <span className="text-gradient">local understanding</span>
          </h2>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
              {/* Avatar — replace with a real photo when ready */}
              <div className="shrink-0">
                <div className="h-28 w-28 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {FOUNDER.initials}
                  </span>
                </div>
              </div>

              <div>
                <div className="font-display text-2xl font-bold">{FOUNDER.name}</div>
                <div className="text-sm text-primary font-medium mt-1">
                  {FOUNDER.role}, Yaqzan Technologies
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{FOUNDER.bio}</p>

                <div className="mt-6 flex items-center justify-center sm:justify-start gap-3">
                  <a
                    href={FOUNDER.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${FOUNDER.name} on GitHub`}
                    className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${FOUNDER.name} on LinkedIn`}
                    className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${FOUNDER.email}`}
                    aria-label="Email the founder"
                    className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3 border-t border-white/10 pt-8">
              {FOUNDER.experience.map((e) => (
                <div key={e.label} className="flex gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <e.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {e.label}
                    </div>
                    <div className="text-sm text-foreground/90 leading-snug mt-0.5">{e.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                Works across
              </div>
              <div className="flex flex-wrap gap-2">
                {FOUNDER.focus.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-muted-foreground glass rounded-full px-3 py-1.5"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
