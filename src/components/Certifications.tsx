import { Award, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { certificationsData } from "../data";
import MagneticButton from "./MagneticButton";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-[#0F172A] dark:bg-[#0F172A] light:bg-[#F8FAFC] border-t border-b border-indigo-500/10 text-slate-900 dark:text-[#F8FAFC]">
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
            Verified Credentials
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass p-6 rounded-3xl accent-glow flex flex-col justify-between relative overflow-hidden group border border-indigo-500/10 magnetic-card"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-650/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header Icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3 rounded-2xl bg-violet-505/10 text-violet-500 border border-violet-500/20">
                    <Award className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                      Issuer: {cert.issuer.split("(")[0].trim()}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug line-clamp-1">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-650 dark:text-slate-350 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Action and date */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-850">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  Granted {cert.date}
                </span>

                <MagneticButton
                  as="a"
                  href={cert.credentialUrl || "https://www.hackerrank.com/profile/indhumathirsj"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
                >
                  Verify
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
}
