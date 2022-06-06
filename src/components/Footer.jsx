import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="about" className="max-w-[1240px] mx-auto px-4 text-white">
      <div className="grid lg:grid-cols-3 items-center py-16">
        <div>
          <h1 className="text-3xl font-bold text-cyan-500">
            <a href="#home">REACT.</a>
          </h1>
          <p className="py-2 text-slate-300 w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            harum a, iure corrupti temporibus fuga eius dicta? Eos, nesciunt
            rem.
          </p>
          <div className="flex space-x-2 md:w-[75%]">
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagramSquare className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between">
          <div className="py-4">
            <h4 className="font-semibold text-2xl text-slate-200 py-2">
              Solutions
            </h4>
            <ul className="text-white/80 space-y-2">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-2xl text-slate-200 py-2">
              Support
            </h4>
            <ul className="text-white/80 space-y-2">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guide</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-2xl text-slate-200 py-2">
              Company
            </h4>
            <ul className="text-white/80 space-y-2">
              <li>About</li>
              <li>Blogs</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-2xl text-slate-200 py-2">
              Legal
            </h4>
            <ul className="text-white/80 space-y-2">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-slate-200 border-slate-200 py-4">
        &copy; 2022 &#124; coded with ❤️ by <span className="text-cyan-500">Hasyim</span>
      </p>
    </div>
  );
};

export default Footer;
