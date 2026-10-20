import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaCodeBranch, FaExternalLinkAlt, FaDownload, FaPlay } from "react-icons/fa";
import { personalInfo } from "../portfolioData";
import "../styles/Banner.css";

const simulationLogs = [
  {
    title: "Autonomous Agent Swarm",
    cmd: "agent-foundry --workflow feature-factory --target ./workspace",
    lines: [
      { text: "Initializing 10 specialist personas & 40 modular skills...", color: "text-slate-400" },
      { text: "✓ Lead Orchestrator constructed 4-stage dependency DAG", color: "text-cyan-400" },
      { text: "✓ Security Red Teamer verified zero external cloud telemetry", color: "text-emerald-400" },
      { text: "✓ FastMCP JSON-RPC server mounted with 3-tier memory engine", color: "text-violet-400" },
      { text: "STATUS: Multi-agent execution completed with 0 errors", color: "text-emerald-300 font-bold" }
    ]
  },
  {
    title: "Local-First On-Device AI",
    cmd: "pageflow --runtime electron-33 --local-llm ollama:deepseek-r1",
    lines: [
      { text: "Mounting SQLite Write-Ahead Logging (WAL) store...", color: "text-slate-400" },
      { text: "✓ Yjs CRDT peer-to-peer conflict-free synchronization active", color: "text-cyan-400" },
      { text: "✓ Air-gapped streaming connection established via Ollama", color: "text-violet-400" },
      { text: "✓ Executed local test suite: 113 of 113 unit tests passed", color: "text-emerald-400" },
      { text: "STATUS: 100% private workspace ready. Zero bytes sent to cloud.", color: "text-emerald-300 font-bold" }
    ]
  },
  {
    title: "100x Vector Ingestion",
    cmd: "docsgpt --ingest vector-store --batch-size 100 --chunker recursive",
    lines: [
      { text: "Analyzing 500 document fragments across semantic boundaries...", color: "text-slate-400" },
      { text: "✓ Replaced sequential round-trips with batched array payloads", color: "text-violet-400" },
      { text: "✓ Boundary-aware recursive token splitter: 0 fractured words", color: "text-cyan-400" },
      { text: "✓ Ingestion duration plummeted from 75.0s -> 0.75s (100.0x faster)", color: "text-emerald-400" },
      { text: "STATUS: Merged upstream into arc53/DocsGPT (PR #2505)", color: "text-emerald-300 font-bold" }
    ]
  }
];

const Banner = () => {
  const roles = [
    "AI Engineer & Agentic Systems",
    "Model Context Protocol (MCP) Builder",
    "Open Source Contributor",
    "Local-First & Air-Gapped AI Architect"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSimIndex, setActiveSimIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayedText(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const activeSim = simulationLogs[activeSimIndex];

  return (
    <section className="banner-section relative pt-32 pb-20 md:pt-40 md:pb-28" id="home">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Hero Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for AI Engineering & Agentic Roles</span>
            </div>

            <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm <span className="text-gradient">Abhay Tiwari</span>
            </h1>

            <div className="h-10 mb-6 flex items-center">
              <span className="font-mono-code text-lg sm:text-xl text-violet-300 font-semibold">
                {displayedText}
                <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Computer Science Engineer (AI & ML) at <span className="text-white font-semibold">VIT Chennai</span>. 
              Engineering production-grade <span className="text-violet-400 font-medium">autonomous agent swarms</span>, 
              <span className="text-cyan-400 font-medium"> air-gapped local AI</span>, and 
              contributing high-throughput optimizations to global open-source platforms.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] mb-8">
              <div>
                <div className="font-space text-2xl font-bold text-white">77+</div>
                <div className="text-xs text-slate-400">GitHub Repos</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="font-space text-2xl font-bold text-violet-400">100x</div>
                <div className="text-xs text-slate-400">Ingestion Speedup</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="font-space text-2xl font-bold text-cyan-400">Zero</div>
                <div className="text-xs text-slate-400">Cloud Telemetry</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#opensource"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <FaCodeBranch />
                Explore Open Source PRs
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Flagship Work
              </a>
              <a
                href={personalInfo.aiResume}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaDownload size={13} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Agent Terminal Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12] shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#13131c] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono-code text-slate-400 ml-2 flex items-center gap-1.5">
                    <FaTerminal size={10} /> agent_runtime.sh
                  </span>
                </div>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  FastMCP Active
                </span>
              </div>

              {/* Simulation Selector Tabs */}
              <div className="flex border-b border-white/5 bg-[#09090e] p-1 gap-1">
                {simulationLogs.map((sim, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSimIndex(i)}
                    className={`flex-1 text-xs py-1.5 px-2 rounded-lg font-mono-code transition-all text-center truncate ${
                      activeSimIndex === i
                        ? "bg-white/10 text-white font-semibold"
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
                    }`}
                  >
                    {sim.title}
                  </button>
                ))}
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono-code text-xs space-y-2 min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="text-slate-500 text-[11px] mb-2"># Interactive runtime simulator</div>
                  <div className="text-violet-300 font-semibold mb-3 flex items-start gap-2">
                    <span className="text-cyan-400 select-none">$</span>
                    <span>{activeSim.cmd}</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSimIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5 pl-3 border-l-2 border-violet-500/30"
                    >
                      {activeSim.lines.map((line, lIdx) => (
                        <div key={lIdx} className={`${line.color} leading-relaxed`}>
                          {line.text}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Local Sandboxed Engine
                  </span>
                  <button
                    onClick={() => setActiveSimIndex((prev) => (prev + 1) % simulationLogs.length)}
                    className="text-violet-400 hover:text-violet-300 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <FaPlay size={8} /> Next Workflow
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
