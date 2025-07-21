import React, {useEffect} from 'react';
import { useTheme } from "../context/Themecontext.jsx";
import { useInView } from "react-intersection-observer";
const Hero=({ setHeroInView })=> {
  const [ ref, inView ] = useInView({ threshold: 0.2 });
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setHeroInView(inView);
  }, [inView, setHeroInView]);
  return (
    <section
      ref={ref} 
      className={`
        relative flex flex-col items-center justify-center min-h-screen 
        transition-colors duration-500 w-full md:overflow-hidden px-4 
        ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
      `}
      id='home'
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span
          className={`
            animate-pulse rounded-full blur-3xl
            ${isDarkMode ? 'bg-blue-800/20' : 'bg-blue-400/10'}
            w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          `}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-screen-lg">
        <h1
          className={`
            text-4xl md:text-6xl font-extrabold tracking-tight
            bg-gradient-to-r bg-clip-text text-transparent animate-fade-in-down
            ${isDarkMode
              ? 'from-blue-400 via-purple-400 to-pink-400'
              : 'from-blue-600 via-purple-600 to-pink-600'}
          `}
        >
          Vikram Shrivastav
        </h1>
        <h2 className="text-lg md:text-2xl font-medium animate-fade-in-up">
          Full Stack Dev | DSA-Focused | Blending Smart Interfaces with GenAI Innovation
        </h2>
        <p className="max-w-xl text-base md:text-lg opacity-80 animate-fade-in-up">
          I craft responsive, intelligent, and user-focused web experiences. Let’s bring smart ideas to life — together.
        </p>
        <a
          href="#contact"
          className={`
            mt-4 px-8 py-3 rounded-full font-semibold shadow-lg transition
            ${isDarkMode 
              ? 'bg-blue-700 hover:bg-blue-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'}
            animate-fade-in-up
          `}
        >
          Contact Me
        </a>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 1s ease-out both;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.2s ease-out both;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
