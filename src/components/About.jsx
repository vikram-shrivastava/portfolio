import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Themecontext.jsx";
import { FaGraduationCap, FaBriefcase, FaCode, FaBrain } from "react-icons/fa";

function About() {
  const { isDarkMode } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className={`py-20 px-6 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Intro Card - Spans 2 cols */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`md:col-span-2 p-8 rounded-2xl shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500"><FaCode size={24}/></div>
                <h3 className="text-xl font-bold">The Developer</h3>
            </div>
            <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              I am <strong className="text-blue-500">Vikram Shrivastav</strong>. 
              I don't just write code; I engineer solutions. Specializing in the 
              <span className="font-semibold"> MERN Stack</span> and <span className="font-semibold">Next.js</span>, 
              I bridge the gap between complex backend logic and silky-smooth frontend interactions.
              Currently exploring the frontiers of <span className="text-purple-500 font-medium">Generative AI</span> to 
              build smarter applications.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`p-8 rounded-2xl shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-500"><FaGraduationCap size={24}/></div>
                <h3 className="text-xl font-bold">Education</h3>
            </div>
            <ul className="space-y-4">
                <li className="relative pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                    <div className="font-semibold">B.Tech Computer Science</div>
                    <div className="text-xs opacity-70">JD College (2022-2026)</div>
                </li>
                <li className="relative pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                    <div className="font-semibold">HSC Science</div>
                    <div className="text-xs opacity-70">Sree Narayana (2020-2022)</div>
                </li>
            </ul>
          </motion.div>

          {/* Philosophy/Interests Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`p-8 rounded-2xl shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500"><FaBrain size={24}/></div>
                <h3 className="text-xl font-bold">Focus Area</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {['System Design', 'GenAI Integration', 'Data Structures', 'SAAS Application', 'Clean Code'].map(tag => (
                    <span key={tag} className={`px-3 py-1 text-xs rounded-full border ${isDarkMode ? "border-gray-600 bg-gray-700" : "border-gray-200 bg-gray-50"}`}>
                        {tag}
                    </span>
                ))}
            </div>
          </motion.div>

           {/* Experience / Goal Card - Spans 2 cols */}
           <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`md:col-span-2 p-8 rounded-2xl shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500"><FaBriefcase size={24}/></div>
                <h3 className="text-xl font-bold">What I Bring</h3>
            </div>
            <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
             I blend strong technical skills with a product mindset. Whether it's optimizing database queries, 
             designing a pixel-perfect component in React, or fine-tuning an LLM prompt, I focus on <span className="font-semibold">performance, scalability, and user experience</span>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;