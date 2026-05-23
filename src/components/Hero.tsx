import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle2, ShieldAlert, Cpu, Share2, Clipboard, Users, ArrowRight, Play, RefreshCw } from "lucide-react";
import Countdown from "./Countdown";

interface HeroProps {
  joinedEmail: string | null;
  onJoin: (email: string) => void;
  referralCode: string;
  position: number;
  referralCount: number;
  onSimulateReferral: () => void;
}

export default function Hero({
  joinedEmail,
  onJoin,
  referralCode,
  position,
  referralCount,
  onSimulateReferral,
}: HeroProps) {
  const [emailInput, setEmailInput] = useState("");
  const [errorText, setErrorText] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  const referralLink = `${window.location.origin}/?ref=${referralCode}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    const emailTrimmed = emailInput.trim();
    if (!emailTrimmed) {
      setErrorText("Pristine security requires an email address.");
      return;
    }

    // High fidelity email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      setErrorText("Please use a valid email format (e.g., creator@gmail.com).");
      return;
    }

    onJoin(emailTrimmed);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="relative px-4 pt-16 pb-20 overflow-hidden bg-zinc-950 flex flex-col items-center justify-center">
      {/* Visual background atmospheric glowing spheres/grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1d21_1px,transparent_1px),linear-gradient(to_bottom,#1c1d21_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Urgent sweep notification badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs md:text-sm mb-6"
          id="hero-alert-badge"
        >
          <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
          <span>YouTube De-Monetization Sweep Detected: May 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6"
          id="hero-main-headline"
        >
          Don't Wake Up to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-600 block sm:inline">Demonetized Channel.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-zinc-300 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          id="hero-subheadline"
        >
          YouTube's new Inauthentic Content filters are wiping out channels overnight. Scan your videos, thumbnails, and channel history for Reused Content, AI voice clone flags, and template loops <em className="text-white font-medium not-italic underline decoration-emerald-500 decoration-2">before</em> you upload.
        </motion.p>

        {/* Real-time Countdown Timer */}
        <Countdown />

        {/* Main form or success card state transitions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg mx-auto bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur"
          id="cta-form-container"
        >
          <AnimatePresence mode="wait">
            {!joinedEmail ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your Gmail address..."
                      className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-transparent transition-all font-sans text-sm md:text-base shadow-inner"
                      id="hero-email-input"
                    />
                  </div>

                  {errorText && (
                    <p className="text-red-400 text-xs font-mono text-left pl-1" id="hero-error-text">
                      ⚠ {errorText}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-black font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                    id="hero-submit-btn"
                  >
                    <span>Get Pre-Upload Protection</span>
                    <ArrowRight className="w-4 h-4 md:w-5 h-5 text-black" />
                  </button>
                </form>

                <p className="mt-4 text-[11px] md:text-xs text-zinc-400 leading-relaxed text-center" id="hero-notice">
                  🔒 Beta access is strictly limited. Enter your email below—you will be contacted immediately via Gmail the second the product goes live.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-left space-y-5"
                id="hero-success-state"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-lg md:text-xl">
                      You're Locked in!
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm mt-1">
                      Check your Gmail inbox shortly for your launch confirmation and your unique referral link.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-zinc-800" />

                {/* Referral Link & Dashboard */}
                <div className="space-y-3">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Your Personal Launch Link:
                  </label>
                  <div className="flex gap-2 bg-zinc-950 p-2 rounded-xl border border-zinc-800">
                    <input
                      type="text"
                      readOnly
                      value={referralLink}
                      className="bg-transparent border-none text-zinc-300 text-xs flex-1 outline-none px-2 select-all font-mono"
                      id="hero-referral-link"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white transition-all flex items-center gap-1.5 cursor-pointer"
                      id="hero-copy-btn"
                    >
                      {copiedLink ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Simulated waitlist details and refer tracking */}
                <div className="grid grid-cols-3 gap-3 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/80">
                  <div className="text-center font-mono">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Your Position</span>
                    <span className="text-white font-bold text-base md:text-lg">#{position}</span>
                  </div>
                  <div className="text-center border-x border-zinc-800 font-mono">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Referrals</span>
                    <span className="text-emerald-400 font-bold text-base md:text-lg">{referralCount}</span>
                  </div>
                  <div className="text-center font-mono">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Free Scanning</span>
                    <span className="text-amber-400 font-bold text-base md:text-lg">{referralCount * 1} HR</span>
                  </div>
                </div>

                {/* Simulating actions loop */}
                <div className="flex justify-between items-center gap-2 pt-2">
                  <span className="text-[10px] text-zinc-500 font-mono">
                    Want to test the loop? Sim code link invite:
                  </span>
                  <button
                    onClick={onSimulateReferral}
                    className="py-1 px-3 bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 transition-all cursor-pointer"
                    id="hero-simulate-referral-btn"
                  >
                    <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin-slow" />
                    <span>Simulate Referral</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
