import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[1240px] h-screen px-4 mx-auto flex flex-col justify-center text-center text-white py-24">
      <p className="uppercase text-base md:text-xl font-bold p-2 text-cyan-500">
        growing with data analyticts
      </p>
      <h1 className="text-4xl md:text-6xl py-0 md:py-2  font-bold">
        Grow with data.
      </h1>
      <div className="flex items-center justify-center">
        <p className="md:text-3xl text-xl text-white/90">
          Fast, flexible financing for
        </p>
        <Typed
          className="md:text-3xl text-xl text-cyan-500 p-2"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={160}
          backSpeed={140}
          loop
        />
      </div>
      <p className="font-semibold text-base md:text-lg p-2 text-white/40">Monitor your data analytics to increase revenue for BTB, BTC, &amp; SASS platforms.</p>
      <button className="text-white font-semibold py-2 px-4 bg-cyan-500 w-48 mx-auto mt-7 rounded-lg hover:bg-cyan-600">Get Started</button>
    </div>
  );
};

export default Hero;
