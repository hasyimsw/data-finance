import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed z-[9999] w-full h-20 bg-[#040a0e]">
      <div className="max-w-[1240px] h-full mx-auto px-4 text-white flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-cyan-500">
            <a href="#home">REACT.</a>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-8 font-semibold uppercase">
            <li className="hover:text-cyan-500">Home</li>
            <li className="hover:text-cyan-500">Company</li>
            <li className="hover:text-cyan-500">Resources</li>
            <li className="hover:text-cyan-500">About</li>
            <li className="hover:text-cyan-500">Contact</li>
          </ul>
        </div>

        {/* hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={24} className="text-white" />
          ) : (
            <AiOutlineMenu size={24} className="text-white" />
          )}
        </div>

        {/* mobile nav menu */}
        <div
          className={
            nav
              ? "w-full bg-[#040a0e] z-10 text-white absolute h-screen top-20 left-0 flex text-center justify-center transition-all duration-700"
              : "absolute left-[-100%]"
          }
        >
          <ul className="font-semibold p-4 space-y-4 uppercase">
            <li className="hover:text-cyan-500">Home</li>
            <li className="hover:text-cyan-500">Company</li>
            <li className="hover:text-cyan-500">Resources</li>
            <li className="hover:text-cyan-500">About</li>
            <li className="hover:text-cyan-500">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
