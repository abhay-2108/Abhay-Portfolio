import { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  as: Element = "div",
  className = "",
  delay = 0,
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Element
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Element>
  );
};

export default Reveal;
