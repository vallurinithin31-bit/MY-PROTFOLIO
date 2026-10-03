"use client";

import React, { useState } from "react";
import { Sparkles, Globe, Cpu, ShieldCheck, Database, Layers, Zap, ArrowUpRight, Flame } from "lucide-react";
import { RealisticAIGlobe } from "./RealisticAIGlobe";

export function AIFocus() {
  const [activeTab, setActiveTab] = useState<"bento" | "pipeline">("bento");

  return (
    <section id="ai-focus" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden">
      {/* Ambient warm lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-600/10 via-amber-500/10 to-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header (Matches 00:11 in video: "Unleash your AI application's full potential") */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest font-semibold">AI Infrastructure &amp; Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight">
            Unleash your AI application's{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              full potential.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Architecting high-throughput machine learning pipelines, low-latency API integrations, and robust real-time automation.
          </p>
        </div>

        {/* 1. BENTO GRID ARCHITECTURE (Matching 00:12 - 00:17 in reference video) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Low-Latency Global Network with Interactive 3D Eclipse Globe */}
          <div className="md:col-span-7 premium-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-orange-500/40 transition-all shadow-2xl">
            <div className="space-y-2 relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Distributed Edge Serving</span>
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Low-latency global network
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md">
                Minimized response times with edge caching, automated fallbacks, and intelligent request routing averaging sub-30ms global inference.
              </p>
            </div>

            {/* 3D Dot Globe with Fiery Corona Atmosphere */}
            <div className="my-2">
              <RealisticAIGlobe />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 font-mono text-xs text-zinc-400">
              <span>Optimized Edge Nodes</span>
              <span className="text-orange-400 font-bold">160+ Edge Points</span>
            </div>
          </div>

          {/* Card 2: Single End-Point for All AI Tasks (AI Processor Unit) */}
          <div className="md:col-span-5 premium-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-orange-500/40 transition-all shadow-2xl">
            <div className="space-y-2 relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Unified Inference Router</span>
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Single end-point for all AI tasks
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light">
                Consolidated multi-model dispatching. One streamlined interface managing reasoning, image synthesis, embeddings, and analytics.
              </p>
            </div>

            {/* Center Microchip Graphic with Radiating Pins */}
            <div className="my-8 relative flex items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#1b1f2e] via-[#10131d] to-[#07090e] border border-orange-500/40 shadow-[0_0_35px_rgba(255,85,0,0.35)] flex flex-col items-center justify-center p-3 text-center">
                <span className="font-heading font-black text-4xl text-white drop-shadow-[0_0_12px_rgba(255,100,20,0.8)]">
                  AI
                </span>
                <span className="text-[9px] font-mono text-orange-400 mt-1 uppercase font-bold tracking-widest">
                  ROUTER 01
                </span>
              </div>
              <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-spin-slow pointer-events-none" />
            </div>

            {/* Telemetry metrics strip */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px]">AVG LATENCY</span>
                <span className="text-white font-bold">28.4 ms</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">UPTIME SLA</span>
                <span className="text-emerald-400 font-bold">99.98%</span>
              </div>
            </div>
          </div>

          {/* Card 3: Data Privacy & Security */}
          <div className="md:col-span-4 premium-card p-6 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Data Privacy &amp; Security
              </h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Zero-retention model proxies, local token sanitization, and strict environment isolation protecting proprietary data.
              </p>
            </div>
            <div className="font-mono text-[11px] text-orange-400/90 flex items-center gap-1 pt-2">
              <span>Encrypted Transit &amp; Rest</span>
              <span>🔒</span>
            </div>
          </div>

          {/* Card 4: Pre-Trained & Custom ML Models */}
          <div className="md:col-span-4 premium-card p-6 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Pre-Trained &amp; Custom Models
              </h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Deep experience utilizing Claude 3.5, OpenAI GPT-4o, Llama 3, and specialized fine-tuned PyTorch / Hugging Face models.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["PyTorch", "HuggingFace", "Scikit", "Transformers"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Dedicated GPU Compute Acceleration */}
          <div className="md:col-span-4 premium-card p-6 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                GPU Compute &amp; Autoscaling
              </h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Parallel inference optimization on modern NVIDIA hardware (A100 / H100 / L40S) for lightning-fast batch processing.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-zinc-400">
              <span>Model Autoscaling</span>
              <span className="text-orange-400 font-semibold">Active Engine</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
