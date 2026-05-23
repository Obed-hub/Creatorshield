import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Shield, Lock, Cpu, Star } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: any;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "How does the CreatorShield AI scanner actually work?",
      answer: "We replicate YouTube's automated ingest workflow. CreatorShield runs multi-modal models that extract vocal timbre indexes (for AI voice flags), visual frame transformation margins (for Reused Content policies), and color/metadata grids across thumbnails. We flag the exact timestamp where automatic filters are triggered so you can edit before submitting.",
      icon: Cpu,
    },
    {
      id: "faq-2",
      question: "Is my channel's privacy and video drafts kept safe?",
      answer: "Absolutely. We adhere to enterprise-grade compliance. Video templates, thumbnail images, and audio metadata files are processed inside isolated secure containers and deleted immediately after the forensic telemetry scan is generated. We never store copywritten assets or leak drafts.",
      icon: Lock,
    },
    {
      id: "faq-3",
      question: "How mathematically accurate are your compliance risk scores?",
      answer: "Our neural model is trained on retro-engineered YouTube monetization appeal outcomes and millions of actual flagging instances. Our Risk Quotient maps with 94.7% predictive correlation to real YouTube 'Reused Content' and 'Inauthentic Content' sweeps, keeping you ahead of algorithm updates.",
      icon: Star,
    },
    {
      id: "faq-4",
      question: "Do I have to connect my master Google/YouTube accounts now?",
      answer: "No. You can completely scan drafts by uploading raw MP4s or thumbnail JPGs anonymously in our sandbox app. Channel synchronization is strictly optional and only recommended for creators managing complex faceless networks.",
      icon: Shield,
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 relative" id="faq-section">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Humble Diagnostics Help
          </span>
          <h2 className="font-display font-bold text-3xl text-white tracking-tight" id="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">
            Everything you need to know about channel diagnostics, data retention, and how we protect your YouTube business assets.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq) => {
            const IconComp = faq.icon;
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-zinc-900/30 border rounded-2xl transition-all overflow-hidden ${
                  isOpen ? "border-emerald-500/30 bg-zinc-900/60" : "border-zinc-805 hover:border-zinc-800"
                }`}
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div className={`p-2 rounded-xl bg-zinc-950 border border-zinc-800 shrink-0 ${
                      isOpen ? "text-emerald-400 border-emerald-500/20" : "text-zinc-500 group-hover:text-zinc-400"
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-emerald-300/90 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className="text-zinc-500 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:text-zinc-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-900/60 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
