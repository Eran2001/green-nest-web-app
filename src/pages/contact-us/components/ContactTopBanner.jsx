import React from "react";

const ContactTopBanner = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <img
        src={bannerTop}
        alt="top-banner"
        className="w-full xl:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {/* Big Title */}
        <h1 className="text-[135px] font-bold leading-none">PRODUCT</h1>

        {/* Breadcrumb */}
        <p className="text-[28px] mt-4">Home / Product</p>
      </div>
    </section>
  );
};

export default ContactTopBanner;
