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
  FaPhp,
  FaVuejs,
  FaLaravel,
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
    path: "www.linkedin.com/in/kawshalya-perera-878b98258",
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
      duration: "2025 March – 2025 September",
      description:
        "Contributed to the development of an ERP system using Angular, .NET, and SQL Server, gaining hands-on experience in software engineering and enterprise application development.",
    },
    {
      company: "Jaan Network (Pvt) Ltd.",
      position: "Intern Full Stack Developer",
      duration: "2025 October – Present",
      description:
        "Working on full-stack development projects, utilizing React, Node.js, and MongoDB to build scalable web applications while collaborating with cross-functional teams to deliver high-quality software solutions.",
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
      institution: "Wrexham University, UK",
      diploma: "BSc (Hons) Computing",
      duration: "2025 – 2026",
      description:"Focused on IT project management, mobile development, future technologies, and data analyticsGained hands-on experience through assignments and a capstone project"
    },
    {
      institution: "Institute of Technology, University of Moratuwa",
      diploma: "Information Technology",
      duration: "2022 – 2024",
      description: "Specialized in web development, database management, and software engineering principles."

    },
    {
      institution: "Lanka Indian Institute",
      diploma: "Tamil Language",
      duration: "6 Months",
      description: "Completed a comprehensive course in Tamil language and culture."
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
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <FaLaravel />, name: "Laravel" },
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

// ─── Certifications ──────────────────────────────────────────────────────────
// Update this array whenever you earn a new certificate.
// - credentialUrl: link to the certificate (Coursera, LinkedIn, etc.) — leave "" if none
// - color: accent color class applied to the badge icon (Tailwind bg-* utility)

export const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    category: "Web Development",
    credentialUrl: "https://www.freecodecamp.org/certification",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    category: "Programming",
    credentialUrl: "https://www.freecodecamp.org/certification",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024",
    category: "Frontend",
    credentialUrl: "https://www.freecodecamp.org/certification",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    category: "Frontend",
    credentialUrl: "",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    title: "Node.js, Express, MongoDB Bootcamp",
    issuer: "Udemy",
    date: "2024",
    category: "Backend",
    credentialUrl: "",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    title: "Figma UI/UX Design Essentials",
    issuer: "Udemy",
    date: "2023",
    category: "Design",
    credentialUrl: "",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

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
