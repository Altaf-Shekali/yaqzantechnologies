import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function PolicyLayout({
  product,
  title,
  updated,
  children,
  backTo,
}: {
  product: string;
  title: string;
  updated: string;
  children: ReactNode;
  backTo: "/products/hadi" | "/products/kaval" | "/";
}) {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={backTo} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to {product}
          </Link>
          <div className="text-xs tracking-[0.3em] text-primary mb-3">{product.toUpperCase()} — LEGAL</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          <div className="prose prose-invert mt-12 max-w-none text-muted-foreground leading-relaxed space-y-8 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
