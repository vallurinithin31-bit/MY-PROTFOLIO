"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Brain, Layers, Database, Sparkles, Terminal, Activity } from "lucide-react";

interface NodeData {
  id: string;
  symbol: string;
  name: string;
  role: string;
  tech: string[];
  x: number; // percentage
  y: number; // percentage
  side: "left" | "right";
  icon?: string;
}

const NODES_DATA: NodeData[] = [
  {
    id: "anthropic",
    symbol: "A",
    name: "Anthropic & Frontier LLMs",
    role: "Foundational Reasoning & Prompt Pipelines",
    tech: ["Claude 3.5 Sonnet", "DeepSeek-R1", "Agentic Tooling", "Context Caching"],
    x: 14,
    y: 22,
    side: "left",
  },
  {
    id: "fast-edge",
    symbol: "⚡",
    name: "Real-time Edge Speed",
    role: "Low-Latency Model Serving & APIs",
    tech: ["FastAPI", "TensorRT", "Edge Caching", "Sub-50ms Inference"],
    x: 8,
    y: 52,
    side: "left",
  },
  {
    id: "ml-core",
    symbol: "M",
    name: "Machine Learning Core",
    role: "Predictive Analytics & Model Training",
    tech: ["PyTorch", "Scikit-Learn", "Feature Engineering", "XGBoost"],
    x: 15,
    y: 82,
    side: "left",
  },
  {
    id: "scale",
    symbol: "S.",
    name: "Scale & Systems Architecture",
    role: "Distributed Cloud Infrastructure",
    tech: ["Docker", "Kubernetes", "Next.js", "Serverless Pipelines"],
    x: 86,
    y: 22,
    side: "right",
  },
  {
    id: "data-intel",
    symbol: "📊",
    name: "Data & BI Analytics",
    role: "Enterprise Metrics & Visualization",
    tech: ["Power BI", "SQL Optimization", "ETL Pipelines", "Business KPIs"],
    x: 92,
    y: 52,
    side: "right",
  },
  {
    id: "openai-genai",
    symbol: "✢",
    name: "OpenAI & Generative AI",
    role: "Multi-Modal AI & Embeddings",
    tech: ["GPT-4o", "Vector Databases", "RAG Systems", "AI Automations"],
    x: 85,
    y: 82,
    side: "right",
  },
];

export function HeroRealisticCircuit() {
  const [activeNodeId, setActiveNodeId] = useState<string>("anthropic");
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((c) => (c + 1) % 100);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeNode = NODES_DATA.find((n) => n.id === activeNodeId) || NODES_DATA[0];

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[440px] sm:h-[480px] md:h-[520px] select-none flex items-center justify-center overflow-visible">
      {/* Background Volumetric Glow behind AI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-600/25 via-amber-500/20 to-orange-500/25 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* SVG Circuit Canvas for Ultra-Crisp Realistic Traces & Laser Sparks */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1000 520"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Fire Laser Gradient */}
          <linearGradient id="fireLaserLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff5500" stopOpacity="1" />
            <stop offset="50%" stopColor="#ff9500" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff4500" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="fireLaserRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5500" stopOpacity="1" />
            <stop offset="50%" stopColor="#ff9500" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff4500" stopOpacity="0.2" />
          </linearGradient>

          {/* Trace Drop Shadow Filter */}
          <filter id="traceGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. LEFT CIRCUIT TRACES (From Center (500, 260) to Left Nodes) */}
        
        {/* Branch 1: Center -> Node A (Top-Left, x: 140, y: 115) */}
        <path
          d="M 445 235 L 360 235 L 260 115 L 175 115"
          className={`circuit-line ${activeNodeId === "anthropic" ? "circuit-line-active" : ""}`}
        />
        {/* Animated Laser Spark Travelling to Node A */}
        <path
          d="M 445 235 L 360 235 L 260 115 L 175 115"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "2.4s" }}
        />

        {/* Branch 2: Center -> Node ⚡ (Mid-Left, x: 80, y: 260) */}
        <path
          d="M 440 260 L 320 260 L 290 270 L 115 270"
          className={`circuit-line ${activeNodeId === "fast-edge" ? "circuit-line-active" : ""}`}
        />
        <path
          d="M 440 260 L 320 260 L 290 270 L 115 270"
          fill="none"
          stroke="#ff9500"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "3.1s" }}
        />

        {/* Branch 3: Center -> Node M (Bottom-Left, x: 150, y: 425) */}
        <path
          d="M 445 285 L 350 285 L 260 425 L 185 425"
          className={`circuit-line ${activeNodeId === "ml-core" ? "circuit-line-active" : ""}`}
        />
        <path
          d="M 445 285 L 350 285 L 260 425 L 185 425"
          fill="none"
          stroke="#ff5500"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "2.8s" }}
        />

        {/* 2. RIGHT CIRCUIT TRACES (From Center (500, 260) to Right Nodes) */}

        {/* Branch 4: Center -> Node S. (Top-Right, x: 860, y: 115) */}
        <path
          d="M 555 235 L 640 235 L 740 115 L 825 115"
          className={`circuit-line ${activeNodeId === "scale" ? "circuit-line-active" : ""}`}
        />
        <path
          d="M 555 235 L 640 235 L 740 115 L 825 115"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "2.6s" }}
        />

        {/* Branch 5: Center -> Node 📊 (Mid-Right, x: 920, y: 260) */}
        <path
          d="M 560 260 L 680 260 L 710 270 L 885 270"
          className={`circuit-line ${activeNodeId === "data-intel" ? "circuit-line-active" : ""}`}
        />
        <path
          d="M 560 260 L 680 260 L 710 270 L 885 270"
          fill="none"
          stroke="#ff9500"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "3.4s" }}
        />

        {/* Branch 6: Center -> Node ✢ (Bottom-Right, x: 850, y: 425) */}
        <path
          d="M 555 285 L 650 285 L 740 425 L 815 425"
          className={`circuit-line ${activeNodeId === "openai-genai" ? "circuit-line-active" : ""}`}
        />
        <path
          d="M 555 285 L 650 285 L 740 425 L 815 425"
          fill="none"
          stroke="#ff5500"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-spark"
          style={{ animationDuration: "2.9s" }}
        />

        {/* 3. VERTICAL PCB BUS LINES EXTENDING UNDERNEATH AI CHIP */}
        <line x1="485" y1="315" x2="485" y2="400" stroke="rgba(255, 120, 30, 0.3)" strokeWidth="1.5" />
        <line x1="500" y1="315" x2="500" y2="430" stroke="#ff5500" strokeWidth="2" strokeDasharray="6, 12" />
        <line x1="515" y1="315" x2="515" y2="400" stroke="rgba(255, 120, 30, 0.3)" strokeWidth="1.5" />

        {/* Traveling vertical packet */}
        <circle cx="500" cy="380" r="3" fill="#ffaa00">
          <animate attributeName="cy" values="315;430" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Subtle decorative PCB contact pads */}
        <circle cx="260" cy="115" r="3" fill="#ff7700" opacity="0.6" />
        <circle cx="740" cy="115" r="3" fill="#ff7700" opacity="0.6" />
        <circle cx="260" cy="425" r="3" fill="#ff7700" opacity="0.6" />
        <circle cx="740" cy="425" r="3" fill="#ff7700" opacity="0.6" />
      </svg>

      {/* 4. THE CENTERPIECE: REALISTIC METALLIC "AI" MICROPROCESSOR CHIP */}
      <div className="relative z-30 flex items-center justify-center">
        {/* Chip Gold/Copper Socket Contacts */}
        <div className="absolute -top-3 w-16 flex justify-between px-1 pointer-events-none">
          <span className="w-1.5 h-3 bg-gradient-to-t from-orange-500 to-amber-300 rounded-t-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-t from-orange-500 to-amber-300 rounded-t-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-t from-orange-500 to-amber-300 rounded-t-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-t from-orange-500 to-amber-300 rounded-t-sm" />
        </div>
        <div className="absolute -bottom-3 w-16 flex justify-between px-1 pointer-events-none">
          <span className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-amber-300 rounded-b-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-amber-300 rounded-b-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-amber-300 rounded-b-sm" />
          <span className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-amber-300 rounded-b-sm" />
        </div>

        {/* Main Chip Enclosure */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#1b1e2a] via-[#10121a] to-[#090b10] border-2 border-white/20 p-1.5 shadow-[0_0_40px_rgba(255,85,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center group cursor-pointer transition-all duration-300"
          onClick={() => setActiveNodeId("anthropic")}
        >
          {/* Inner Chamfer Bevel Ring */}
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#0e1017] to-[#1a1c26] border border-orange-500/30 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            {/* Subtle Metallic Diagonal Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Embossed "AI" Monogram with Neon Fire Core */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-wider drop-shadow-[0_0_15px_rgba(255,100,20,0.9)]">
                AI
              </span>
              <span className="text-[8px] font-mono tracking-widest text-orange-400 font-bold uppercase mt-0.5">
                NEURAL CORE
              </span>
            </div>

            {/* Ambient Active Pulse Dot */}
            <span className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
          </div>
        </motion.div>
      </div>

      {/* 5. FLOATING SATELLITE NODES */}
      {NODES_DATA.map((node) => {
        const isActive = activeNodeId === node.id;
        return (
          <div
            key={node.id}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="absolute z-30"
          >
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveNodeId(node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
              className={`relative flex items-center justify-center rounded-2xl transition-all duration-300 focus:outline-none ${
                isActive
                  ? "w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br from-[#242838] to-[#121520] border-2 border-orange-500 shadow-[0_0_25px_rgba(255,85,0,0.65),inset_0_0_10px_rgba(255,120,0,0.4)] text-white"
                  : "w-12 h-12 sm:w-13 sm:h-13 bg-[#0d0f17]/90 border border-white/15 text-zinc-400 hover:text-white hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] backdrop-blur-md"
              }`}
            >
              <span className="font-heading font-black text-base sm:text-lg">
                {node.symbol}
              </span>

              {/* Active Aura Ring */}
              {isActive && (
                <span className="absolute -inset-1 rounded-2xl border border-orange-400/60 animate-pulse pointer-events-none" />
              )}
            </motion.button>
          </div>
        );
      })}

      {/* 6. HOLOGRAPHIC DETAIL HUD (Displays Active Node's Intelligence) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg bg-[#0d0f17]/95 border border-orange-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,85,0,0.15)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center font-bold text-xs text-orange-400 font-mono">
                {activeNode.symbol}
              </span>
              <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                {activeNode.name}
              </h4>
            </div>
            <span className="text-[10px] font-mono text-orange-400/90 uppercase tracking-widest bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
              Active Module
            </span>
          </div>

          <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
            {activeNode.role}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {activeNode.tech.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
