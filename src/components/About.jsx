import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaBrain, FaTerminal, FaShieldAlt, FaBolt, FaGraduationCap } from 'react-icons/fa';
import profile from '../assets/profile.jpg';
import { personalInfo, about, aiResume, webResume } from '../portfolioData';
import '../styles/About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaTerminal className="text-violet-400" />,
      title: "Autonomous Agent Architectures",
      desc: "Engineering multi-agent systems with Model Context Protocol (MCP), 3-tier persistent memory, and deterministic DAG validation."
    },
    {
      icon: <FaShieldAlt className="text-cyan-400" />,
      title: "Local-First & Air-Gapped AI",
      desc: "Building desktop ecosystems (PageFlow) that stream local models (Ollama) with SQLite WAL and CRDTs with zero external cloud telemetry."
    },
    {
      icon: <FaBolt className="text-amber-400" />,
      title: "100x High-Throughput Ingestion",
      desc: "Optimizing enterprise vector stores, batched insertions, and boundary-aware token splitters in production RAG systems (DocsGPT)."
    }
  ];

  return (
    <section className="about-section py-24 relative" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            <FaBrain /> Engineering Focus & Principles
          </div>
          <h2 className="section-title text-gradient inline-block">
            About Abhay Tiwari
          </h2>
          <p className="section-subtitle mt-4 text-slate-400 max-w-2xl mx-auto">
            Computer Science Engineer specializing in Artificial Intelligence & Machine Learning at VIT Chennai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image & Quick Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d14] p-3">
                <img
                  src={profile}
                  alt={personalInfo.name}
                  className="w-full aspect-square object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback to Profileman if profile.jpg fails
                    e.currentTarget.src = "/Profileman.png";
                  }}
                />
                
                {/* Overlay Card Details */}
                <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-violet-300">
                    <FaGraduationCap size={14} className="text-cyan-400" />
                    <span>VIT Chennai • B.Tech CSE (AI & ML)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                    <span>Active GitHub Footprint:</span>
                    <span className="font-mono-code font-bold text-emerald-400">{personalInfo.stats.repositories} Repositories</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                {about}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                My approach focuses on engineering real reliability into AI: eliminating cloud telemetry leaks with local runtimes, safeguarding agent tools with boundary governors, and accelerating data ingestion throughput at scale.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-violet-500/30 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-sm text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Downloads */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={aiResume}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/20 transition-all flex items-center gap-2"
              >
                <FaFileDownload /> Download AI/ML Resume
              </a>
              <a
                href={webResume}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-2"
              >
                <FaFileDownload /> Download Full-Stack Resume
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
