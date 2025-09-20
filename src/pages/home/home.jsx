import React, { useEffect, useState } from "react";

import heroImg from "@/assets/home/main-image.png";
import bottom1 from "../../assets/home/bottom-1.png";
import bottom2 from "../../assets/home/bottom-2.png";
import bottom3 from "../../assets/home/bottom-3.png";

import leftArrow from "../../assets/home/left-arrow.png";
import rightArrow from "../../assets/home/right-arrow.png";

import TrustBadges from "./components/TrustBadges";
import FeedBack from "./components/FeedBack";
import BookPlant from "./components/BookPlant";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "GreenNest | Home";
  }, [isLoading]);
  return (
    <div className="">
      {/* Hero Section */}
      <section className="">
        <div className="max-sm:px-4 mx-auto max-w-7xl">
          <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="mt-10 sm:mt-14 lg:mt-28">
              {/* Responsive Title */}
              <h1 className="mt-4 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] font-semibold text-[#97e070] lg:mt-8">
                Green<span className="text-[#647a5a]">Nest</span>
              </h1>

              <p className="mt-2 text-[20px] sm:text-[28px] md:text-[36px] lg:text-[43px] text-black font-semibold">
                Smart Indoor Plants Market..
              </p>

              <p className="mt-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e1e8a] font-normal">
                GreenNest sells houseplants and offers personalized design
                inspiration for healthier, stylish spaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
                <button
                  style={{
                    boxShadow: "-6px 4px 64px 0 rgba(0, 0, 0, 0.25",
                  }}
                  className="bg-[#3D893FDB] py-2 px-6 sm:w-[200px] lg:w-[250px] h-[50px] rounded-[17px] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-semibold leading-[31px] cursor-pointer"
                >
                  Add to cart
                </button>
                <button
                  style={{
                    boxShadow: "-6px 4px 64px 0 rgba(0, 0, 0, 0.25",
                  }}
                  className="bg-[#8B9F8BDB] py-2 px-6 sm:w-[200px] lg:w-[250px] h-[50px] rounded-[17px] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-semibold leading-[31px] cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:pl-8 lg:justify-start relative">
              {/* Outer Ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[360px] sm:w-[480px] lg:w-[680px]
      h-[360px] sm:h-[480px] lg:h-[680px]
      rounded-full border-[10px] border-white z-0"
              ></div>

              {/* Inner White Circle + Ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[300px] sm:w-[400px] lg:w-[600px]
      h-[300px] sm:h-[400px] lg:h-[600px]
      rounded-full bg-white border-[15px] border-white z-0"
              ></div>

              {/* Plant Image */}
              <img
                className="relative z-10 w-[90%] sm:w-[80%] lg:w-[80%] object-contain"
                src={heroImg}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* bottom-section */}
      <section className="mt-16 sm:mt-24 lg:mt-32 px-4 mx-auto max-w-7xl pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Big Card */}
          <div className="relative flex items-center bg-[#2E6B2C] text-white rounded-tr-[60px] rounded-tl-[60px] h-[180px] sm:h-[200px] lg:h-[220px]">
            {/* Plant Image */}
            <img
              src={bottom1}
              alt="Snake Plant"
              className="absolute -left-8 bottom-0 w-28 sm:w-36 lg:w-44 object-contain"
            />
            {/* Content */}
            <div className="ml-24 sm:ml-36 lg:ml-44 z-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Snake Plant
              </h3>
              <p className="text-xs sm:text-sm lg:text-base">
                (Mother-in-Law’s Tongue)
              </p>
              <button className="mt-3 bg-[#4CAF50] px-6 py-2 rounded-lg font-semibold shadow-md text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          </div>

          {/* Middle Card */}
          <div className="flex items-center mt-32 bg-[#EAF3EA] rounded-xl shadow-md px-4 py-3 h-[100px] sm:h-[120px]">
            <img
              src={bottom2}
              alt="Monstera"
              className="w-14 sm:w-16 lg:w-36 object-contain"
            />
            <div className="ml-3">
              <h3 className="text-sm sm:text-base font-bold text-[#2E6B2C]">
                Monstera
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                (Monstera Deliciosa)
              </p>
              <button className="mt-1 bg-[#4CAF50] text-white px-4 py-1 rounded-lg font-semibold text-xs sm:text-sm">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex items-center mt-32 bg-[#EAF3EA] rounded-xl shadow-md px-4 py-3 h-[100px] sm:h-[120px]">
            <img
              src={bottom3}
              alt="ZZ Plant"
              className="w-14 sm:w-16 lg:w-20 object-contain"
            />
            <div className="ml-3">
              <h3 className="text-sm sm:text-base font-bold text-[#2E6B2C]">
                ZZ Plant
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                (Zamioculcas zamiifolia)
              </p>
              <button className="mt-1 bg-[#4CAF50] text-white px-4 py-1 rounded-lg font-semibold text-xs sm:text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-20 mb-4">
          <img src={leftArrow} alt="" className="h-6 w-auto" />
          <img src={rightArrow} alt="" className="h-6 w-auto" />
        </div>
      </section>

      {/* trust-badges */}
      <TrustBadges />

      {/* feedback */}
      <FeedBack />

      {/* book-plant */}
      <BookPlant />
    </div>
  );
};

export default Home;
