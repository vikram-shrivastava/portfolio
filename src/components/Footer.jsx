import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTheme } from '../context/Themecontext';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`
        w-full px-6 pt-6 pb-10 text-sm md:text-base transition-all duration-500
        ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
      `}
    >
      {/* Top horizontal divider */}
      <div className="w-full border-t mb-8" style={{ borderColor: isDarkMode ? '#2d3748' : '#e2e8f0' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
      >
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:underline">
            Home
          </Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:underline">
            About
          </Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:underline">
            Projects
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:underline">
            Contact
          </Link>
          <a
            href="/Vikram_Shrivastav_Resume.pdf"
            download
            className={`
              px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300
              ${isDarkMode
                ? 'bg-blue-700 text-white hover:bg-blue-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'}
            `}
          >
            Download Resume
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center opacity-70">© 2025 Vikram Shrivastav. All rights reserved.</p>
      </motion.div>

      {/* Back to top button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
      >
        <Link to="home" smooth duration={500}>
          <div
            className={`p-3 rounded-full shadow-lg transition
              ${isDarkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'}`}
          >
            <FaArrowUp />
          </div>
        </Link>
      </motion.div>
    </footer>
  );
}

export default Footer;
