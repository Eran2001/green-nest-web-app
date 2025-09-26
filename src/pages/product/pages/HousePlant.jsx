import React from "react";

import img1 from "../../../assets/product/img1.png";
import img2 from "../../../assets/product/img2.png";
import img3 from "../../../assets/product/img3.png";
import img4 from "../../../assets/product/img4.png";
import HousePlantTopBanner from "./HousePlantTopBanner";

const HousePlant = () => {
  const products = [
    { name: "Philodendron", img: img1, oldPrice: 2000, newPrice: 1500 },
    { name: "Zz plant", img: img2, price: 1800 },
    { name: "Peace Lily", img: img3, oldPrice: 1800, newPrice: 1500 },
    { name: "Jade plant", img: img4, oldPrice: 1800, newPrice: 1000 },
  ];

  return (
    <>
      <HousePlantTopBanner />
      <section className="py-20">
        <div className="container mx-auto max-sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-sm:justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm max-sm:w-full bg-white border border-gray-200 rounded-lg shadow-sm text-center py-4"
            >
              <div className="flex justify-center items-center">
                <img
                  className="rounded-t-lg w-40 h-40 object-center "
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                  {product.name}
                </h5>

                {/* Price Section */}
                <div className="mb-3">
                  {product.newPrice ? (
                    <>
                      <span className="text-[#E31616] line-through mr-2">
                        Rs. {product.oldPrice}
                      </span>
                      <span className="text-[#5C5555] font-semibold">
                        Rs. {product.newPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#5C5555] font-semibold">
                      Rs. {product.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HousePlant;
