"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Certifications = () => {
  return (
    <section className="py-4 xl:py-0">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              className="group bg-[#27272c] border border-white/10 rounded-2xl p-6 hover:border-accent/50 hover:bg-[#27272c]/80 hover:-translate-y-1 transition-all duration-150 flex flex-col gap-4"
            >
              {/* Top row: badge + category pill */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${cert.color}`}
                >
                  <Award size={20} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">{cert.issuer}</p>
              </div>

              {/* Footer: date + optional view link */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-white/40 text-xs font-medium">
                  {cert.date}
                </span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors duration-150"
                    aria-label={`View credential for ${cert.title}`}
                  >
                    View
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[10px] text-white/30 uppercase tracking-wide font-medium">
                    Completed
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Certifications;
