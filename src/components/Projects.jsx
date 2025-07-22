import React, { useState } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Mystery Message",
    image: "/images/mystrymessage.png",
    tech: ["Next.js", "Tailwind", "Gemini API", "Shadcn"],
    login: "ID: vikramshri2 | Pass: Vik@1312",
    link: "https://mystryfeedback.vercel.app/",
  },
];

function Projects() {
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section
      className={`py-28 px-6 md:px-20 transition-colors duration-500  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="projects"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }} // Re-trigger every time it's 30% in view
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
            }`}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 100, scale: 1 }}
            transition={{
              // type: "spring",
              ease: "anticipate",
              duration: 0.4,
              delay: index * 0.2,
            }}
            viewport={{ once: false, amount: 0.3 }} // ← IMPORTANT!
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover p-3"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-3 text-sm font-medium text-blue-500">
                  Tech Stack: {project.tech.join(", ")}
                </p>
                <p className="text-sm opacity-80">{project.login}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {projectsData.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`px-6 py-2 rounded-full font-medium transition shadow-md hover:shadow-lg ${
              isDarkMode
                ? "bg-blue-700 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
