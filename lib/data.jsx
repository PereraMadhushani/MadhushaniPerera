/**
 * Centralized data file for the portfolio.
 * All content is maintained here to keep pages and components clean.
 */

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAngular,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

// ─── Hero / Personal Info ─────────────────────────────────────────────────────

export const personalInfo = {
  name: "Madhushani Perera",
  fullName: "Kaushalya Madhushani Perera",
  title: "Full Stack Developer",
  tagline:
    "I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.",
  email: "kaushalyam234@gmail.com",
  phone: "(+94) 761 662 186",
  address: "Murawasihena, Barawakubuka, Sri Lanka",
  nationality: "Sri Lankan",
  languages: "English, Sinhala",
  linkedin: "Kaushalya Perera",
  experience: "1+ Year",
  cvPath: "/Assests/G K M Perera-Software Engineer.pdf",
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/PereraMadhushani",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/kaushalya-perera-878b98258/",
    label: "LinkedIn",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { num: 1, text: "Years of experience" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 200, text: "Code commits" },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Passionate web developer with expertise in HTML, CSS, and JavaScript, skilled in creating responsive, user-friendly websites and web applications using modern frameworks and libraries.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creative UI/UX designer with a keen eye for detail and a user-centered approach. Specializes in crafting intuitive, visually appealing interfaces and enhancing user experiences through thoughtful design.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Experienced in Expo React Native, demonstrating proficiency in mobile application development, debugging, testing, and deployment with a strong focus on user experience and performance optimization.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Software Application Development",
    description:
      "Experienced across multiple technologies with strong skills in software development, backend services, and robust application design.",
    href: "/contact",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Weather Application",
    description:
      "A clean weather app where you enter a city to see its current conditions. Displays temperature, humidity, wind speed, and weather icons with a smooth gradient background and easy-to-read layout.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    images: ["/Assests/weather.png", "/Assests/thumb1.png"],
    live: "https://weather-app-orpin-pi-95.vercel.app/",
    github: "https://github.com/PereraMadhushani/weatherApp",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Expense Tracker",
    description:
      "A personal finance tracker to record income and expenses with a clear dashboard overview. Helps users manage budgets and visualize spending habits through an intuitive, responsive interface.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    images: ["/Assests/ExpenseTracker.png"],
    live: "",
    github: "https://github.com/PereraMadhushani",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Employee Management System",
    description:
      "A full-stack employee management system with CRUD operations, role-based access control, and department management. Built with a React frontend backed by a Node.js REST API and MySQL database.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
      { name: "CSS 3" },
    ],
    images: ["/Assests/thumb1.png", "/Assests/thumb2.png"],
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Stride Smart ERP",
    description:
      "An enterprise resource planning system built with Angular and .NET, covering core business modules including inventory, HR, and finance management.",
    stack: [{ name: "Angular" }, { name: ".NET" }, { name: "SQL Server" }],
    images: ["/Assests/thumb2.png", "/Assests/thumb3.png"],
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Developer Portfolio",
    description:
      "A personal portfolio website featuring smooth page transitions, animated sections, and a fully responsive design to showcase projects, skills, and experience.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    images: ["/Assests/thumb3.png"],
    live: "",
    github: "https://github.com/PereraMadhushani",
  },
];

// ─── Resume Data ──────────────────────────────────────────────────────────────

export const experience = {
  icon: "/Assests/badge.svg",
  title: "My Experience",
  description:
    "Gained practical experience in ERP system development using Angular, .NET, and SQL Server, focusing on key business modules.",
  items: [
    {
      company: "Pra Su King Pvt Ltd.",
      position: "Intern Software Engineer",
      duration: "2025 March – Present",
    },
  ],
};

export const education = {
  icon: "/Assests/cap.svg",
  title: "My Education",
  description:
    "Pursuing a Diploma in Information Technology at the Institute of Technology, University of Moratuwa, gaining comprehensive knowledge and hands-on experience in web development and full-stack engineering.",
  items: [
    {
      institution: "Institute of Technology, University of Moratuwa",
      diploma: "Information Technology",
      duration: "2022 – 2024",
    },
    {
      institution: "Lanka Indian Institute",
      diploma: "Tamil Language",
      duration: "6 Months",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "Proficient in web development, UI/UX design, and responsive coding with expertise in HTML, CSS, and JavaScript. Skilled in creating user-centered designs and utilizing modern frameworks to deliver high-quality solutions.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaAngular />, name: "Angular" },
  ],
};

export const about = {
  title: "About Me",
  description:
    "Driven and adaptable professional with a passion for continuous learning and innovation. Eager to apply my skills and knowledge to create impactful solutions and grow in a dynamic environment.",
  info: [
    { fieldName: "Name", fieldValue: "Madhushani Perera" },
    { fieldName: "Phone", fieldValue: "(+94) 761 662 186" },
    { fieldName: "Experience", fieldValue: "1+ Year" },
    { fieldName: "Nationality", fieldValue: "Sri Lankan" },
    { fieldName: "LinkedIn", fieldValue: "Kaushalya Perera" },
    { fieldName: "Email", fieldValue: "kaushalyam234@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ],
};

// ─── Contact Info ─────────────────────────────────────────────────────────────

export const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 761 662 186",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kaushalyam234@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Murawasihena, Barawakubuka, Sri Lanka",
  },
];
