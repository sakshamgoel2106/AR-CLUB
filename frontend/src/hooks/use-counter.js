import { useEffect, useRef, useState } from "react";

/**
 * Animates an integer from 0 to `target` over 1.6s with cubic ease-out,
 * triggered the first time the element scrolls into view. Returns a ref to
 * attach to the element and the current animated value.
 */
export function useCounter(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }

    let started = false;
    let rafId = 0;

    const animate = () => {
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
        setValue(Math.round(eased * target));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [target]);

  return { ref, value };
}