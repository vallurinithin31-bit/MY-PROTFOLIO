"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollWidget() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
      setScrollProgress(currentProgress);
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 15 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* Scroll Progress & Return to Cover */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#0d0f15]/90 border border-white/15 hover:border-white/30 backdrop-blur-xl text-zinc-300 hover:text-white transition-all shadow-2xl font-mono text-xs"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <span className="text-[11px] text-zinc-400 font-semibold">{scrollProgress}%</span>
            <div className="w-[1px] h-3 bg-white/20" />
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#ff5500]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
