import React from "react";

const Spread = () => {
  return (
    <div data-scroll data-scroll-speed="0.2" className="w-full flex items-center justify-center h-full">
      <div className="max-w-screen-2xl flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          <svg
            className="size-1"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-lg sm:text-[clamp(.75rem,1vw,1.25rem)] font-medium font-gothic tracking-wide">In the media</h2>
        </div>
        <div className="text text-center mt-10 sm:mt-4 pb-24 font-gothic">
            <h1 className="font-bold text-8xl sm:text-[clamp(5rem,10vw,11rem)] tracking-tight">Spread</h1>
            <h1 className="font-bold text-8xl sm:text-[clamp(5rem,10vw,11rem)] tracking-tight">the News</h1>
            <p className="text-2xl sm:text-[clamp(0.5rem,1.75vw,2rem)] mt-12 sm:mt-4 md:mt-5 lg:mt-8 mx-auto">Find out more about our work on these</p>
            <p className="text-2xl sm:text-[clamp(0.5rem,1.75vw,2rem)] mt-0 sm:-mt-4 md:-mt-3 lg:-mt-2 xl:-mt-1 mx-auto">leading design and technology platforms.</p>
            <a className="border-b border-b-zinc-400 mt-8 sm:mt-4 inline-block text-2xl sm:text-[clamp(0.75rem,1vw,1.25rem)]" href="#">Browse all news</a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
