"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useVelocity, useTransform } from "framer-motion";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

export function Scroll3DParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create 3D particles distributed in depth space (z: 1 to 1000)
    const particleCount = 65;
    const particles: Particle3D[] = [];
    const colors = [
      "rgba(255, 85, 0, ",
      "rgba(255, 149, 0, ",
      "rgba(255, 60, 0, ",
      "rgba(245, 158, 11, ",
      "rgba(255, 200, 100, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 900 + 100,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    let animationFrameId: number;
    let scrollDelta = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Read current scroll delta
      const currentScroll = window.scrollY;
      const velocity = (currentScroll - lastScrollY.current) * 0.8;
      lastScrollY.current = currentScroll;
      scrollDelta += (velocity - scrollDelta) * 0.1;

      const fov = 400; // 3D Field of view
      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((p) => {
        // Scroll pushes particles toward or away from camera in 3D
        p.z -= p.speed + scrollDelta * 0.25;

        // Reset if behind camera or too far away
        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        } else if (p.z > 1000) {
          p.z = 20;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        // 3D Perspective Projection formula: (x * fov) / z
        const scale = fov / p.z;
        const screenX = centerX + p.x * scale;
        const screenY = centerY + p.y * scale;
        const radius = Math.max(0.5, p.size * scale);
        const depthAlpha = Math.min(1, Math.max(0, 1 - p.z / 1000)) * p.opacity;

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${depthAlpha})`;
          ctx.shadowColor = "#ff5500";
          ctx.shadowBlur = radius > 2 ? 8 : 2;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] select-none"
    />
  );
}
