import React from "react";

import bottomRight from "../../../assets/product/bottomRight.png";
import img1 from "../../../assets/product/img1.png";
import img2 from "../../../assets/product/img2.png";
import img3 from "../../../assets/product/img3.png";
import img4 from "../../../assets/product/img4.png";

const PlantItems = () => {
  const items = [
    { title: "House plants", img: img1 },
    { title: "Office plants", img: img2 },
    { title: "Bonsais", img: img3 },
    { title: "Accessories", img: img4 },
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
