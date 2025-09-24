import React, { useRef } from "react";
import leftArrow from "../../../assets/home/left-arrow.png";
import rightArrow from "../../../assets/home/right-arrow.png";

import bottom2 from "../../../assets/home/bottom-2.png";
import bottom3 from "../../../assets/home/bottom-3.png";

const plants = [
  { name: "Monstera", desc: "(Monstera Deliciosa)", img: bottom2 },
  { name: "ZZ Plant", desc: "(Zamioculcas zamiifolia)", img: bottom3 },
  { name: "Aloe Vera", desc: "(Aloe barbadensis)", img: bottom2 },
  { name: "Snake Plant", desc: "(Sansevieria)", img: bottom3 },
  // ... add all 15 plants here
];

const PlantCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-16 sm:mt-24 lg:mt-80 px-4 mx-auto max-w-7xl pb-6">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
      >
        {plants.map((plant, idx) => (
          <div
            key={idx}
            className="group flex min-w-[280px] sm:min-w-[320px] items-center mt-10 
             bg-[#EAF3EA] hover:bg-[#2D621F] rounded-xl  shadow-md px-4 py-3 h-[120px] 
             transform transition duration-300 hover:scale-120"
          >
            <img
              src={plant.img}
              alt={plant.name}
              className="w-14 sm:w-16 lg:w-20 object-contain"
            />
            <div className="ml-3">
              <h3
                className="text-sm sm:text-base font-bold text-[#2E6B2C] 
                 transition-colors duration-300 group-hover:text-white"
              >
                {plant.name}
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-700 
                 transition-colors duration-300 group-hover:text-white"
              >
                {plant.desc}
              </p>
              <button className="mt-1 bg-[#4CAF50] text-white px-4 py-1 rounded-lg font-semibold text-xs sm:text-sm">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <button onClick={() => scroll("left")}>
          <img
            src={leftArrow}
            alt="Left"
            className="h-6 w-auto cursor-pointer"
          />
        </button>
        <button onClick={() => scroll("right")}>
          <img
            src={rightArrow}
            alt="Right"
            className="h-6 w-auto cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};

export default PlantCarousel;
