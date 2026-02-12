import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container-custom footer-inner">
                <div className="footer-logo">
                    <span className="logo-accent">A</span>BHAY
                </div>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className="copyright">&copy; 2026 Abhay Tiwari. Crafted with precision.</p>
            </div>
        </footer>
    );
};

export default Footer;
