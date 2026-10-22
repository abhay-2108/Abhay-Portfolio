import { useCallback, useEffect, useRef } from "react";
import Button from "../ui/Button";
import Monogram from "../ui/Monogram";

const MobileMenu = ({ open, onClose, links, profile }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (!panelRef.current) return;

      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      ref={panelRef}
    >
      <div className="mobile-menu__top">
        <a className="brand" href="#top" onClick={onClose}>
          <Monogram />
          <span className="brand__text">
            abhay tiwari
            <small>{profile.role.toUpperCase()}</small>
          </span>
        </a>
        <button
          className="mobile-menu__close"
          type="button"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close menu"
        >
          <span />
          <span />
        </button>
      </div>

      <nav className="mobile-menu__nav" aria-label="Mobile">
        {links.map((link, index) => (
          <a key={link.href} href={link.href} onClick={onClose}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mobile-menu__footer">
        <p className="mono-label">
          {profile.location.toUpperCase()} · {profile.timezone}
        </p>
        <div className="mobile-menu__socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`}>Email ↗</a>
        </div>
        <Button href={profile.resume} variant="primary" external>
          Resume <span aria-hidden="true">↓</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
