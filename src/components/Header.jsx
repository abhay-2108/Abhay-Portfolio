import React, { useState, useEffect } from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../portfolioData";
import "../styles/Header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = section.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMenuOpen(false);
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "opensource", label: "Open Source" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Tech Stack" },
        { id: "certifications", label: "Certifications" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
            <nav className="nav-inner glass">
                <div className="logo cursor-pointer flex items-center gap-2" onClick={() => handleNavigation("home")}>
                    <span className="logo-accent font-mono-code font-bold text-lg text-primary">~/</span>
                    <span className="logo-text font-space font-bold tracking-tight text-white">abhay.ai</span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => { e.preventDefault(); handleNavigation(item.id); }}
                                className="nav-link font-medium text-sm text-slate-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors p-2"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors p-2"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                    <a
                        href={personalInfo.aiResume}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 transition-all hover:scale-105 active:scale-95"
                    >
                        <FaFileDownload size={12} />
                        Resume
                    </a>
                </div>

                <button
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="hamburger"></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
