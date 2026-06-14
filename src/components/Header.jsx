import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 top-0 sm:top-6 flex justify-center px-4"
    >
      <nav
        className={`w-full max-w-4xl px-6 py-3 rounded-none sm:rounded-full transition-all duration-500 flex justify-between items-center ${
          scrolled
            ? isDarkMode
              ? "bg-zinc-900/70 backdrop-blur-lg border-b sm:border border-zinc-800 shadow-2xl shadow-black/50"
              : "bg-white/70 backdrop-blur-lg border-b sm:border border-zinc-200 shadow-xl shadow-zinc-200/50"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tighter flex items-center gap-1">
          <span className={isDarkMode ? "text-zinc-400" : "text-zinc-500"}>v</span>
          <span className={isDarkMode ? "text-white" : "text-zinc-900"}>shrivastav</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mb-0.5"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l pl-4 border-zinc-300 dark:border-zinc-700">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-black"}`}
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <a
              href="/Vikram_Shrivastav_Resume.pdf"
              download
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                isDarkMode ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-zinc-800"
              }`}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-lg">
                {isDarkMode ? <FaSun className="text-zinc-400"/> : <FaMoon className="text-zinc-600"/>}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-0 w-full md:hidden mt-2 px-4`}
          >
            <div className={`p-6 rounded-2xl border shadow-2xl flex flex-col gap-6 ${isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"}`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium tracking-tight"
                >
                  {item.name}
                </a>
              ))}
               <a
                href="/Vikram_Shrivastav_Resume.pdf"
                download
                className={`text-center py-3 rounded-lg font-medium mt-4 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;