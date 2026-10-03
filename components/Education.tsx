"use client";

import React from "react";
import { GraduationCap, School } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header (Section 17) */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <School className="w-4 h-4" />
            <span>08 // EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Education
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Rigorous undergraduate training in computer software engineering and computational sciences.
          </p>
        </div>

        {/* Elegant Education Card */}
        <div className="max-w-4xl mx-auto premium-card p-8 sm:p-12 relative overflow-hidden group border border-white/10 hover:border-[#ff9500]/40 transition-all duration-500">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff9500]/10 via-[#ff5500]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            
            <div className="flex items-start space-x-6">
              {/* Animated Academic Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#ff9500]/20 via-[#ff5500]/15 to-[#ea580c]/10 border border-[#ff9500]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff9500]" />
              </div>

              {/* Degree & Institution Details */}
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#ff9500]/10 border border-[#ff9500]/30 font-mono text-xs text-[#ff9500]">
                  <span>UNDERGRADUATE DEGREE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {PROFILE_DATA.education.degree}
                </h3>

                <p className="text-base sm:text-lg font-mono font-medium text-[#ff5500]">
                  {PROFILE_DATA.education.field}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 font-sans flex items-center gap-2">
                  <School className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>{PROFILE_DATA.education.institution}</span>
                </p>
              </div>
            </div>

            {/* Discipline Tag */}
            <div className="md:text-right space-y-2 font-mono text-xs border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Discipline Core</span>
              <span className="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 font-semibold">
                Computer Software Engineering
              </span>
              <p className="text-zinc-500 text-[11px]">
                Foundational Algorithms &amp; Software Systems
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
