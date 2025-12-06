import React from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const { isDarkMode } = useTheme();

  const contacts = [
    { icon: <FaEnvelope />, label: "Email", value: "vikrampshrivastav@gmail.com", href: "mailto:vikrampshrivastav@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/vikramshrivastav" },
    { icon: <FaGithub />, label: "GitHub", value: "Follow", href: "https://github.com/vikram-shrivastava" },
    { icon: <SiLeetcode />, label: "LeetCode", value: "Solve", href: "https://leetcode.com/u/vikrams_13/" },
  ];

  return (
    <section id="contact" className={`py-24 px-6 ${isDarkMode ? "bg-gray-950" : "bg-gray-100"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
             <p className={`text-lg mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Have a project in mind or want to discuss the latest in GenAI? 
                I'm always open to new opportunities and interesting conversations.
             </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contacts.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5, borderColor: "#3b82f6" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all group ${
                        isDarkMode 
                        ? "bg-gray-900 border-gray-800 hover:bg-gray-800" 
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                >
                    <div className="text-3xl mb-3 text-gray-400 group-hover:text-blue-500 transition-colors">
                        {item.icon}
                    </div>
                    <div className="font-semibold text-lg">{item.label}</div>
                    <div className="text-sm opacity-60 mt-1">{item.value}</div>
                </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;