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
                        I’m a passionate Computer Science student at VIT Chennai, specializing in AI and Machine Learning. With hands-on experience in full-stack development and intelligent systems, I love building real-world solutions that combine technology with impact. From AI dashboards to secure web apps and ML pipelines, I’m always eager to innovate, learn, and grow.
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
