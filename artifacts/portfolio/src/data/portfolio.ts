import {
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiApachemaven,
  SiPostman,
} from 'react-icons/si';

import { TbBrandVscode, TbApi } from "react-icons/tb";
import { FaLaptopCode, FaServer, FaDatabase, FaTools, FaJava } from "react-icons/fa";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Mouneeshwaran B",
    titles: [
      "Java Backend Developer",
      "Spring Boot Developer",
      "Problem Solver",
      "CS Undergraduate",
    ],
    socials: {
      github: "https://github.com/mouneesh798",
      linkedin: "https://www.linkedin.com/in/mouneeshwaran-b-1b2a18291/",
      email: "mailto:mouneeshb123@gmail.com",
    },
  },
  about: {
    bio: "Passionate Computer Science undergraduate at K.S.R. College of Engineering (CGPA: 8.10/10), with a strong foundation in Java, Spring Boot, REST APIs, and MySQL. Currently interning as a Java Developer at Rejoice Company, where I build backend applications using OOP principles, optimize performance, and follow industry coding standards. Actively sharpening Data Structures & Algorithms skills on LeetCode and seeking a Java Full Stack Developer internship or entry-level role to contribute to impactful, real-world projects.",
  },
  skills: [
    {
      category: "Backend",
      icon: FaServer,
      items: [
        { name: "Java", level: 90, icon: FaJava },
        { name: "Spring Boot", level: 85, icon: SiSpringboot },
        { name: "REST APIs", level: 82, icon: TbApi },
      ],
    },
    {
      category: "Frontend",
      icon: FaLaptopCode,
      items: [
        { name: "HTML5", level: 80, icon: SiHtml5 },
        { name: "CSS3", level: 75, icon: SiCss },
        { name: "JavaScript", level: 72, icon: SiJavascript },
        { name: "Bootstrap", level: 75, icon: SiBootstrap },
      ],
    },
    {
      category: "Database",
      icon: FaDatabase,
      items: [
        { name: "MySQL", level: 80, icon: SiMysql },
      ],
    },
    {
      category: "Tools",
      icon: FaTools,
      items: [
        { name: "Git", level: 85, icon: SiGit },
        { name: "GitHub", level: 85, icon: SiGithub },
        { name: "Maven", level: 70, icon: SiApachemaven },
        { name: "VS Code", level: 90, icon: TbBrandVscode },
        { name: "Postman", level: 75, icon: SiPostman },
      ],
    },
  ],
  experience: [
    {
      id: 1,
      role: "Java Intern",
      company: "Rejoice Company",
      period: "July 2024 – July 2025",
      description:
        "Developed Java-based backend applications using Object-Oriented Programming concepts and Spring Boot. Implemented and tested business logic, optimised application performance, and debugged software issues to improve system reliability. Collaborated on mini-projects while strictly following coding standards and best practices.",
    },
  ],
  projects: [
    {
      id: "job-portal",
      title: "Job & Internship Portal",
      description:
        "A full-stack job board connecting students with opportunities. Features user authentication, role-based dashboards, job listings, and application tracking — built to bridge the gap between fresh graduates and recruiters.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/mouneesh798",
      liveUrl: "#",
    },
    {
      id: "parking-system",
      title: "Parking Management System",
      description:
        "A backend Parking Management System built with Spring Boot. Designed REST APIs for vehicle entry/exit, slot allocation, and automated billing. Integrated MySQL for efficient data storage and applied MVC architecture to ensure a scalable, maintainable codebase.",
      techStack: ["Java", "Spring Boot", "REST API", "MySQL", "MVC"],
      githubUrl: "https://github.com/mouneesh798",
      liveUrl: "#",
    },
    {
      id: "exam-system",
      title: "Online Examination System",
      description:
        "A console-based examination platform built with Core Java. Implements student login, timed examination flow, and result management. Leverages Java Collections Framework for efficient in-memory data handling and applies OOP principles for a modular, extensible design.",
      techStack: ["Core Java", "Collections", "OOP", "JDBC"],
      githubUrl: "https://github.com/mouneesh798",
      liveUrl: "#",
    },
  ],
  leetcode: {
    totalSolved: 30,
    easy: 20,
    medium: 8,
    hard: 2,
    rating: 0,            // No contest rating yet — hidden when 0
    profileUrl: "https://leetcode.com/mouneesh798",
  },
  certifications: [
    {
      id: "nptel-iot",
      title: "NPTEL – Introduction to Internet of Things",
      issuer: "NPTEL (IIT)",
      date: "2024",
      url: "#",
    },
    {
      id: "nptel-industry4",
      title: "NPTEL – Industry 4.0 & Industrial IoT",
      issuer: "NPTEL (IIT)",
      date: "2024",
      url: "#",
    },
    {
      id: "rejoice-java",
      title: "Java Internship Certificate",
      issuer: "Rejoice Company",
      date: "2025",
      url: "#",
    },
  ],
};
