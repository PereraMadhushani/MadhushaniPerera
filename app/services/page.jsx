"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import { Globe, Palette, Smartphone, Code2, ArrowUpRight } from "lucide-react";

const serviceIcons = {
  "01": Globe,
  "02": Palette,
  "03": Smartphone,
  "04": Code2,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 2.4,
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.2, duration: 0.5, ease: "easeOut" },
          }}
          className="text-center mb-12"
        >
          <h2 className="h2 mb-3">
            What I <span className="text-accent">Offer</span>
          </h2>
          <p className="text-white/50 text-sm max-w-[440px] mx-auto leading-relaxed">
            Crafting high-quality digital experiences across web, mobile, and
            software platforms.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.num] || Code2;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="service-card group"
              >
                <div className="service-card-inner">
                  {/* Icon */}
                  <div className="service-icon-wrap">
                    <Icon className="service-icon" />
                  </div>

                  {/* Number */}
                  <span className="service-num">{service.num}</span>

                  {/* Title */}
                  <h3 className="service-title">{service.title}</h3>

                  {/* Description */}
                  <p className="service-description">{service.description}</p>

                  {/* CTA Link */}
                  <Link href={service.href} className="service-link">
                    <span>Get in touch</span>
                    <ArrowUpRight className="service-arrow" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

