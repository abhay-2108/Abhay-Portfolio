import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profile from '../assets/profile.jpg';
import { FaFileCode, FaBrain } from 'react-icons/fa';
import { aiResume, webResume } from '../portfolioData';

const About = () => {
    return (
        <section className="about-section py-32" id="about">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-header-group mb-16 text-center"
                >
                    <h2 className="section-title text-gradient leading-tight mb-4">About Me</h2>
                    <div className="tagline-container">
                        <span className="about-tagline font-space font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase">
                            Problem Solver &bull; AI Architect &bull; Web Engineer
                        </span>
                    </div>
                </motion.div>

                <div className="about-grid items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="about-image-wrapper relative"
                    >
                        <div className="profile-frame relative z-10 glass rounded-[3rem] p-3 overflow-hidden mx-auto">
                            <img src={profile} alt="Abhay Tiwari" className="profile-image rounded-[2.5rem] w-full aspect-square object-cover" />
                            <div className="image-shine"></div>
                        </div>
                        <div className="profile-blob absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="about-content-wrapper flex flex-col justify-center items-center z-10"
                    >
                        <div className="about-card glass p-6 rounded-[2.5rem] border border-white/10 relative max-w-[650px]">
                            <div className="about-text-container text-left relative z-20">
                                <p className="text-white/90 leading-relaxed mb-3">
                                    I am <span className="text-white font-bold">Abhay Tiwari</span>, an AI-focused engineer passionate about building intelligent systems. Currently pursuing <span className="text-primary font-bold">Computer Science at VIT Chennai</span>, I specialize in bridging the gap between robust software engineering and cutting-edge machine learning.
                                </p>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    My approach combines <span className="text-secondary font-medium">technical precision</span> with <span className="text-accent font-medium">creative problem-solving</span>. Whether it's training deep learning models or architecting scalable web platforms, I focus on delivering impact through clean code and data-driven insights.
                                </p>

                                <div className="about-stats grid grid-cols-2 gap-8 md:gap-12 mt-3">
                                    <div className="stat-item border-primary/20">
                                        <h4 className="text-3xl md:text-4xl font-space font-bold text-gradient mb-2">15+</h4>
                                        <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold">Complex Projects</p>
                                    </div>
                                    <div className="stat-item border-primary/20">
                                        <h4 className="text-3xl md:text-4xl font-space font-bold text-gradient mb-2">90%</h4>
                                        <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold">Model Precision</p>
                                    </div>
                                </div>

                                <div className="resume-actions-container flex flex-wrap md:flex-nowrap justify-between gap-3 mt-10">
                                    <a
                                        href={webResume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-download-btn glass group flex-1"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="icon-box text-primary text-lg transform group-hover:scale-110 transition-transform">
                                                <FaFileCode />
                                            </div>
                                            <div className="flex flex-col items-start overflow-hidden">
                                                <span className="text-[7px] uppercase tracking-[0.1em] text-white/40 font-black truncate w-full">Software Dev</span>
                                                <span className="font-space font-bold text-[10px] text-white/90 group-hover:text-primary transition-colors whitespace-nowrap">Download Resume</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={aiResume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-download-btn glass group flex-1"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="icon-box text-secondary text-lg transform group-hover:scale-110 transition-transform">
                                                <FaBrain />
                                            </div>
                                            <div className="flex flex-col items-start overflow-hidden">
                                                <span className="text-[7px] uppercase tracking-[0.1em] text-white/40 font-black truncate w-full">AI & ML</span>
                                                <span className="font-space font-bold text-[10px] text-white/90 group-hover:text-secondary transition-colors whitespace-nowrap">Download Resume</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[140px] -z-0"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
