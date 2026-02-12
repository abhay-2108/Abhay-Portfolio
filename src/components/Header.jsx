import React, { useState, useEffect } from "react";
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

    return (
        <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
            <nav className="nav-inner glass">
                <div className="logo" onClick={() => handleNavigation("home")}>
                    <span className="logo-accent">A</span>
                    <span className="logo-text">BHAY</span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {["home", "about", "skills", "projects", "certifications", "contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={(e) => { e.preventDefault(); handleNavigation(item); }}
                                className="nav-link"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

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
