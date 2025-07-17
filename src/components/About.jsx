import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaGithub
} from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { useTheme } from "../context/Themecontext.jsx";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiRedux, SiExpress, SiNextdotjs, SiReactrouter, SiNextdotjs as NextAuthIcon } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";



const skills = [
  // Core Languages
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "C++", icon: <TbBrandCpp /> },
  { name: "SQL", icon: <FaDatabase color="#00758f" /> },

  // Frontend
  { name: "React.js", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
  { name: "React Router", icon: <SiReactrouter color="#CA4245" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express.js", icon: <SiExpress color="#000000" /> },
  { name: "NextAuth.js", icon: <NextAuthIcon color="#000000" /> },

  // Databases
  { name: "MongoDB", icon: <BiLogoMongodb color="#47A248" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql color="#336791" /> },
  { name: "Redis", icon: <DiRedis color="#D82C20" /> },

  // Tools
  { name: "GitHub", icon: <FaGithub /> },
];

const education = [
  {
    year: "2022 - 2026",
    degree: "BTech Computer Science",
    institution: "JD College of Engineering and Management",
    icon: <FaGraduationCap />,
  },
  {
    year: "2020 - 2022",
    degree: "XII Science (HSC Board)",
    institution: "Sree Narayana Vidhalaya",
    icon: <FaGraduationCap />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      className={`about-section ${isDarkMode ? "dark" : "light"} border-t dark:border-gray-400 border-gray-700`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
    >
      <div className="about-container">
        <motion.h1 variants={itemVariants} className="about-title">
          About Me
        </motion.h1>
        <motion.p variants={itemVariants} className="about-desc">
          Hi, I'm <b className="text-primary">Vikram Shrivastav</b>, a Full Stack Developer specializing in modern JavaScript ecosystems like MERN and Next.js, passionate about building fast, scalable, and user-centric web applications. I blend strong UI/UX skills with backend efficiency and system-level thinking, always eager to learn and adapt to emerging technologies like GenAI and Data Science.
        </motion.p>

        {/* Education Timeline */}
        <motion.div variants={itemVariants} className="timeline-container">
          <h2 className="section-subtitle">Education</h2>
          <div className="timeline">
            {education.map((item, idx) => (
              <motion.div key={idx} className="timeline-item" variants={itemVariants}>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-details">
                  <div className="timeline-degree">{item.degree}</div>
                  <div className="timeline-inst">{item.institution}</div>
                  <div className="timeline-year">{item.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <label id="skills"></label>
        <motion.div variants={itemVariants} >
          <h2 className="section-subtitle">Skills</h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="skill-item"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          width: 100%;
          padding: 4rem 1rem;
          transition: background 0.3s ease;
        }

        .about-section.light {
          background: #f9fafb;
          color: #1f2937;
        }

        .about-section.dark {
          background: #0f172a;
          color: #f1f5f9;
        }

        .about-container {
          max-width: 900px;
          margin: auto;
          padding: 2rem;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .about-desc {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          line-height: 1.8;
          text-align: center;
        }

        .text-primary {
          color: #3b82f6;
        }

        .section-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          text-align: center;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .timeline-icon {
          font-size: 1.5rem;
          color: #3b82f6;
        }

        .timeline-degree {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .timeline-inst {
          color: #6b7280;
        }

        .dark .timeline-inst {
          color: #cbd5e1;
        }

        .timeline-year {
          font-size: 0.9rem;
          color: #9ca3af;
        }

        .dark .timeline-year {
          color: #94a3b8;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #e5e7eb;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 1rem;
          cursor: default;
        }

        .about-section.dark .skill-item {
          background: #1e293b;
          color: #f9fafb;
        }

        @media (max-width: 640px) {
          .about-title {
            font-size: 2rem;
          }
          .section-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </motion.section>
  );
}

export default About;
