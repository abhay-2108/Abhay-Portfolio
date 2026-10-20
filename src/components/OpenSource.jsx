import React from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaCheckCircle, FaExternalLinkAlt, FaGithub, FaBolt } from "react-icons/fa";
import { openSourceContributions } from "../portfolioData";

const OpenSource = () => {
  return (
    <section className="opensource-section py-24 relative" id="opensource">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            <FaCodeBranch /> Verified GitHub PRs & Core Improvements
          </div>
          <h2 className="section-title text-gradient inline-block">
            Open Source Contributions
          </h2>
          <p className="section-subtitle mt-4 text-slate-400 max-w-2xl mx-auto">
            Contributing architecture optimizations, human-in-the-loop safety governors, 
            and protocol invariants across prominent AI platforms and developer tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openSourceContributions.map((contrib, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[50px] -z-10 group-hover:bg-violet-500/20 transition-all rounded-full" />

              <div>
                {/* Header row: Repo & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-white/5 text-violet-400 border border-white/10">
                      <FaGithub size={16} />
                    </span>
                    <div>
                      <span className="font-mono-code text-xs text-violet-300 font-semibold block">
                        {contrib.repo}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {contrib.org}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 font-semibold">
                      <FaCheckCircle size={10} /> {contrib.status}
                    </span>
                  </div>
                </div>

                {/* Contribution Title */}
                <h3 className="font-space text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {contrib.title}
                </h3>

                {/* High-impact highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-code font-bold bg-violet-500/20 text-violet-200 border border-violet-500/30 mb-4">
                  <FaBolt className="text-amber-400" /> {contrib.badge}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {contrib.description}
                </p>

                {/* Measured Impact Box */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400 block mb-1">
                    Measured Impact & Quality Gate:
                  </span>
                  <p className="text-xs font-medium text-emerald-300 font-mono-code">
                    {contrib.impact}
                  </p>
                </div>
              </div>

              {/* Footer: Tags and PR Link */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {contrib.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge-tech text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={contrib.prLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-violet-400 hover:text-cyan-300 transition-colors font-semibold group/link"
                >
                  Inspect PR {contrib.prNumber}
                  <FaExternalLinkAlt size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
