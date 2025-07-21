import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Themecontext.jsx";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItems = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 ">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight select-none">
          <a href="/">
            <img
              src="/images/Logo.png"
              alt="Logo"
              width={52}
              className={`rounded-4xl transition-all duration-500 ${
                isDarkMode ? "" : "filter grayscale"
              }`}
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => {
            const itemId = item.toLowerCase();
            const isActive = activeSection === itemId;

            return (
              <a
                key={idx}
                href={`#${itemId}`}
                className={`relative px-2 py-1 font-medium text-base group transition-colors duration-300 ease-in-out ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="group-hover:text-blue-500 transition-colors duration-300">
                  {item}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* Resume Button */}
          <a
            href="/Vikram_Shrivastav_Resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-500"
          >
            Resume
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-7 h-7 ${menuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }mb-6`}
      >
        <div className="flex flex-col items-center gap-6 py-4 bg-inherit">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="/Vikram_Shrivastav_Resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
