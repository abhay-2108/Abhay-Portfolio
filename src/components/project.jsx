import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaStar } from "react-icons/fa";
import { projects } from "../portfolioData";
import "../styles/projects.css";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 blur-3xl -z-10 group-hover:from-violet-600/20 group-hover:to-cyan-600/20 transition-all rounded-full" />

      <div>
        {/* Top Category & Metric Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono-code uppercase tracking-wider text-violet-400 font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-[11px] font-mono-code text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="font-space text-2xl font-bold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs font-mono-code text-cyan-300 font-medium mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technical Architecture Details */}
        {project.details && (
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6">
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-slate-400 block mb-1">
              Architecture Overview
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              {project.details}
            </p>
          </div>
        )}
      </div>

      {/* Footer: Tags & GitHub Link */}
      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 max-w-sm">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="badge-tech text-[10px]">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-violet-600 hover:text-white text-slate-300 border border-white/10 hover:border-violet-500 transition-all font-mono-code group/btn"
        >
          <FaGithub size={13} />
          <span>Source Code</span>
          <FaExternalLinkAlt size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "agentic", label: "Agentic & Local AI" },
    { id: "ai", label: "AI & Deep Learning" },
    { id: "systems", label: "Systems & Infrastructure" }
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="projects-section-v2 py-24 relative" id="projects">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            <FaLayerGroup /> Curated Systems & Software
          </div>
          <h2 className="section-title text-gradient inline-block">
            Featured Projects
          </h2>
          <p className="section-subtitle mt-4 text-slate-400 max-w-2xl mx-auto">
            Autonomous agent workflows, zero-cloud desktop platforms, and low-latency systems.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25 border border-violet-500"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout: Easily Add More Projects */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 font-mono-code">
            Explore 70+ more specialized repositories & research experiments on{" "}
            <a
              href="https://github.com/abhay-2108"
              target="_blank"
              rel="noreferrer"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
            >
              github.com/abhay-2108
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
