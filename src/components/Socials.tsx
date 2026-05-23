import { motion } from "motion/react";
import { MessageSquare, Twitter, Youtube, Send, Radio, MessageCircleCode, ArrowUpRight } from "lucide-react";

export default function Socials() {
  const complianceFeeds = [
    {
      id: "feed-discord",
      channel: "Discord",
      label: "Support Community",
      link: "https://discord.gg/creatorshield-mock",
      icon: MessageSquare,
      accent: "hover:text-[#5865F2] hover:border-[#5865F2]/40 hover:bg-[#5865F2]/5",
      badge: "4,120 online",
      details: "Ask questions, share appeal letters, and discuss demonetization cases.",
    },
    {
      id: "feed-x",
      channel: "X / Twitter",
      label: "@CreatorShield_AI",
      link: "https://x.com/creatorshield-mock",
      icon: Twitter,
      accent: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/5",
      badge: "Real-time Alerts",
      details: "Breaking news on YouTube Policy updates, algorithm leaks, and filter changes.",
    },
    {
      id: "feed-youtube",
      channel: "YouTube",
      label: "Compliance Studio",
      link: "https://youtube.com/creatorshield-mock",
      icon: Youtube,
      accent: "hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5",
      badge: "Video Guides",
      details: "Deconstructions of demonetized channels and step-by-step pre-upload reviews.",
    },
    {
      id: "feed-telegram",
      channel: "Telegram",
      label: "Shield Alerts Broadcast",
      link: "https://t.me/creatorshield-mock",
      icon: Send,
      accent: "hover:text-[#24A1DE] hover:border-[#24A1DE]/40 hover:bg-[#24A1DE]/5",
      badge: "Instant Alerts",
      details: "Push notifications the second a new YouTube monetization filter sweep goes active.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 relative" id="social-community-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>REAL-TIME INTEL FEEDS</span>
          </div>

          <h2 className="font-display font-bold text-3xl text-white tracking-tight" id="socials-title">
            Follow Our Compliance Updates
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">
            We track YouTube’s algorithm updates in real-time. Join our community to see exactly what filters are flagging creators this week.
          </p>
        </div>

        {/* Dynamic community layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {complianceFeeds.map((feed, index) => {
            const IconComp = feed.icon;
            return (
              <motion.a
                key={feed.id}
                href={feed.link}
                target="_blank"
                rel="noreferrer"
                id={`social-link-${feed.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-zinc-900/30 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all ${feed.accent} relative group`}
              >
                <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-805 text-zinc-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white group-hover:text-inherit transition-colors">
                        {feed.channel}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500 block">
                        {feed.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {feed.details}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-900/40 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 uppercase">COMMUNITY HUB</span>
                  <span className="text-emerald-400 tracking-wider font-semibold">
                    {feed.badge}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
