import { motion } from "motion/react";
import { Mic, AlertTriangle, Layers, Grid3X3, Film, Settings, RefreshCw, XCircle } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      id: "pain-ai-voice",
      title: "The AI Voice Trap",
      icon: Mic,
      tag: "Undisclosed Synthetics Code: SV-7",
      severity: "CRITICAL",
      severityColor: "text-red-400 bg-red-400/10 border-red-500/20",
      pain: "You used a synthetic voice clone or text-to-speech tool, and YouTube's forensic filters flagged it as undisclosed or low-effort automated content.",
      mockLabel: "Forensic Speech Match",
      mockMatch: "91% Synthetic Probability",
    },
    {
      id: "pain-reused",
      title: "The Recap & Fair Use Nightmare",
      icon: Film,
      tag: "Reused Content Policy: RC-04",
      severity: "HIGH RISK",
      severityColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
      pain: "You spend 20 hours editing movie or football recaps, only to get slapped with a 'Reused Content' monetization rejection because your visual transformation ratio was too low.",
      mockLabel: "Transformation Index",
      mockMatch: "14% Creative Modification",
    },
    {
      id: "pain-thumbnails",
      title: "The Thumbnail & Template Loop",
      icon: Layers,
      tag: "Spam & Deceptive Practices: TS-19",
      severity: "HIGH RISK",
      severityColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
      pain: "You use uniform templates for your faceless channel network. YouTube's automated systems flag the visual repetition as spam, banning your entire network.",
      mockLabel: "Template Uniformity",
      mockMatch: "88% Visual Identity Match",
    },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" id="pain-points-section">
      {/* Decorative accent grid lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Algorithmic Threat Risk
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight" id="pain-points-title">
            The System is Automated. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Your Risk is Real.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">
            YouTube checks every upload against a central deep-neural neural registry. Once flagged by automated parsers, human appeals are rejected 93% of the time.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, borderColor: "rgba(239, 68, 68, 0.25)" }}
                className="flex flex-col h-full bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 transition-all relative group shadow-lg overflow-hidden"
              >
                {/* Background red border highlight on group hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card Icon & Tags */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-red-400 group-hover:text-red-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded border font-semibold tracking-wider ${item.severityColor}`}>
                    {item.severity}
                  </span>
                </div>

                {/* Pain Title */}
                <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                {/* Pain Description */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {item.pain}
                </p>

                {/* Stylized Forensic Telemetry Box inside Card */}
                <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800/60 flex flex-col gap-1.5 font-mono text-[11px] text-zinc-500 relative mt-auto">
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] text-red-500/80 bg-red-500/5 px-1.5 py-0.5 border border-red-500/10 rounded">
                    <AlertTriangle className="w-2.5 h-2.5 animate-pulse" />
                    <span>FLAG TRIGGERED</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 border-b border-zinc-900 pb-1.5 mb-1 flex items-center justify-between font-semibold">
                    <span>{item.tag}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Audit Diagnostic:</span>
                    <span className="text-zinc-400">{item.mockLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Forensic Ratio:</span>
                    <span className="text-red-400 font-semibold">{item.mockMatch}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
