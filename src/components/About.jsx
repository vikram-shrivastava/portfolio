import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Themecontext.jsx";

function About() {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className={`py-24 px-6 ${isDarkMode ? "bg-[#09090b]" : "bg-zinc-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me.</h2>
              <p className={`text-lg font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                Bridging the gap between complex backend logic and business-driven results.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* The Dual Identity */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-zinc-200 dark:border-zinc-800">Consultant & Engineer</h3>
              <p className={`leading-relaxed text-lg font-light ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                I am <strong className={isDarkMode ? "text-white" : "text-black"}>Vikram Shrivastav</strong>. 
                Whether I am building internal platforms as an AI Engineer or architecting custom solutions for freelance clients, my approach remains the same: <span className="font-medium">engineer for scale, design for the user.</span> By specializing in the MERN stack and GenAI orchestration, I help startups and businesses turn complex product requirements into seamless, production-ready applications.
              </p>
            </motion.div>

            {/* Existing Education & Focus Code... */}
            <div className="grid md:grid-cols-2 gap-8">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-zinc-200 dark:border-zinc-800">Background</h3>
                <div className="space-y-6">
                    <div className="relative pl-4 border-l border-zinc-300 dark:border-zinc-700">
                        <div className="font-medium text-lg">AI Engineering Intern</div>
                        <div className={`text-sm ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>Resellpur</div>
                    </div>
                    <div className="relative pl-4 border-l border-zinc-300 dark:border-zinc-700">
                        <div className="font-medium text-lg">B.Tech Computer Science</div>
                        <div className={`text-sm ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>JD College of Engineering (2022-2026)</div>
                    </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-zinc-200 dark:border-zinc-800">Core Focus</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Product Strategy', 'LLM Pipelines', 'System Architecture', 'Client Delivery', 'Clean Code'].map(tag => (
                        <span key={tag} className={`px-3 py-1.5 text-sm rounded-md border font-medium ${isDarkMode ? "border-zinc-800 bg-zinc-900/50 text-zinc-300" : "border-zinc-200 bg-zinc-100 text-zinc-700"}`}>
                            {tag}
                        </span>
                    ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;