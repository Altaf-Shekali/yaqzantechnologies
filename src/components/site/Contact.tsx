import { ArrowRight, Mail, MapPin, Linkedin, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { FormEvent } from "react";

function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const company = String(data.get("company") ?? "");
  const message = String(data.get("message") ?? "");
  const subject = `Project enquiry from ${name || "website"}`;
  const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
  window.location.href = `mailto:hello@yaqzantechnologies.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-3xl p-5 sm:p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[oklch(0.5_0.2_260/0.25)] blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="text-xs tracking-[0.3em] text-primary mb-4">GET IN TOUCH</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Questions, feedback, or <span className="text-gradient">partnerships?</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md">
                Want early access to our products, to collaborate, or just have a question? We'll
                get back within 24 hours.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-background/30 p-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    How to reach us
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      ["General & partnerships", "hello@yaqzantechnologies.online"],
                      ["Product support", "support@yaqzantechnologies.online"],
                      ["Contributors & hiring", "careers@yaqzantechnologies.online"],
                      ["Security reports", "security@yaqzantechnologies.online"],
                    ].map(([label, email]) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-primary" />
                        <span className="min-w-0">
                          <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            {label}
                          </span>
                          <span className="block truncate text-sm text-foreground/90">{email}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Remote · Building for India
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/yaqzan-technologies/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Yaqzan LinkedIn"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div className="glass rounded-2xl p-4 flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Within 24 hours</div>
                    <div className="text-xs text-muted-foreground">Typical reply time</div>
                  </div>
                </div>
                <div className="glass rounded-2xl p-4 flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">No trackers here</div>
                    <div className="text-xs text-muted-foreground">
                      This site sets no analytics cookies
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleContactSubmit}
              className="glass rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground"
              />
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Tell us about your project…"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--glow-primary)] hover:shadow-[var(--glow-strong)] hover:scale-[1.01] transition-all"
              >
                Send Message
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
