import React from "react";

import bottomLeaf from "../../../assets/about us/bottomRect.png";
import ladyPlant from "../../../assets/about us/image 24.png";

const History = () => {
  return (
    <section className="relative bg-[#EAF5E7] py-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={ladyPlant}
            alt="History Lady"
            className="w-full max-w-sm md:max-w-md shadow-lg rounded-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-[63px] font-bold text-[#264D10] mb-6 drop-shadow">
            History of Our Journey
          </h2>
          <p className="text-[#636A63] text-[24px] font-medium leading-[34px] mb-8 tracking-[3%]">
            What began as a small passion for nurturing houseplants has
            blossomed into a journey of bringing nature closer to homes.
            Surrounded by the calm beauty of greenery, we realized that plants
            are more than decorations — they are companions that bring life,
            purity, and serenity into everyday spaces.
          </p>
          <button className="bg-gradient-to-r from-[#48EC4D] to-[#ABC6AC] text-white text-[31px] font-bold px-14 py-1 rounded-[43px] shadow-md hover:opacity-90 transition w-auto">
            See more
          </button>
        </div>
      </div>

      {/* Decorative Bottom Right Leaf */}
      <img
        src={bottomLeaf}
        alt="Leaf decoration"
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-80 pointer-events-none select-none"
      />
    </section>
  );
};

export default History;
