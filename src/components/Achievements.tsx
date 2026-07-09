import { Trophy, Code2, Award, Zap, Flame, Target } from "lucide-react";
import { motion } from "motion/react";
import { achievementsData } from "../data";

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Coding": return Code2;
      case "Certification": return Award;
      case "Competition": return Trophy;
      default: return Zap;
    }
  };

  const platforms = [
    { name: "LeetCode", metric: "150+ Solved", description: "Array & String Specialization", icon: Flame, color: "text-amber-500 bg-amber-500/10" },
    { name: "HackerRank", metric: "5 Star Gold", description: "Problem Solving & Java Badges", icon: Target, color: "text-emerald-500 bg-emerald-500/10" }
  ];

  return (
    <section id="achievements" className="py-24 px-4 bg-[#0F172A] dark:bg-[#0F172A] light:bg-[#F8FAFC] border-t border-b border-indigo-500/10 text-slate-900 dark:text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2">
            Milestones & Accolades
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Achievements Hub
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Coding Platform Statistics */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 space-y-6 magnetic-card"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-indigo-400" />
                Platform Standings
              </h3>

              <div className="space-y-4">
                {platforms.map((plat) => {
                  const Icon = plat.icon;
                  return (
                    <motion.div
                      key={plat.name}
                      whileHover={{ x: 4 }}
                      className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800 flex items-center gap-4"
                    >
                      <div className={`p-3 rounded-xl ${plat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{plat.name}</h4>
                        <p className="text-xs font-mono font-bold text-indigo-400">{plat.metric}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{plat.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Achievements Timeline Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((ach, idx) => {
                const Icon = getIcon(ach.category);
                return (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="glass p-5 rounded-2xl accent-glow border border-indigo-500/10 flex flex-col justify-between magnetic-card"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                          {ach.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{ach.date}</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">{ach.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-1.5 leading-relaxed">
                            {ach.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center justify-between">
                      {ach.credentialUrl ? (
                        <a
                          href={ach.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono font-bold text-indigo-500 hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
                        >
                          View Certificate ↗
                        </a>
                      ) : (
                        <div />
                      )}
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400">
                        {ach.metric}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
