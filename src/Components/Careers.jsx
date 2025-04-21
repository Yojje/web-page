import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Careers = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    position: "",
    resumeLink: "",
    githubLink: "",
    coverLetter: ""
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Positions that require a GitHub link
  const positionsRequiringGithub = ["App Developer Intern", "AI/ML Intern"];
  
  // Check if current position requires GitHub
  const requiresGithub = positionsRequiringGithub.includes(formData.position);

  // Handle ESC key press and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    // Add/remove body scroll lock when modal is opened/closed
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Create FormData object for submission (without file)
      const formSubmissionData = new FormData();
      formSubmissionData.append('name', formData.name);
      formSubmissionData.append('email', formData.email);
      formSubmissionData.append('contactNo', formData.contactNo);
      formSubmissionData.append('position', formData.position);
      formSubmissionData.append('coverLetter', formData.coverLetter);
      
      // Add resume link
      if (formData.resumeLink) {
        formSubmissionData.append('resumeLink', formData.resumeLink);
      }
      
      // Add GitHub link if position requires it and link is provided
      if (requiresGithub && formData.githubLink) {
        formSubmissionData.append('githubLink', formData.githubLink);
      }
      
      // Log the form data being sent
      console.log("Submitting form with data:", {
        name: formData.name,
        email: formData.email,
        contactNo: formData.contactNo,
        position: formData.position,
        coverLetter: formData.coverLetter.substring(0, 50) + "...",
        resumeLink: formData.resumeLink || 'No link provided',
        githubLink: requiresGithub ? (formData.githubLink || 'No link provided') : 'Not required'
      });
      
      // Use your Formspree endpoint
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbgjrbw";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formSubmissionData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const responseData = await response.json();
      console.log("Formspree response:", responseData);
      
      if (response.ok) {
        // Form submission was successful
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Application submitted successfully! We'll review your application and get back to you soon." }
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          position: "",
          resumeLink: "",
          githubLink: "",
          coverLetter: ""
        });
        
        // Close the modal after a short delay
        // setTimeout(() => {
        //   if (onClose) onClose();
        // }, 10000);
      } else {
        // Form submission failed
        throw new Error(responseData.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message || "Something went wrong. Please try again." }
      });
    }
  };
  
  const handleClose = (e) => {
    if (e) e.stopPropagation(); // Stop event bubbling
    console.log("Close careers modal");
    if (onClose) onClose();
  };

  // Render nothing if modal is not open
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-[#070707] z-50 overflow-y-auto max-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay to capture clicks outside the modal */}
      <div className="absolute inset-0" onClick={handleClose}></div>
      
      {/* Close button */}
      <button 
        className="fixed top-8 right-8 text-[#e0ccbb] hover:text-white text-4xl z-[100] cursor-pointer"
        onClick={handleClose}
        type="button"
        aria-label="Close modal"
      >
        ✕
      </button>
      
      <div className="relative z-[55] min-h-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left column content remains the same */}
            <div className="md:w-2/5">
              {/* Existing content */}
              <h1 className="text-5xl sm:text-7xl text-[#e0ccbb] font-gothic tracking-tight mb-12">
                Join Our Team
              </h1>
              
              {/* Rest of left column content... */}
              <div className="mb-12">
                <p className="text-[#e0ccbb] opacity-80 text-lg mb-6">
                  We're always looking for talented individuals to join our team at YOJE. 
                  If you're passionate about innovation and creativity, we'd love to hear from you.
                </p>

                <p className="text-[#e0ccbb] opacity-80 text-lg mb-6">
                  (Note: LOR will be provided to only those whose work is satisfactory.)
                </p>
                
                <div className="mt-8">
                  <h3 className="text-[#e0ccbb] text-lg mb-4 font-medium">Benefits</h3>
                  <ul className="text-[#e0ccbb] opacity-80 space-y-2">
                    <li>• Flexible work hours</li>
                    <li>• Remote work options</li>
                    <li>• LOR and Internship certificate</li>
                    <li>• Professional development</li>
                    <li>• Collaborative environment</li>
                  </ul>
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
            
            {/* Right column - Application form */}
            <div className="md:w-3/5" onClick={(e) => e.stopPropagation()}>
              {status.info.msg && (
                <div className={`mb-4 p-4 ${status.info.error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} rounded`}>
                  {status.info.msg}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-[#e0ccbb] mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    placeholder="John Doe"
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
                    placeholder="johndoe@example.com"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div>
                  <label htmlFor="contactNo" className="block text-[#e0ccbb] mb-2">Contact No. (prefer WhatsApp)</label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    placeholder="+91 9876543210"
                    required
                    disabled={status.submitting}
                  />
                  <p className="mt-1 text-xs text-[#e0ccbb]/70">Format: +[country code] [number], e.g., +91 9876543210</p>
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-[#e0ccbb] mb-2">Position You're Applying For</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    required
                    disabled={status.submitting}
                  >
                    <option value="" className="bg-[#070707]">Select a position</option>
                    <option value="UI/UX Intern" className="bg-[#070707]">UI/UX Intern</option>
                    <option value="App Developer Intern" className="bg-[#070707]">App Developer Intern</option>
                    <option value="AI/ML Intern" className="bg-[#070707]">AI/ML Intern</option>
                    <option value="Media Intern" className="bg-[#070707]">Media Intern</option>
                    <option value="Content Creator" className="bg-[#070707]">Content Creator</option>
                  </select>
                  <p className="mt-1 text-xs text-[#e0ccbb]/70">Choose the position that best matches your skills</p>
                </div>
                
                {/* Resume link field */}
                <div>
                  <label htmlFor="resumeLink" className="block text-[#e0ccbb] mb-2">Resume/CV Link (Enter a public Link)</label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    placeholder="https://drive.google.com/file/d/your-resume-link"
                    required
                    disabled={status.submitting}
                  />
                  <p className="mt-1 text-xs text-[#e0ccbb]/70">Share your resume via Google Drive, Dropbox or any file sharing service</p>
                </div>
                
                {/* Conditional GitHub link field - only shows for certain positions */}
                {requiresGithub && (
                  <div className="animate-fadeIn">
                    <label htmlFor="githubLink" className="block text-[#e0ccbb] mb-2">
                      GitHub Profile <span className="text-[#e0ccbb]/70">(Required for this position)</span>
                    </label>
                    <input
                      type="url"
                      id="githubLink"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                      placeholder="https://github.com/yourusername"
                      required
                      disabled={status.submitting}
                    />
                    <p className="mt-1 text-xs text-[#e0ccbb]/70">Share your GitHub profile or specific project repositories</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="coverLetter" className="block text-[#e0ccbb] mb-2">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-transparent border-b border-[#e0ccbb]/30 py-2 text-[#e0ccbb] focus:outline-none focus:border-[#e0ccbb]"
                    placeholder="Dear Hiring Manager,

I am writing to express my interest in the [position] role at YOJE."
                    required
                    disabled={status.submitting}
                  ></textarea>
                  <p className="mt-1 text-xs text-[#e0ccbb]/70">Briefly explain why you're interested in joining YOJE and what skills you bring</p>
                </div>
                
                <motion.button
                  type="submit"
                  className="mt-8 py-3 px-8 bg-[#e0ccbb] text-[#070707] hover:bg-[#e0ccbb]/90 disabled:opacity-50"
                  whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: status.submitting ? 1 : 0.98 }}
                  disabled={status.submitting}
                >
                  {status.submitting ? "Submitting..." : "Submit Application"}
                </motion.button>
              </form>
            </div>
          </div>
          
          {/* Add extra padding at the bottom for better scrolling experience on mobile */}
          <div className="h-16 md:h-0"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;