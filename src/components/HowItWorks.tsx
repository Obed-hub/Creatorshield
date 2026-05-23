import { motion } from "motion/react";
import { Upload, Cpu, FileHeart, ShieldCheck, ArrowRight, Info, HeartPulse, SearchCode } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sync Channel or Upload Draft",
      description: "Securely link your YouTube channel or easily drag and drop your premiere pre-renders.",
      icon: Upload,
      accent: "text-emerald-400 group-hover:text-emerald-300",
    },
    {
      number: "02",
      title: "AI Forensics Engine Scans",
      description: "Our machine learning filters parse audio frequency, visual similarity, and thumbnail templates.",
      icon: Cpu,
      accent: "text-amber-400 group-hover:text-amber-300",
    },
    {
      number: "03",
      title: "Get Real-Time Audit Report",
      description: "Receive deep diagnostic scores, specific timestamp flags, and recommended pre-upload edits.",
      icon: FileHeart,
      accent: "text-red-400 group-hover:text-red-350",
    },
    {
      number: "04",
      title: "Publish with Confidence",
      description: "Upload safely with cleared compliance badges, secure from surprise algorithmic de-monetization.",
      icon: ShieldCheck,
      accent: "text-emerald-400 group-hover:text-emerald-350",
    },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" id="how-it-works-section">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Simple 4-Step Process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight" id="how-it-works-title">
            How CreatorShield AI Works
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">
            Protecting your revenue stream is completely streamlined. Run pre-upload compliance checks in under 90 seconds.
          </p>
        </div>

        {/* Real Analytical Engine Disclaimer Callout */}
        <div className="mb-12 max-w-4xl mx-auto p-4 md:p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm" id="real-engine-emphasis-box">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            <SearchCode className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <span>🔬 Deep Historical Analytics — Not Generic AI Chatbots</span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400">Policy Matched</span>
            </h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              CreatorShield is not a template generator or a generic ChatGPT prompt wrapper. Our systems execute <strong className="text-emerald-400 font-semibold font-mono">deep mathematical audits and forensic soundwave comparisons</strong> against YouTube's official Automated Content Match guidelines. We crawl historic catalog registries to detect flag triggers specific to your exact channel niche.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 relative group hover:border-zinc-700 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
              >
                {/* Horizontal flow arrow helper for large screens */}
                {index < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center text-zinc-700 group-hover:text-emerald-500/40 transition-colors pointer-events-none">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                )}

                {/* Top Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-zinc-950 border border-zinc-805 rounded-xl transition-colors">
                    <IconComponent className={`w-6 h-6 ${step.accent}`} />
                  </div>
                  <span className="text-lg font-mono font-bold text-zinc-700 group-hover:text-emerald-500/20 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-base md:text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
