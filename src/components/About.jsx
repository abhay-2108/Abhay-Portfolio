import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Profile from '../assets/profile.jpg';
import '../styles/backgroundeffect.css';
import '../styles/About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const containerVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.3 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, x: 0, 
            transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
        }
    };

    return (
        <motion.div 
            className="about-section" id="about" ref={ref}
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}
        >
            <motion.div className="title" variants={childVariants}>
                <h2 className="about">About Me</h2>
            </motion.div>

            <div className="main-content">
                <motion.div className="profile" variants={childVariants}>
                    <img src={Profile} alt="Profile" />
                </motion.div>

                <motion.div className="content" variants={childVariants}>
                    <p>
                        I’m a passionate and driven Computer Science Engineering student at VIT Chennai, specializing in Artificial Intelligence and Machine Learning. With a solid foundation in computer science principles and hands-on experience in full-stack development, I thrive on building intelligent systems that solve real-world problems.

                        From developing AI-powered dashboards and secure web platforms to deploying machine learning pipelines and agent-based solutions, I’m constantly exploring ways to blend technology with impact. My commitment to continuous learning, clean code practices, and teamwork fuels my ability to contribute effectively in both collaborative and independent settings.

                        Whether it’s crafting scalable web applications or experimenting with cutting-edge AI frameworks, I’m always eager to innovate, learn, and grow.
                    </p>
                    
                    <motion.div variants={childVariants}>
                        <button className="btn">
                            <a className="resume" href="https://github.com/abhay-2108?tab=repositories" target="_blank">My Works</a>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
