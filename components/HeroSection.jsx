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
    className="hero-section min-h-[calc(100vh-96px)] flex items-center justify-center"
  >
    {/* Subtle dot-grid */}
    <div className="hero-grid" aria-hidden="true" />

    <div className="flex flex-col xl:flex-row items-center justify-between py-16 xl:pt-12 xl:pb-24 w-full relative z-10 gap-10 xl:gap-0">
      {/* ── Text side ─────────────────────────────────────────────── */}
      <div className="text-center xl:text-left order-2 xl:order-none max-w-xl">
        {/* Typewriter role */}
        <TypewriterText />

        {/* Main heading */}
        <h1 className="h1 mb-5">
          <RevealText text="Hello I'm" delay={2.0} />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {(() => {
              const parts = personalInfo.fullName.split(" ");
              const last = parts.pop();
              return (
                <>
                  <span className="text-white">{parts.join(" ")} </span>
                  <span className="text-[#00ff99]">{last}</span>
                </>
              );
            })()}
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="max-w-[480px] mb-8 text-white/60 text-[15px] leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.5, ease: "easeOut" }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75, duration: 0.5, ease: "easeOut" }}
        >
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

          <Socials
            containerStyles="flex gap-4"
            iconStyles="w-9 h-9 border border-white/10 bg-white/5 rounded-full flex justify-center items-center text-white/70 text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-150"
          />
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
