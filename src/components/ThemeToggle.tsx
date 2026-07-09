import { Sun, Moon, Cpu, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export type ThemeType = 'dark' | 'light' | 'cyber' | 'corporate';

interface ThemeToggleProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const [open, setOpen] = useState(false);
  const themes: { name: ThemeType; label: string; icon: any; color: string }[] = [
    { name: 'dark', label: 'Premium Dark', icon: Moon, color: 'text-indigo-400' },
    { name: 'light', label: 'Pro Light', icon: Sun, color: 'text-amber-500' },
    { name: 'cyber', label: 'Cyber Tech', icon: Cpu, color: 'text-cyan-400' },
    { name: 'corporate', label: 'Corporate', icon: Briefcase, color: 'text-blue-500' },
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[0];
  const IconComponent = currentTheme.icon;

  return (
    <div className="relative">
      <button
        id="theme-toggle-btn"
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 backdrop-blur-md shadow-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
        aria-label="Select Theme"
      >
        <IconComponent className={`w-4 h-4 ${currentTheme.color}`} />
        <span className="text-[11px] font-mono font-medium hidden md:inline">{currentTheme.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-40 glass rounded-xl overflow-hidden shadow-xl z-50 p-1"
            >
              {themes.map(t => {
                const TIcon = t.icon;
                return (
                  <button
                    key={t.name}
                    onClick={() => {
                      setTheme(t.name);
                      setOpen(false);
                    }}
                    className={`w-full p-2 text-left rounded-lg text-xs font-mono font-medium flex items-center gap-2.5 transition-colors cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-850/60 ${
                      theme === t.name 
                        ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 font-bold' 
                        : 'text-slate-650 dark:text-slate-300'
                    }`}
                  >
                    <TIcon className={`w-3.5 h-3.5 ${t.color}`} />
                    {t.label}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
