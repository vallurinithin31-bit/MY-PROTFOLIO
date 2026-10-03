"use client";

import React from "react";
import { Sparkles, Code2, Users2, Layers, Briefcase, GraduationCap, MapPin, Zap, Copy, Check } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function About() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillarCards = [
    {
      title: "AI & Innovation",
      description: "Exploring practical applications of artificial intelligence and generative AI.",
      icon: Sparkles,
      color: "#ff5500",
      bgGlow: "group-hover:bg-[#ff5500]/10",
      borderGlow: "group-hover:border-[#ff5500]/40",
      tag: "Applied Intelligence",
    },
    {
      title: "Engineering",
      description: "Building software-driven digital experiences and technology solutions.",
      icon: Code2,
      color: "#ff9500",
      bgGlow: "group-hover:bg-[#ff9500]/10",
      borderGlow: "group-hover:border-[#ff9500]/40",
      tag: "Software Craft",
    },
    {
      title: "Growth & Collaboration",
      description: "Combining technology with communication, project management, teamwork, and growth thinking.",
      icon: Users2,
      color: "#ea580c",
      bgGlow: "group-hover:bg-[#ea580c]/10",
      borderGlow: "group-hover:border-[#ea580c]/40",
      tag: "Product & Impact",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <Layers className="w-4 h-4" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            A little about me
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Connecting foundational computer science with modern AI engineering &amp; real-world execution.
          </p>
        </div>

        {/* Bento Grid: Narrative Biography + Quick Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="premium-card p-8 sm:p-10 space-y-6 relative overflow-hidden">
              <blockquote className="text-xl sm:text-2xl font-heading font-semibold text-white leading-relaxed border-l-2 border-[#ff5500] pl-4">
                "{PROFILE_DATA.philosophy}"
              </blockquote>

              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  {PROFILE_DATA.narrative1}
                </p>
                <p>
                  {PROFILE_DATA.narrative2}
                </p>
              </div>

              {/* Brand positioning callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span>IDENTITY //</span>
                <span className="text-[#ff9500] font-semibold text-right">
                  AI + Software Engineering + Data + Product Thinking + Growth
                </span>
              </div>
            </div>

            {/* Three Visual Cards (Section 8) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillarCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`premium-card p-5 relative overflow-hidden group ${card.borderGlow} ${card.bgGlow} transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${card.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: card.color }} />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        {card.tag}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-white mb-2 group-hover:text-white transition-colors">
                      {card.title}
                    </h4>

                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Profile Card (Section 9) (5 cols) */}
          <div className="lg:col-span-5">
            <div className="premium-card p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff5500]/20 transition-all duration-500" />

              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff5500]/20 to-[#ff9500]/20 border border-[#ff5500]/40 flex items-center justify-center font-mono font-bold text-base text-[#ff5500]">
                    {PROFILE_DATA.monogram}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {PROFILE_DATA.name}
                    </h3>
                    <span className="font-mono text-xs text-[#ff5500]">
                      {PROFILE_DATA.role}
                    </span>
                  </div>
                </div>

                {/* Animated status badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5500]"></span>
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#ff5500]">
                    Currently Working
                  </span>
                </div>
              </div>

              {/* Info Matrix */}
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Role</span>
                    <span className="text-zinc-200 font-semibold">{PROFILE_DATA.role}</span>
                    <span className="text-zinc-400 block text-[11px]">@ {PROFILE_DATA.company}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-4 h-4 text-[#ff9500] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Education</span>
                    <span className="text-zinc-200 font-semibold">B.Tech – Computer Software Engineering</span>
                    <span className="text-zinc-400 block text-[11px]">{PROFILE_DATA.education.institution}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Location</span>
                    <span className="text-zinc-200 font-semibold">Andhra Pradesh, India</span>
                    <span className="text-zinc-400 block text-[11px]">{PROFILE_DATA.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-[#ea580c] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Focus</span>
                    <span className="text-white font-bold tracking-wide">AI • Data • Software • Growth</span>
                  </div>
                </div>
              </div>

              {/* Copy Email */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-400 truncate max-w-[190px] sm:max-w-none">
                  {PROFILE_DATA.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span className="text-[#ff5500]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
