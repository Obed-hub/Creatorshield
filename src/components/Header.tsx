import { Shield, ShieldAlert, Cpu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Vibe */}
        <div className="flex items-center gap-2" id="header-brand">
          <div className="relative flex items-center justify-center w-9 h-9 bg-zinc-900 border border-emerald-500/20 rounded-lg text-emerald-400">
            <Shield className="w-5 h-5" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping border border-zinc-950" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-zinc-950" />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              CreatorShield <span className="text-emerald-400 text-xs py-0.5 px-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded font-mono">AI</span>
            </span>
          </div>
        </div>

        {/* Global Alert Compliance Ticker */}
        <div className="hidden md:flex items-center gap-2 py-1 px-3 bg-zinc-900/80 border border-zinc-800/80 rounded-full" id="header-ticker">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
            YOUTUBE SWEEP: <span className="text-amber-400">MAY 2026 sweep active</span>
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono" id="header-status">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span className="text-zinc-400 font-mono">Engine v1.4 Live</span>
          </div>
        </div>
      </div>
    </header>
  );
}
