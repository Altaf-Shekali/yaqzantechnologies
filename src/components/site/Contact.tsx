import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";
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
  window.location.href = `mailto:contact@yaqzantechnologies.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-3xl p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[oklch(0.5_0.2_260/0.25)] blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs tracking-[0.3em] text-primary mb-4">GET IN TOUCH</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Questions, feedback, or <span className="text-gradient">partnerships?</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                Want early access to our products, to collaborate, or just have a question? We'll get back within 24 hours.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-background/30 p-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-3">Email directory</div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      ["General", "hello@yaqzantechnologies.online"],
                      ["Support", "support@yaqzantechnologies.online"],
                      ["Contact", "contact@yaqzantechnologies.online"],
                      ["Careers", "careers@yaqzantechnologies.online"],
                      ["Info", "info@yaqzantechnologies.online"],
                      ["Legal", "legal@yaqzantechnologies.online"],
                      ["Privacy", "privacy@yaqzantechnologies.online"],
                      ["Founders", "founders@yaqzantechnologies.online"],
                      ["KAVAL", "kaval@yaqzantechnologies.online"],
                      ["HADI", "hadi@yaqzantechnologies.online"],
                      ["Partnerships", "partnerships@yaqzantechnologies.online"],
                      ["Security", "security@yaqzantechnologies.online"],
                    ].map(([label, email]) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-primary" />
                        <span className="min-w-0">
                          <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
                          <span className="block truncate text-sm text-foreground/90">{email}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Bangalore · Remote
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

              <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
                <iframe
                  title="Yaqzan location — Karnataka, India"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-80"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.45%2C12.85%2C77.75%2C13.10&layer=mapnik"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10" />
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
