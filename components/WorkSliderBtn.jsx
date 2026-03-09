"use client";

import { useRef, useState } from "react";
import { useSwiper } from "swiper/react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const MagneticBtn = ({ onClick, ariaLabel, direction, children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 25 });
  const springY = useSpring(y, { stiffness: 350, damping: 25 });
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 350);
    onClick();
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      aria-label={ariaLabel}
      className="slider-nav-btn"
    >
      <motion.span
        animate={
          clicked
            ? {
                x: direction === "next" ? [0, 7, -2, 0] : [0, -7, 2, 0],
                opacity: [1, 0.65, 1],
              }
            : { x: 0, opacity: 1 }
        }
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

const WorkSliderBtn = ({ containerStyles, activeIndex = 0, total = 1 }) => {
  const swiper = useSwiper();
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className={containerStyles}>
      <div className="slider-nav-row">
        <MagneticBtn
          direction="prev"
          ariaLabel="Previous project"
          onClick={() => swiper && swiper.slidePrev()}
        >
          <PiCaretLeftBold className="text-accent text-lg" />
        </MagneticBtn>

        <div className="slider-counter" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="slider-counter-current"
            >
              {pad(activeIndex + 1)}
            </motion.span>
          </AnimatePresence>
          <span className="slider-counter-sep">/</span>
          <span className="slider-counter-total">{pad(total)}</span>
        </div>

        <MagneticBtn
          direction="next"
          ariaLabel="Next project"
          onClick={() => swiper && swiper.slideNext()}
        >
          <PiCaretRightBold className="text-accent text-lg" />
        </MagneticBtn>
      </div>

      {/* Progress bar */}
      <div
        className="slider-progress-track"
        role="progressbar"
        aria-valuenow={activeIndex + 1}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <motion.div
          className="slider-progress-fill"
          animate={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default WorkSliderBtn;