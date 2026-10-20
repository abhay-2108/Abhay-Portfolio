import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaDatabase, FaServer, FaCheck } from "react-icons/fa";
import { technicalSkills } from "../portfolioData";
import "../styles/skills.css";

const categoryIcons = {
  "Autonomous Agents & LLMs": <FaRobot className="text-violet-400" size={20} />,
  "Machine Learning & Deep Learning": <FaCogs className="text-cyan-400" size={20} />,
  "Local-First & Data Systems": <FaDatabase className="text-emerald-400" size={20} />,
  "Systems & Full-Stack Core": <FaServer className="text-amber-400" size={20} />
};

const Skills = () => {
  return (
    <section className="skills-section py-24 relative" id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            <FaCogs /> Architecture & Skill Taxonomy
          </div>
          <h2 className="section-title text-gradient inline-block">
            Technical Stack & Architecture
          </h2>
          <p className="section-subtitle mt-4 text-slate-400 max-w-2xl mx-auto">
            From low-level protocol invariants and distributed local storage to multi-agent DAGs and neural networks.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSkills.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {categoryIcons[cat.category] || <FaCogs className="text-violet-400" />}
                  </div>
                  <div>
                    <h3 className="font-space text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Cloud */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-default ${
                        skill.highlight
                          ? "bg-violet-500/15 text-violet-200 border border-violet-500/30 shadow-sm shadow-violet-500/10"
                          : "bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      {skill.highlight && <FaCheck size={9} className="text-emerald-400" />}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sub-bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono-code">
                <span>Production Ready</span>
                <span className="text-violet-400/80">{cat.skills.length} Capabilities</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
