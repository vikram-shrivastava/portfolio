import React from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer({ showScrollToTop }) {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-10 border-t ${isDarkMode ? "bg-[#09090b] border-zinc-900 text-zinc-500" : "bg-white border-zinc-100 text-zinc-400"}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-light">
          © {new Date().getFullYear()} Vikram Shrivastav. Engineered with precision.
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
             <Link to="home" smooth duration={800} className="cursor-pointer transition-colors hover:text-zinc-900 dark:hover:text-zinc-200">Home</Link>
             <Link to="projects" smooth duration={800} className="cursor-pointer transition-colors hover:text-zinc-900 dark:hover:text-zinc-200">Work</Link>
             <Link to="contact" smooth duration={800} className="cursor-pointer transition-colors hover:text-zinc-900 dark:hover:text-zinc-200">Contact</Link>
        </div>
      </div>

      {showScrollToTop && (
        <Link 
            to="home" 
            smooth 
            duration={1000} 
            className={`fixed bottom-8 right-8 p-3.5 rounded-full border shadow-xl transition-all hover:-translate-y-1 cursor-pointer z-40 backdrop-blur-md ${
              isDarkMode 
                ? "bg-zinc-900/80 border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800" 
                : "bg-white/80 border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-50"
            }`}
        >
            <FaArrowUp size={14} />
        </Link>
      )}
    </footer>
  );
}

export default Footer;