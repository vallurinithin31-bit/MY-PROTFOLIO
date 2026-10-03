"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useVelocity } from "framer-motion";

export function RealisticAIGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    let tiltX = 0;

    const numLatitudes = 16;
    const pointsPerLat = 32;
    const radius = 130;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // 3D Dynamic Tilt based on scroll velocity
      const velocity = scrollVelocity.get();
      const targetTilt = Math.max(-0.25, Math.min(0.25, velocity * 0.0003));
      tiltX += (targetTilt - tiltX) * 0.08;

      // Draw glowing fiery atmospheric corona behind top rim of globe
      const coronaGrad = ctx.createRadialGradient(
        centerX,
        centerY - 40,
        radius * 0.7,
        centerX,
        centerY - 40,
        radius * 1.35
      );
      coronaGrad.addColorStop(0, "rgba(255, 110, 20, 0.45)");
      coronaGrad.addColorStop(0.5, "rgba(255, 60, 0, 0.2)");
      coronaGrad.addColorStop(1, "rgba(255, 30, 0, 0)");

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY - 40, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Draw dark globe sphere body
      const sphereGrad = ctx.createRadialGradient(
        centerX - 40,
        centerY - 40,
        10,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, "#1c1f2e");
      sphereGrad.addColorStop(0.7, "#0d0f17");
      sphereGrad.addColorStop(1, "#07080b");

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw glowing fiery top rim outline
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI * 1.1, Math.PI * 1.9);
      ctx.strokeStyle = "rgba(255, 120, 30, 0.9)";
      ctx.lineWidth = 3;
      ctx.shadowColor = "#ff5500";
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.restore();

      // Render 3D rotating dots with tiltX transformation
      for (let i = 1; i < numLatitudes; i++) {
        const phi = (Math.PI / numLatitudes) * i;
        const rawY = Math.cos(phi) * radius;
        const ringRadius = Math.sin(phi) * radius;

        for (let j = 0; j < pointsPerLat; j++) {
          const theta = (Math.PI * 2 / pointsPerLat) * j + rotation;
          const x = Math.sin(theta) * ringRadius;
          const rawZ = Math.cos(theta) * ringRadius;

          // Apply 3D pitch/tilt matrix
          const y = rawY * Math.cos(tiltX) - rawZ * Math.sin(tiltX);
          const z = rawY * Math.sin(tiltX) + rawZ * Math.cos(tiltX);

          if (z > 0) {
            const alpha = Math.max(0.1, z / radius);
            const isTopGlow = y < -20;
            
            ctx.beginPath();
            ctx.arc(centerX + x, centerY + y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = isTopGlow
              ? `rgba(255, 170, 80, ${alpha * 0.9})`
              : `rgba(200, 210, 240, ${alpha * 0.5})`;
            ctx.fill();
          }
        }
      }

      // Draw active AI hubs with 3D projection
      const hubs = [
        { lat: 0.25, lon: 0.4, label: "Mumbai (IN)" },
        { lat: -0.3, lon: -0.8, label: "San Francisco" },
        { lat: -0.5, lon: 0.1, label: "Frankfurt" },
        { lat: -0.1, lon: 1.1, label: "Singapore" },
      ];

      hubs.forEach((hub) => {
        const phi = Math.PI / 2 + hub.lat;
        const ringRadius = Math.sin(phi) * radius;
        const rawY = Math.cos(phi) * radius;
        const theta = hub.lon + rotation;
        const x = Math.sin(theta) * ringRadius;
        const rawZ = Math.cos(theta) * ringRadius;

        const y = rawY * Math.cos(tiltX) - rawZ * Math.sin(tiltX);
        const z = rawY * Math.sin(tiltX) + rawZ * Math.cos(tiltX);

        if (z > 15) {
          const hubAlpha = z / radius;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#ff6a00";
          ctx.shadowColor = "#ff5500";
          ctx.shadowBlur = 9;
          ctx.fill();

          const pulse = (Date.now() / 400) % 3;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, 3 + pulse * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 100, 20, ${Math.max(0, 0.8 - pulse * 0.25) * hubAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Spin accelerates with scroll velocity
      const scrollBoost = Math.abs(velocity) * 0.00003;
      rotation += 0.005 + scrollBoost;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollVelocity]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[380px] sm:max-w-[420px] mx-auto flex items-center justify-center select-none"
    >
      <canvas
        ref={canvasRef}
        width={420}
        height={420}
        className="w-full h-full object-contain pointer-events-none"
      />
      {/* Overlay Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#0d0f17]/90 border border-orange-500/30 text-[11px] font-mono text-zinc-300 backdrop-blur-md flex items-center space-x-2 shadow-xl shadow-black/80">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
        <span className="text-white font-bold">&lt; 30ms</span>
        <span className="text-zinc-400">Global Average Latency</span>
      </div>
    </div>
  );
}
