import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for background blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          <span className="text-blue-500">&lt;</span>
          <span className={isDarkMode ? "text-white" : "text-gray-900"}>Vikram</span>
          <span className="text-blue-500">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.a
            href="/Vikram_Shrivastav_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-xl">
                {isDarkMode ? <FaSun className="text-yellow-400"/> : <FaMoon className="text-gray-600"/>}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-500">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
               <a
                href="/Vikram_Shrivastav_Resume.pdf"
                download
                className="px-6 py-2 rounded-full bg-blue-600 text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Header;