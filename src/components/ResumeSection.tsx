import { useState } from "react";
import { Download, FileText, CheckCircle, Sparkles, Star, Award, ShieldAlert, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ResumeSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const highlights = [
    "CGPA 8.7 (Top-tier standing in CSE)",
    "Java Specialist (Spring core framework & collections)",
    "Full-Stack capability (React UI + REST API backend)",
    "SQL Database Architect (Optimizations, schemas)",
    "Responsive layout specialist (Mobile-first setups)"
  ];

  const triggerResumeDownload = () => {
    const a = document.createElement("a");
    a.href = "/Indhumathi_Resume.pdf";
    a.download = "Indhumathi_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const atsScore = 88;

  return (
    <section id="resume" className="py-24 px-4 bg-[#0F172A] dark:bg-[#0F172A] light:bg-[#F8FAFC] text-slate-900 dark:text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2"
          >
            Employment Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Resume Center
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid - Centered without direct PDF preview */}
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* ATS Score card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 flex items-center gap-6"
          >
            <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  className="stroke-slate-800 fill-none"
                  strokeWidth="5"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  className="stroke-indigo-500 fill-none"
                  strokeWidth="5"
                  strokeDasharray={`${2 * Math.PI * 38}`}
                  strokeDashoffset={`${2 * Math.PI * 38 * (1 - atsScore / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xl font-black text-slate-900 dark:text-white">{atsScore}%</span>
                <span className="text-[8px] uppercase tracking-wider font-mono text-slate-500">ATS Match</span>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-450" />
                Recruiter Friendly Score
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Optimized keywords targeting Java Full-Stack roles, REST API models, relational schemas, and responsive web systems.
              </p>
            </div>
          </motion.div>

          {/* Resume Highlights Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 space-y-4"
          >
            <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
              <Star className="w-4 h-4 text-violet-400" /> Core Strengths Summary
            </h4>
            <div className="space-y-3">
              {highlights.map((high, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-indigo-550/15 text-indigo-400 mt-0.5 shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 text-xs font-light leading-relaxed">{high}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10"
          >
            <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" /> Quick Credentials
            </h4>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-2xl">
                <p className="text-[10px] font-mono text-slate-500">CGPA</p>
                <p className="text-xs font-black text-indigo-400 mt-1">8.7 / 10</p>
              </div>
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-2xl">
                <p className="text-[10px] font-mono text-slate-500">Java Standard</p>
                <p className="text-xs font-black text-indigo-400 mt-1">Certified</p>
              </div>
            </div>
          </motion.div>

          {/* Download Resume trigger */}
          <div className="pt-4 w-full">
            <button
              id="resume-download-trigger"
              onClick={triggerResumeDownload}
              className="w-full px-8 py-4.5 rounded-2xl font-bold bg-gradient-to-r from-indigo-650 to-violet-650 hover:from-indigo-600 hover:to-violet-600 text-white shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300"
            >
              <Download className="w-5 h-5 animate-pulse" />
              Download Resume PDF
            </button>

            <AnimatePresence>
              {downloadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Success! Indhumathi's official resume PDF has been downloaded.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
