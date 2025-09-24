import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

import leftImg from "../../../assets/plant-decoration/img1.png";
import rightImg from "../../../assets/plant-decoration/img2.png";

import bottomLeft from "../../../assets/plant-decoration/bottomLeft.png";

const BottomSection = () => {
  return (
    <section className="relative bg-[#EAF5E7] pb-16 max-lg:pt-16">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center self-center -mt-20">
          <p className="text-[#3C5E41] text-[24px] font-semibold mb-6 text-center">
            Using the AI tool link below, you can easily select desired indoor
            plants from the selected room photo.
          </p>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#30891E] to-[#0C2308] text-white px-8 py-3 rounded-[18px] shadow-md hover:opacity-90 transition text-lg font-semibold">
            Generate AI
            <SparklesIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Middle Image */}
        <div className="flex items-start justify-center">
          <img
            src={leftImg}
            alt="Messy Room"
            className="rounded-md shadow-md w-full max-w-sm object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="flex items-start justify-center">
          <img
            src={rightImg}
            alt="Green Room"
            className="rounded-md shadow-md w-full max-w-sm object-cover"
          />
        </div>
      </div>

      {/* Decorative Bottom Left Image */}
      <img
        src={bottomLeft}
        alt="Leaf Decoration"
        className="absolute bottom-0 left-0 w-32 md:w-[300px] opacity-80 pointer-events-none select-none rotate-90"
      />
    </section>
  );
};

export default BottomSection;
