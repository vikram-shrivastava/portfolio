import React, { useEffect } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Hero = ({ setHeroInView }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setHeroInView(inView);
  }, [inView, setHeroInView]);

  const coreSkills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "SQL/NoSQL" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Gradient Mesh - Optimized with CSS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10 pb-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20"
          >
            Full Stack & GenAI Developer
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Vikram Shrivastav
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Building scalable web applications and integrating intelligent 
            Generative AI solutions to solve real-world problems.
          </p>

          {/* Quick Core Skills - Immediate Value */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border backdrop-blur-sm ${
                  isDarkMode 
                  ? "bg-gray-800/50 border-gray-700 text-gray-200" 
                  : "bg-white/50 border-gray-200 text-gray-700"
                }`}
              >
                <span className="text-blue-500">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/25">
              View Work
            </a>
            <a href="#contact" className={`px-8 py-3 rounded-full border font-semibold transition ${isDarkMode ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"}`}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${isDarkMode ? "border-gray-800 shadow-blue-900/20" : "border-white shadow-gray-200"}`}>
                 <img 
                    src="/images/ProfileImage.webp" 
                    alt="Vikram" 
                    className="w-full h-full object-cover"
                 />
            </div>
             {/* Floating Badge Animation */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className={`absolute -bottom-4 -right-4 md:right-10 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"}`}
             >
                 <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                 <span className="text-sm font-bold">Open to Work</span>
             </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;