import React from "react";

import bannerImg from "../../../assets/about us/bannerImg.png";

const TopBanner = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <img
        src={bannerImg}
        alt="top-banner"
        className="w-full xl:h-[450px] max-xl:h-[300px] max-lg:h-[300px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pb-4 xl:pb-20">
        {/* Big Title */}
        <h1 className="text-[90px] max-xl:text-[80px] max-lg:text-[60px] max-md:text-[40px] font-bold leading-none">
          ABOUT US
        </h1>

        {/* Breadcrumb */}
        <p className="text-[28px] max-md:text-[20px] mt-4">Home / About Us</p>
      </div>
    </section>
  );
};

export default TopBanner;
