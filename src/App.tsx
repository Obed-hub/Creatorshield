import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Sparkles, TrendingUp, X, Gift } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import HowItWorks from "./components/HowItWorks";
import ComplianceDemo from "./components/ComplianceDemo";
import ReferralLoop from "./components/ReferralLoop";
import Socials from "./components/Socials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [joinedEmail, setJoinedEmail] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState("");
  const [referralCount, setReferralCount] = useState(0);
  const [position, setPosition] = useState(8419);
  const [incomingRef, setIncomingRef] = useState<string | null>(null);
  const [showRefPromo, setShowRefPromo] = useState(false);

  // Initialize and check URL search parameters
  useEffect(() => {
    // Check local storage for existing session
    const savedEmail = localStorage.getItem("creatorshield_email");
    const savedRefCode = localStorage.getItem("creatorshield_refcode");
    const savedRefCount = localStorage.getItem("creatorshield_refcount");
    const savedPosition = localStorage.getItem("creatorshield_position");

    if (savedEmail) {
      setJoinedEmail(savedEmail);
    }
    if (savedRefCode) {
      setReferralCode(savedRefCode);
    } else {
      // Generate a sleek random reference code on load
      const randomCode = "CS-" + Math.floor(10000 + Math.random() * 90000).toString(16).toUpperCase();
      setReferralCode(randomCode);
      localStorage.setItem("creatorshield_refcode", randomCode);
    }

    if (savedRefCount) {
      setReferralCount(parseInt(savedRefCount, 10));
    }
    if (savedPosition) {
      setPosition(parseInt(savedPosition, 10));
    } else {
      // Dynamic random starting spot
      const initialSpot = Math.floor(7500 + Math.random() * 3000);
      setPosition(initialSpot);
      localStorage.setItem("creatorshield_position", initialSpot.toString());
    }

    // Parse incoming referral code from URL e.g. /?ref=CS-ABC12
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || params.get("code");
    if (ref) {
      setIncomingRef(ref);
      setShowRefPromo(true);
    }
  }, []);

  const handleJoinWaitlist = (email: string) => {
    setJoinedEmail(email);
    localStorage.setItem("creatorshield_email", email);

    // If they were referred, increment simulated initial reward state
    if (incomingRef) {
      setReferralCount(1);
      localStorage.setItem("creatorshield_refcount", "1");
      const nextPos = Math.max(1, position - 418);
      setPosition(nextPos);
      localStorage.setItem("creatorshield_position", nextPos.toString());
      setShowRefPromo(false);
    }
  };

  const handleSimulateReferral = () => {
    const nextCount = referralCount + 1;
    setReferralCount(nextCount);
    localStorage.setItem("creatorshield_refcount", nextCount.toString());

    // Jump forward in line
    const spotsToJump = Math.floor(110 + Math.random() * 140);
    const nextPos = Math.max(1, position - spotsToJump);
    setPosition(nextPos);
    localStorage.setItem("creatorshield_position", nextPos.toString());
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300 antialiased" id="creator-shield-app">
      {/* Dynamic promo invitation banner */}
      <AnimatePresence>
        {showRefPromo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-amber-600/90 to-yellow-600/90 border-b border-amber-500/20 text-black py-2.5 px-4 sticky top-0 z-50 shadow-md backdrop-blur flex items-center justify-between gap-4 font-sans text-xs md:text-sm font-semibold"
            id="referral-promo-banner"
          >
            <div className="flex items-center gap-2 max-w-xl mx-auto">
              <Gift className="w-4 h-4 text-black shrink-0 animate-bounce" />
              <span>
                You have been referred by creator <span className="font-mono text-xs underline">{incomingRef}</span>! Join the waitlist now to receive 1 bonus hour of forensic video scanning on launch.
              </span>
            </div>
            <button
              onClick={() => setShowRefPromo(false)}
              className="p-1 text-black hover:bg-black/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Area */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Form section */}
        <Hero
          joinedEmail={joinedEmail}
          onJoin={handleJoinWaitlist}
          referralCode={referralCode}
          position={position}
          referralCount={referralCount}
          onSimulateReferral={handleSimulateReferral}
        />

        {/* Pain Points empathy section */}
        <PainPoints />

        {/* How CreatorShield works step visualizer */}
        <HowItWorks />

        {/* Sandbox interactive test section */}
        <ComplianceDemo />

        {/* Viral referral program loop */}
        <ReferralLoop
          joinedEmail={joinedEmail}
          referralCode={referralCode}
          referralCount={referralCount}
          position={position}
          onSimulateReferral={handleSimulateReferral}
        />

        {/* Social media connections section */}
        <Socials />

        {/* FAQ section */}
        <FAQ />
      </main>

      {/* Footer disclaimer and policies */}
      <Footer />
    </div>
  );
}
