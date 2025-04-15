import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Overflow from "./Overflow";

const Hero = () => {
  Overflow(".para p span");
  Overflow(".headings h1 span", 0.3);
  
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
        end: "0 -110%",	
        scrub: true,
      },
      opacity: 0.5,
    })
  }, []);

  return (
    <div className="main relative w-full h-screen">
		<span className="absolute scroll-down opacity-65 hidden sm:block z-[2] right-5 bottom-5 text-white text-[0.5rem]">
			Scroll to explore
		</span>
    	<div className="picture w-full h-full overflow-hidden bg-black">
			<img
			data-scroll
			data-scroll-speed="-0.5"
			className="w-full h-full object-cover"
			src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
			alt=""
			/>
      	</div>

      	<div className="absolute w-full top-0 left-0">
			<div className="text text-white max-w-screen-3xl mx-auto h-full px-9 sm:px-16 pt-24">

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

				<div className="headings mt-52 lg-mt-32 flex flex-col text-white tracking-tight font-medium font-gothic sm-text-md text-[clamp(2rem,16vw,10rem)]">
					<h1 className="leading-10">Where</h1>
					<h1 className="leading-sung">Health Meets</h1>
					<h1 className="pb-2 leading-10">TECH</h1>
				</div>

				<div className="mt-14 sm:mt-28 px-4">
					<p className="w-1/2 text-[clamp(0.5rem,2vw,1.15rem)]">
					We help experience-driven companies thrive by making their
					audience feel the refined intricacies of their brand and product
					in the digital space. Unforgettable journeys start with a click.
					</p>
					<div className="flex justify-between items-center mt-5 sm:mt-12">
						<a className="border-b sm:text-lg border-white inline-block" href="#" > The Studio </a>
					</div>
				</div>
			</div>
      	</div>
    </div>
  );
};

export default Hero;
