"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <Briefcase className="w-4 h-4" />
            <span>04 // EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Experience
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Professional trajectory in artificial intelligence engineering and applied software development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 max-w-4xl">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Pin */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.current
                    ? "border-[#ff5500] bg-[#07080b]"
                    : "border-zinc-500 bg-[#07080b]"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    exp.current ? "bg-[#ff5500] animate-pulse" : "bg-zinc-500"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="premium-card p-6 sm:p-8 space-y-5 transition-all duration-300 group-hover:border-[#ff5500]/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/40 text-[#ff5500] font-mono text-[10px] font-bold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#ff9500] font-mono mt-1">
                      <Building className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 space-y-1">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  "{exp.description}"
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300 hover:text-white hover:border-[#ff5500]/30 transition-all"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
