import React from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer({ showScrollToTop }) {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-8 border-t ${isDarkMode ? "bg-gray-950 border-gray-800 text-gray-400" : "bg-white border-gray-200 text-gray-600"}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © 2025 Vikram Shrivastav. Built with React & Framer Motion.
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
             <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-500">Home</Link>
             <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-500">Projects</Link>
             <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link>
        </div>
      </div>

      {showScrollToTop && (
        <Link 
            to="home" 
            smooth 
            duration={800} 
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition cursor-pointer z-40"
        >
            <FaArrowUp />
        </Link>
      )}
    </footer>
  );
}

export default Footer;