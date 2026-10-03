"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Flame, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "AI Hub", href: "#ai-focus" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080b]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Monogram & Name (Like GCORE in video) */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#161924] to-[#0d0f17] border border-orange-500/40 flex items-center justify-center font-heading font-black text-sm text-white group-hover:scale-105 group-hover:border-orange-500 transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)]">
              <span className="bg-gradient-to-br from-white to-orange-400 bg-clip-text text-transparent">
                NS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm tracking-wider text-white group-hover:text-orange-400 transition-colors uppercase">
                NITHIN.AI
              </span>
              <span className="font-mono text-[9px] text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>GROWTH AI ENGINEER</span>
              </span>
            </div>
          </a>

          {/* Center: Minimalist Frosted Pill Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#0d0f17]/85 border border-white/10 px-5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Contact & Glowing Fiery CTA Button */}
          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#121520]/80 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
            >
              <span>Contact</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full btn-fire-glow text-white font-mono text-xs font-bold shadow-lg"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#07080b]/98 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-orange-400 hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full btn-fire-glow text-white font-mono text-sm font-bold shadow-lg"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
