import React, { useEffect, useState } from "react";

const BlurredCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
      
      // Hide the circle after no movement for 2 seconds (for mobile)
      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setVisible(true);
        
        // Hide the circle after no movement for 2 seconds
        clearTimeout(window.moveTimeout);
        window.moveTimeout = setTimeout(() => {
          setVisible(false);
        }, 2000);
      }
    };
    
    // Initial position in center of viewport
    setPosition({ 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      clearTimeout(window.moveTimeout);
    };
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animateCursor() {
      setSmoothPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(animateCursor);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        transform: `translate(${smoothPosition.x - 50}px, ${smoothPosition.y - 50}px)`,
        opacity: visible ? 1 : 0
      }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-semibold select-none">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default BlurredCircle;