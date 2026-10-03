"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight, Flame, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 fiery-horizon overflow-hidden select-none">
      
      {/* 1. Luminous Fiery Sunrise Horizon Glow at the Bottom (Matches 00:36 - 00:38 in Pinterest video) */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[130%] h-[380px] bg-gradient-to-t from-orange-600/80 via-orange-500/30 to-transparent blur-[70px] pointer-events-none rounded-[100%]" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[180px] bg-gradient-to-t from-amber-400/90 via-orange-500/50 to-transparent blur-[40px] pointer-events-none rounded-[100%]" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10 text-center">
        
        {/* Header - Directly matching "Contact us to discuss your project" */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>LET'S BUILD TOGETHER</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-tight">
            Contact us to discuss{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-white bg-clip-text text-transparent">
              your project.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Get in touch with Nithin. Let's discuss bringing your AI initiatives, software applications, or growth data pipelines to reality.
          </p>

          {/* Quick Action Pill Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("contact-form-box");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full btn-fire-glow text-white font-mono text-xs sm:text-sm font-bold shadow-2xl"
            >
              Talk to Nithin
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-[#121520] hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white font-mono text-xs sm:text-sm transition-all flex items-center space-x-2"
            >
              {copied ? <Check className="w-4 h-4 text-orange-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Contact Form Card */}
        <div id="contact-form-box" className="premium-card p-8 sm:p-12 border border-orange-500/25 bg-[#0d0f17]/95 shadow-2xl text-left max-w-3xl mx-auto backdrop-blur-2xl relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Recipient: <span className="text-orange-400 font-semibold">{PROFILE_DATA.email}</span>
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Send className="w-5 h-5" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400 block">Subject / Collaboration Topic</label>
              <input
                type="text"
                required
                placeholder="e.g. Machine Learning & Growth AI Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400 block">Message Details</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your technical requirements, goals, or role details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl btn-fire-glow text-white font-mono text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <span>Submit &amp; Open Mail Client</span>
              <Send className="w-4 h-4 ml-1" />
            </button>

            {formSubmitted && (
              <p className="text-xs font-mono text-orange-400 text-center pt-2">
                Opening your email client with your message details...
              </p>
            )}
          </form>

          {/* Social Channels Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-4">
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-300 hover:text-orange-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-orange-400" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center space-x-2 text-zinc-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
