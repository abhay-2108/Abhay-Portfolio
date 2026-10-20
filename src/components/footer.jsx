import React from 'react';
import { FaGithub, FaLinkedinIn, FaCodeBranch } from 'react-icons/fa';
import { personalInfo } from '../portfolioData';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-section py-12 border-t border-white/5 bg-[#050508]">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <span className="font-mono-code font-bold text-violet-400">~/</span>
                    <span className="font-space font-bold text-lg text-white">abhay.ai</span>
                    <span className="text-xs text-slate-500 font-mono-code ml-2">
                        • Autonomous AI Systems & Open Source
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono-code">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#opensource" className="hover:text-violet-300 transition-colors flex items-center gap-1">
                        <FaCodeBranch size={10} /> Open Source
                    </a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-white transition-colors">Stack</a>
                    <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <span>&copy; {new Date().getFullYear()} Abhay Tiwari</span>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                        <FaGithub size={15} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                        <FaLinkedinIn size={15} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
