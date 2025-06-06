import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Overflow from "./Overflow";

const Hero = () => {
    const isMobile = useRef(window.innerWidth <= 768);

    // Load lower resolution image on mobile
    const imgSrc = isMobile.current
        ? "https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(30)"
        : "https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)";

    // Only apply text overflow effects on desktop
    if (!isMobile.current) {
        Overflow(".para p span");
        Overflow(".headings h1 span", 0.3);
    }

    useEffect(() => {
        if (!isMobile.current) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".scroll-down", {
                scrollTrigger: {
                    trigger: ".scroll-down",
                    scroller: "body",
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: true,
                    fastScrollEnd: true,
                    anticipatePin: 1,
                    onUpdate: () => ScrollTrigger.update(),
                },
                opacity: 0,
            });

            gsap.to(".picture img", {
                scrollTrigger: {
                    trigger: ".picture img",
                    scroller: "body",
                    start: "top top",
                    end: "0 -100%",
                    scrub: true,
                    fastScrollEnd: true,
                    anticipatePin: 1,
                    onUpdate: () => ScrollTrigger.update(),
                },
                opacity: 0.5,
            });
        }
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
                    className="w-full h-full object-cover transform will-change-auto"
                    src={imgSrc}
                    alt="Hero Visual"
                />
            </div>

            <div className="absolute w-full top-0 left-0 h-full">
                <div className="text text-white max-w-screen-3xl mx-auto h-full px-9 sm:px-16 pt-24 flex flex-col">
                    <div className="headings mt-32 md:mt-28 lg:mt-32 flex flex-col text-white tracking-tight font-medium font-gothic sm:text-[clamp(2rem,15vw,10rem)] text-[clamp(2rem,15vw,10rem)]">
                        <h1 className="leading-[1] sm:leading-[0.8]">Where</h1>
                        <h1 className="sm:pb-5 leading-[1] sm:leading-[1]">Health Meets</h1>
                        <h1 className="pb-2 sm:leading-[0.5] leading-[1]">TECH</h1>
                    </div>
                        
                        {/* Modified this container to center the button and reduced margin */}
                        {/* <div className="flex flex-col items-center mt-5 sm:mt-8">
                            <button 
                                className="px-10 py-4 bg-white text-black font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started <span className="text-lg ml-1">→</span>
                            </button>
                        </div> */}

                </div>
            </div>
        </div>
    );
};

export default Hero;