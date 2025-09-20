import React from "react";

import bannerImg from "../../../assets/about us/bannerImg.png";

const TopBanner = () => {
  return (
    <section className="relative w-full max-sm:pt-26 max-lg:top-16 max-md:top-14">
      {/* Banner Image */}
      <img
        src={bannerImg}
        alt="top-banner"
        className="w-full xl:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {/* Big Title */}
        <h1 className="text-[135px] font-bold leading-none">ABOUT US</h1>

        {/* Breadcrumb */}
        <p className="text-[28px] mt-4">Home / About Us</p>
      </div>
    </section>
  );
};

export default TopBanner;
