"use client";

import React from "react";
import { Award, ExternalLink, Cpu, BrainCircuit, Briefcase, BarChart3, Users, PieChart, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return Cpu;
      case "BrainCircuit":
        return BrainCircuit;
      case "Briefcase":
        return Briefcase;
      case "BarChart3":
        return BarChart3;
      case "Users":
        return Users;
      case "PieChart":
      default:
        return PieChart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Generative AI":
        return { text: "#ff5500", bg: "rgba(255, 85, 0, 0.12)", border: "rgba(255, 85, 0, 0.3)" };
      case "Artificial Intelligence":
        return { text: "#ff9500", bg: "rgba(255, 149, 0, 0.12)", border: "rgba(255, 149, 0, 0.3)" };
      case "Data & Analytics":
        return { text: "#f59e0b", bg: "rgba(16, 185, 129, 0.12)", border: "rgba(16, 185, 129, 0.3)" };
      case "Professional Engagement":
      default:
        return { text: "#ea580c", bg: "rgba(234, 88, 12, 0.12)", border: "rgba(234, 88, 12, 0.3)" };
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header (Section 16) */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <Award className="w-4 h-4" />
            <span>07 // CERTIFICATIONS &amp; LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Certifications &amp; Learning
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Verified technical programs across Generative AI, data analytics, foundational AI, and enterprise simulations.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const Icon = getCertIcon(cert.iconName);
            const color = getCategoryColor(cert.category);

            return (
              <div
                key={cert.id}
                className="premium-card p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: color.bg,
                        borderColor: color.border,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: color.text }} />
                    </div>

                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                      style={{
                        color: color.text,
                        borderColor: color.border,
                        backgroundColor: color.bg,
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>

                  <p className="font-mono text-xs text-[#ff9500] mb-4">
                    {cert.provider}
                  </p>

                  <div className="space-y-1.5 pt-1 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 font-mono text-[10px] text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-1.5 text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span className="text-[11px]">Verified Program</span>
                  </div>

                  <a
                    href={cert.linkPlaceholder}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center space-x-1 group/link"
                    title="Certificate link placeholder"
                  >
                    <span>View Record</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:text-[#ff5500]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
