import React from 'react';
import { useTheme } from '../context/Themecontext';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
} from 'react-icons/fa';

function Contact() {
  const { isDarkMode } = useTheme();

  const contactInfo = [
    {
      icon: <FaEnvelope />, label: 'Email', value: 'vikrampshrivastav@gmail.com',
    },
    {
      icon: <FaPhoneAlt />, label: 'Phone', value: '+91-9021077286',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin', link: 'https://linkedin.com/in/vikramshrivastav',
    },
    {
      icon: <FaGithub />, label: 'GitHub', value: 'github', link: 'https://github.com/vikram-shrivastava',
    },
    {
      icon: <FaCode />, label: 'LeetCode', value: 'leetcode', link: 'https://leetcode.com/u/vikrams_13/',
    },
  ];

  return (
    <section
      className={`py-16 px-6 md:px-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition hover:scale-105 duration-300 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl text-blue-600">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-blue-500">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition hover:scale-105 duration-300 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl text-blue-600">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-blue-500">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
