import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profile from '../assets/profile.jpg';
import { FaFileCode, FaBrain } from 'react-icons/fa';
import * as portfolioData from '../portfolioData';

const About = () => {
    return (
        <section className="about-section py-32" id="about">
            <div className="container-custom">
                <div className="about-grid items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="about-image-wrapper relative"
                    >
                        <div className="profile-frame relative z-10 glass rounded-[3rem] p-3 overflow-hidden">
                            <img src={profile} alt="Abhay Tiwari" className="profile-image rounded-[2.5rem] w-full aspect-square object-cover" />
                            <div className="image-shine"></div>
                        </div>
                        <div className="profile-blob absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="about-content-wrapper flex flex-col justify-center"
                    >
                        <div className="about-header-group mb-12">
                            <h2 className="section-title text-gradient text-left leading-tight">About Me</h2>
                            <div className="tagline-container mt-4">
                                <span className="about-tagline font-space font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase">
                                    Problem Solver &bull; AI Architect &bull; Web Engineer
                                </span>
                            </div>
                        </div>

                        <div className="about-card glass p-10 md:p-14 lg:p-14 xl:p-16 rounded-[2.5rem] border border-white/10 relative">
                            <div className="about-text-container text-left lg:text-left">
                                <p className="text-white/90 leading-relaxed mb-8">
                                    I am <span className="text-white font-bold">Abhay Tiwari</span>, an AI-focused engineer passionate about building intelligent systems. Currently pursuing <span className="text-primary font-bold">Computer Science at VIT Chennai</span>, I specialize in bridging the gap between robust software engineering and cutting-edge machine learning.
                                </p>
                                <p className="text-white/60 leading-relaxed mb-12">
                                    My approach combines <span className="text-secondary font-medium">technical precision</span> with <span className="text-accent font-medium">creative problem-solving</span>. Whether it's training deep learning models or architecting scalable web platforms, I focus on delivering impact through clean code and data-driven insights.
                                </p>

                                <div className="about-stats grid grid-cols-2 gap-8 md:gap-12 mt-8">
                                    <div className="stat-item border-primary/20">
                                        <h4 className="text-4xl md:text-5xl font-space font-bold text-gradient mb-2">15+</h4>
                                        <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold">Complex Projects</p>
                                    </div>
                                    <div className="stat-item border-primary/20">
                                        <h4 className="text-4xl md:text-5xl font-space font-bold text-gradient mb-2">90%</h4>
                                        <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold">Model Precision</p>
                                    </div>
                                </div>

                                <div className="resume-actions-container flex flex-wrap justify-center gap-4 mt-12">
                                    <a
                                        href={portfolioData.webResume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-download-btn glass group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="icon-box text-primary text-xl transform group-hover:scale-110 transition-transform">
                                                <FaFileCode />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-black mb-0.5">Software Development</span>
                                                <span className="font-space font-bold text-sm text-white/90 group-hover:text-primary transition-colors">Download Resume</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={portfolioData.aiResume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-download-btn glass group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="icon-box text-secondary text-xl transform group-hover:scale-110 transition-transform">
                                                <FaBrain />
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-black mb-0.5">AI & Machine Learning</span>
                                                <span className="font-space font-bold text-sm text-white/90 group-hover:text-secondary transition-colors">Download Resume</span>
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
