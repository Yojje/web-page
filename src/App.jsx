import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import Spread from "./Spread";
import Story from "./Components/Story";
import LocomotiveScroll from "locomotive-scroll";
// import BlurredCircle from "./Components/BlurredCircle";

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll with options for better mobile support
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#root'),
      smooth: true,
      smartphone: {
        smooth: true,
        breakpoint: 767
      },
      tablet: {
        smooth: true,
        breakpoint: 1024
      }
    });
    
    // Clean up on unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div>
      {/* <BlurredCircle/> */}
      <Navbar />
      <Hero />
      <Work />
      <Playreel />
      <Images />
      <Spread />
      <Story />
    </div>
  );
};

export default App;