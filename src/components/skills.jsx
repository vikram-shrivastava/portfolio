import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Themecontext.jsx";
import {
  FaReact, FaNodeJs, FaJs, FaDatabase, FaGithub, FaDocker, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { SiRedux, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiRedis } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "Redux", icon: <SiRedux color="#764abc" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06b6d4" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Redis", icon: <SiRedis color="#D82C20" /> },
  { name: "GitHub", icon: <FaGithub /> },
];

function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className={`py-20 px-6 ${isDarkMode ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="opacity-70">The tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-shadow duration-300 ${
                isDarkMode 
                ? "bg-gray-900 border-gray-800 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                : "bg-gray-50 border-gray-200 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;