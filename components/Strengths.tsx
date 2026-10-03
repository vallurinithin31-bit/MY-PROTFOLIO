"use client";

import React from "react";
import { FolderKanban, Users, MessageSquareCode, Sparkles, Award } from "lucide-react";
import { PROFESSIONAL_STRENGTHS } from "@/data/skills";

export function Strengths() {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case "FolderKanban":
        return FolderKanban;
      case "Users":
        return Users;
      case "MessageSquareCode":
        return MessageSquareCode;
      case "Sparkles":
      default:
        return Sparkles;
    }
  };

  const getStrengthAccent = (idx: number) => {
    switch (idx) {
      case 0:
        return { color: "#ff5500", border: "hover:border-[#ff5500]/40", bg: "hover:bg-[#ff5500]/5" };
      case 1:
        return { color: "#ff9500", border: "hover:border-[#ff9500]/40", bg: "hover:bg-[#ff9500]/5" };
      case 2:
        return { color: "#6366F1", border: "hover:border-[#6366F1]/40", bg: "hover:bg-[#6366F1]/5" };
      case 3:
      default:
        return { color: "#ea580c", border: "hover:border-[#ea580c]/40", bg: "hover:bg-[#ea580c]/5" };
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <Award className="w-4 h-4" />
            <span>03 // PROFESSIONAL STRENGTHS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Professional Strengths
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Synthesizing engineering precision with cross-functional execution and team leadership.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSIONAL_STRENGTHS.map((strength, idx) => {
            const Icon = getStrengthIcon(strength.iconName);
            const accent = getStrengthAccent(idx);

            return (
              <div
                key={strength.title}
                className={`premium-card p-7 flex flex-col justify-between transition-all duration-300 group ${accent.border} ${accent.bg} hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10"
                      style={{ backgroundColor: `${accent.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: accent.color }} />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-white transition-colors">
                    {strength.title}
                  </h3>

                  <span className="font-mono text-[11px] text-zinc-400 block mb-4">
                    {strength.tagline}
                  </span>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                    "{strength.description}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accent.color }}
                  />
                  <span>CORE COMPETENCY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
