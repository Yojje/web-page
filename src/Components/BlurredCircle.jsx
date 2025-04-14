import React, { useEffect, useState } from "react";

const BlurredCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedPosition(position);
    }, 3); // 500ms delay

    return () => clearTimeout(timeout);
  }, [position]);

  useEffect(() => {
    let animationFrame;

    const smoothFollow = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (delayedPosition.x - prev.x) * 0.1, // Adjust multiplier for smoothness
        y: prev.y + (delayedPosition.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(smoothFollow);
    };

    animationFrame = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrame);
  }, [delayedPosition]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${smoothPosition.x - 50}px, ${smoothPosition.y - 50}px)`,
      }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center pointer-events-none">
        <span className="text-white text-sm font-semibold pointer-events-none">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default BlurredCircle;