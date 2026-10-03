"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Zap, Copy, Check } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 relative overflow-hidden group">
      {/* Glow ambient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff5500]/20 transition-all duration-500" />

      {/* Top Header with Status */}
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

        {/* Animated availability/status indicator */}
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

      {/* Quick Info Key-Value Matrix */}
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

      {/* Interactive Copy Email Footer */}
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
  );
}
