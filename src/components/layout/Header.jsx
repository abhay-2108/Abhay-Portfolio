import { useCallback, useEffect, useState } from "react";
import { navLinks, profile } from "../../data/portfolio";
import Button from "../ui/Button";
import Monogram from "../ui/Monogram";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label="Abhay Tiwari, back to top">
            <Monogram />
            <span className="brand__text">
              abhay tiwari
              <small>AI SYSTEMS ENGINEER</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <span className="availability">
              <i className="availability__dot" aria-hidden="true" />
              <span>{profile.availability}</span>
            </span>
            <Button
              href={profile.resume}
              variant="ghost"
              external
              className="button--small site-header__resume"
            >
              Resume <span aria-hidden="true">↗</span>
            </Button>
            <button
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-navigation">
        <MobileMenu
          open={menuOpen}
          onClose={closeMenu}
          links={navLinks}
          profile={profile}
        />
      </div>
    </>
  );
};

export default Header;
