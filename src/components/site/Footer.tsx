import { Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/hero-custom.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yaqzan" className="h-10 w-10 rounded-lg object-cover" />
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide">YAQZAN</div>
                <div className="text-[10px] tracking-[0.2em] text-primary">TECHNOLOGIES</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              A small, independent team building privacy-first apps for Indian users — starting with
              KAVAL, digital safety in Kannada, and HADI, a personal AI assistant.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/yaqzan-technologies/"
                target="_blank"
                rel="noreferrer"
                aria-label="Yaqzan LinkedIn"
                className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#careers" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Products
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/inference" className="hover:text-primary transition-colors">
                  The Inference
                </Link>
              </li>
              <li>
                <Link to="/products/kaval" className="hover:text-primary transition-colors">
                  KAVAL
                </Link>
              </li>
              <li>
                <Link to="/products/hadi" className="hover:text-primary transition-colors">
                  HADI
                </Link>
              </li>
              <li>
                <a href="/#products" className="hover:text-primary transition-colors">
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Legal
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/products/hadi/privacy" className="hover:text-primary transition-colors">
                  HADI Privacy
                </Link>
              </li>
              <li>
                <Link to="/products/kaval/privacy" className="hover:text-primary transition-colors">
                  KAVAL Privacy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@yaqzantechnologies.online"
                  className="hover:text-primary transition-colors"
                >
                  hello@yaqzantechnologies.online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Yaqzan Technologies. All rights reserved.</div>
          <div>Crafted with precision & purpose.</div>
        </div>
      </div>
    </footer>
  );
}
