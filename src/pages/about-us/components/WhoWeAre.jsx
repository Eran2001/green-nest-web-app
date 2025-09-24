import React from "react";

import leftImg from "../../../assets/about us/image 21.png";
import bottomLeaf from "../../../assets/about us/bottomImg.png";
import topLeaf from "../../../assets/about us/topLeaf.png";
import bottomleft from "../../../assets/about us/bottomLeft.png";

const WhoWeAre = () => {
  return (
    <section className="relative py-16">
      {/* Card */}
      <div className="relative container mx-auto max-w-6xl bg-[#FCFFFD66] rounded-lg shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={leftImg}
            alt="Who We Are"
            className="shadow-lg w-full h-64 md:h-[500px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col justify-start text-left">
          <h2 className="text-[43px] font-bold text-[#264D10] mb-6 drop-shadow-lg">
            Who We Are
          </h2>
          <p className="text-[#636A63] leading-relaxed mb-8 text-[17px]">
            GreenNest is an innovative online platform dedicated to bringing
            nature indoors. We connect plant lovers, interior design
            enthusiasts, and urban households with curated indoor plants and
            personalized design inspirations to create healthier, more aesthetic
            living spaces.
          </p>
          <button className="bg-gradient-to-r from-[#48EC4D] to-[#ABC6AC] text-[21px] font-bold text-white px-14 py-2 rounded-full shadow-md hover:opacity-90 transition w-auto self-start">
            See more
          </button>
        </div>

        {/* Decorative Bottom Right Leaf inside card */}
        <img
          src={bottomLeaf}
          alt="leaf decoration"
          className="absolute bottom-0 right-0 w-20 md:w-28 opacity-60 pointer-events-none select-none"
        />

        {/* Decorative Bottom Left Leaf inside card */}
        <img
          src={bottomleft}
          alt="leaf decoration"
          className="absolute bottom-0 left-0 w-20 md:w-28 opacity-60 pointer-events-none select-none"
        />
      </div>

      {/* Decorative Top Leaf outside card */}
      <img
        src={topLeaf}
        alt="leaf decoration"
        className="absolute top-4 right-4 w-16 md:w-20 opacity-50 pointer-events-none select-none"
      />
    </section>
  );
};

export default WhoWeAre;
