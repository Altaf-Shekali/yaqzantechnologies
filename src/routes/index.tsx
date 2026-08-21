import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
// Founder section hidden for now — planned for a future release. Re-enable the import
// and the <Founder /> block below to bring it back.
// import { Founder } from "@/components/site/Founder";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SectionDivider } from "@/components/site/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yaqzan Technologies — Privacy-first AI products" },
      {
        name: "description",
        content:
          "Yaqzan Technologies builds privacy-first, India-first AI products — including Namma Kaval, Kannada-first digital safety, and HADI, an AI assistant with memory and automation.",
      },
      { property: "og:title", content: "Yaqzan Technologies" },
      {
        property: "og:description",
        content: "Privacy-first, India-first AI products — Namma Kaval and HADI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yaqzantechnologies.online/" },
    ],
    links: [{ rel: "canonical", href: "https://yaqzantechnologies.online/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <SectionDivider />
        <About />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Testimonials />
        {/* Founder section hidden for now — release in a later update.
        <SectionDivider />
        <Founder /> */}
        <SectionDivider />
        <Careers />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
