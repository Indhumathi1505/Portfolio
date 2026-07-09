import React, { useState } from "react";
import { 
  Github, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Smartphone,
  Server,
  Database,
  ArrowUpRight,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Project } from "../types";
import MagneticButton from "./MagneticButton";

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full group bg-slate-900/60 flex items-center justify-center">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-contain transition-all duration-350"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/60 text-white hover:bg-slate-900 border border-slate-800 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/60 text-white hover:bg-slate-900 border border-slate-800 hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  idx === currentIndex ? "bg-indigo-500 scale-110" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "AI" | "Java" | "Full Stack" | "Database" | "Frontend">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI", "Java", "Full Stack", "Database", "Frontend"] as const;

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "All") return true;
    if (filter === "AI") return p.title.toLowerCase().includes("ai") || p.description.toLowerCase().includes("ai");
    if (filter === "Java") return p.technologies.includes("Java") || p.technologies.includes("Spring Boot");
    if (filter === "Database") return p.technologies.includes("MySQL") || p.technologies.includes("MongoDB") || p.technologies.includes("Redis");
    if (filter === "Full Stack") return p.category === "Full Stack";
    if (filter === "Frontend") return p.category === "Frontend";
    return true;
  });

  const featuredProject = projectsData.find(p => p.id === "ekart") || projectsData[0];

  const renderProjectMockup = (id: string) => {
    switch (id) {
      case "ekart":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="15" y="40" width="115" height="135" rx="8" fill="#1e293b" stroke="#334155" />
            <rect x="20" y="45" width="105" height="60" rx="6" fill="#0f172a" />
            <rect x="35" y="75" width="75" height="15" rx="4" fill="#6366f1" />
            <circle cx="50" cy="95" r="5" fill="#1e293b" stroke="#fff" strokeWidth="1" />
            <circle cx="95" cy="95" r="5" fill="#1e293b" stroke="#fff" strokeWidth="1" />
            <text x="25" y="122" fill="#fff" fontSize="8" fontWeight="bold">Tesla Model S</text>
            <text x="25" y="135" fill="#10b981" fontSize="9" fontWeight="bold">$49,500</text>
            <rect x="145" y="40" width="240" height="135" rx="8" fill="#1e293b" stroke="#334155" />
            <rect x="145" y="40" width="240" height="25" rx="8" fill="#312e81" />
            <text x="155" y="56" fill="#fff" fontSize="8" fontWeight="bold">💬 Chat: Buyer &lt;&gt; Seller</text>
            <rect x="155" y="75" width="140" height="25" rx="6" fill="rgba(15,23,42,0.6)" />
            <text x="161" y="86" fill="#cbd5e1" fontSize="7">Is the front axle still under warranty?</text>
            <rect x="235" y="110" width="140" height="25" rx="6" fill="#4f46e5" />
            <text x="241" y="121" fill="#fff" fontSize="7">Yes! Covered till Dec 2027.</text>
          </svg>
        );
      case "smart-class-advisor":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="0" y="20" width="80" height="180" fill="rgba(15,23,42,0.9)" />
            <rect x="10" y="32" width="60" height="10" rx="3" fill="#4f46e5" />
            <text x="15" y="39" fill="#fff" fontSize="6" fontWeight="bold">Dashboard</text>
            <rect x="90" y="20" width="310" height="35" fill="rgba(30,41,59,0.5)" />
            <text x="105" y="41" fill="#fff" fontSize="10" fontWeight="bold">📊 Advisor Performance Suite</text>
            <rect x="105" y="65" width="130" height="115" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="115" y="80" fill="#94a3b8" fontSize="7" fontWeight="bold">GPA PROGRESSION</text>
            <rect x="120" y="120" width="15" height="30" rx="2" fill="#f59e0b" />
            <rect x="145" y="110" width="15" height="40" rx="2" fill="#84cc16" />
            <rect x="170" y="95" width="15" height="55" rx="2" fill="#6366f1" />
            <rect x="195" y="85" width="15" height="65" rx="2" fill="#10b981" />
          </svg>
        );
      case "coffee-website":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="0" y="20" width="400" height="35" fill="#451a03" />
            <text x="15" y="42" fill="#fef3c7" fontSize="12" fontWeight="bold">☕ Coffee Haven</text>
            <rect x="15" y="65" width="370" height="115" rx="8" fill="#292524" />
            <rect x="290" y="105" width="40" height="40" rx="10" fill="#d97706" />
            <rect x="325" y="112" width="12" height="24" rx="6" fill="none" stroke="#d97706" strokeWidth="4" />
            <text x="35" y="105" fill="#fff" fontSize="13" fontWeight="black">Rich Sensory Coffee</text>
          </svg>
        );
      case "legal-case":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="15" y="35" width="120" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="25" y="55" fill="#fff" fontSize="8" fontWeight="bold">📂 Active Cases</text>
            <rect x="25" y="70" width="100" height="25" rx="4" fill="rgba(15,23,42,0.6)" />
            <text x="30" y="80" fill="#cbd5e1" fontSize="6">State v. Davis</text>
            <text x="30" y="90" fill="#10b981" fontSize="6">Pending Trial</text>
            <rect x="25" y="105" width="100" height="25" rx="4" fill="rgba(15,23,42,0.6)" />
            <text x="30" y="115" fill="#cbd5e1" fontSize="6">Miller Contract</text>
            <text x="30" y="125" fill="#f59e0b" fontSize="6">In Review</text>
            <rect x="145" y="35" width="240" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="160" y="55" fill="#fff" fontSize="9" fontWeight="bold">⚖️ Docket Schedule</text>
            <line x1="160" y1="75" x2="360" y2="75" stroke="#475569" strokeWidth="1" />
            <circle cx="170" cy="95" r="4" fill="#6366f1" />
            <text x="185" y="98" fill="#fff" fontSize="7">Hearing: Motion to Dismiss</text>
            <text x="185" y="108" fill="#94a3b8" fontSize="6">Tomorrow at 10:00 AM</text>
            <circle cx="170" cy="135" r="4" fill="#10b981" />
            <text x="185" y="138" fill="#fff" fontSize="7">Client Consult: Dr. Green</text>
            <text x="185" y="148" fill="#94a3b8" fontSize="6">June 25 at 2:00 PM</text>
          </svg>
        );
      case "ai-reviewer":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="15" y="35" width="210" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="25" y="52" fill="#6366f1" fontSize="7" fontWeight="bold">diff --git a/index.js</text>
            <rect x="25" y="65" width="190" height="20" fill="rgba(239,68,68,0.15)" />
            <text x="30" y="77" fill="#f87171" fontSize="7">- const total = count * rate;</text>
            <rect x="25" y="90" width="190" height="20" fill="rgba(16,185,129,0.15)" />
            <text x="30" y="102" fill="#34d399" fontSize="7">+ const total = Math.max(0, count * rate);</text>
            <rect x="240" y="35" width="145" height="145" rx="8" fill="#312e81" stroke="#4338ca" />
            <text x="250" y="55" fill="#fff" fontSize="8" fontWeight="bold">🤖 AI Feedback</text>
            <rect x="250" y="70" width="125" height="95" rx="6" fill="rgba(15,23,42,0.6)" />
            <text x="256" y="85" fill="#cbd5e1" fontSize="6" fontWeight="bold">Security Note:</text>
            <text x="256" y="97" fill="#cbd5e1" fontSize="6">Value could result in negative</text>
            <text x="256" y="107" fill="#cbd5e1" fontSize="6">total if count is negative.</text>
            <text x="256" y="125" fill="#10b981" fontSize="6" fontWeight="bold">Fix suggestion applied!</text>
          </svg>
        );
      case "weather-app":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="15" y="35" width="150" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="25" y="55" fill="#94a3b8" fontSize="8" fontWeight="bold">NEW YORK</text>
            <text x="25" y="85" fill="#fff" fontSize="24" fontWeight="black">24°C</text>
            <text x="25" y="105" fill="#38bdf8" fontSize="8">🌦️ Scattered Showers</text>
            <text x="25" y="130" fill="#94a3b8" fontSize="7">Humidity: 82%</text>
            <text x="25" y="142" fill="#94a3b8" fontSize="7">Wind: 12 km/h</text>
            <rect x="180" y="35" width="205" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="195" y="55" fill="#fff" fontSize="8" fontWeight="bold">5-DAY OUTLOOK</text>
            <text x="195" y="80" fill="#94a3b8" fontSize="7">Mon: 25° 🌦️</text>
            <text x="195" y="98" fill="#94a3b8" fontSize="7">Tue: 27° ☀️</text>
            <text x="195" y="116" fill="#94a3b8" fontSize="7">Wed: 26° ☁️</text>
            <text x="195" y="134" fill="#94a3b8" fontSize="7">Thu: 24° 🌧️</text>
            <text x="195" y="152" fill="#94a3b8" fontSize="7">Fri: 28° ☀️</text>
          </svg>
        );
      case "calculator":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="15" y="35" width="130" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <rect x="25" y="45" width="110" height="35" rx="4" fill="#0f172a" />
            <text x="125" y="58" fill="#94a3b8" fontSize="7" textAnchor="end">12 * (4 + 6)</text>
            <text x="125" y="73" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="end">120</text>
            <rect x="25" y="90" width="20" height="15" rx="2" fill="#475569" /><text x="35" y="100" fill="#fff" fontSize="7" textAnchor="middle">7</text>
            <rect x="55" y="90" width="20" height="15" rx="2" fill="#475569" /><text x="65" y="100" fill="#fff" fontSize="7" textAnchor="middle">8</text>
            <rect x="85" y="90" width="20" height="15" rx="2" fill="#475569" /><text x="95" y="100" fill="#fff" fontSize="7" textAnchor="middle">9</text>
            <rect x="115" y="90" width="20" height="15" rx="2" fill="#f97316" /><text x="125" y="100" fill="#fff" fontSize="7" textAnchor="middle">/</text>
            <rect x="25" y="110" width="20" height="15" rx="2" fill="#475569" /><text x="35" y="120" fill="#fff" fontSize="7" textAnchor="middle">4</text>
            <rect x="55" y="110" width="20" height="15" rx="2" fill="#475569" /><text x="65" y="120" fill="#fff" fontSize="7" textAnchor="middle">5</text>
            <rect x="85" y="110" width="20" height="15" rx="2" fill="#475569" /><text x="95" y="120" fill="#fff" fontSize="7" textAnchor="middle">6</text>
            <rect x="115" y="110" width="20" height="15" rx="2" fill="#f97316" /><text x="125" y="120" fill="#fff" fontSize="7" textAnchor="middle">*</text>
            <rect x="25" y="130" width="20" height="15" rx="2" fill="#475569" /><text x="35" y="140" fill="#fff" fontSize="7" textAnchor="middle">1</text>
            <rect x="55" y="130" width="20" height="15" rx="2" fill="#475569" /><text x="65" y="140" fill="#fff" fontSize="7" textAnchor="middle">2</text>
            <rect x="85" y="130" width="20" height="15" rx="2" fill="#475569" /><text x="95" y="140" fill="#fff" fontSize="7" textAnchor="middle">3</text>
            <rect x="115" y="130" width="20" height="15" rx="2" fill="#f97316" /><text x="125" y="140" fill="#fff" fontSize="7" textAnchor="middle">-</text>
            <rect x="25" y="150" width="50" height="15" rx="2" fill="#475569" /><text x="50" y="160" fill="#fff" fontSize="7" textAnchor="middle">0</text>
            <rect x="85" y="150" width="20" height="15" rx="2" fill="#6366f1" /><text x="95" y="160" fill="#fff" fontSize="7" textAnchor="middle">=</text>
            <rect x="115" y="150" width="20" height="15" rx="2" fill="#f97316" /><text x="125" y="160" fill="#fff" fontSize="7" textAnchor="middle">+</text>
            <rect x="160" y="35" width="225" height="145" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="175" y="55" fill="#fff" fontSize="8" fontWeight="bold">📓 MATH LEDGER HISTORY</text>
            <text x="175" y="75" fill="#94a3b8" fontSize="7">12 * (4 + 6) = 120</text>
            <text x="175" y="93" fill="#94a3b8" fontSize="7">log10(100) + 5 = 7</text>
            <text x="175" y="111" fill="#94a3b8" fontSize="7">sqrt(16) * 3 = 12</text>
          </svg>
        );
      case "placement-ai":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-full bg-slate-950">
            <rect x="0" y="0" width="400" height="20" fill="#0f172a" />
            <circle cx="10" cy="10" r="3" fill="#ef4444" />
            <circle cx="20" cy="10" r="3" fill="#f59e0b" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <rect x="0" y="20" width="80" height="180" fill="rgba(15,23,42,0.9)" />
            <rect x="10" y="32" width="60" height="8" rx="2" fill="#4f46e5" />
            <text x="15" y="38" fill="#fff" fontSize="5" fontWeight="bold">Mock Interview</text>
            <rect x="10" y="45" width="60" height="8" rx="2" fill="rgba(255,255,255,0.05)" />
            <text x="15" y="51" fill="#94a3b8" fontSize="5">Resume Parser</text>
            <rect x="10" y="58" width="60" height="8" rx="2" fill="rgba(255,255,255,0.05)" />
            <text x="15" y="64" fill="#94a3b8" fontSize="5">Roadmaps</text>
            <rect x="90" y="30" width="300" height="160" rx="8" fill="#1e293b" stroke="#334155" />
            <rect x="100" y="45" width="160" height="40" rx="6" fill="#312e81" />
            <text x="106" y="55" fill="#fff" fontSize="6" fontWeight="bold">🤖 AI Career Assistant</text>
            <text x="106" y="67" fill="#cbd5e1" fontSize="5.5">Reviewing resume... Extracted: Java, Spring,</text>
            <text x="106" y="77" fill="#cbd5e1" fontSize="5.5">React. Match score for Full-Stack: 88%.</text>
            <rect x="270" y="45" width="110" height="90" rx="6" fill="rgba(15,23,42,0.6)" stroke="#4338ca" />
            <text x="276" y="57" fill="#fff" fontSize="6" fontWeight="bold">🎙️ Interview Session</text>
            <circle cx="325" cy="85" r="12" fill="#ef4444" opacity="0.2" className="animate-pulse" />
            <circle cx="325" cy="85" r="7" fill="#ef4444" />
            <text x="276" y="115" fill="#10b981" fontSize="5.5">Analyzing speech & skills...</text>
            <rect x="100" y="100" width="160" height="35" rx="6" fill="rgba(15,23,42,0.6)" />
            <text x="106" y="112" fill="#fff" fontSize="5.5" fontWeight="bold">🗺️ Java Full-Stack Roadmap</text>
            <rect x="106" y="122" width="100" height="4" rx="2" fill="#475569" />
            <rect x="106" y="122" width="75" height="4" rx="2" fill="#10b981" />
            <text x="212" y="126" fill="#10b981" fontSize="5" fontWeight="bold">75% Done</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-[#0F172A] dark:bg-[#0F172A] light:bg-[#F8FAFC] text-slate-900 dark:text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2"
          >
            Finished Engineering Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Spotlight Projects
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Project Spotlight (Stripe-like featured card) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass rounded-3xl overflow-hidden border border-indigo-500/15 mb-16 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center accent-glow magnetic-card"
          >
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 aspect-video shadow-2xl relative group bg-slate-950 flex items-center justify-center">
              {featuredProject.videoUrl ? (
                <video
                  src={featuredProject.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                renderProjectMockup(featuredProject.id)
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/5 pointer-events-none" />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-[9px] font-bold uppercase tracking-widest border border-indigo-500/20">
                  ⚡ Featured Spotlight
                </span>
                <span className="text-[10px] font-mono text-slate-500">{featuredProject.category}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {featuredProject.title}
              </h3>

              <p className="text-slate-650 dark:text-slate-350 text-sm font-light leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {featuredProject.technologies.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-300 text-[10px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center gap-4">
                <MagneticButton
                  onClick={() => setSelectedProject(featuredProject)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-650 hover:bg-indigo-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-550/10 cursor-pointer"
                >
                  Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 hover:text-indigo-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? "bg-slate-100 dark:bg-slate-900 border-indigo-500/50 text-indigo-600 dark:text-indigo-400 shadow-md shadow-indigo-500/5"
                  : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {cat === "All" ? "⭐ Showcase All" : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative rounded-3xl glass accent-glow overflow-hidden flex flex-col justify-between border border-indigo-500/10 magnetic-card"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden border-b border-indigo-500/10 bg-slate-950 flex items-center justify-center">
                    {project.videoUrl ? (
                      <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      renderProjectMockup(project.id)
                    )}
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-mono text-[9px] font-bold uppercase tracking-wider mb-3">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-650 dark:text-slate-350 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[9px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/50 dark:border-slate-800/40 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                  >
                    Case Study & Details
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 hover:text-indigo-500 dark:hover:text-white transition-all duration-200"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Modal popup details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl z-10 p-6 md:p-8 text-slate-900 dark:text-[#F8FAFC]"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1.5 tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-6 bg-slate-950 flex items-center justify-center">
                  {selectedProject.videoUrl ? (
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : selectedProject.images && selectedProject.images.length > 0 ? (
                    <ImageSlider images={selectedProject.images} />
                  ) : (
                    renderProjectMockup(selectedProject.id)
                  )}
                </div>

                <div className="space-y-5 max-h-[200px] overflow-y-auto pr-1">
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" /> Summary
                    </h4>
                    <p className="text-slate-700 dark:text-slate-350 text-xs font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.extendedDescription && (
                    <div>
                      <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-1.5 flex items-center gap-1.5 mt-4">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Extended Case Study
                      </h4>
                      <p className="text-slate-700 dark:text-slate-350 text-xs font-light leading-relaxed">
                        {selectedProject.extendedDescription}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" /> Features & metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-950/45 border border-slate-200 dark:border-slate-800/40">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 text-xs font-light leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Technologies used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-1">
                          {tech === "Spring Boot" || tech === "Java" ? (
                            <Server className="w-3.5 h-3.5 text-indigo-400" />
                          ) : tech === "MySQL" || tech === "MongoDB" || tech === "Redis" ? (
                            <Database className="w-3.5 h-3.5 text-amber-550" />
                          ) : (
                            <Smartphone className="w-3.5 h-3.5 text-violet-400" />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-505 uppercase">
                    CSE Govt College of Engineering, Erode
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-750 dark:text-slate-200 font-semibold text-xs flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" /> Repo
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
