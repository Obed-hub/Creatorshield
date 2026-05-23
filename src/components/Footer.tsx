import { Shield, Hammer } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 relative mt-auto" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Brand identity */}
        <div className="flex items-center gap-2" id="footer-logo">
          <div className="w-7 h-7 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-zinc-500">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-display font-medium text-sm text-zinc-400">
            CreatorShield <span className="text-zinc-600 text-xs">AI</span>
          </span>
        </div>

        {/* Legal Disclaimer */}
        <p className="text-[11px] text-zinc-650 text-center max-w-md leading-relaxed md:order-2" id="footer-disclaimer">
          CreatorShield AI is an independent compliance auditing utility and is not officially affiliated with YouTube, YouTube Studio, or Google LLC. YouTube™ is a trademark of Google LLC.
        </p>

        {/* links */}
        <div className="flex items-center gap-6 text-xs text-zinc-500 font-mono" id="footer-links">
          <a href="#privacy" className="hover:text-emerald-400 transition-colors">
            Privacy Policy
          </a>
          <span className="text-zinc-800">•</span>
          <a href="#terms" className="hover:text-emerald-400 transition-colors">
            Terms of Service
          </a>
          <span className="text-zinc-800">•</span>
          <span className="text-zinc-600">© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
