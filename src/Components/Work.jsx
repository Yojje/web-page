import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";
import { light } from "../styles/Themes"; // Import the theme

const Work = () => {
  // Replace with your app features/sections
  const appFeatures = [
    {
      heading: "Find and chat with Instructors",
      subHeading: "Search by name, location, language & style",
      image: "/app-screenshots/find-instructors.png",
      description: "Our intelligent matching system helps you find yoga instructors who speak your language and teach in your preferred style, all within your local area. Moreover, you can chat with them directly through the app to discuss your needs and preferences.",
      gradient: light.mainGradient // Using the primary gradient
    },
    {
      heading: "Can't find your instructor?",
      subHeading: "Practice with our AI instructor for FREE or See our free pre-recorded class video library that fits your needs and that to for FREE.",
      image: "/app-screenshots/community.jpg",
      description: "Our AI instructor is available 24/7 to guide you through your practice. You can also access a library of pre-recorded classes tailored to various styles and levels.",
      gradient: light.gradientSecondary // Using the overlay gradient
    },
    {
      heading: "Book Sessions/ Demo Classes",
      subHeading: "Schedule classes that fit your routine",
      image: "/app-screenshots/book-sessions.png",
      description: "Seamlessly book private or group sessions that fit your schedule. Choose between in-person or virtual classes with just a few taps.",
      gradient: light.mainGradient // Using the secondary gradient
    },
    {
      heading: "AI-Powered Posture Correction",
      subHeading: "Get real-time feedback on your posture and alignment for FREE.", 
      image: "/app-screenshots/track-progress.jpg",
      description: "Utilize our AI technology to receive real-time feedback on your yoga postures. Our app analyzes your movements and provides personalized tips to enhance your practice.",
      gradient: light.mainGradient // Using the main gradient
    },
    {
      heading: "Join or create your own Community",
      subHeading: "Connect with like-minded practitioners and instructors",
      image: "/app-screenshots/community.jpg",
      description: "Join our thriving community of yoga enthusiasts, share experiences, and participate in challenges to deepen your practice together. You can also create your own community to connect with others who share your interests.",
      gradient: light.gradientSecondary // Using the overlay gradient
    },
    
  ];

  return (
    <div 
      className="max-w-screen-2xl mx-auto px-5 sm:px-[clamp(3rem,12vw,5rem)] py-10"
      // style={{ background: light.mainGradient }} // Apply main gradient to the container
    >
      <div className="featured flex items-center gap-3 mb-2">
        <svg
          className="size-[clamp(0.5rem,3vw,1rem)] sm:size-[clamp(1rem,5vw,1.5rem)]"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </div>

      <h2 className="text-2xl sm:text-[7rem] tracking-tight mt-2 mb-16 sm:mb-24 overflow-visible">
        <motion.span
          initial={{ y: "70%", rotate: 10 }} 
          whileInView={{ y: "0", rotate: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ ease: Power4.inOut, duration: 0.7 }}
          className="inline-block origin-left"
        >
          Why us?
        </motion.span>
      </h2>

      {/* Clear margin to prevent overlap */}
      <div className="clear-both"></div>
      
      <p className="text-lg leading-[1.5rem] sm:text-xl sm:w-2/3 sm:opacity-80 mb-12">
        Our app connects yoga enthusiasts with specialized instructors who speak your language, 
        understand your goals, and adapt to your learning style.
      </p>

      {/* Features grid with alternating layout */}
      <div className="app-features space-y-24">
        {appFeatures.map((feature, index) => (
          <div 
            key={feature.heading}
            className={`feature-row flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center rounded-2xl p-6 sm:p-10`}
            style={{ background: feature.gradient }} // Apply the gradient from the feature object
          >
            {/* App screenshot */}
            <div className="feature-image w-full lg:w-1/5 flex items-center justify-center">
              <motion.div
                className="overflow-hidden rounded-xl shadow-lg w-full max-w-sm mx-auto" // Reduced max-width to max-w-sm
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <img 
                  src={feature.image} 
                  alt={feature.heading}
                  className="w-full h-auto object-contain" // Changed to object-contain and removed max-height
                />
              </motion.div>
            </div>
            
            {/* Feature description */}
            <div className="feature-content w-full lg:w-1/2">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <h3 className="text-2xl sm:text-4xl font-medium mb-2">{feature.heading}</h3>
                <p className="text-base sm:text-lg opacity-75 mb-4">{feature.subHeading}</p>
                <p className="text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;