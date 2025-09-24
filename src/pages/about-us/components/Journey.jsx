import React from "react";

import bottomImg from "../../../assets/about us/bottomTop.png";
import img1 from "../../../assets/about us/img1.png";
import img2 from "../../../assets/about us/img2.png";
import img3 from "../../../assets/about us/img3.png";
import img4 from "../../../assets/about us/img4.png";
import img5 from "../../../assets/about us/img5.png";
import img6 from "../../../assets/about us/img6.png";

const Journey = () => {
  return (
    <section className="relative bg-[#EAF5E7] py-16">
      {/* Background Decorative Image */}
      <img
        src={bottomImg}
        alt="Decorative Leaf"
        className="absolute top-0 left-0 w-64 md:w-[700px] opacity-40 pointer-events-none select-none"
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Title */}
        <h2 className="text-[63px] font-bold text-[#264D10] mb-12 drop-shadow">
          The GreenNest Journey
        </h2>

        {/* Image Grid Card */}
        <div className="bg-white rounded-[48px] shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={img1}
            alt="Plant 1"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="Plant 2"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img3}
            alt="Plant 3"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img4}
            alt="Plant 4"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img5}
            alt="Plant 5"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img6}
            alt="Plant 6"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;
