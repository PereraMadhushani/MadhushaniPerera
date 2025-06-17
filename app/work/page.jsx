"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Weather Application",
    description:
      "This Weather App has a simple, clean design where you enter a city to see its current weather. It shows temperature, city name, humidity, wind speed, and weather icons with a smooth gradient background and easy-to-read layout.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    images: [
      "/Assests/weather.png",
      "/Assests/thumb1.png",
    ],
    live: "https://weather-app-orpin-pi-95.vercel.app/",
    github: "https://github.com/PereraMadhushani/weatherApp",
  },
   {
    num: "01",
    category: "frontend",
    title: "Expense Tracker",
    description:
      "This Weather App has a simple, clean design where you enter a city to see its current weather. It shows temperature, city name, humidity, wind speed, and weather icons with a smooth gradient background and easy-to-read layout.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    images: [
      "/Assests/ExpenseTracker.png",
    ],
    live: "https://weather-app-orpin-pi-95.vercel.app/",
    github: "https://github.com/PereraMadhushani/weatherApp",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Employee Management System",
    description: "Some description for project 02...",
    stack: [{ name: "React Js" }, { name: "mySql" }, { name: "node Js" },{ name: "Express Js" }, { name: "Css 3" }],
    images: ["/Assests/thumb1.png", "/Assests/thumb2.png"],
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Stride Smart ERP",
    description: "Some description for project 03...",
    stack: [{ name: "React.js" }, { name: "Css 3" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MySql" }],
    images: ["/Assests/thumb2.png", "/Assests/thumb3.png"],
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "My Portfolio",
    description: "Some description for project 04...",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    images: ["/Assests/thumb3.png"],
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live || "#"}>
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
                <Link href={project.github || "#"}>
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
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* Nested Swiper for multiple images */}
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      className="w-full h-full"
                    >
                      {project.images.map((imgSrc, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full h-[460px]">
                            <Image
                              src={imgSrc}
                              fill
                              className="object-cover"
                              alt={`Project image ${imgIndex + 1}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
