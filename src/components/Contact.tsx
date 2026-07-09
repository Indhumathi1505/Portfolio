import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, User, BookOpen, Sparkles, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ownerDetails } from "../data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error inline when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message Payload is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setToast(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Checks if environment variables are default placeholders
    if (!serviceId || !templateId || !publicKey || serviceId.includes("_here") || templateId.includes("_here") || publicKey.includes("_here")) {
      // Direct fallback to pre-composed mailto compose window
      setTimeout(() => {
        setIsSending(false);
        setToast({
          type: "success",
          message: "Commit Link Synchronized! Opening mail compose client for final dispatch.",
        });
        
        const mailtoUrl = `mailto:${ownerDetails.socials.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSubmitted At: ${new Date().toLocaleString()}`)}`;
        window.location.href = mailtoUrl;
        
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setToast(null), 6000);
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        sender_name: formData.name,
        sender_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submission_date: new Date().toLocaleString(),
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200) {
        setToast({
          type: "success",
          message: "Thank you! Your message has been successfully transmitted via EmailJS.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Invalid response status from EmailJS service");
      }
    } catch (error: any) {
      setToast({
        type: "error",
        message: `Failed to transmit message: ${error?.text || error?.message || "Internal Connection Failure"}.`,
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setToast(null), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0F172A] dark:bg-[#0F172A] light:bg-[#F8FAFC] text-slate-900 dark:text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-mono text-sm tracking-widest font-semibold uppercase mb-2"
          >
            Communication Access
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Let's Connect
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Info Cards & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-none">Open to Work</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Available for Placement &bull; Graduation: June 2027</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                <span>Average Response Time</span>
                <span className="text-indigo-400 font-bold">&lt; 2 Hours</span>
              </div>
            </motion.div>

            {/* Channels Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl accent-glow border border-indigo-500/10 space-y-4"
            >
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Recruitment Channels
              </h3>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${ownerDetails.socials.email}`}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-slate-950/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-455 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Email Address</span>
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 truncate mt-0.5">{ownerDetails.socials.email}</span>
                  </div>
                </a>

                <a
                  href={ownerDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-slate-950/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-455 group-hover:scale-110 transition-transform shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">LinkedIn</span>
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 truncate mt-0.5">linkedin.com/in/indhumathi-r-s</span>
                  </div>
                </a>

                <a
                  href={ownerDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-slate-950/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-455 group-hover:scale-110 transition-transform shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">GitHub</span>
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 truncate mt-0.5">{ownerDetails.socials.github}</span>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Panel: Functional Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-3xl accent-glow border border-indigo-500/10 relative"
            >
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">
                Dispatch Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="relative">
                  <label htmlFor="form-name" className="text-[10px] uppercase font-mono tracking-wider text-slate-550 dark:text-slate-400 block mb-2 font-semibold">
                    Full Name <span className="text-rose-550">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all text-xs ${
                        errors.name ? "border-rose-500 focus:border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-rose-500 mt-1 block font-mono">
                      {errors.name}
                    </motion.span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="text-[10px] uppercase font-mono tracking-wider text-slate-550 dark:text-slate-400 block mb-2 font-semibold">
                      Email Address <span className="text-rose-550">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all text-xs ${
                          errors.email ? "border-rose-500 focus:border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-rose-500 mt-1 block font-mono">
                        {errors.email}
                      </motion.span>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="form-subject" className="text-[10px] uppercase font-mono tracking-wider text-slate-555 dark:text-slate-400 block mb-2 font-semibold">
                      Subject <span className="text-rose-550">*</span>
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Internship / Role query"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all text-xs ${
                          errors.subject ? "border-rose-500 focus:border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500"
                        }`}
                      />
                    </div>
                    {errors.subject && (
                      <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-rose-500 mt-1 block font-mono">
                        {errors.subject}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="text-[10px] uppercase font-mono tracking-wider text-slate-555 dark:text-slate-400 block mb-2 font-semibold">
                    Message Payload <span className="text-rose-555">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-500" />
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your connection details here..."
                      className={`w-full pl-11 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-950 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all text-xs resize-none ${
                        errors.message ? "border-rose-500 focus:border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-rose-500 mt-1 block font-mono">
                      {errors.message}
                    </motion.span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-650 to-violet-650 hover:from-indigo-600 hover:to-violet-600 text-white font-bold tracking-wide shadow-xl shadow-indigo-650/10 focus:outline-none disabled:opacity-50 disabled:cursor-wait transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Transmitting transmission...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Commit Message
                    </div>
                  )}
                </button>
              </form>

              {/* Toast Notification Container */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`mt-6 p-4 rounded-2xl border text-xs font-mono shadow-lg flex items-start gap-3 relative z-20 ${
                      toast.type === "success" 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                        : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                    }`}
                  >
                    {toast.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-550 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold uppercase tracking-wider mb-1">
                        {toast.type === "success" ? "COMMUNICATION LINK SECURED" : "TRANSMISSION ERROR"}
                      </div>
                      <span>{toast.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
