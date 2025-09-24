import React from "react";

import bottomImg from "../../../assets/home/hero-leaf-new.png";
import bigImg from "../../../assets/home/bigImg.png";

const BookPlant = () => {
  return (
    <section className="relative pt-20 pb-10 bg-white overflow-hidden">
      {/* Background images */}
      <img
        src={bigImg}
        alt="leaf background"
        className="absolute bottom-0 right-60 w-[700px] opacity-70 pointer-events-none select-none"
      />
      <img
        src={bottomImg}
        alt="leaf bottom"
        className="absolute -bottom-8 left-8 w-40 opacity-80 pointer-events-none select-none -rotate-60"
      />

      {/* Container */}
      <div className="container mx-auto relative z-10 px-4">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[40px] font-bold text-[#264D10]">
            Book a free plant consultation
          </h2>
          <p className="mt-3 text-[#5C5555] font-medium text-[19px]">
            Need help choosing the perfect plant? Schedule a free consultation
            with our plant experts and get personalized advice tailored to your
            space, style, and lifestyle.
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 max-w-xl mx-auto bg-[#D9D9D980] shadow-lg rounded-2xl p-18 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6EB670DB] focus:outline-none cursor-pointer"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6EB670DB] focus:outline-none cursor-pointer"
          />
          <input
            type="date"
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6EB670DB] focus:outline-none cursor-pointer"
          />
          <textarea
            placeholder="Any questions or notes?"
            rows="3"
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6EB670DB] focus:outline-none cursor-pointer"
          />
          <button
            type="button"
            className="w-full bg-[#6EB670DB] text-[21px] font-bold text-white py-3 rounded-lg shadow transition cursor-pointer"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookPlant;
