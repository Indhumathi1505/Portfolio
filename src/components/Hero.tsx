import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, Code, ArrowDown, ChevronRight, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { ownerDetails } from "../data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ownerDetails.roles;
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const DELAY_BETWEEN = 2000;

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setTypedText((prev) => currentFullText.slice(0, prev.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), DELAY_BETWEEN);
        }
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-transparent text-slate-50 transition-colors duration-300">
      <motion.div style={{ y: y2, opacity }} className="absolute inset-0 pointer-events-none">
      {/* Decorative ambient gradient glowing bubbles */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      </motion.div>

      {/* Glassmorphism main card */}
      <motion.div style={{ y: y1 }} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Placement Ready Flag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Placement Ready &middot; Active Placement Hunt
        </motion.div>

        {/* Title Block */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2"
        >
          {ownerDetails.titleMsg}
        </motion.p>

        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white dark:text-white dark:drop-shadow-[0_2px_15px_rgba(99,102,241,0.2)] mb-4"
        >
          {ownerDetails.name}
        </motion.h1>

        {/* Dynamic Role Showcase with glowing cursor */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent tracking-tight">
            {typedText}
          </span>
          <span className="ml-1 w-1 h-8 bg-indigo-500 animate-[pulse_1s_infinite] inline-block shadow-[0_0_8px_#6366f1]" />
        </div>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm sm:text-base font-mono text-slate-400 max-w-xl mb-6 leading-relaxed"
        >
          {ownerDetails.tagline}
        </motion.p>

        {/* Introduction Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl font-light mb-10 leading-relaxed px-2"
        >
          {ownerDetails.shortIntro}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full justify-center px-4"
        >
          <MagneticButton
            id="hero-projects-btn"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Projects
            <ChevronRight className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton
            id="hero-resume-btn"
            as="a"
            href="/Indhumathi_Resume.pdf"
            download="Indhumathi_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            id="hero-contact-btn"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-transparent border border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Social Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center gap-5"
        >
          <MagneticButton
            as="a"
            id="social-github"
            href={ownerDetails.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            title="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </MagneticButton>
          <MagneticButton
            as="a"
            id="social-linkedin"
            href={ownerDetails.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </MagneticButton>
          <MagneticButton
            as="a"
            id="social-email"
            href={`mailto:${ownerDetails.socials.email}`}
            className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            title="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </MagneticButton>
          <MagneticButton
            as="a"
            id="social-leetcode"
            href={ownerDetails.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            title="LeetCode Profile"
          >
            <Code className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bounce-down page guider */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-slate-500 animate-bounce" />
      </div>
    </section>
  );
}
