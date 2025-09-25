import React from "react";

import ladyImg from "../../../assets/about us/brownLady.png";
import aloeImg from "../../../assets/about us/aloe.png";
import watermark from "../../../assets/about us/watermark.png";
import bottomRight from "../../../assets/about us/bottomRightimg.png";

const VisionMission = () => {
  return (
    <section className="relative bg-[#EAF5E7] pt-16">
      {/* Watermark aligned to the whole white section */}
      <img
        src={watermark}
        alt="Watermark Leaf"
        className="absolute top-0 left-0 w-40 md:w-[400px] opacity-40 pointer-events-none select-none"
      />
      {/* Vision Section */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <div className="relative text-center md:text-left">
          <h2 className="text-[43px] font-bold text-[#264D10] mb-6 drop-shadow">
            Our Vision
          </h2>
          <p className="text-[#636A63] text-[17px] leading-relaxed relative z-10">
            To be the leading destination for indoor plants and design
            inspiration, transforming homes and workplaces into vibrant,
            sustainable environments.
          </p>
        </div>

        {/* Right Image with Aloe */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={ladyImg}
            alt="Lady holding plant"
            className="w-full max-w-sm shadow-lg md:h-[450px] object-cover"
          />
          {/* Aloe positioned relative to lady image */}
          <img
            src={aloeImg}
            alt="Aloe"
            className="absolute -top-8 -left-12 w-20 md:w-[180px]"
          />
        </div>
      </div>

      {/* Mission Section */}
      <section className="relative bg-white pb-16 mt-20">
        <div className="container mx-auto max-w-7xl text-center pt-8 relative">
          <h2 className="text-[43px] font-bold text-[#264D10] mb-6 drop-shadow">
            Our Mission
          </h2>
          <p className="text-[#636A63] text-[17px] font-medium leading-relaxed">
            To make indoor greenery accessible and effortless by offering a
            convenient e-commerce platform, personalized styling
            recommendations, and expert guidance on plant care and design.
          </p>
        </div>
      </section>

      {/* Bottom Right Decoration aligned to whole section */}
      <img
        src={bottomRight}
        alt="Bottom Decoration"
        className="absolute bottom-0 right-0 w-24 md:w-40 opacity-70 pointer-events-none select-none"
      />
    </section>
  );
};

export default VisionMission;
