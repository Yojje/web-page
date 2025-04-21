import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Careers from "./Careers";

const Story = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [comingSoonMessage, setComingSoonMessage] = useState({
    show: false,
    text: "",
    position: { x: 0, y: 0 }
  });
  
  // Effect to close the tooltip when clicking outside
  useEffect(() => {
    if (comingSoonMessage.show) {
      const handleClickOutside = () => {
        setComingSoonMessage(prev => ({ ...prev, show: false }));
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [comingSoonMessage.show]);
  
  const openContactModal = (e) => {
    e.preventDefault();
    console.log("Opening contact modal");
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    console.log("Closing contact modal");
    setContactModalOpen(false);
  };
  
  const openCareersModal = (e) => {
    e.preventDefault();
    console.log("Opening careers modal");
    setCareersModalOpen(true);
  };

  const closeCareersModal = () => {
    console.log("Closing careers modal");
    setCareersModalOpen(false);
  };
  
  // Function to show "Coming Soon" on both click and hover
  const showComingSoon = (e, text) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event bubbling
    
    // Get position data
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + (rect.width / 2); // Center horizontally
    const y = rect.bottom + 10; // 10px below the element
    
    console.log(`Showing "${text} - Coming Soon" at x:${x}, y:${y}`);
    
    setComingSoonMessage({
      show: true,
      text: `${text} - Coming Soon`,
      position: { x, y }
    });
    
    // Auto-hide the message after 3 seconds only for clicks
    // For hovers, we'll handle hiding in onMouseLeave
    if (e.type === 'click') {
      setTimeout(() => {
        setComingSoonMessage(prev => ({ ...prev, show: false }));
      }, 3000);
    }
  };
  
  // Function to hide the tooltip on mouse leave
  const hideComingSoon = () => {
    setComingSoonMessage(prev => ({ ...prev, show: false }));
  };

  return (
    <div className="overflow-hidden h-screen relative z-10">
      {/* Contact modal */}
      <Contact 
        isOpen={contactModalOpen} 
        onClose={closeContactModal} 
      />
      
      {/* Careers modal */}
      <Careers 
        isOpen={careersModalOpen} 
        onClose={closeCareersModal} 
      />
      
      {/* Coming Soon message tooltip */}
      {comingSoonMessage.show && (
        <div 
          className="fixed bg-[#e0ccbb] text-[#070707] py-2 px-4 rounded-md z-[100] shadow-lg font-medium"
          style={{
            left: comingSoonMessage.position.x + 'px',
            top: comingSoonMessage.position.y + 'px',
            transform: 'translateX(-50%)',
            transition: 'opacity 0.2s ease-in-out'
          }}
          onClick={(e) => e.stopPropagation()} // Prevent click from closing immediately
        >
          {comingSoonMessage.text}
        </div>
      )}
      
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="relative w-full flex items-center overflow-hidden h-full bg-[#070707] text-[#e0ccbb]"
      >
        <div className="video-container absolute top-0 right-0 h-1/2 w-2/3 sm:w-3/5 flex items-center">
          <video
            className="w-full scale-125"
            autoPlay
            muted
            loop
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <div className="absolute w-full max-w-screen-xl mx-auto px-12 sm:w-[clamp(2rem, 5vw, 5rem)]">
          <div className="space-y-7 sm:space-y-1">
            <div className="headings mt-40 sm:mt-12 sm:mb-14 mb-20 font-gothic">
              <h1 className="text-8xl sm:text-[clamp(5rem,11vw,12rem)] sm:tracking-tighter">Our</h1>
              <h1 className="text-8xl sm:text-[clamp(5rem,11vw,12rem)] sm:tracking-tighter">Story</h1>
            </div>
            <h4 className="font-gothic text-[clamp(.5rem,5vw,2rem)] sm:text-[clamp(0.5rem,1.75vw,1.75rem)] sm:opacity-90 sm:leading-4 md:leading-5 lg:leading-8 leading-3">
              The story behind YOJE is a mix of
            </h4>
            <h4 className="font-gothic text-[clamp(.5rem,5vw,2rem)] sm:text-[clamp(0.5rem,1.75vw,1.75rem)] pb-10 sm:opacity-90 leading-6 lg:leading-6 sm:leading-3">
              exploration, creativity and curiosity.
            </h4>
            <a className="border-b-2 pb-1 mb-4 inline-block text-3xl sm:hidden border-[#e0ccbb]" href="#">
              Our Story
            </a>
            <div>
              <span className="inline-block w-full h-[1px] opacity-50 bg-[#e0ccbb]"></span>
            </div>
            <div className="flex justify-between items-end pt-4 pb-10">
              <div className="flex gap-36 sm:gap-32">
                <ul className="space-y-2 sm:space-y-3 max-sm:hidden">
                  {[
                    { text: "JIC Incubation Center", href: "#" },
                    { text: "JECRC FOUNDATION", href: "#" },
                    { text: "JAIPUR, RAJASTHAN", href: "#" },
                    { text: "contact@yoje.tech", href: "mailto:contact@yoje.tech" },
                  ].map((item) => (
                    <a
                      key={item.text}
                      className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 hover:opacity-100"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {/* Career link - now opens the Careers modal */}
                  <a
                    className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize hover:opacity-100"
                    href="#"
                    onClick={openCareersModal}
                  >
                    careers
                  </a>
                  
                  {/* Instructors link with Coming Soon */}
                  <a
                    className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize hover:opacity-100"
                    href="#"
                    onClick={(e) => showComingSoon(e, "Instructors")}
                    onMouseEnter={(e) => showComingSoon(e, "Instructors")}
                    onMouseLeave={hideComingSoon}
                  >
                    Instructors
                  </a>
                  
                  {/* News link with Coming Soon */}
                  <a
                    className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize hover:opacity-100"
                    href="#"
                    onClick={(e) => showComingSoon(e, "News")}
                    onMouseEnter={(e) => showComingSoon(e, "News")}
                    onMouseLeave={hideComingSoon}
                  >
                    News
                  </a>
                  
                  {/* Contact link */}
                  <a
                    className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize hover:opacity-100"
                    href="#"
                    onClick={openContactModal}
                  >
                    contact
                  </a>
                </ul>
                <ul className="space-y-2">
                  {["LinkdIn", "dribble", "twitter", "instagram","facebook"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize hover:opacity-100"
                      href="#"
                      onClick={(e) => showComingSoon(e, item)}
                      onMouseEnter={(e) => showComingSoon(e, item)}
                      onMouseLeave={hideComingSoon}
                    >
                      {item}
                    </a>
                  ))}
                </ul>
              </div>

              <div className="ml-auto">
                <a
                  className="border-b inline-block max-sm:hidden border-[#e0ccbb]"
                  href="#"
                  onClick={(e) => showComingSoon(e, "Privacy & Terms")}
                  onMouseEnter={(e) => showComingSoon(e, "Privacy & Terms")}
                  onMouseLeave={hideComingSoon}
                >
                  Privacy Policy | Terms and Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;