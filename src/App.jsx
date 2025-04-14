import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import Spread from "./Spread";
import Story from "./Components/Story";
import LocomotiveScroll from "locomotive-scroll";
import BlurredCircle from "./Components/BlurredCircle";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <BlurredCircle/>
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
