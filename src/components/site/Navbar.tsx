import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/hero-custom.png";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Yaqzan Technologies" className="h-10 w-10 rounded-lg object-cover" />
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide text-foreground">YAQZAN</div>
              <div className="text-[10px] tracking-[0.2em] text-primary">TECHNOLOGIES</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 hover:shadow-[var(--glow-primary)] transition-all"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-primary text-sm font-medium"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
