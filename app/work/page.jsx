"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import { projects } from "@/lib/data";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-[24px] h-[50%]"
              >
              {/* Number */}
              <div className="text-7xl leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                {project.num}
              </div>

              {/* Category & title */}
              <h2 className="text-[36px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>

              {/* Description */}
              <p className="text-white/60 text-[15px]">{project.description}</p>

              {/* Tech stack */}
              <ul className="flex gap-3 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="px-3 py-1 bg-white/5 border border-white/10 text-accent text-sm font-medium rounded-full">
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="border border-white/10" />

              {/* Links */}
              <div className="flex items-center gap-4">
                {/* Live link */}
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
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
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
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
          <div className="w-full xl:w-[50%] flex flex-col">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[EffectFade]}
              effect="fade"
              className="xl:h-[520px] flex-1"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] sm:h-[380px] xl:h-[460px] relative group flex justify-center items-center bg-[#27272c] rounded-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-accent/5 z-10" />

                    {/* Inner swiper for multiple project images */}
                    <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-full">
                      {proj.images.map((imgSrc, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full h-[460px]">
                            <Image
                              src={imgSrc}
                              fill
                              className="object-cover"
                              alt={`${proj.title} screenshot ${imgIndex + 1}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtn
                containerStyles="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center px-6 pb-3"
                activeIndex={activeIndex}
                total={projects.length}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
