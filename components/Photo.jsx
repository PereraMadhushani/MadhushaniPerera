"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    /* Outer wrapper — centers the photo block inside the hero grid cell */
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        /* Single source-of-truth for size: change these two classes to resize
           both the image AND the ring together on every breakpoint.           */
        className="relative flex items-center justify-center
                   w-[220px] h-[220px]
                   sm:w-[260px] sm:h-[260px]
                   xl:w-[340px] xl:h-[340px]"
      >
        {/* ── Profile image — fills the container square ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-full h-full mix-blend-lighten"
        >
          <Image
            src="/Assests/myphoto.png"
            priority
            quality={100}
            fill
            alt="Kaushalya Madhushani Perera"
            className="object-contain"
          />
        </motion.div>

        {/* ── Animated SVG ring — absolutely positioned 16px outside ───── */}
        {/* inset-[-16px] makes it exactly 32px wider/taller than the image */}
        <motion.svg
          className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none"
          viewBox="0 0 506 506"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="248"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
