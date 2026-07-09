import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ArrowUp, 
  Zap, 
  Code2, 
  Layers, 
  Award, 
  FileText, 
  Send, 
  Calendar,
  Github,
  Linkedin,
  Search,
  BookOpen,
  Trophy
} from "lucide-react";

// Components imports
import GlowCursor from "./components/GlowCursor";
import PremiumBackground from "./components/PremiumBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import ThemeToggle, { ThemeType } from "./components/ThemeToggle";
import { ownerDetails } from "./data";

// Global types declarations to silence JSX compiler errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");

  // Handles initial loading sequence (recruiter-ready splash screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Sync system clock for placement footer detailing
    const interval = setInterval(() => {
      const utcTime = new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC";
      setCurrentTime(utcTime);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Monitors header transition threshold on mouse scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active theme selectors to the web root html node
  useEffect(() => {
    const root = document.documentElement;
    // Clear previous themes
    root.classList.remove("dark", "light", "cyber", "corporate");
    // Apply selected theme
    root.classList.add(theme);
    // Dark mode class syncing for compatibility
    if (theme === "dark" || theme === "cyber") {
      root.classList.add("dark-mode-compat");
    }
  }, [theme]);

  // Command palette listener (Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", target: "hero", icon: Zap },
    { label: "About", target: "about", icon: BookOpen },
    { label: "Skills", target: "skills", icon: Code2 },
    { label: "Projects", target: "projects", icon: Layers },
    { label: "Achievements", target: "achievements", icon: Trophy },
    { label: "Certifications", target: "certifications", icon: Award },
    { label: "Resume", target: "resume", icon: FileText },
    { label: "Contact", target: "contact", icon: Send }
  ];

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setIsPaletteOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredLinks = navLinks.filter(link =>
    link.label.toLowerCase().includes(paletteQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen font-sans relative overflow-hidden transition-colors duration-300`}>
      
      {/* Global Interactive Animated Background */}
      <PremiumBackground theme={theme} />

      {/* Dynamic Cursor Glow Aura */}
      <GlowCursor />

      {/* Modern Developer Splash Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="splash-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 blur-md animate-ping" />
              <div className="absolute inset-2 rounded-full border border-indigo-600/35" />
              <div className="absolute inset-4 rounded-full border-2 border-t-indigo-500 border-r-transparent border-b-transparent animate-spin" />
              <Code2 className="w-8 h-8 text-indigo-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-1.5"
            >
              {ownerDetails.name}
            </motion.h1>
            
            <p className="font-mono text-[10px] tracking-widest text-indigo-400 uppercase font-semibold">
              Preparing Portfolio Engine...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-indigo-650/10 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
          style={{
            scaleX: scrolled ? 1 : 0, 
            transformOrigin: "0%",
            transition: "scale-x 0.2s ease"
          }}
        />
      </div>

      {/* Floating Header Navigation (Glassmorphism design) */}
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/40 shadow-lg shadow-indigo-500/5"
            : "py-5 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollToTarget("hero")}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer group"
          >
            <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-black text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
              I
            </div>
            <span className="font-extrabold tracking-widest font-mono text-sm group-hover:text-indigo-400 transition-colors">
              RS
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToTarget(link.target)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-450 hover:bg-indigo-500/5 dark:hover:bg-slate-900 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Controls: Command Palette Trigger + Theme Selector + Hamburger Menu */}
          <div className="flex items-center gap-2.5">
            {/* Command Palette Button helper */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-550 dark:hover:text-indigo-400 backdrop-blur-md shadow-sm transition-all duration-300 cursor-pointer hidden md:flex items-center gap-2 text-xs font-mono"
              title="Search Palette (Ctrl + K)"
            >
              <Search className="w-4 h-4" />
              <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400">Ctrl K</span>
            </button>

            <ThemeToggle theme={theme} setTheme={setTheme} />

            {/* Mobile Menu Icon Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer"
              aria-label="Toggle Navigation Options"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl absolute top-full left-0 right-0 overflow-hidden"
            >
              <div className="p-4 space-y-2.5 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.target}
                      onClick={() => scrollToTarget(link.target)}
                      className="w-full p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-indigo-550 dark:hover:text-indigo-400 font-semibold text-sm flex items-center gap-3.5 transition-all text-left cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-400" />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Command Palette Modal Dialog */}
      <AnimatePresence>
        {isPaletteOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaletteOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative z-10 p-4 border border-indigo-500/25"
            >
              <div className="flex items-center gap-3 px-3 py-2 bg-slate-900/60 rounded-xl border border-slate-800 mb-4">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type to search sections..."
                  value={paletteQuery}
                  onChange={(e) => setPaletteQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs text-white placeholder-slate-500 w-full"
                  autoFocus
                />
                <button 
                  onClick={() => setIsPaletteOpen(false)}
                  className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 hover:text-white"
                >
                  ESC
                </button>
              </div>

              <div className="space-y-1.5 max-h-60 overflow-y-auto">
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 px-3 uppercase mb-2">Sections</p>
                {filteredLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <button
                      key={link.target}
                      onClick={() => scrollToTarget(link.target)}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-indigo-500/10 hover:text-indigo-400 text-slate-300 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <LinkIcon className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                        {link.label}
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">Jump ↵</span>
                    </button>
                  );
                })}
                {filteredLinks.length === 0 && (
                  <p className="text-center py-4 text-slate-500 text-xs font-light">No matching sections found.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Page Layout assembly */}
      <main id="portfolio-main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-indigo-650 hover:bg-indigo-600 text-white shadow-xl shadow-indigo-650/20 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Scroll Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Placement footer */}
      <footer id="portfolio-footer" className="py-12 px-4 border-t border-slate-200/50 dark:border-slate-900 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md text-slate-400 dark:text-slate-500 text-center transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-1">
              {ownerDetails.name} <span className="text-xs font-light text-slate-400 dark:text-slate-500">&mdash; Portfolio Dossier</span>
            </p>
            <p className="text-[11px] font-mono leading-none flex items-center gap-1.5 mt-0.5">
              <span>ACTIVE PLACEMENT HUNTER</span>
              <span>&bull;</span>
              <span>{currentTime || "UTC SESSION RUNNING"}</span>
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href={ownerDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900 text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-450 rounded-lg transition-colors cursor-pointer"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={ownerDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900 text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-450 rounded-lg transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs font-mono tracking-wider">
            Handcrafted with Pride &bull; CSE Govt GCE, Erode &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
