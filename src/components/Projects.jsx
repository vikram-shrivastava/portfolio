import React, { useState } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = {
  saas: [
    {
      name: "DocsAgent",
      image: "/images/docsagent.png",
      description: "An AI collaborative platform to chat with document in a team environment.",
      tech: ["Next.js", "FastAPI", "LangGraph", "Mem0", "Qdrant", "MongoDB"],
      liveLink: "https://docs-agent.vercel.app/",
      githubLink: "https://github.com/vikram-shrivastava/docsAgent", 
      colSpan: "md:col-span-2",
    },
    {
      name: "ResumeRanker",
      image: "/images/resumeranker.png",
      description: "A web application that helps students rank their resume and provides tailoring with one click.",
      tech: ["Next.js", "LangGraph", "OpenAI", "Express"],
      liveLink: "https://resumeranker.vikramshrivastav.app/",
      githubLink: "https://github.com/vikram-shrivastava/ResumeRanker-Frontend",
      colSpan: "md:col-span-1",
    },
    {
      name: "NexusCreate",
      image: "/images/nexuscreate.png",
      description: "A collaborative platform for creators to share, discuss, and monetize digital content seamlessly.",
      tech: ["Next.js", "MongoDB", "LangChain", "OpenAI"],
      liveLink: "https://nexuscreate.vikramshrivastav.app/",
      githubLink: "https://github.com/vikram-shrivastava/nexuscreate",
      colSpan: "md:col-span-1",
    },
    {
      name: "Mystery Feedback",
      image: "/images/mysteryfeedback.png",
      description: "An anonymous feedback platform utilizing AI to filter content. Built for secure communication.",
      tech: ["Next.js", "Gemini API", "Shadcn UI"],
      liveLink: "https://mysteryfeedback.vikramshrivastav.app/",
      githubLink: "https://github.com/vikram-shrivastava/Mysteryfeedback",
      colSpan: "md:col-span-2",
    },
  ],
  freelance: [
    {
      name: "B2B Dropshipping Automation",
      image: "/images/dropshipping.png",
      description: "An automated B2B e-commerce platform connecting sellers to suppliers with white-label packaging and secure payment gateways.",
      tech: ["Next.js", "Node.js", "Razorpay", "PostgreSQL", "Supplier Mapping", "Shopify Integration"],
      colSpan: "md:col-span-2",
    }
  ]
};

function Projects() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <section id="projects" className={`py-24 px-6 ${isDarkMode ? "bg-[#09090b] text-zinc-50" : "bg-white text-zinc-950"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work.</h2>
            <p className={`text-lg max-w-xl font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Exploring the intersection of proprietary SaaS products and enterprise-grade client architecture.
            </p>
          </motion.div>

          {/* Startup-style Animated Tab Toggle */}
          <div className={`flex p-1 rounded-xl border ${isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
            {['saas', 'freelance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === tab ? (isDarkMode ? 'text-white' : 'text-zinc-900') : (isDarkMode ? 'text-zinc-400 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-700')}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute inset-0 rounded-lg shadow-sm ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab === 'saas' ? 'AI & SaaS' : 'Client & Freelance'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Box Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {projectsData[activeTab].map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={project.name}
                className={`group relative overflow-hidden rounded-2xl border flex flex-col ${project.colSpan} ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"}`}
              >
                <div className="absolute inset-0 z-0 bg-zinc-800/20">
                  {/* Ensure you have these images in your public folder, or use placeholders */}
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${isDarkMode ? "from-[#09090b] via-[#09090b]/80 to-transparent group-hover:from-zinc-950/90" : "from-white via-white/90 to-transparent group-hover:from-white/90"}`}></div>
                </div>

                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                  <div className="flex justify-between items-end gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.name}</h3>
                    
                    {/* CHANGED: Opacity is 100 on mobile, 0 on desktop until hovered */}
                    <div className="flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className={`p-2.5 rounded-full border backdrop-blur-md transition-colors ${isDarkMode ? "bg-zinc-900/80 border-zinc-700 hover:bg-white hover:text-black" : "bg-white/80 border-zinc-200 hover:bg-black hover:text-white"}`}><FaGithub size={18} /></a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className={`p-2.5 rounded-full border backdrop-blur-md transition-colors ${isDarkMode ? "bg-zinc-900/80 border-zinc-700 hover:bg-white hover:text-black" : "bg-white/80 border-zinc-200 hover:bg-black hover:text-white"}`}><FaExternalLinkAlt size={18} /></a>
                      )}
                    </div>
                  </div>

                  <p className={`text-sm mb-6 max-w-lg font-light leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                      {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                          <span key={i} className={`text-xs px-2.5 py-1 rounded-md border font-medium ${isDarkMode ? "bg-zinc-950/80 border-zinc-800 text-zinc-300" : "bg-white/80 border-zinc-200 text-zinc-700"}`}>
                              {t}
                          </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;