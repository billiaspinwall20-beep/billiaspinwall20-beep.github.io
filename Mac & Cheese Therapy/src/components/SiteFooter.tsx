import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/mac-cheese-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 px-4 pb-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border-2 border-white/90 bg-cheddar/95 backdrop-blur px-6 md:px-10 py-10 shadow-soft text-white">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="" className="w-12 h-12 object-contain" />
                <div className="flex flex-col items-start leading-none">
                  <span className="font-hand text-xl md:text-2xl text-cheddar-deep">mac &amp; cheese</span>
                  <span className="font-display text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/80 mt-1">Speech &amp; Feeding</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/85 max-w-xs">
                In-home pediatric speech and feeding therapy for little ones 0–3, across New York City.
              </p>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white mb-3">Explore</div>
              <ul className="space-y-2 text-white/85">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white">Interest Form</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white mb-3">Get in touch</div>
              <p className="text-white/85">Serving families across NYC</p>
              <a href="mailto:billiaspinwall20@gmail.com" className="block mt-2 font-semibold text-white hover:underline">
                billiaspinwall20@gmail.com
              </a>
              <p className="mt-4 text-xs text-white/75">
                Private pay only · Superbills provided for out-of-network reimbursement.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-xs text-white/80 flex flex-wrap justify-end gap-2">
            <span>Made with care in NYC 🧡</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
