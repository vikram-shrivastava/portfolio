import React, { useEffect, useState } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaProjectDiagram } from "react-icons/fa";

const Hero = ({ setHeroInView }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHeroInView(inView);
  }, [inView, setHeroInView]);

  const coreSkills = [
    { icon: <FaReact />, name: "React / Next.js" },
    { icon: <FaNodeJs />, name: "Node.js / APIs" },
    { icon: <FaDatabase />, name: "SQL / NoSQL" },
    { icon: <FaProjectDiagram />, name: "GenAI / LangChain" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} id="home" className={`relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden ${isDarkMode ? "bg-[#09090b] text-zinc-50" : "bg-white text-zinc-950"} bg-noise`}>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-16 pb-10">
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 text-center md:text-left">
          <motion.div variants={itemVariants} className="mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-3">
             <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-zinc-100 text-zinc-600'}`}>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Open to Full-Time Roles
             </span>
             <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-zinc-100 text-zinc-600'}`}>
                Available for Freelance
             </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Architecting <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500">
               Digital Products.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className={`text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Hi, I'm Vikram. I engineer scalable web platforms, integrate intelligent AI workflows, and help businesses turn complex ideas into production-ready software.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <a href="#projects" className={`px-6 py-3 rounded-md font-medium transition-all ${isDarkMode ? 'bg-zinc-100 text-zinc-900 hover:bg-white' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
              View My Work
            </a>
            <a href="#contact" className={`px-6 py-3 rounded-md border font-medium transition-all ${isDarkMode ? "border-zinc-800 hover:bg-zinc-900 text-zinc-300" : "border-zinc-200 hover:bg-zinc-50 text-zinc-600"}`}>
              Let's Collaborate
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {coreSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{skill.icon}</span>
                <span className="hidden sm:inline">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

       {/* Image Container with Hover & Touch Events */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)" }} 
          animate={{ opacity: 1, filter: "blur(0px)" }} 
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} 
          className="relative flex-1 flex justify-center md:justify-end cursor-pointer md:cursor-default"
          // ONLY trigger on mouse hover
          onPointerEnter={(e) => e.pointerType === "mouse" && setIsHovered(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setIsHovered(false)}
          // Allow mobile users to tap to toggle the chat bubble
          onClick={() => setIsHovered(!isHovered)}
        >
          {/* Animated Chat Bubble */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`absolute -top-12 md:-top-8 md:-left-8 z-30 px-5 py-3 rounded-2xl rounded-br-sm md:rounded-bl-sm md:rounded-br-2xl shadow-2xl border text-sm font-medium backdrop-blur-md ${
                  isDarkMode 
                    ? "bg-zinc-800/90 border-zinc-700 text-white" 
                    : "bg-white/90 border-zinc-200 text-zinc-900"
                }`}
              >
                Hi there! 👋 Let's build something.
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`relative w-72 h-[400px] rounded-2xl overflow-hidden border ${isDarkMode ? "border-zinc-800 bg-zinc-900/50" : "border-zinc-200 bg-zinc-100"}`}>
            <motion.img 
              src="/images/ProfileImage.webp" 
              alt="Profile" 
              className="w-full h-full object-cover transition-colors duration-700" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] mix-blend-overlay pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;