import React from "react";
import { motion } from "framer-motion";
import "../styles/skills.css";
import { webSkills, aiSkills } from "../portfolioData";

const SkillPill = ({ name }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="skill-pill"
  >
    {name}
  </motion.div>
);

const Skills = () => {
  // Helper to categorize skills if they aren't already grouped as needed
  const frontend = webSkills.filter(s => s.category === 'Frontend');
  const backend = webSkills.filter(s => s.category === 'Backend & Languages');
  const ai = aiSkills.filter(s => s.category === 'AI & ML');
  const tools = [...webSkills.filter(s => s.category === 'Databases & Tools'), ...aiSkills.filter(s => s.category === 'Other Skills')];

  const categories = [
    { title: "Software Engineering", skills: [...frontend, ...backend], color: "primary" },
    { title: "AI & Machine Learning", skills: ai, color: "secondary" },
    { title: "Databases & Core Tools", skills: tools, color: "accent" }
  ];

  return (
    <section className="skills-section py-32" id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-20"
        >
          <h2 className="section-title text-gradient inline-block">Technical Expertise</h2>
          <p className="section-subtitle mt-4 text-white/60">A fusion of engineering and intelligence</p>
        </motion.div>

        <div className="skills-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="skills-category rounded-[2.5rem]"
            >
              <h3 className={`category-title font-space font-bold border-${cat.color}`}>
                {cat.title}
              </h3>
              <div className="skills-cloud mt-6">
                {cat.skills.map((skill, sIdx) => (
                  <SkillPill key={sIdx} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
            & More: Java • Django • Apache Kafka • Agentic AI • Responsive UX
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
