import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Overflow from "./Overflow";

const Hero = () => {
  Overflow(".para p span");
  Overflow(".headings h1 span", 0.5);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".scroll-down", {
      scrollTrigger: {
        trigger: ".scroll-down",
        scroller: "body",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to(".picture img", {
      scrollTrigger: {
        trigger: ".picture img",
        scroller: "body",
        start: "0 0",
        end: "0 -300%",	
        scrub: true,
      },
      opacity: 0.5,
    })
  }, []);

  return (
    <div className="main relative w-full h-[150vh] sm:h-[270vh]">
      <span className="absolute scroll-down hidden sm:block z-[2] right-[10vh] top-[87vh] text-white text-lg font-semibold">
        Scroll to explore
      </span>
      <div className="picture w-full h-full overflow-hidden bg-black">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt=""
        />
      </div>

      <div className="absolute w-full top-0 left-0">
        <div className="text text-white max-w-screen-3xl mx-auto h-full px-5 sm:px-12 pt-24">

          {/* <div className="headings mt-5 sm:mt-12">
            {["Digital", "Design", "Experience"].map((item) => (
              <h1
                className="text-8xl sm:tracking-tighter tracking-tight leading-[1.4] overflow-hidden"
                key={item}
              >
                <span className="block">{item}</span>
              </h1>
            ))}
          </div> */}

			<div className="headings mt-52 lg-mt-32 flex flex-col text-white tracking-tight font-gothic font-light sm-text-md text-[clamp(2rem,10vw,13rem)]">
				<h1 className=" leading-10">Health</h1>
				<h1 className="leading-sung">Meets</h1>
				<h1 className="pb-2 leading-10">Technology</h1>
			</div>

          <div className="mt-20 sm:mt-32">
            <p className="font-medium text-lg sm:text-2xl sm:w-1/2 leading-[1.5rem]">
              We help people to find their beloved instructors,
              in your own native language at your home.
              Meet your instructor and start learning today.
            </p>
            <div className="flex justify-between items-center mt-5 sm:mt-20">
              <a className="border-b sm:text-lg border-white inline-block" href="#" > The Mission </a>

              <div className="flex gap-32 max-md:hidden font-medium">
                <div className="space-y-3">
                  {["Work", "App", "News", "Contact"].map(item => {
                    return (
                      <a
                        key={item}
                        className="block text-md opacity-85 capitalize"
                        href="#"
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
                <div className="space-y-3">
                  {["yoje@yoje.tech"].map(item => {
                    return (
                      <a key={item} className="block text-md opacity-85" href="#" > 
                      {item}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
