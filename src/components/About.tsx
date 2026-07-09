import { 
  BookOpen, 
  Award, 
  Target, 
  Cpu, 
  Users, 
  Shield, 
  Code2, 
  Sparkles,
  Heart,
  FileText
} from "lucide-react";
import { motion } from "motion/react";
import { ownerDetails, aboutFeaturesData } from "../data";

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Users: Users,
  Shield: Shield,
  BookOpen: BookOpen,
  Code2: Code2,
  Sparkles: Sparkles
};

export default function About() {
  const { about } = ownerDetails;

  const strengths = [
    "Object-Oriented Programming (Java standard concepts)",
    "API Development (Designing robust Spring Boot endpoints)",
    "Database Management (Structuring high-performance queries)",
    "Asynchronous Control flow (Modern JavaScript models)",
    "Responsive layouts (High-performance Flexbox and Grid)"
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#0F172A]/50 dark:bg-[#0F172A]/50 light:bg-slate-100 border-t border-b border-slate-200 dark:border-slate-800/50 text-slate-900 dark:text-[#F8FAFC]">
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
            Dossier Overview
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5 flex justify-center perspective-1000"
          >
            <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-indigo-500/20 magnetic-card">
              {/* Outer frame styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Profile Image */}
              <div className="w-full h-full image-zoom-container">
                <img
                  src="/profile.jpeg"
                  alt="Indhumathi R S"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glowing accent border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-500/20 group-hover:border-indigo-500/60 transition-colors duration-500 pointer-events-none z-20" />
            </div>
          </motion.div>

          {/* About Me Content Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                <FileText className="w-6 h-6 text-indigo-500" />
                Professional Summary & Objective
              </h3>
              
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-base font-light">
                {about.bio}
              </p>

              <p className="text-slate-600 dark:text-slate-355 leading-relaxed text-sm font-light italic border-l-2 border-indigo-500 pl-4">
                <strong>Career Objective:</strong> To leverage strong backend Java/Spring Boot capabilities and modern frontend tools in building high-quality, scalable enterprise products while pushing code excellence.
              </p>
            </motion.div>

            {/* Core Strengths Bullet Points */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-400" /> Technical Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {strengths.map((st, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0" />
                    <span className="text-xs font-light text-slate-700 dark:text-slate-300">{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest Badges */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-violet-400" /> Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.5)" }}
                    className="glass px-4.5 py-2.5 rounded-full text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-2 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Feature Cards Grid (Task Checklist item) */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-indigo-400 animate-pulse" />
            Core Professional Attributes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutFeaturesData.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || Cpu;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className="glass p-6 rounded-2xl accent-glow border border-indigo-500/10 transition-all duration-300 group magnetic-card cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">{feat.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
