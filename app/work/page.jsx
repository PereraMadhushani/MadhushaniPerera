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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-[30px] h-[50%]"
              >
              {/* Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Category & title */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize transition-all duration-500">
                {project.category} project
              </h2>

              {/* Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Tech stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              {/* Links */}
              <div className="flex items-center gap-4">
                {/* Live link */}
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed">
                        <BsArrowUpRight className="text-white text-3xl" />
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed">
                        <BsGithub className="text-white text-3xl" />
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[EffectFade]}
              effect="fade"
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute inset-0 bg-black/10 z-10" />

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
