"use client";

import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import TypewriterText from "@/components/TypewriterText";
import { FiDownload } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

// ─── Letter-by-letter reveal (clips each letter inside overflow:hidden) ───────
const RevealText = ({ text, delay = 0, className = "" }) => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.032, delayChildren: delay },
    },
  };
  const letter = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none">
          <motion.span
            className="inline-block"
            variants={letter}
            aria-hidden="true"
          >
            {ch === " " ? "\u00a0" : ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    id="home"
    className="hero-section h-full flex items-center justify-center"
  >
    {/* Animated grid + corner glows */}
    <div className="hero-grid" aria-hidden="true" />

    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 w-full relative z-10">
      {/* ── Text side ─────────────────────────────────────────────── */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        {/* Typewriter role */}
        <TypewriterText />

        {/* Main heading */}
        <h1 className="h1 mb-6">
          {/* "Hello I'm" — letter reveal at delay 2.0s (after stair transition) */}
          <RevealText text="Hello I'm" delay={2.0} />
          <br />
          {/* Name — gradient + slide up */}
          <motion.span
            className="hero-name-gradient"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalInfo.fullName}
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="max-w-[500px] mb-9 text-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.55, ease: "easeOut" }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col xl:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.55, ease: "easeOut" }}
        >
          {/* Border-beam Download CV button */}
          <a
            href={personalInfo.cvPath}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hero-cta-beam" type="button">
              <span>Download CV</span>
              <FiDownload aria-hidden="true" />
            </button>
          </a>

          <div className="mb-8 xl:mb-0">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Photo side ────────────────────────────────────────────── */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  </section>
);

export default HeroSection;
