import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import topLeftImg from "../../../assets/product/topLeft.png";
import bottomRightImg from "../../../assets/product/bottom.png";

import img1 from "../../../assets/product/img1.png";
import img2 from "../../../assets/product/img2.png";
import img3 from "../../../assets/product/img3.png";
import img4 from "../../../assets/product/img4.png";
import img5 from "../../../assets/product/img5.png";
import img6 from "../../../assets/product/img6.png";
import img7 from "../../../assets/product/img7.png";
import img8 from "../../../assets/product/img8.png";
import img9 from "../../../assets/product/img9.png";

const OurProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  const products = [
    { name: "Philodendron", img: img1, oldPrice: 2000, newPrice: 1500 },
    { name: "Zz plant", img: img2, price: 1800 },
    { name: "Peace Lily", img: img3, oldPrice: 1800, newPrice: 1500 },
    { name: "Jade plant", img: img4, oldPrice: 1800, newPrice: 1000 },
    { name: "Snake plant", img: img5, oldPrice: 2500, newPrice: 2000 },
    { name: "Plant 6", img: img6, price: 2200 },
    { name: "Plant 7", img: img7, price: 1900 },
    { name: "Plant 8", img: img8, price: 2100 },
    { name: "Plant 9", img: img9, price: 2300 },
  ];

  return (
    <section className="relative bg-[#EAF5E7] py-16">
      {/* Decorative Leaves */}
      <img
        src={topLeftImg}
        alt="Leaf Decoration"
        className="absolute top-0 left-4 w-28 md:w-40 opacity-80"
      />
      <img
        src={bottomRightImg}
        alt="Leaf Decoration"
        className="absolute bottom-0 right-0 w-28 md:w-40 opacity-80"
      />

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        {/* Title */}
        <h2 className="text-[63px] font-medium text-[#264D10] mb-40">
          Our Products
        </h2>

        {/* Scroll Container with Buttons */}
        <div className="relative mb-20">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20 cursor-pointer"
          >
            <ChevronLeftIcon className="h-6 w-6 text-[#264D10]" />
          </button>

          {/* Products Row */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-8 scroll-smooth px-12"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[180px] md:min-w-[220px] flex-shrink-0 text-center"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-52 object-contain mb-4"
                />
                <h3 className="text-[32px] font-medium text-[#5C5555]">
                  {product.name}
                </h3>
                <div className="mt-1">
                  {product.oldPrice && (
                    <span className="block text-gray-500 line-through text-sm">
                      Rs.{product.oldPrice}
                    </span>
                  )}
                  <span
                    className={`block text-[20px] font-normal ${
                      product.newPrice ? "text-[#E31616]" : "text-[#5C5555]"
                    }`}
                  >
                    Rs.{product.newPrice || product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20 cursor-pointer"
          >
            <ChevronRightIcon className="h-6 w-6 text-[#264D10]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
