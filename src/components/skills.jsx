import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

const skills = {
  Frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'EJS', level: 70 },
    { name: 'Figma (UI/UX)', level: 75 },
  ],
  'Backend & Languages': [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'C', level: 90 },
    { name: 'C++', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'Flask', level: 75 },
    { name: 'Django', level: 80 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'JWT Auth', level: 75 },
  ],
  'AI & ML': [
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'NLP (Natural Language Processing)', level: 80 },
    { name: 'TensorFlow', level: 75 },
    { name: 'PyTorch', level: 70 },
    { name: 'Scikit-learn', level: 80 },
    { name: 'LangChain & Agentic AI', level: 85 },
    { name: 'LLMs (Large Language Models)', level: 80 },
    { name: 'RAG Pipelines', level: 75 },
    { name: 'Vector Databases', level: 75 },
  ],
  'Databases & Tools': [
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'Supabase', level: 70 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'Apache Kafka', level: 70 },
  ],
  'Other Skills': [
    { name: 'Prompt Engineering', level: 80 },
    { name: 'Data Structures & Algorithms (DSA)', level: 80 },
    { name: 'Team Collaboration & Agile Dev', level: 85 },
    { name: 'Communication & Problem Solving', level: 85 },
  ],
};


const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, 
      ease: [0.25, 1, 0.5, 1], 
    },
  },
};
const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="title">My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="skills-section"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>{category}</h3>
            {skillList.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">
                  {skill.name} <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <p className="skill-end">
        I'm committed to continuously enhancing my skills by exploring emerging technologies and staying informed about the latest trends in web development.
      </p>
    </div>
  );
};

export default Skills;
