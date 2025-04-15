import React from "react";

const Story = () => {
  return (
    <div className="overflow-hidden h-screen">
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="relative w-full flex items-center overflow-hidden h-full bg-[#070707] text-[#e0ccbb]"
      >
        <div className="video-container absolute top-0 right-0 h-1/2 w-2/3 sm:w-3/5 flex items-center">
          <video
            className="w-full scale-125"
            autoPlay
            muted
            loop
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <div className="absolute w-full max-w-screen-xl mx-auto px-12 sm:w-[clamp(2rem, 5vw, 5rem)]">
          <div className="space-y-7 sm:space-y-1">
            <div className="headings mt-40 sm:mt-12 sm:mb-14 mb-20 font-gothic">
				<h1 className="text-8xl sm:text-[clamp(5rem,11vw,12rem)] sm:tracking-tighter">Our</h1>
				<h1 className="text-8xl sm:text-[clamp(5rem,11vw,12rem)] sm:tracking-tighter">Story</h1>
            </div>
            <h4 className="font-gothic text-[clamp(.5rem,5vw,2rem)] sm:text-[clamp(0.5rem,1.75vw,1.75rem)] sm:opacity-90 sm:leading-4 md:leading-5 lg:leading-8 leading-3">
              	The story behind YOJE is a mix of
            </h4>
            <h4 className="font-gothic text-[clamp(.5rem,5vw,2rem)] sm:text-[clamp(0.5rem,1.75vw,1.75rem)] pb-10 sm:opacity-90 leading-6 lg:leading-6 sm:leading-3">
				exploration, creativity and curiosity.
            </h4>
            <a className="border-b-2 pb-1 mb-4 inline-block text-3xl sm:hidden border-[#e0ccbb]" href="#">
              Our Story
            </a>
            <div>
              <span className="inline-block w-full h-[1px] opacity-50 bg-[#e0ccbb]"></span>
            </div>
            <div className="flex justify-between items-end pt-4 pb-10">
              <div className="flex gap-36 sm:gap-32">
                <ul className="space-y-2 sm:space-y-3 max-sm:hidden">
                  {[
                    "JIC Incubation Center",
                    "JECRC FOUNDATION",
                    "JAIPUR, RAJASTHAN",
                    "contact@yoje.tech",
                  ].map((item) => (
                    <a
                      key={item}
                      className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
                <ul className="space-y-4 sm:space-y-3">
                  {["Work", "Studio", "News", "contact"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
                <ul className="space-y-4 sm:space-y-3">
                  {["Behance", "dribble", "twitter", "instagram"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm sm:text-[clamp(.25rem,1.5vw,1rem)] opacity-85 capitalize"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
              </div>

              <a
                className="border-b inline-block max-sm:hidden border-[#e0ccbb]"
                href="#"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;