"use client";

import React from "react";
import { Milestone, GraduationCap, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { CAREER_JOURNEY } from "@/data/experience";

export function CareerJourney() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return GraduationCap;
      case 1:
        return Briefcase;
      case 2:
      default:
        return Sparkles;
    }
  };

  const getColor = (idx: number) => {
    switch (idx) {
      case 0:
        return "#ff9500";
      case 1:
        return "#ea580c";
      case 2:
      default:
        return "#ff5500";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header (Section 12) */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <Milestone className="w-4 h-4" />
            <span>09 // CAREER JOURNEY / TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Career Journey
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Evolution from foundational computer software engineering into production AI growth systems.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff9500] via-[#ea580c] to-[#ff5500] -translate-y-1/2 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {CAREER_JOURNEY.map((item, idx) => {
              const Icon = getIcon(idx);
              const color = getColor(idx);

              return (
                <div
                  key={item.title + item.year}
                  className="premium-card p-6 sm:p-7 relative group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                  style={{
                    borderTop: `3px solid ${color}`,
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                          style={{ backgroundColor: `${color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color }} />
                        </div>
                        <span className="font-heading font-black text-2xl text-white">
                          {item.year}
                        </span>
                      </div>

                      <span
                        className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border"
                        style={{
                          color,
                          borderColor: `${color}30`,
                          backgroundColor: `${color}10`,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <div className="font-mono text-xs text-[#ff9500] mb-3">
                      {item.subtitle}
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                    <span>MILESTONE 0{idx + 1}</span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
                      <span>Progression</span>
                      <ArrowRight className="w-3 h-3 text-[#ff5500]" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
