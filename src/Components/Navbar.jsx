import React, { useEffect } from "react";
import Overflow from "./Overflow";

const Navbar = () => {
  Overflow(".logo svg, .links div", 0.5)

  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-3xl mx-auto p-5 sm:p-10 flex justify-between items-center text-white">
        <div className="logo overflow-hidden">
          {/* Option 1: Using an SVG logo */}
          <img 
            src="/logo.svg" 
            alt="YOJE" 
            className="h-10 w-auto"
          />
        </div>

        <div className="toggler sm:hidden space-y-[3px]">
          <div className="line w-5 h-[1.5px] bg-white"></div>
          <div className="line w-5 h-[1.5px] bg-white"></div>
          <div className="line w-5 h-[1.5px] bg-white"></div>
        </div>

        <div className="links overflow-hidden hidden sm:flex items-center gap-10">
          {/* <div className="sm:flex items-center gap-10">
            {["Login", "Sign up"].map((item) => (
              <a className="text-lg font-medium" key={item}>
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;