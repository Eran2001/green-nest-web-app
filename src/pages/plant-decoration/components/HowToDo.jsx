import React from "react";

import livingRoom from "../../../assets/plant-decoration/livingRoom.png";
import arrow from "../../../assets/plant-decoration/arrow.png";
import aloe from "../../../assets/plant-decoration/aloe.png";

const HowToDo = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start mt-36">
          <img
            src={livingRoom}
            alt="Living Room"
            className="rounded-md shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="relative text-left">
          {/* Aloe Decoration */}
          <img
            src={aloe}
            alt="Aloe Decoration"
            className="absolute -top-16 -left-40 w-28 md:w-[288px] pointer-events-none select-none"
          />

          <h2 className="text-[63px] font-medium text-[#264D10] mb-8 mt-32">
            How To Do ?
          </h2>

          <ul className="space-y-6 text-lg text-[#333333] font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#2A5C2CBD] text-[24px]">◈</span>
              <p>
                Customers take a well-lit, candid photo of their room (selecting
                the room category (e.g., living room, bedroom, office) and
                preferred style (modern, boho, minimalist).)
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2A5C2CBD] text-[24px]">◈</span>
              <p>
                Use AI to select the desired indoor plants from their selected
                room photo.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2A5C2CBD] text-[24px]">◈</span>
              <p>
                Then select the cart option on our website and get the desired
                indoor plants
              </p>
            </li>
          </ul>

          {/* Bottom Right Arrow */}
          <img
            src={arrow}
            alt="Arrow Decoration"
            className="absolute -bottom-12 lg:block hidden right-1/2 w-32 md:w-44 pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToDo;
