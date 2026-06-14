import React, { useState } from "react";
import { useTheme } from "../context/Themecontext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCheck, FaCopy, FaPaperPlane } from "react-icons/fa";
import { track } from "@vercel/analytics/react"; // Import Vercel tracking

function Contact() {
  const { isDarkMode } = useTheme();
  
  // States for Email Copy
  const [copied, setCopied] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const emailAddress = "vikrampshrivastav@gmail.com";

  // States for Form
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle clipboard copying & Trigger Vercel Analytics
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      
      // Send custom event to Vercel Analytics
      track("Copied_Email", { location: "Contact Section" });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  // Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE THIS URL with your Formspree or Web3Forms endpoint
      // Example: "https://formspree.io/f/your_form_id"
      await fetch("https://formspree.io/f/mvznddew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      track("Form_Submitted", { lead_name: formState.name }); // Track successful leads
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" }); // Reset form
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/vikramshrivastav" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/vikram-shrivastava" },
  ];

  return (
    <section id="contact" className={`py-32 px-6 ${isDarkMode ? "bg-[#09090b]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className={`rounded-3xl border relative overflow-hidden ${
             isDarkMode ? "bg-zinc-900/30 border-zinc-800" : "bg-zinc-50 border-zinc-200"
           }`}
        >
             {/* Background Glow */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none"></div>

             <div className="grid md:grid-cols-2 gap-0 relative z-10">
               
               {/* Left Column: Text & Direct Links */}
               <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                 <div>
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                     Let's architect <br/> your next product.
                   </h2>
                   <p className={`text-lg mb-10 font-light ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                      Looking for a Full-Stack AI Engineer to join your team, or need an experienced freelancer to build an MVP? Let's connect.
                   </p>
                 </div>

                 <div className="flex flex-col gap-4 items-start">
                    {/* Copy Email Button */}
                    <button 
                      onClick={handleCopyEmail}
                      onPointerEnter={(e) => e.pointerType === "mouse" && setIsEmailHovered(true)}
                      onPointerLeave={(e) => e.pointerType === "mouse" && setIsEmailHovered(false)}
                      className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all w-full sm:w-auto min-w-[280px] ${
                        isDarkMode 
                          ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700" 
                          : "bg-white border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-50 hover:border-zinc-300"
                      }`}
                    >
                        <span className="text-lg relative">
                          {copied ? <FaCheck className="text-emerald-500" /> : isEmailHovered ? <FaCopy /> : <FaEnvelope />}
                        </span>
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

                    <div className="flex gap-4 w-full sm:w-auto">
                      {socialLinks.map((item, index) => (
                          <a 
                            key={index} 
                            href={item.href} 
                            target="_blank" 
                            rel="noreferrer" 
                            className={`flex-1 sm:flex-none flex justify-center items-center gap-3 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all ${
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
               </div>

               {/* Right Column: Intake Form */}
               <div className={`p-10 md:p-16 ${isDarkMode ? "bg-zinc-950/50" : "bg-white/50"}`}>
                 {submitSuccess ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full flex flex-col items-center justify-center text-center space-y-4"
                   >
                     <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-3xl mb-2">
                       <FaCheck />
                     </div>
                     <h3 className="text-2xl font-bold">Message Sent</h3>
                     <p className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}>I'll get back to you as soon as possible.</p>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                     <div className="grid sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className={`text-sm font-medium ${isDarkMode ? "text-zinc-400" : "text-zinc-700"}`}>Name</label>
                         <input 
                           type="text" 
                           required
                           value={formState.name}
                           onChange={(e) => setFormState({...formState, name: e.target.value})}
                           className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all ${
                             isDarkMode ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600" : "bg-white border-zinc-200 text-black placeholder-zinc-400"
                           }`} 
                           placeholder="John Doe" 
                         />
                       </div>
                       <div className="space-y-2">
                         <label className={`text-sm font-medium ${isDarkMode ? "text-zinc-400" : "text-zinc-700"}`}>Email</label>
                         <input 
                           type="email" 
                           required
                           value={formState.email}
                           onChange={(e) => setFormState({...formState, email: e.target.value})}
                           className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all ${
                             isDarkMode ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600" : "bg-white border-zinc-200 text-black placeholder-zinc-400"
                           }`} 
                           placeholder="john@company.com" 
                         />
                       </div>
                     </div>
                     
                     <div className="space-y-2 flex-grow">
                       <label className={`text-sm font-medium ${isDarkMode ? "text-zinc-400" : "text-zinc-700"}`}>Details</label>
                       <textarea 
                         required
                         rows="4"
                         value={formState.message}
                         onChange={(e) => setFormState({...formState, message: e.target.value})}
                         className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-zinc-500/50 transition-all resize-none ${
                           isDarkMode ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-600" : "bg-white border-zinc-200 text-black placeholder-zinc-400"
                         }`} 
                         placeholder="Tell me about your goals, timeline, or open role..." 
                       />
                     </div>

                     <button 
                       type="submit" 
                       disabled={isSubmitting}
                       className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-medium transition-all ${
                         isDarkMode 
                           ? "bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500" 
                           : "bg-black text-white hover:bg-zinc-800 disabled:bg-zinc-200 disabled:text-zinc-500"
                       }`}
                     >
                       {isSubmitting ? "Sending..." : (
                         <>
                           Send Message <FaPaperPlane size={12} className="ml-1" />
                         </>
                       )}
                     </button>
                   </form>
                 )}
               </div>

             </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;