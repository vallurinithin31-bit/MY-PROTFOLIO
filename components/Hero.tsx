"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Building2, MapPin, GraduationCap, Flame, Terminal } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { HeroRealisticCircuit } from "./HeroRealisticCircuit";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Scroll Physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Tilt the hero stage into 3D isometric space as the user scrolls
  const stageRotateX = useTransform(scrollYProgress, [0, 0.65], [0, 22]);
  const stageScale = useTransform(scrollYProgress, [0, 0.65], [1, 0.9]);
  const stageY = useTransform(scrollYProgress, [0, 0.65], [0, 60]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  // Subtle 3D text parallax
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -35]);

  return (
    <section
      ref={containerRef}
      id="home"
      style={{ perspective: 1200 }}
      className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden tech-bg-mesh select-none"
    >
      {/* 1. REALISTIC VOLUMETRIC DIAGONAL FIRE SUNBEAM (From Pinterest video top-right) */}
      <div className="fire-sunbeam animate-light-beam" />
      <div className="fire-streak" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. TOP ANNOUNCEMENT RIBBON */}
      <div className="w-full max-w-6xl mx-auto mb-8 relative z-20">
        <div className="flex items-center justify-between px-4 py-2 rounded-full bg-[#0d0f17]/90 border border-white/10 text-xs font-mono backdrop-blur-xl shadow-lg">
          <div className="flex items-center space-x-2.5 truncate">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-zinc-300 truncate">
              • Real-time AI Inference &amp; Growth Engineering | B.Tech Software Eng.
            </span>
            <span className="text-orange-400 hidden sm:inline font-bold">→</span>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-zinc-400 text-[11px]">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{PROFILE_DATA.locationShort}</span>
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-emerald-400 font-semibold">Available for Roles</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">EN</span>
          </div>
        </div>
      </div>

      {/* 3. HERO TYPOGRAPHY & HEADLINE COMPOSITION (With 3D Scroll Parallax) */}
      <motion.div
        style={{ y: textY }}
        className="max-w-4xl mx-auto w-full text-center space-y-6 relative z-20 mt-2"
      >
        {/* Glowing Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs shadow-[0_0_20px_rgba(255,85,0,0.2)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span className="font-semibold tracking-wider uppercase text-[11px]">
            ✦ Growth AI &amp; Edge Intelligence
          </span>
        </div>

        {/* Big Bold Modern Typographic Headline ("Inference at the Edge.") */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
            Inference at the{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,85,0,0.6)]">
              Edge.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Boost your intelligent systems' speed and efficiency globally. Bringing machine learning models closer to users with custom full-stack architectures and data-driven precision.
          </p>
        </div>

        {/* Dual Fiery CTA Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full btn-fire-glow text-white font-mono text-xs sm:text-sm font-bold flex items-center space-x-2.5 cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-200 animate-pulse" />
            <span>Explore Projects</span>
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#10131d]/90 hover:bg-white/10 border border-white/15 hover:border-orange-500/50 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-medium transition-all backdrop-blur-md shadow-xl flex items-center space-x-2"
          >
            <span>Connect with Nithin</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400" />
          </a>
        </div>
      </motion.div>

      {/* 4. THE 3D SCROLL STAGE: REALISTIC AI PROCESSOR & CIRCUIT TRACES WITH MULTI-PLANE TILT */}
      <motion.div
        style={{
          rotateX: stageRotateX,
          scale: stageScale,
          y: stageY,
          opacity: stageOpacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-6xl mx-auto mt-8 sm:mt-12 relative z-20 origin-center transition-shadow"
      >
        <HeroRealisticCircuit />
      </motion.div>

      {/* 5. BOTTOM STATUS STRIP */}
      <div className="w-full max-w-4xl mx-auto pt-16 sm:pt-20 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 font-mono text-xs text-zinc-400 relative z-20">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-orange-400" />
          <span className="truncate">Screen Andragogy Platforms</span>
        </div>
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span className="truncate">B.Tech Software Eng.</span>
        </div>
        <div className="flex items-center space-x-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
          <Terminal className="w-4 h-4 text-orange-500" />
          <span className="truncate">AI • Machine Learning • Data</span>
        </div>
      </div>
    </section>
  );
}
