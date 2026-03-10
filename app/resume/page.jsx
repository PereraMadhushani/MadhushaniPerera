"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { about, experience, education, skills } from "@/lib/data";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 xl:w-[220px] gap-2 bg-transparent flex-shrink-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tab content area — height determined by content, no hard min-h */}
          <div className="w-full min-w-0">
            {/* -- Experience ---------------------------------------------- */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
                  <p className="text-white/60 mt-2 max-w-[600px] mx-auto xl:mx-0 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-4 xl:left-5 top-3 bottom-3 w-px bg-white/10" />
                  <ul className="flex flex-col gap-4">
                    {experience.items.map((item, index) => (
                      <li key={index} className="relative pl-12 xl:pl-14">
                        <div className="absolute left-[13px] xl:left-[17px] top-5 w-[10px] h-[10px] rounded-full bg-[#1c1c22] border-2 border-accent shadow-sm ring-4 ring-accent/10" />
                        <div className="bg-[#27272c] border border-white/10 rounded-2xl p-5 hover:border-accent/30 transition-all duration-150">
                          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                            {item.duration}
                          </span>
                          <h4 className="text-white font-bold text-base mt-2 leading-snug text-left">
                            {item.position}
                          </h4>
                          <p className="text-white/60 text-sm mt-1.5 flex items-center gap-2 justify-center xl:justify-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {item.company}
                          </p>
                          <p className="text-white/60 text-sm mt-1.5 flex items-center gap-2 justify-center xl:justify-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {item.description}
                          </p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* -- Education ----------------------------------------------- */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white">{education.title}</h3>
                  <p className="text-white/60 mt-2 max-w-[600px] mx-auto xl:mx-0 text-sm leading-relaxed">
                    {education.description}
                  </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-4 xl:left-5 top-3 bottom-3 w-px bg-white/10" />
                  <ul className="flex flex-col gap-4">
                    {education.items.map((item, index) => (
                      <li key={index} className="relative pl-12 xl:pl-14">
                        <div className="absolute left-[13px] xl:left-[17px] top-5 w-[10px] h-[10px] rounded-full bg-[#1c1c22] border-2 border-accent shadow-sm ring-4 ring-accent/10" />
                        <div className="bg-[#27272c] border border-white/10 rounded-2xl p-5 hover:border-accent/30 transition-all duration-150">
                          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                            {item.duration}
                          </span>
                          <h4 className="text-white font-bold text-base mt-2 leading-snug text-left">
                            {item.diploma}
                          </h4>
                          <h5 className="text-white font-bold text-base mt-2 leading-snug text-left">
                            {item.description}
                          </h5>
                          <p className="text-white/60 text-sm mt-1.5 flex items-center gap-2 justify-center xl:justify-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* -- Skills -------------------------------------------------- */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white">{skills.title}</h3>
                  <p className="text-white/60 mt-2 max-w-[600px] mx-auto xl:mx-0 text-sm leading-relaxed">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[80px] bg-[#27272c] border border-white/10 rounded-2xl flex justify-center items-center group hover:border-accent/30 transition-all duration-150">
                            <div className="text-2xl text-white/60 group-hover:text-accent transition-colors duration-150">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* -- About Me ------------------------------------------------ */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white">{about.title}</h3>
                  <p className="text-white/60 mt-2 max-w-[600px] mx-auto xl:mx-0 text-sm leading-relaxed">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-3 max-w-[640px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 bg-[#27272c] border border-white/10 rounded-xl px-4 py-3 justify-center xl:justify-start"
                    >
                      <span className="text-white/60 text-xs uppercase tracking-wide font-medium min-w-[80px] text-left">{item.fieldName}</span>
                      <span className="w-px h-3 bg-white/10 flex-shrink-0" />
                      <span className="font-semibold text-white text-sm truncate">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
