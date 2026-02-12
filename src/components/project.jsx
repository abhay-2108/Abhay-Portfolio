import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";
import { allProjects } from "./projectDataWrapper"; // I will create this wrapper to keep project.jsx clean

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="project-card-v2 rounded-[2.5rem] group relative"
    >
      <div className="card-image-content">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-info items-center flex flex-col flex-1">
        <h3 className="project-title-v2 font-space text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="project-details-v2 text-white/60 text-sm max-w-sm">
          {project.details}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="case-study-btn"
        >
          View Case Study
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");

  return (
    <section className="projects-section-v2 py-24" id="projects">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <h2 className="section-title text-gradient inline-block">Projects</h2>
          <p className="section-subtitle mt-4 text-white/60">Crafting intelligence through code and data</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mb-24">
          {["web", "ml"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`project-filter-btn font-bold transition-all tracking-[0.2em] uppercase text-xs ${selectedCategory === cat
                ? "active"
                : ""
                }`}
            >
              {cat === "web" ? "Software Projects" : "AI Projects"}
            </button>
          ))}
        </div>

        <div className="projects-bento-grid max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {allProjects[selectedCategory].map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative mt-20"
        >
          <a
            href="https://github.com/abhay-2108"
            target="_blank"
            rel="noreferrer"
            className="btn-premium px-12 py-4 inline-flex items-center gap-3"
          >
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
