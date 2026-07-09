import { useState } from "react";
import { 
  Code2, 
  Binary, 
  Palette, 
  Cpu, 
  Atom, 
  Layers, 
  Network, 
  Database, 
  GitBranch, 
  Github, 
  Terminal, 
  Send,
  Sparkles,
  Award,
  Globe,
  Settings
} from "lucide-react";
import { motion } from "motion/react";
import { skillsData } from "../data";
import { Skill } from "../types";

// Logo mapping dictionary using Devicon SVG URLs
const logoMap: Record<string, string> = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C Language": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

const iconMap: Record<string, any> = {
  Code2: Code2,
  Binary: Binary,
  Palette: Palette,
  Cpu: Cpu,
  Atom: Atom,
  Layers: Layers,
  Network: Network,
  Database: Database,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
  Send: Send,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Programming" | "Frontend" | "Backend" | "Database" | "Tools">("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const categories = ["All", "Programming", "Frontend", "Backend", "Database", "Tools"] as const;

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);
  
  const topCategories = ["Java / Spring Boot", "Databases (SQL & NoSQL)", "Modern React UI"];

  // Custom descriptions to show on card hover
  const getSkillDesc = (name: string): string => {
    switch (name) {
      case "Java": return "Primary stack. Multi-threading, Clean OOP, Collections, JVM performance.";
      case "C Language": return "Strong memory allocation concepts, pointer arithmetics, compile architectures.";
      case "HTML5": return "Semantic layouts, structured accessible tags, media embed logic.";
      case "CSS3": return "Responsive Grids, Flexbox models, custom animations, variables.";
      case "JavaScript": return "ES6+ asynchronous loops, DOM control, functional closures.";
      case "React": return "Single Page App architectures, Hooks, component state virtualization, transitions.";
      case "Spring Boot": return "RESTful endpoints, spring security context, MVC models, Dependency Ingestion.";
      case "REST APIs": return "HTTP payloads, client content negotiations, CORS configs, token controls.";
      case "MySQL": return "Relational schema designs, complex SQL joins, indexing, transaction commits.";
      case "MongoDB": return "NoSQL document stores, flexible query pipelines, indexing controls.";
      case "Git": return "Local CLI revisioning, branching strategies, merge conflicts resolvings.";
      case "GitHub": return "Remote repositories management, pull workflows, GitHub Actions basic runs.";
      case "VS Code": return "Development tooling, custom linters configs, shortcut automation extensions.";
      case "Postman": return "HTTP test collections, mock payloads, automated API test setups.";
      case "Cursor": return "Next-generation AI code editor with inline chat, semantic codebase indexing, and multi-file code editing.";
      case "Antigravity": return "Advanced agentic AI pairing partner assisting in codebase maintenance, feature engineering, and package configurations.";
      default: return "Academic standard competencies, active usage in project compilation pipelines.";
    }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-[#0F172A]/50 dark:bg-[#0F172A]/50 light:bg-slate-100 border-t border-b border-indigo-500/10 text-slate-900 dark:text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2"
          >
            Technical Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Skills Dashboard
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                 activeCategory === cat
                   ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/20"
                   : "glass hover:bg-slate-800 text-slate-650 dark:text-slate-300"
               }`}
            >
              {cat === "All" ? "⚡ All Stack" : cat}
            </button>
          ))}
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dashboard summaries */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 magnetic-card"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Technical Overview
              </h3>

              {/* Stack Architecture Info Card */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-850 mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-base font-bold mb-1">Full-Stack Core</p>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Competency across server architectures, database pipelines, dynamic UI state components, and active API routing controls.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3.5 border-t border-slate-200 dark:border-slate-800/60 pt-5">
                <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-violet-400" /> Key Strengths
                </h4>
                {topCategories.map((competency, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{competency}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hover Explainer Panel */}
            <motion.div
              animate={{ opacity: 1 }}
              className="glass p-5 rounded-2xl accent-glow min-h-[140px] border border-indigo-500/10 flex flex-col justify-center"
            >
              {hoveredSkill ? (
                <div>
                  <h4 className="text-sm font-bold text-indigo-500 dark:text-indigo-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    {hoveredSkill.name} Insights
                  </h4>
                  <p className="text-slate-650 dark:text-slate-350 text-xs mt-2 font-light leading-relaxed">
                    {getSkillDesc(hoveredSkill.name)}
                  </p>
                  <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-slate-200/50 dark:border-slate-800/40">
                    <span className="inline-block font-mono text-[9px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-850 text-slate-500 dark:text-slate-400">
                      Category: {hoveredSkill.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-2">
                  <Globe className="w-6 h-6 text-slate-400 dark:text-slate-500 mx-auto mb-2 animate-bounce" />
                  <p className="text-slate-550 dark:text-slate-400 text-xs font-light">
                    Hover over any capability card to read execution details.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Skill Cards Grid */}
          <div className="lg:col-span-8">
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {filteredSkills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon] || Code2;

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: Math.min(8, index) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="glass p-5 rounded-2xl accent-glow flex flex-col justify-between cursor-default group border border-indigo-500/10 transition-all duration-300 magnetic-card"
                  >
                    <div>
                      {/* Skill category tag */}
                      <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-3 group-hover:text-indigo-400 transition-colors">
                        {skill.category}
                      </span>

                      {/* Logo and Name row */}
                      <div className="flex items-center gap-3.5 mb-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200/50 dark:border-slate-850/50 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300 shadow-sm shrink-0">
                          {logoMap[skill.name] ? (
                            <img 
                              src={logoMap[skill.name]} 
                              alt={`${skill.name} logo`} 
                              className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="text-slate-650 dark:text-slate-300 group-hover:text-indigo-500 transition-colors">
                              <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
