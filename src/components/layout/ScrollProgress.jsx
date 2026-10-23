import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;

    if (window.CSS?.supports?.("animation-timeline: scroll()")) {
      return undefined;
    }

    let frame = 0;
    let maxScroll = 0;

    const writeProgress = () => {
      frame = 0;
      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;
      bar.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const requestProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(writeProgress);
    };

    const measure = () => {
      maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      requestProgress();
    };

    measure();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", measure);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.body);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  );
};

export default ScrollProgress;
