import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Replace YOUR_FORM_ID with the actual form ID from Formspree
      const response = await fetch("https://formspree.io/f/xrbgjrbw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" }
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Close the modal after a short delay
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || "Something went wrong. Please try again." }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Network error. Please check your connection." }
      });
    }
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation(); // Stop event bubbling
    console.log("Close button clicked");
    if (onClose) onClose();
  };

  // Render nothing if modal is not open
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-[#070707] z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay to capture clicks outside the modal */}
      <div className="absolute inset-0" onClick={handleClose}></div>
      
      {/* Close button with higher z-index */}
      <button 
        className="absolute top-8 right-8 text-[#e0ccbb] hover:text-white text-4xl z-[60] cursor-pointer"
        onClick={handleClose}
        type="button"
        aria-label="Close modal"
      >
        ✕
      </button>
      
      <div className="relative z-[55]">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left column - Contact info */}
            <div className="md:w-2/5">
              <h1 className="text-5xl sm:text-7xl text-[#e0ccbb] font-gothic tracking-tight mb-12">
                Contact Us
              </h1>
              
              <div className="mb-12">
                <p className="text-[#e0ccbb] opacity-80 text-lg mb-6">
                  Have a question or want to learn more about YOJE? 
                  We'd love to hear from you. Fill out the form and we'll get back to you soon.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-[#e0ccbb] text-lg mb-4 font-medium">Connect with us</h3>
                  <a href="mailto:contact@yoje.tech" className="text-[#e0ccbb] opacity-80 block mb-2 hover:opacity-100">
                    contact@yoje.tech
                  </a>
                  <p className="text-[#e0ccbb] opacity-80">
                    JIC Incubation Center<br />
                    JECRC FOUNDATION<br />
                    JAIPUR, RAJASTHAN
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 mt-12">
                {["LinkdIn", "twitter", "instagram", "facebook"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-[#e0ccbb] opacity-70 hover:opacity-100"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div className="md:w-3/5" onClick={(e) => e.stopPropagation()}>
              {status.info.msg && (
                <div className={`mb-4 p-4 ${status.info.error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded`}>
                  {status.info.msg}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-[#e0ccbb] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    required
                    disabled={status.submitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#e0ccbb] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    required
                    disabled={status.submitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#e0ccbb] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="mt-8 py-3 px-8 bg-[#e0ccbb] text-[#070707] hover:bg-[#e0ccbb]/90 disabled:opacity-50"
                  whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: status.submitting ? 1 : 0.98 }}
                  disabled={status.submitting}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;