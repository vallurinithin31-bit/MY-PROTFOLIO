"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"ring" | "logo" | "wipe" | "done">("ring");

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeen = sessionStorage.getItem("nithin_portfolio_intro_v2");
    if (hasSeen) {
      setIsVisible(false);
      setPhase("done");
      return;
    }

    // Phase 1: Ring expansion (0 to 900ms)
    const t1 = setTimeout(() => {
      setPhase("logo");
    }, 900);

    // Phase 2: Logo reveal & pulse (900ms to 2000ms)
    const t2 = setTimeout(() => {
      setPhase("wipe");
    }, 2100);

    // Phase 3: Split curtain wipe & finish (2100ms to 2900ms)
    const t3 = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("nithin_portfolio_intro_v2", "true");
    setIsVisible(false);
    setPhase("done");
  };

  const handleManualReplay = () => {
    sessionStorage.removeItem("nithin_portfolio_intro_v2");
    setIsVisible(true);
    setPhase("ring");
    setTimeout(() => setPhase("logo"), 900);
    setTimeout(() => setPhase("wipe"), 2100);
    setTimeout(() => handleComplete(), 2800);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="cinematic-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[9999] bg-[#07080b] flex items-center justify-center select-none overflow-hidden"
          >
            {/* Ambient Warm Fire Ambilight Halo around the frame (just like the video) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ff5500]/15 to-transparent blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ff4500]/20 to-transparent blur-3xl" />
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#ff5500]/15 to-transparent blur-3xl" />
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#ff7700]/20 to-transparent blur-3xl" />
            </div>

            {/* Subtle Star / Ember Particle Dust */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

            {/* Split Wipe Curtains (Phase 3) */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={phase === "wipe" ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              style={{ originY: 0 }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#08080a] z-30 border-b border-orange-500/20"
            />
            <motion.div
              initial={{ scaleY: 1 }}
              animate={phase === "wipe" ? { scaleY: 0, opacity: 0 } : { scaleY: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              style={{ originY: 1 }}
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#08080a] z-30 border-t border-orange-500/20"
            />

            {/* Center Stage: Ring to Logo Reveal */}
            <div className="relative z-40 flex flex-col items-center justify-center">
              {/* Expanding Glowing Circular Ring (00:00 in video) */}
              {phase === "ring" && (
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: [0.2, 1.1, 1], opacity: [0, 1, 1] }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-20 h-20 rounded-full border-4 border-white/90 shadow-[0_0_50px_rgba(255,255,255,0.8),0_0_100px_rgba(255,85,0,0.6)]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.4], opacity: [0.8, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut", repeat: 1 }}
                    className="absolute w-20 h-20 rounded-full border border-orange-400"
                  />
                </div>
              )}

              {/* Logo Morph & Reveal (00:01 in video) */}
              {(phase === "logo" || phase === "wipe") && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, filter: "blur(8px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Brand Monogram Ring */}
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#13151f] to-[#07080b] border-2 border-orange-500/60 shadow-[0_0_60px_rgba(255,85,0,0.7),inset_0_0_20px_rgba(255,100,0,0.4)]">
                    <span className="font-heading font-black text-3xl tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(255,85,0,0.8)]">
                      NS
                    </span>
                    {/* Rotating Fire Arc */}
                    <div className="absolute -inset-1 rounded-full border border-transparent border-t-orange-400 border-r-amber-500 animate-spin-slow pointer-events-none" />
                  </div>

                  {/* Brand Name Typography */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mt-4 text-center"
                  >
                    <h2 className="font-heading font-black text-xl tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_15px_rgba(255,85,0,0.5)]">
                      NITHIN.AI
                    </h2>
                    <p className="text-[11px] font-mono tracking-widest text-orange-400 mt-1 uppercase">
                      Growth AI Engineer
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Skip Button Top Right */}
            <button
              onClick={handleComplete}
              className="absolute top-6 right-8 z-50 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-all backdrop-blur-md"
            >
              Skip Intro ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden button for replaying intro from anywhere */}
      <button
        id="replay-intro-btn"
        onClick={handleManualReplay}
        className="hidden"
        aria-hidden="true"
      />
    </>
  );
}
