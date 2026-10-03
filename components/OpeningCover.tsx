"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Linkedin, Mail, Github } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function OpeningCover() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Realistic scroll-driven animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Natural parallax physics on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -45]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about") || document.getElementById("home");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="opening-cover"
      className="relative h-screen min-h-[700px] w-full flex flex-col justify-between overflow-hidden bg-[#06080f] text-white select-none"
    >
      {/* 1. Full-screen Ultra-HD 4K Studio Workspace Background with Realistic Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <img
          src="/entrance-cover-hd.jpg"
          alt="Nithin Sai Valluri - Cinematic Studio Workspace"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
        />

        {/* Cinematic Vignettes for flawless typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080f]/85 via-[#06080f]/40 to-[#07080b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#06080f_90%)] opacity-85" />
      </motion.div>

      {/* 2. Top Minimalist Navigation Bar */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-8 flex items-center justify-between font-sans text-xs"
      >
        {/* Left: Identity */}
        <div className="flex items-center space-x-2 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase text-zinc-100 font-sans text-[13px]">
            {PROFILE_DATA.name}
          </span>
        </div>

        {/* Center: Minimalist Nav Pill */}
        <nav className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-zinc-300">
          <a href="#opening-cover" className="text-white font-medium hover:text-[#FF5722] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Year Badge */}
        <div className="flex items-center space-x-2 text-zinc-400">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-sans text-[11px] tracking-wider">
            2025 — 2026
          </span>
        </div>
      </motion.div>

      {/* 3. Center Iconic Typography Composition (Ultra-Crisp Vector & Poppins) */}
      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
        }}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center my-auto flex flex-col items-center justify-center"
      >
        {/* Artistic Script Layer: Flowing Over the Title */}
        <div className="relative flex flex-col items-center">
          <span className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FF5722] -mb-6 sm:-mb-10 md:-mb-14 z-10 select-none block drop-shadow-[0_4px_24px_rgba(255,87,34,0.4)] tracking-wide transform -rotate-2">
            Engineer
          </span>

          {/* Bold Display Headline: PORTFOLIO. */}
          <h1 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight text-[#FFF0E6] uppercase select-none leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            PORTFOLIO<span className="text-[#FF5722]">.</span>
          </h1>
        </div>

        {/* Timeline Divider Arrow (2025 ─────────► 2026) */}
        <div className="w-full max-w-md sm:max-w-xl flex items-center justify-between text-xs sm:text-sm font-sans tracking-widest text-zinc-400 mt-2 sm:mt-4 mb-8">
          <span className="font-semibold text-zinc-300">2025</span>
          <div className="flex-1 mx-4 sm:mx-6 flex items-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-zinc-600 via-zinc-400 to-[#FF5722]" />
            <span className="text-[#FF5722] text-xs -ml-1">►</span>
          </div>
          <span className="font-semibold text-zinc-300">2026</span>
        </div>

        {/* Two Primary Action Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-black/60 border border-white/25 hover:border-white/50 text-white font-sans text-xs sm:text-sm font-medium backdrop-blur-md transition-all hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <FileText className="w-4 h-4 text-[#FF5722]" />
            <span>Resume</span>
          </a>

          <button
            onClick={scrollToNext}
            className="px-8 py-3 rounded-full bg-[#FFF0E6] hover:bg-white text-[#06080f] font-sans text-xs sm:text-sm font-bold transition-all hover:scale-105 shadow-2xl flex items-center space-x-2"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Social Icons Strip with Orange Accents */}
        <div className="flex items-center justify-center space-x-3 mt-7">
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#FF5722] hover:bg-[#ff6f43] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-[#FF5722]/30"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="w-8 h-8 rounded-full bg-[#FF5722] hover:bg-[#ff6f43] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-[#FF5722]/30"
            title="Email"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#FF5722] hover:bg-[#ff6f43] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-[#FF5722]/30"
            title="GitHub"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* 4. Bottom Natural Mouse Scroll Prompt (Realistic & Clickable) */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 flex items-end justify-between font-sans text-xs text-zinc-400"
      >
        {/* Left: Location & Role */}
        <div className="hidden sm:block">
          <span className="text-zinc-500 block text-[11px] font-sans">SPECIALIZATION</span>
          <span className="text-zinc-300 font-sans font-medium">Junior Growth AI Engineer</span>
        </div>

        {/* Center: Animated Mouse Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="mx-auto flex flex-col items-center space-y-2 group cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/30 group-hover:border-[#FF5722] flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"
            />
          </div>
          <span className="text-[10px] tracking-widest uppercase text-zinc-400 group-hover:text-white transition-colors font-sans">
            Scroll to explore
          </span>
        </button>

        {/* Right: Location */}
        <div className="hidden sm:block text-right">
          <span className="text-zinc-500 block text-[11px] font-sans">LOCATION</span>
          <span className="text-zinc-300 font-sans font-medium">Andhra Pradesh, India</span>
        </div>
      </motion.div>

      {/* Subtle blend gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07080b] to-transparent pointer-events-none z-10" />
    </section>
  );
}
