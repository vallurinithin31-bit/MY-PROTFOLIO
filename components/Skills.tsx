"use client";

import React, { useState } from "react";
import { Terminal, BrainCircuit, BarChart3, Laptop2, Users, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return BrainCircuit;
      case 1:
        return BarChart3;
      case 2:
        return Laptop2;
      case 3:
      default:
        return Users;
    }
  };

  const getCategoryColor = (index: number) => {
    switch (index) {
      case 0:
        return { text: "#ff5500", bg: "rgba(255, 85, 0, 0.12)", border: "rgba(255, 85, 0, 0.3)" };
      case 1:
        return { text: "#ff9500", bg: "rgba(255, 149, 0, 0.12)", border: "rgba(255, 149, 0, 0.3)" };
      case 2:
        return { text: "#6366F1", bg: "rgba(99, 102, 241, 0.12)", border: "rgba(99, 102, 241, 0.3)" };
      case 3:
      default:
        return { text: "#ea580c", bg: "rgba(234, 88, 12, 0.12)", border: "rgba(234, 88, 12, 0.3)" };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
              <Terminal className="w-4 h-4" />
              <span>02 // SKILLS &amp; EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              What I work with
            </h2>
            <p className="text-sm font-mono text-zinc-400">
              Interactive categories across AI, analytics, software development, and professional leadership.
            </p>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>Interactive Categories · Hover to inspect</span>
          </div>
        </div>

        {/* 4 Interactive Skill Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const color = getCategoryColor(idx);
            const isHovered = hoveredCategory === cat.title;

            return (
              <div
                key={cat.title}
                onMouseEnter={() => setHoveredCategory(cat.title)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`premium-card p-8 relative overflow-hidden transition-all duration-300 group ${
                  isHovered ? "border-opacity-100 shadow-2xl -translate-y-1" : ""
                }`}
                style={{
                  borderColor: isHovered ? color.text : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered ? `0 20px 40px -15px ${color.bg}` : "none",
                }}
              >
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
                  style={{
                    backgroundColor: color.bg,
                    opacity: isHovered ? 0.7 : 0.2,
                  }}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: color.bg,
                        borderColor: color.border,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: color.text }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-white transition-colors">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-xs text-zinc-400">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed font-light">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all font-mono text-xs text-zinc-200 cursor-default"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: color.text }}
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
