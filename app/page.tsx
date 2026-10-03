import React from "react";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Strengths } from "@/components/Strengths";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { AIFocus } from "@/components/AIFocus";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { CareerJourney } from "@/components/CareerJourney";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollWidget } from "@/components/ScrollWidget";
import { Scroll3DParticles } from "@/components/Scroll3DParticles";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-100 selection:bg-[#ff5500]/40 selection:text-white relative">
      {/* 3D SCROLL-REACTIVE PARTICLES (Warps & drifts in depth space with scroll speed) */}
      <Scroll3DParticles />

      {/* 0. CINEMATIC REALISTIC PRELOADER (Ring -> Logo -> Split Curtain Reveal matching 00:00 - 00:02 in reference) */}
      <OpeningAnimation />

      {/* 1. TOP SCROLL PROGRESS BAR */}
      <ScrollProgress />

      {/* 2. FIXED NAVIGATION BAR */}
      <Navbar />

      {/* MAIN SECTIONS CONTAINER WITH SMOOTH SCROLL REVEALS */}
      <main className="w-full overflow-hidden">
        {/* HERO SECTION WITH REALISTIC FIRE SUNBEAM & AI CIRCUIT CENTERPIECE (Matches 00:03 - 00:07 in reference) */}
        <Hero />

        {/* ABOUT ME */}
        <ScrollReveal direction="up" delay={0.1}>
          <About />
        </ScrollReveal>

        {/* AI / TECHNOLOGY BENTO GRID & 3D ROTATING GLOBE (Matches 00:12 - 00:22 in reference) */}
        <ScrollReveal direction="up" delay={0.1}>
          <AIFocus />
        </ScrollReveal>

        {/* SKILLS / EXPERTISE */}
        <ScrollReveal direction="up" delay={0.1}>
          <Skills />
        </ScrollReveal>

        {/* PROJECTS */}
        <ScrollReveal direction="up" delay={0.1}>
          <Projects />
        </ScrollReveal>

        {/* PROFESSIONAL STRENGTHS */}
        <ScrollReveal direction="up" delay={0.1}>
          <Strengths />
        </ScrollReveal>

        {/* EXPERIENCE */}
        <ScrollReveal direction="up" delay={0.1}>
          <Experience />
        </ScrollReveal>

        {/* CERTIFICATIONS & LEARNING */}
        <ScrollReveal direction="up" delay={0.1}>
          <Certifications />
        </ScrollReveal>

        {/* EDUCATION */}
        <ScrollReveal direction="up" delay={0.1}>
          <Education />
        </ScrollReveal>

        {/* CAREER JOURNEY / TIMELINE */}
        <ScrollReveal direction="up" delay={0.1}>
          <CareerJourney />
        </ScrollReveal>

        {/* CONTACT WITH LUMINOUS FIERY SUNRISE HORIZON (Matches 00:36 - 00:38 in reference) */}
        <ScrollReveal direction="up" delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING SCROLL HUD */}
      <ScrollWidget />
    </div>
  );
}
