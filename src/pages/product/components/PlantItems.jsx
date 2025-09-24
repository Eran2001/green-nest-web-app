import React from "react";

import bottomRight from "../../../assets/product/bottomRight.png";
import img7 from "../../../assets/product/img7.png";
import img6 from "../../../assets/product/img6.png";
import img8 from "../../../assets/product/img8.png";
import img9 from "../../../assets/product/img9.png";

const PlantItems = () => {
  const items = [
    { title: "House plants", img: img7 },
    { title: "Office plants", img: img6 },
    { title: "Bonsais", img: img8 },
    { title: "Accessories", img: img9 },
  ];

  return (
    <section className="relative bg-[#EAF5E7] py-16">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Outer White Box */}
        <div className="bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map(({ title, img }, index) => (
            <div
              key={index}
              className="relative bg-[#e8f6e2] rounded-xl shadow-md p-6 flex justify-end items-center"
            >
              {/* Title at bottom-left with underline */}
              <h3
                className="absolute bottom-4 left-6 text-[22px] font-semibold text-[#264D10] 
                after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#264D10] after:mt-1"
              >
                {title}
              </h3>

              {/* Image */}
              <img
                src={img}
                alt={title}
                className="w-24 md:w-32 h-52 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Right Image */}
      <img
        src={bottomRight}
        alt="Decoration"
        className="absolute bottom-4 right-0 w-40 md:w-[300px] opacity-70 pointer-events-none select-none"
      />
    </section>
  );
};

export default PlantItems;
