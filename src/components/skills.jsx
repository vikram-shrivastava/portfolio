import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Themecontext.jsx";
import { FaReact, FaNodeJs, FaJs, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiLangchain } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Architecture",
    description: "Building responsive, cinematic user interfaces.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Designing scalable APIs and robust data pipelines.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    category: "GenAI & Orchestration",
    description: "Integrating LLMs and intelligent agentic workflows.",
    skills: [
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "LangGraph", icon: <FaProjectDiagram /> },
      { name: "GitHub Workflows", icon: <FaGithub /> },
    ],
  },
];

function Skills() {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="skills" className={`py-24 px-6 relative overflow-hidden ${isDarkMode ? "bg-[#09090b] text-zinc-50" : "bg-zinc-50 text-zinc-950"}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal.</h2>
          <p className={`text-lg max-w-2xl font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            The frameworks, databases, and AI orchestration tools I utilize to engineer full-stack solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`p-8 rounded-2xl border flex flex-col h-full transition-colors duration-500 hover:border-zinc-500/50 ${
                isDarkMode ? "bg-zinc-900/40 border-zinc-800" : "bg-white border-zinc-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{group.category}</h3>
              <p className={`text-sm mb-8 font-light ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                {group.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    <span className="opacity-70">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;