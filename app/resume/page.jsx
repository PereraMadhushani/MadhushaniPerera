"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython, 
  FaAngular
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotJs, SiNextdotjs } from "react-icons/si";

const about ={
  title: "About me",
  description: "Driven and adaptable professional with a passion for continuous learning and innovation. Eager to apply my skills and knowledge to create impactful solutions and grow in a dynamic environment.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Madhushani Perera",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 761662186",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Kaushalya Perera",
    },
    {
      fieldName: "Email",
      fieldValue: "kaushalyam234@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ]
};

//experience data
const experience={
  icon:"/Assests/badge.svg",
  title:"My Experience",
  description: "Gained practical experience in ERP system development using Angular, .NET, and SQL Server, focusing on key business modules.",

  items:[
    {
      company:"Pra Su King Pvt Ltd.",
      position:"Intern Software Engineer",
      duration:"2025 March - Present",
    },
   
  ]
};

//education data
const education={
  icon:"/Assests/cap.svg",
  title:"My Education",
  description:"Currently pursuing a Infrom in studentfrom Institute of Technology, University of Moratuwa , where I am gaining comprehensive knowledge and hands-on experience in Web Development and Full Stack Developer.",

  items:[
    {
      institution:"Institute of Technology, University of Moratuwa",
      diploma:"Information Technology",
      duration:"2022- 2024",
    },

     {
      institution:"Indean",
      diploma:"Tamil Language",
      duration:"6 Months",
    },
  
  ]
};

//skills data
const skills ={
  title: "My Skills",
  description:"Proficient in web development, UI/UX design, and responsive coding with expertise in HTML, CSS, and JavaScript. Skilled in creating user-centered designs, optimizing user experiences, and utilizing modern frameworks and tools to deliver high-quality solutions.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5",
    },
    {
      icon:<FaCss3/>,
      name:"Css 3",
    },
    {
      icon:<FaJs/>,
      name:"JavaScript",
    },
    {
      icon:<FaReact/>,
      name:"React.Js",
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"Node.js",
    },
    {
      icon:<FaFigma/>,
      name:"Figma",
    },
    {
      icon:<FaJava/>,
      name:"Java",
    },
    {
      icon:<FaPython/>,
      name:"Python",
    },
    {
      icon:<FaAngular/>,
      name:"Angular",
    },
    
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {motion} from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";


const Resume= () => {
    return <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4, duration:0.4, ease:"easeIn"},
        }}

        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValues="experience"
            className="flex flex-col xl:flex-row gap-[60px]">
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>

              {/*Content*/}
              <div className="min-h-[70vh] w-full">
                {/*experience*/}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item,index)=> {
                          return(
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg-text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Education */}
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item,index)=> {
                          return(
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg-text-left">{item.diploma}</h3>
                              <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                          </div>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                            {skills.skillList.map((skill,index)=>{
                              return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="text-3xl group-hover:text-accent transition-all duration-300">
                                        {skill.icon}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                </li>
                            })}
                          </ul>
                        </div>
                  
                </TabsContent>

                {/* About me */}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item,index)=>{
                        return (
                          <li key={index}
                          className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>

              </div>

          </Tabs> 
                
            
        </div>
      </motion.div>
    
  }
  
  export default Resume;
  
  