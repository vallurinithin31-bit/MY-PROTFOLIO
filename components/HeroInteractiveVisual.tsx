"use client";

import React, { useState } from "react";
import { Brain, Database, Code2, Cpu, TrendingUp, Sparkles, Network } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  category: string;
  techLabel: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  glow: string;
  x: number;
  y: number;
}

const NODES: NodeItem[] = [
  {
    id: "ai",
    name: "AI Engineering",
    category: "AI",
    techLabel: "Foundational Models & GenAI Workflows",
    icon: Brain,
    color: "#ff5500",
    glow: "rgba(255, 85, 0, 0.4)",
    x: 50,
    y: 18,
  },
  {
    id: "data",
    name: "Data Analytics",
    category: "DATA",
    techLabel: "Power BI & Metric Pipelines",
    icon: Database,
    color: "#ff9500",
    glow: "rgba(255, 149, 0, 0.4)",
    x: 82,
    y: 42,
  },
  {
    id: "growth",
    name: "Growth",
    category: "GROWTH",
    techLabel: "Product Strategy & Value Delivery",
    icon: TrendingUp,
    color: "#f59e0b",
    glow: "rgba(16, 185, 129, 0.4)",
    x: 70,
    y: 82,
  },
  {
    id: "automation",
    name: "Automation",
    category: "AUTOMATION",
    techLabel: "Streamlined Operational Loops",
    icon: Cpu,
    color: "#ea580c",
    glow: "rgba(234, 88, 12, 0.4)",
    x: 30,
    y: 82,
  },
  {
    id: "code",
    name: "Software Development",
    category: "CODE",
    techLabel: "TypeScript, React & Web Architecture",
    icon: Code2,
    color: "#6366F1",
    glow: "rgba(99, 102, 241, 0.4)",
    x: 18,
    y: 42,
  },
];

export function HeroInteractiveVisual() {
  const [activeNode, setActiveNode] = useState<string>("ai");

  const currentNode = NODES.find((n) => n.id === activeNode) || NODES[0];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none">
      {/* Ambient Backdrops & Rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff5500]/10 via-[#ff9500]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow pointer-events-none" />
      <div className="absolute inset-20 rounded-full border border-dashed border-white/10 pointer-events-none" />

      {/* Interactive SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <polygon
          points="50,18 82,42 70,82 30,82 18,42"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="0.8"
          strokeDasharray="2, 2"
        />
        {NODES.map((node) => (
          <line
            key={`line-${node.id}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke={node.id === activeNode ? node.color : "rgba(255, 255, 255, 0.15)"}
            strokeWidth={node.id === activeNode ? "1.5" : "0.75"}
            className="transition-all duration-300"
          />
        ))}
      </svg>

      {/* Central Core Hub */}
      <div className="absolute z-20 w-28 h-28 rounded-full bg-[#0d1527] border border-white/15 p-1 shadow-2xl flex flex-col items-center justify-center text-center">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#131e36] to-[#070b14] flex flex-col items-center justify-center p-2">
          <Network className="w-5 h-5 text-[#ff5500] mb-1 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-300">
            CONNECTED
          </span>
          <span className="text-[8px] font-mono text-[#ff9500]">ECOSYSTEM</span>
        </div>
      </div>

      {/* Outer Technology Nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;

        return (
          <button
            key={node.id}
            onClick={() => setActiveNode(node.id)}
            onMouseEnter={() => setActiveNode(node.id)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute z-30 group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500] rounded-2xl transition-all duration-300 ${
              isActive ? "scale-110" : "scale-100 opacity-85 hover:opacity-100"
            }`}
          >
            <div
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-xl"
              style={{
                backgroundColor: isActive ? "#0d1527" : "#090f1d",
                borderColor: isActive ? node.color : "rgba(255, 255, 255, 0.12)",
                boxShadow: isActive ? `0 0 20px ${node.glow}` : "none",
              }}
            >
              <Icon
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: node.color }}
              />
            </div>
            <span
              className="mt-1.5 px-2 py-0.5 rounded-md font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-white/5 backdrop-blur-md"
              style={{
                backgroundColor: isActive ? "rgba(13, 21, 39, 0.9)" : "rgba(7, 11, 20, 0.7)",
                color: isActive ? node.color : "#94a3b8",
              }}
            >
              {node.category}
            </span>
          </button>
        );
      })}

      {/* Interactive Tooltip Pill */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-xs bg-[#0d1527]/95 border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-md text-center transition-all duration-300">
        <div className="flex items-center justify-center space-x-1.5 mb-1 font-mono text-[11px] font-bold" style={{ color: currentNode.color }}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentNode.name}</span>
        </div>
        <p className="text-[11px] text-zinc-300 font-sans leading-tight">
          {currentNode.techLabel}
        </p>
      </div>
    </div>
  );
}
