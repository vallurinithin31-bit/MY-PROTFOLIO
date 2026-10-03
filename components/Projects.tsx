"use client";

import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, Github, ExternalLink, Sparkles, Layers, BookOpen } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory, ProjectItem } from "@/data/projects";
import { Perspective3DCard } from "./Perspective3DCard";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const featuredProject = PROJECTS[0];
  const remainingProjects = PROJECTS.slice(1);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header & Category Filters (Section 13) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
              <FolderGit2 className="w-4 h-4" />
              <span>05 // PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              Things I've been building
            </h2>
            <p className="text-sm font-mono text-zinc-400">
              Modular AI architectures, intelligent workflows, and data-driven systems ready for extension.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#ff5500] text-[#07080b] font-bold shadow-lg shadow-[#ff5500]/20"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 14: FEATURED PROJECT DESIGN (Shown when 'All' or when featured matches) */}
        {selectedCategory === "All" && (
          <div className="space-y-8">
            <Perspective3DCard depth={10} glowColor="rgba(255, 85, 0, 0.25)">
              <div className="premium-card p-6 sm:p-10 relative overflow-hidden group border border-white/15 hover:border-[#ff5500]/40 transition-all duration-500 shadow-2xl">
              
              {/* Ambient backdrop glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff5500]/10 via-[#ff9500]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left: Project preview/image */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#07080b] group-hover:border-[#ff5500]/30 transition-all">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07080b]/90 border border-white/15 text-[10px] font-mono text-[#ff5500] backdrop-blur-md flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
                      <span className="uppercase tracking-wider">FEATURED ARCHITECTURE</span>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#07080b]/85 border border-white/15 text-[10px] font-mono text-[#ff9500] backdrop-blur-md">
                      {featuredProject.category}
                    </div>
                  </div>
                </div>

                {/* Right: Project title, Short description, Tech tags, Buttons */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#ff9500] uppercase tracking-wider block">
                      {featuredProject.categoryLabel}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#ff5500] transition-colors leading-tight">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-zinc-300">
                    {featuredProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] mt-2 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Only rendered if URL exists, or modular placeholder) */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 font-mono text-xs">
                    {featuredProject.liveDemoUrl && (
                      <a
                        href={featuredProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff9500] text-[#07080b] font-bold hover:opacity-95 flex items-center space-x-1.5 shadow-lg shadow-[#ff5500]/20"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 flex items-center space-x-1.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {featuredProject.caseStudyUrl && (
                      <a
                        href={featuredProject.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 flex items-center space-x-1.5"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Case Study</span>
                      </a>
                    )}

                    {!featuredProject.liveDemoUrl && !featuredProject.githubUrl && (
                      <div className="flex items-center space-x-2 text-zinc-400 font-mono text-xs bg-white/[0.02] px-3.5 py-2 rounded-lg border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-[#ff5500]/60" />
                        <span>Featured Template · Ready for Project Repo / Demo URL</span>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </Perspective3DCard>

            {/* Sub-header for smaller cards */}
            <div className="pt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#ff9500]" />
                <span>Specialized Domain Implementations</span>
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {remainingProjects.length} Modules Available
              </span>
            </div>
          </div>
        )}

        {/* 3-4 Project Cards Grid (Underneath featured or when filtered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === "All" ? remainingProjects : filteredProjects).map((project) => (
            <Perspective3DCard key={project.id} depth={8} glowColor="rgba(255, 85, 0, 0.2)">
              <div
                className="premium-card p-6 flex flex-col justify-between group transition-all duration-300 border border-white/10 hover:border-white/20 h-full"
              >
              <div>
                {/* Tech Visual Frame */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-[#07080b]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#07080b]/90 border border-white/15 text-[10px] font-mono text-[#ff9500] backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                <span className="font-mono text-[11px] text-[#ff9500] uppercase tracking-wider block mb-1">
                  {project.categoryLabel}
                </span>

                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-[#ff5500] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light mb-4">
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1 mb-4 font-sans text-[11px] text-zinc-400">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-[#ff5500]" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 font-mono text-[10px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-white/[0.02] border border-white/5 font-mono text-[10px] text-zinc-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons (Only shown if links exist) */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#ff5500] to-[#ff9500] text-[#07080b] font-bold hover:opacity-90 flex items-center space-x-1 text-[11px]"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center space-x-1 text-[11px]"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white flex items-center space-x-1 text-[11px]"
                    >
                      <span>Case</span>
                    </a>
                  )}

                  {!project.liveDemoUrl && !project.githubUrl && !project.caseStudyUrl && (
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Ready for custom URL
                    </span>
                  )}
                </div>

                <span className="text-[10px] text-zinc-600 font-mono">
                  EDITABLE
                </span>
              </div>
            </div>
          </Perspective3DCard>
          ))}
        </div>

      </div>
    </section>
  );
}
