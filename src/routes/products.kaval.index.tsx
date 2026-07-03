import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ScanSearch, Wifi, KeyRound, GraduationCap, Languages, Shield, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/products/kaval/")({
  head: () => ({
    meta: [
      { title: "KAVAL — Kannada-first Digital Safety | Yaqzan Technologies" },
      { name: "description", content: "KAVAL is a free, Kannada-first digital-safety app: scan apps, check links & leaks, and learn to spot India-specific scams — all on your device." },
      { property: "og:title", content: "KAVAL — Kannada-first Digital Safety" },
      { property: "og:description", content: "Scan apps, check links & data leaks, and learn to spot scams — in Kannada & English, processed on your device." },
    ],
  }),
  component: KavalPage,
});

const features = [
  { icon: ScanSearch, title: "Phone security scan", desc: "Reviews your installed apps for risky permissions, sideloaded installs, and untrusted signatures — flagging what deserves a second look." },
  { icon: Wifi, title: "Link & Wi-Fi safety", desc: "Check suspicious links before you tap, and see whether the Wi-Fi you're on is protected — all checked locally." },
  { icon: KeyRound, title: "Breach & password tools", desc: "Find out if your email appears in known data breaches, check passwords against leaks (never sent in full), and generate strong ones." },
  { icon: GraduationCap, title: "Scam Academy", desc: "Short, gamified lessons and a daily quiz that teach you to spot OTP, UPI, KYC, 'digital arrest', and fake-loan scams hitting India." },
  { icon: Languages, title: "Kannada & English", desc: "Fully bilingual — built Kannada-first for Karnataka, with English available at a tap." },
  { icon: Shield, title: "Private by design", desc: "No accounts, no ads, nothing sold. Your app list and checks are processed on your device, not on our servers." },
];

function KavalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border bg-primary/15 text-primary border-primary/30">Launching 2026</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            KAVAL <span className="text-gradient">— Digital safety in your language</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            KAVAL is a free, Kannada-first digital-safety app that helps everyday people in Karnataka and across India stay safe from online scams and privacy risks. Scan your phone for risky apps, check links and data leaks, and learn to recognise the scams actually targeting India — OTP, UPI, KYC, "digital arrest", and fake loan apps. Everything runs on your device, with no accounts and nothing sold.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--glow-primary)] transition-all">
              Coming soon to Google Play <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/products/kaval/privacy" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-primary/40 hover:text-primary transition-all">
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
