"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05080f] py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Core Pillars */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="font-heading font-extrabold text-base text-white tracking-wide">
            {PROFILE_DATA.name}
          </div>
          <p className="text-zinc-400 text-[11px] tracking-wider uppercase font-mono text-[#ff5500]">
            AI • Technology • Data • Innovation
          </p>
        </div>

        {/* Center: Verified Navigation / Social Links */}
        <div className="flex items-center space-x-6 text-zinc-400">
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>

        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center space-x-4">
          <span className="text-zinc-500">
            © 2026 {PROFILE_DATA.name}
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-all"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
