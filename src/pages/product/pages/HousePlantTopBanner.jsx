import React from "react";

import bannerTop from "../../../assets/product/Product.png";

const HousePlantTopBanner = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <img
        src={bannerTop}
        alt="top-banner"
        className="w-full xl:h-[450px] max-xl:h-[300px] max-lg:h-[300px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pb-4 xl:pb-20">
        {/* Big Title */}
        <h1 className="text-[90px] max-xl:text-[80px] max-lg:text-[60px] max-md:text-[40px] font-bold leading-none">
          HOUSE PLANTS
        </h1>

        {/* Breadcrumb */}
        <p className="text-[28px] max-md:text-[20px] mt-4">
          Home / Product / House Plants
        </p>
      </div>
    </section>
  );
};

export default HousePlantTopBanner;
