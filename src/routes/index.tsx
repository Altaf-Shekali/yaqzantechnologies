import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yaqzan Technologies — Privacy-first AI products" },
      { name: "description", content: "Yaqzan Technologies builds privacy-first, India-first AI products — including KAVAL, Kannada-first digital safety, and HADI, an AI assistant with memory and automation." },
      { property: "og:title", content: "Yaqzan Technologies" },
      { property: "og:description", content: "Privacy-first, India-first AI products — KAVAL and HADI." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <WhyUs />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
