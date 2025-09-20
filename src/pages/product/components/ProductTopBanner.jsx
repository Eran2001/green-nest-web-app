import React from "react";

import bannerTop from "../../../assets/product/Product.png";

const ProductTopBanner = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <img
        src={bannerTop}
        alt="top-banner"
        className="w-full xl:h-[600px] max-xl:h-[600px] max-lg:h-[500px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {/* Big Title */}
        <h1 className="text-[135px] max-xl:text-[90px] max-lg:text-[70px] max-md:text-[50px] font-bold leading-none">
          PRODUCT
        </h1>

        {/* Breadcrumb */}
        <p className="text-[28px] max-md:text-[20px] mt-4">Home / Product</p>
      </div>
    </section>
  );
};

export default ProductTopBanner;
