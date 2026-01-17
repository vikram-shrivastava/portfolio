import React from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    name: "Mystery Feedback",
    image: "/images/mysteryfeedback.png",
    description: "An anonymous feedback platform utilizing AI to filter content. Built for secure and honest communication.",
    tech: ["Next.js", "Tailwind", "Gemini API", "Shadcn UI"],
    liveLink: "https://mysteryfeedback.vikramshrivastav.app/",
    githubLink: "https://github.com/vikram-shrivastava/Mysteryfeedback", // Update with actual repo
  },
  {
    name: "NexusCreate",
    image: "/images/nexuscreate.png",
    description: "A collaborative platform for creators to share, discuss, and monetize digital content seamlessly.",
    tech: ["Nextjs ", "MongoDB", "TailwindCSS"],
    liveLink: "https://nexuscreate.vikramshrivastav.app/",
    githubLink: "https://github.com/vikram-shrivastava/nexuscreate"
  },
  {
    name:"ResumeRanker",
    image:"/images/resumeranker.png",
    description:"A web application that helps students rank their resume and provides Resume Tailoring with just one click.",
    tech:["Nextjs","TailwindCSS","LangGraph","OpenAI API","MongoDB","Express.js"],
    liveLink:"https://resumeranker.vikramshrivastav.app/",
    githubLink:"https://github.com/vikram-shrivastava/ResumeRanker-Frontend"
  }
];

function Projects() {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className={`py-20 px-6 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl overflow-hidden shadow-lg flex flex-col ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition"><FaExternalLinkAlt /></a>
                     <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition"><FaGithub /></a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className={`text-sm mb-4 flex-grow ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-500`}>
                            {t}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;