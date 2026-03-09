"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    // Only activate on devices with a precise pointer (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;

    // Reveal cursors and hide the native one
    ring.style.opacity = "1";
    dot.style.opacity  = "1";
    document.body.classList.add("custom-cursor-active");

    let raf;
    let mx = window.innerWidth  / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      // Dot follows cursor immediately (no lag)
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      // Expand ring when hovering interactive elements
      if (e.target.closest("a, button, [role='button'], .hero-cta-beam, .slider-nav-btn")) {
        ring.classList.add("cursor-expanded");
      } else {
        ring.classList.remove("cursor-expanded");
      }
    };

    // Ring follows with a smooth lerp
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Lagging ring */}
      <div ref={ringRef} className="custom-cursor" aria-hidden="true" />
      {/* Instant dot */}
      <div ref={dotRef}  className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
