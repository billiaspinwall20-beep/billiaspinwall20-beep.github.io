import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Interest Form" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border-2 border-white/90 bg-cheddar/95 backdrop-blur px-5 md:px-7 py-3 shadow-soft">
          <Link to="/" className="flex items-baseline gap-2 md:gap-3">
            <span className="font-hand text-xl md:text-2xl text-cheddar-deep">mac &amp; cheese</span>
            <span className="font-display text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/80">Speech &amp; Feeding</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                activeProps={{ className: "px-3 py-1.5 rounded-full text-sm font-medium text-white bg-white/15" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-full p-1.5 text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-3xl border-2 border-white/90 bg-cheddar/95 backdrop-blur p-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10"
                activeProps={{ className: "px-4 py-2 rounded-full text-sm font-medium text-white bg-white/15" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
