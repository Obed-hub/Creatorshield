import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, CheckCircle2, AlertTriangle, Play, RefreshCw, Cpu, Film, Terminal, Eye, HelpCircle } from "lucide-react";

type ScanType = "voice" | "reused" | "template";

export default function ComplianceDemo() {
  const [activeTab, setActiveTab] = useState<ScanType>("voice");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [report, setReport] = useState<any | null>(null);

  const scanProfiles = {
    voice: {
      title: "AI Vocal Fingerprinting",
      description: "Analyze synthetic vocal profiles, pitch anomalies, and synthetic voice cloners against YouTube's speech database.",
      preset: {
        filename: "faceless_finance_v3.mp3",
        duration: "08:24",
        format: "AAC 44.1kHz",
      },
      steps: [
        "Initializing vocal raw acoustic extraction...",
        "Running spectral noise signature analyzer...",
        "Comparing clones with standard ElevenLabs & PlayHT neural models...",
        "Matching vocal pitch variances against AI generation benchmarks...",
        "Vocal audit scan completed.",
      ],
      report: {
        score: "89% AI Speech",
        status: "HIGH RISK",
        badgeColor: "text-red-400 bg-red-400/10 border-red-500/20",
        message: "Severe match found with PlayHT 'Antony' model. Lacks physical breathing artifacts and speech micro-jitter. High probability of demonetization on upload.",
        recommends: "Apply warm-room audio filter, blend synthetic layer with a real ambient noise bed, or add a short 5-second human intro statement.",
      }
    },
    reused: {
      title: "Fair Use Transformative Index",
      description: "Measure structural video transformation ratios—compares your visual speed, zoom edits, and commentary layers.",
      preset: {
        filename: "movie_recaps_final_render.mp4",
        duration: "12:15",
        format: "H.264 1080p",
      },
      steps: [
        "Ingesting visual frame sequence indexes...",
        "Retrieving YouTube content registry fingerprint...",
        "Analyzing commentary-to-silent ratios...",
        "Calculating visual transformation differentials (zoom, pan, cuts)...",
        "Fair Use audit scan completed.",
      ],
      report: {
        score: "18% Transformative",
        status: "ELEVATED RISK",
        badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
        message: "Video loops original footage for longer than 8 seconds without commentary overlay. Visual transformation index is lower than the 45% monetization threshold.",
        recommends: "Insert commentary every 5 seconds, use picture-in-picture dynamic frames, or use custom stylized overlay borders.",
      }
    },
    template: {
      title: "Uniform Channel Network Scrubber",
      description: "Checks thumbnail visual similarity, template loops, and common repeating overlays across a channel network.",
      preset: {
        filename: "thumbnail_pack_bundle.zip",
        duration: "00:00",
        format: "PNG / JPG Metadata",
      },
      steps: [
        "Loading uniform thumbnail batch profiles...",
        "Comparing visual layout coordinates in template databases...",
        "Measuring exact hex color distribution similarities...",
        "Parsing EXIF metadata duplicate profiles...",
        "Metadata scrub audit completed.",
      ],
      report: {
        score: "92% Visual Similarity",
        status: "CRITICAL",
        badgeColor: "text-red-400 bg-red-400/10 border-red-500/20",
        message: "Uniform thumbnail grid identified. Automated systems will flag this pattern as Spam/Deceptive Practice loop sweep across multiple accounts.",
        recommends: "Vary font sizes, shuffle high-contrast primary hex colors, use unique background textures, and delete standard canvas presets before writing JPGs.",
      }
    }
  };

  const handleStartScan = (type: ScanType) => {
    setIsScanning(true);
    setProgress(0);
    setLogs([]);
    setReport(null);

    const profile = scanProfiles[type];
    let stepIndex = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next % 20 === 0 && stepIndex < profile.steps.length) {
          setLogs((prevLogs) => [...prevLogs, `> ${profile.steps[stepIndex]}`]);
          stepIndex++;
        }
        if (next >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setReport(profile.report);
          return 100;
        }
        return next;
      });
    }, 150);
  };

  const activeProfile = scanProfiles[activeTab];

  return (
    <section className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 relative" id="compliance-sandbox">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Interactive Testbed
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
            See How CreatorShield Analyzes Your File
          </h2>
          <p className="mt-3 text-zinc-400 text-sm md:text-base">
            Select an upload profile below to run our forensic sandbox. Detect demonetization flags before pushing live.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Left Controls */}
          <div className="p-6 lg:p-8 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                Select Forensic Audit Profile
              </span>

              {/* Navigation Tabs */}
              <div className="flex flex-col gap-2.5">
                {(Object.keys(scanProfiles) as ScanType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      if (!isScanning) {
                        setActiveTab(tab);
                        setReport(null);
                        setLogs([]);
                        setProgress(0);
                      }
                    }}
                    disabled={isScanning}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                      activeTab === tab
                        ? "bg-emerald-500/5 border-emerald-500/40 text-white"
                        : "bg-zinc-950/60 border-zinc-800/60 hover:border-zinc-700/80 text-zinc-400 hover:text-white"
                    }`}
                    id={`demo-tab-${tab}`}
                  >
                    <div>
                      <span className="font-display font-semibold text-sm block">
                        {scanProfiles[tab].title}
                      </span>
                      <span className="text-[11px] text-zinc-500 mt-1 block font-mono">
                        {scanProfiles[tab].preset.filename}
                      </span>
                    </div>
                    <Terminal className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      activeTab === tab ? "text-emerald-400" : "text-zinc-600"
                    }`} />
                  </button>
                ))}
              </div>

              <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/80">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {activeProfile.description}
                </p>
              </div>
            </div>

            {/* Run Trigger */}
            <div className="pt-6">
              <button
                onClick={() => handleStartScan(activeTab)}
                disabled={isScanning}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-2 text-sm transition-all cursor-pointer ${
                  isScanning
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700"
                    : "bg-white hover:bg-zinc-100 text-zinc-950 shadow-md hover:shadow-lg"
                }`}
                id="demo-scan-trigger-btn"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>Analyzing Signatures ({progress}%)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                    <span>Run Verification Scan</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Output Console */}
          <div className="p-6 lg:p-8 lg:col-span-7 bg-zinc-950 flex flex-col min-h-[380px] justify-between relative">
            <div>
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 block" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-2">
                    CREATORSHIELD SANDBOX CORE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                  {activeProfile.preset.format}
                </span>
              </div>

              {/* Scanning status/logs */}
              <div className="space-y-2.5 font-mono text-xs text-zinc-400 min-h-[140px]">
                <div className="text-zinc-500">
                  $ ./creatorshield-audit --file={activeProfile.preset.filename}
                </div>

                <AnimatePresence>
                  {logs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[11px] text-zinc-300 tracking-wider font-mono flex items-center gap-1.5"
                    >
                      <span className="text-emerald-500/85">✔</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                  {isScanning && (
                    <div className="pt-2">
                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </AnimatePresence>

                {!isScanning && logs.length === 0 && !report && (
                  <div className="flex flex-col items-center justify-center py-8 text-center" id="demo-blank-console">
                    <Terminal className="w-8 h-8 text-zinc-800 mb-2" />
                    <span className="text-zinc-600 text-xs">Sandbox Idle. Click 'Run Verification Scan' to initiate compliance telemetry check.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Simulated Audit Report (Result Card) */}
            <AnimatePresence>
              {report && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-zinc-900/85 border border-zinc-800 p-4 rounded-xl space-y-3"
                  id="demo-report-card"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-400" />
                      Audited Violations Report
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${report.badgeColor}`}>
                      {report.status} ({report.score})
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                    {report.message}
                  </p>

                  <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-[11px] font-sans">
                    <span className="text-emerald-400 font-semibold block mb-1">💡 Pre-upload Fix Action:</span>
                    <span className="text-zinc-400 leading-relaxed">{report.recommends}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
