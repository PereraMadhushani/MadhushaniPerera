"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { BsArrowUpRight, BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projects.length;
  const currentProject = projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="xl:min-h-[80vh] flex flex-col justify-center py-4 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Heading */}
        {/* Main content with side arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden xl:flex absolute left-0 z-20 w-12 h-12 rounded-full bg-[#27272c] border border-white/10 items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-150 -translate-x-16"
            aria-label="Previous project"
          >
            <BsArrowLeft size={24} />
          </button>

          <div className="w-full flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Project details */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col gap-[24px]"
                >
                  {/* Large project number */}
                  <div
                    className="text-7xl leading-none font-extrabold text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                  >
                    {currentProject.num}
                  </div>

                  {/* Project name */}
                  <h3 className="text-3xl font-bold text-white">
                    {currentProject.name}
                  </h3>

                  {/* Role / title */}
                  <p className="text-accent text-lg font-medium">
                    {currentProject.role}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-[15px]">
                    {currentProject.description}
                  </p>

                  {/* Location & profession (if separate) */}
                  <p className="text-white/40 text-sm">
                    {currentProject.profession} • {currentProject.location}
                  </p>

                  {/* Tech stack */}
                  <ul className="flex gap-3 flex-wrap">
                    {currentProject.stack.map((item, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-accent text-sm font-medium rounded-full"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>

                  {/* Project counter */}
                  <div className="text-white/40 text-sm">
                    {activeIndex + 1} / {totalProjects}
                  </div>

                  <div className="border border-white/10" />

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {/* Live link */}
                    {currentProject.live ? (
                      <Link href={currentProject.live} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-[#27272c] border border-white/10 flex justify-center items-center group hover:border-accent hover:bg-accent/10 transition-all duration-150">
                              <BsArrowUpRight className="text-white/60 text-xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ) : (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-[#27272c] border border-white/10 flex justify-center items-center opacity-35 cursor-not-allowed">
                            <BsArrowUpRight className="text-white/60 text-xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Not available</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {/* GitHub link */}
                    {currentProject.github ? (
                      <Link href={currentProject.github} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-[#27272c] border border-white/10 flex justify-center items-center group hover:border-accent hover:bg-accent/10 transition-all duration-150">
                              <BsGithub className="text-white/60 text-xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ) : (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[56px] h-[56px] rounded-full bg-[#27272c] border border-white/10 flex justify-center items-center opacity-35 cursor-not-allowed">
                            <BsGithub className="text-white/60 text-xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Not available</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image slider */}
            <div className="w-full xl:w-[50%] mb-8 xl:mb-0">
              <div className="h-[300px] sm:h-[380px] xl:h-[460px] relative group flex justify-center items-center bg-[#27272c] rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-accent/5 z-10" />

                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  modules={[EffectFade]}
                  effect="fade"
                  className="w-full h-full"
                >
                  {currentProject.images.map((imgSrc, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-full">
                        <Image
                          src={imgSrc}
                          fill
                          className="object-cover"
                          alt={`${currentProject.name} screenshot ${imgIndex + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden xl:flex absolute right-0 z-20 w-12 h-12 rounded-full bg-[#27272c] border border-white/10 items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-150 translate-x-16"
            aria-label="Next project"
          >
            <BsArrowRight size={24} />
          </button>

          {/* Mobile arrows (below the card) */}
          <div className="flex xl:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#27272c] border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all"
              aria-label="Previous project"
            >
              <BsArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#27272c] border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all"
              aria-label="Next project"
            >
              <BsArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;