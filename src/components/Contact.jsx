import React, { useState } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCheck, FaCopy } from "react-icons/fa";

function Contact() {
  const { isDarkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const emailAddress = "vikrampshrivastav@gmail.com";

  // Function to handle clipboard copying
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      // Reset the button back to default after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/vikramshrivastav" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/vikram-shrivastava" },
  ];

  return (
    <section id="contact" className={`py-32 px-6 ${isDarkMode ? "bg-[#09090b]" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className={`p-10 md:p-16 rounded-3xl border text-center relative overflow-hidden ${
             isDarkMode ? "bg-zinc-900/30 border-zinc-800" : "bg-zinc-50 border-zinc-200"
           }`}
        >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[100px] pointer-events-none"></div>

             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's build something <br className="hidden md:block"/> extraordinary.</h2>
               <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                  Looking for a Full-Stack AI Engineer to join your team, or need an experienced freelancer to architect your next MVP? My inbox is always open.
               </p>

               <div className="flex flex-wrap justify-center gap-4">
                  {/* Copy Email Button */}
                  <button 
                    onClick={handleCopyEmail}
                    // ONLY trigger hover states if the user is using a physical mouse
                    onPointerEnter={(e) => e.pointerType === "mouse" && setIsEmailHovered(true)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setIsEmailHovered(false)}
                    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-full border text-sm font-medium transition-all hover:-translate-y-1 min-w-[280px] ${
                      isDarkMode 
                        ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700" 
                        : "bg-white border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-50 hover:border-zinc-300"
                    }`}
                  >
                      <span className="text-lg relative">
                        {copied ? <FaCheck className="text-emerald-500" /> : isEmailHovered ? <FaCopy /> : <FaEnvelope />}
                      </span>
                      
                      {/* Animated Text Swap */}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={copied ? "copied" : isEmailHovered ? "hover" : "default"}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                        >
                          {copied ? "Copied to clipboard!" : isEmailHovered ? "Click to copy email" : emailAddress}
                        </motion.span>
                      </AnimatePresence>
                  </button>

                  {/* Social External Links */}
                  {socialLinks.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-medium transition-all hover:-translate-y-1 ${
                          isDarkMode 
                            ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700" 
                            : "bg-white border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-50 hover:border-zinc-300"
                        }`}
                      >
                          <span className="text-lg">{item.icon}</span>
                          {item.label}
                      </a>
                  ))}
               </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;