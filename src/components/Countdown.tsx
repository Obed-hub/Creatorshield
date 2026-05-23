import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Play, Sparkles, Sliders } from "lucide-react";

export default function Countdown() {
  // Let's set the target time to a future date: May 31, 2026, 18:00:00 UTC.
  // This is about 8 days past the user's current local time of May 23, 2026.
  const DEFAULT_TARGET_DATE_STR = "2026-05-31T18:00:00Z";
  const [targetDateStr, setTargetDateStr] = useState(DEFAULT_TARGET_DATE_STR);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Calculate time remaining
  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDateStr) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  // Make a simulation toggle to instantly set the launch to either "live" (now) or "soon" (future)
  const setTargetToLive = () => {
    const nowMinusOneSec = new Date(Date.now() - 5000).toISOString();
    setTargetDateStr(nowMinusOneSec);
  };

  const resetTargetToFuture = () => {
    // 8 days in future from current instant
    const futureDate = new Date(Date.now() + 8 * 24 * 3600 * 1000).toISOString();
    setTargetDateStr(futureDate);
  };

  const padZero = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="mb-8 w-full max-w-md mx-auto" id="countdown-root">
      <AnimatePresence mode="wait">
        {timeLeft.isExpired ? (
          <motion.div
            key="live-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 border-2 border-emerald-400 p-4 rounded-2xl text-center shadow-[0_0_20px_rgba(52,211,153,0.15)] relative overflow-hidden"
            id="countdown-live-banner"
          >
            {/* Ambient pulse background */}
            <div className="absolute inset-0 bg-emerald-500/5 animate-pulse pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Status Update</span>
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-wider uppercase">
                🚀 We Are Live!
              </h3>
              <p className="text-zinc-300 text-xs mt-1">
                Beta registration is officially active. Gain pre-upload scanning access now!
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="countdown-state"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-zinc-900/40 border border-zinc-800/80 p-4 sm:p-5 rounded-2xl text-center"
            id="countdown-timer-panel"
          >
            {/* Header / Subhead */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                PROD-LAUNCH TIME REMAINING
              </span>
            </div>

            {/* Time Blocks */}
            <div className="grid grid-cols-4 gap-2.5 max-w-[320px] mx-auto mb-3.5">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HRS", value: timeLeft.hours },
                { label: "MINS", value: timeLeft.minutes },
                { label: "SECS", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-2.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-emerald-500/30 transition-all"
                >
                  {idx < 3 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-800 text-sm hidden sm:inline select-none pointer-events-none z-10">
                      :
                    </span>
                  )}
                  <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {padZero(item.value)}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Simulated Scarcity Note */}
            <div className="text-[11px] text-zinc-500 flex items-center justify-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-500 block animate-ping" />
              <span>Launch reservation list closing in {timeLeft.days ? `${timeLeft.days} days` : "less than 24 hours"}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin interactive simulator panel to let user toggle countdown and see LIVE state */}
      <div className="mt-3.5 flex items-center justify-center gap-2">
        <span className="text-[9px] font-mono text-zinc-650 flex items-center gap-1">
          <Sliders className="w-3 h-3" /> Selector Tool:
        </span>
        <button
          onClick={setTargetToLive}
          className={`py-1 px-2.5 rounded text-[9px] font-mono transition-all border cursor-pointer ${
            timeLeft.isExpired
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
          }`}
          id="btn-simulate-live"
        >
          Simulate Launch Live
        </button>
        <button
          onClick={resetTargetToFuture}
          className={`py-1 px-2.5 rounded text-[9px] font-mono transition-all border cursor-pointer ${
            !timeLeft.isExpired
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
          }`}
          id="btn-simulate-countdown"
        >
          Reset Timer (Future)
        </button>
      </div>
    </div>
  );
}
