import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Share2, Clipboard, CheckCircle2, Trophy, Users, Shield, Compass, Sparkles, AlertCircle } from "lucide-react";

interface ReferralLoopProps {
  joinedEmail: string | null;
  referralCode: string;
  referralCount: number;
  position: number;
  onSimulateReferral: () => void;
}

export default function ReferralLoop({
  joinedEmail,
  referralCode,
  referralCount,
  position,
  onSimulateReferral,
}: ReferralLoopProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const referralLink = `${window.location.origin}/?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="py-16 px-4 bg-zinc-950/40 relative overflow-hidden" id="referral-reward-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Amber glowing Call-Out Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-900/60 border-2 border-amber-500/45 p-8 sm:p-10 rounded-3xl shadow-[0_0_35px_rgba(245,158,11,0.08)] backdrop-blur-md overflow-hidden group"
          id="referral-box"
        >
          {/* Decorative glowing ribbon */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs">
                <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400/10" />
                <span>VIRAL REFERRALS CAMPAIGN</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Get 1 Hour of Premium <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Video Scanning Free</span>
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed" id="referral-description">
                Want to jump to the front of the line? For every new YouTuber you refer to our launch list, we will credit your account with <strong className="text-amber-300 font-semibold font-mono">1 hour of deep multi-modal forensic video checking</strong> completely free when we launch. Protect your revenue stream without spending a dime.
              </p>
            </div>

            {/* Right Action/State Box */}
            <div className="md:col-span-5 bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-6 rounded-2xl flex flex-col justify-between h-full min-h-[190px]">
              <AnimatePresence mode="wait">
                {joinedEmail ? (
                  <motion.div
                    key="success-ref"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex flex-col justify-between h-full"
                    id="referral-panel-unlocked"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Your Referrals</span>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {referralCount * 1} hour earned
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Users className="w-5 h-5 text-amber-400" />
                        <span className="text-xl font-bold font-mono text-white select-all">{referralCount} Referred</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Copy link to share:</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          readOnly
                          value={referralLink}
                          className="bg-zinc-900 border border-zinc-800/80 p-2 rounded-lg text-[10px] font-mono text-zinc-400 flex-1 truncate outline-none select-all"
                        />
                        <button
                          onClick={copyToClipboard}
                          className="p-2 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-amber-500/50 text-white transition-all cursor-pointer"
                        >
                          {copiedLink ? (
                            <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          ) : (
                            <Clipboard className="w-4 h-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={onSimulateReferral}
                      className="w-full py-2 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 text-amber-400 hover:text-white rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer"
                    >
                      + Simulate Another Invite
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="locked-ref"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-4 h-full"
                    id="referral-panel-locked"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500/40 mb-3">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="text-xs font-display font-medium text-zinc-300">
                      Link Pending Activation
                    </span>
                    <p className="text-[11px] text-zinc-500 max-w-[200px] mt-1.5 leading-relaxed">
                      Enter your Gmail in the hero form above to secure your unique referral link and activate scanning credits.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
