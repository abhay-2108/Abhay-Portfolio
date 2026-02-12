import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Banner.css";
import Man from "../assets/Profileman.png";
import * as portfolioData from "../portfolioData";

const Banner = () => {
    const words = ["AI Engineer", "Deep Learning Engineer", "Full Stack Developer", "Machine Learning Engineer", "Problem Solver"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = isDeleting ? 80 : 100;

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typingTimer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setDisplayedText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [charIndex, isDeleting, currentWordIndex]);

    return (
        <section className="banner-section" id="home">
            <div className="container-custom">
                <div className="banner-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="banner-text"
                    >
                        <div className="banner-badge glass animate-pulse">Available for work</div>
                        <h2 className="banner-greeting">Innovation begins here</h2>
                        <h1 className="banner-title">
                            Hi, I'm <span className="text-gradient">Abhay</span>
                        </h1>
                        <div className="banner-role-wrapper">
                            <span className="banner-role">
                                <span className="highlight">{displayedText}</span>
                                <span className="cursor">|</span>
                            </span>
                        </div>
                        <p className="banner-description">
                            Pioneering the next generation of digital solutions with AI-driven engineering and impeccable design.
                        </p>
                        <div className="banner-actions">
                            <a href="#projects" className="btn-premium">View My Work</a>
                            <a href="#contact" className="btn-secondary glass">Contact Me</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="banner-image-wrapper"
                    >
                        <div className="image-glow"></div>
                        <img src={Man} alt="Abhay Tiwari" className="banner-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
