import React, { useState, useRef, useEffect } from "react";
import { light } from "../styles/Themes"; // Import themes to use gradients
import { motion } from "framer-motion"; // Import motion from framer-motion

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef(null);
  const timerRef = useRef(null);
  
  // Expanded gradients array for each testimonial
  const gradients = [
    light.gradientSecondary,
    light.gradientPrimary,
    light.mainGradient,
    light.gradientOverlay,
  ];
  
  // Believer profiles with added testimonials
  const believers = [
    {
      image: "/believers/xana.jpg",
      name: "Anjali Mehta",
      title: "Yoga Instructor",
      testimonial: "YOJE helped me connect with students globally. The platform's intuitive design makes scheduling and teaching virtual classes seamless, allowing me to focus on what matters most—helping my students grow in their practice.",
    },
    {
      image: "/believers/xana.jpg",
      name: "Ravi Singh",
      title: "Regular Practitioner",
      testimonial: "I've tried many yoga apps, but YOJE stands out with its personalized approach. The AI posture correction has transformed my home practice, and finding instructors who speak my native language has made learning more comfortable.",
    },
    {
      image: "/believers/xana.jpg",
      name: "Sarah Johnson",
      title: "Yoga Enthusiast",
      testimonial: "The community features on YOJE have connected me with like-minded practitioners. I've joined several challenges that kept me motivated, and the friendships I've formed have enriched my yoga journey beyond just the physical practice.",
    },
    {
      image: "/believers/xana.jpg",
      name: "Michael Chang",
      title: "Meditation Guide",
      testimonial: "As a meditation instructor, YOJE has given me a platform to reach people seeking mindfulness in their busy lives. The booking system is straightforward, and the feedback system helps me continuously improve my sessions.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === believers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? believers.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance timer
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds interval
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPaused]);
  
  const handlePause = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 200);
  };

  return (
    <div className="relative py-16 sm:py-24 bg-gray-50">
      {/* Section title */}
      <div className="mb-16 sm:mb-24 text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-medium mb-6">Our Believers</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600">
          Meet the people who believe in our vision and are now part of our growing community.
        </p>
      </div>
      
      {/* Carousel container */}
      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel controls */}
        <div className="absolute top-1/2 -left-4 sm:-left-12 z-10 transform -translate-y-1/2">
          <motion.button 
            onClick={() => {
              prevSlide();
              handlePause();
            }}
            className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 focus:outline-none transition-all duration-300 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gray-800 text-xl font-bold">&lt;</span>
          </motion.button>
        </div>

        <div className="absolute top-1/2 -right-4 sm:-right-12 z-10 transform -translate-y-1/2">
          <motion.button 
            onClick={() => {
              nextSlide();
              handlePause();
            }}
            className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 focus:outline-none transition-all duration-300 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gray-800 text-xl font-bold">&gt;</span>
          </motion.button>
        </div>
        
        {/* Carousel slides with pop-up effect on active slide */}
        <div className="overflow-hidden" ref={slideRef}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {believers.map((person, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div 
                  className="flex flex-col md:flex-row gap-8 md:gap-16 items-center p-8 rounded-xl"
                  style={{ 
                    background: gradients[index % gradients.length],
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  // Pop-up animation when this slide is active
                  animate={{ 
                    scale: index === currentIndex ? 1 : 0.95,
                    y: index === currentIndex ? 0 : 10,
                    opacity: index === currentIndex ? 1 : 0.9,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    duration: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  {/* Image section */}
                  <div className="w-full md:w-2/5">
                    <div className="overflow-hidden rounded-lg shadow-lg group transition-all duration-300 hover:shadow-xl">
                      <motion.div 
                        className="relative aspect-square overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={person.image}
                          alt={person.name}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Text section */}
                  <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-gray-800 mb-2 opacity-75" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <motion.p 
                      className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: index === currentIndex ? 1 : 0.7, y: index === currentIndex ? 0 : 10 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      {person.testimonial}
                    </motion.p>
                    <motion.div 
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="font-semibold text-xl text-gray-900">{person.name}</h3>
                      <p className="text-gray-800 font-medium">{person.title}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicator dots with progress animation */}
        <div className="flex justify-center mt-8 space-x-2">
          {believers.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  handlePause();
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                style={{ width: isActive ? '2rem' : '0.625rem' }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              >
                {isActive && (
                  <span 
                    className="block h-full bg-blue-500 rounded-full" 
                    style={{ 
                      animation: isPaused ? 'none' : 'progressAnimation 5s linear infinite',
                      width: '0%'
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {/* CSS for progress animation */}
      <style jsx>{`
        @keyframes progressAnimation {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Images;