import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heroImg from "../../assets/home/newImgMain.png";
import bottom1 from "../../assets/home/bottom-1.png";
import bottom2 from "../../assets/home/bottom-2.png";
import bottom3 from "../../assets/home/bottom-3.png";

import mainImg from "../../assets/home/mainImage.jpg";

import leftArrow from "../../assets/home/left-arrow.png";
import rightArrow from "../../assets/home/right-arrow.png";

import TrustBadges from "./components/TrustBadges";
import FeedBack from "./components/FeedBack";
import BookPlant from "./components/BookPlant";
import ringLeaf1 from "../../assets/home/ring-leaf-1.png";
import ringLeaf2 from "../../assets/home/ring-leaf-2.png";
import ringLeaf3 from "../../assets/home/ring-leaf-3.png";

import leafWater from "../../assets/home/hero-leaf-water.png";

import bottomLeft from "../../assets/home/botom-left-img.png";
import bottomRight from "../../assets/home/hero-leaf-2.png";
import PlantCarousel from "./components/PlantCarousel";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "GreenNest | Home";
  }, [isLoading]);
  return (
    <div className="">
      {/* Hero Section */}
      <section className="">
        <div className="relative max-sm:px-4 mx-auto ;g max-w-7xl">
          {/* Bottom Left Image */}
          <img
            src={bottomRight}
            alt="Bottom Left Decoration"
            className="absolute max-lg:bottom-0 -bottom-40 max-lg:left-0 left-10 w-20 sm:w-18 lg:w-30"
          />

          {/* Bottom Right Image */}
          <img
            src={bottomLeft}
            alt="Bottom Right Decoration"
            className="absolute max-lg:bottom-0 -bottom-40 right-0 w-20 sm:w-18 lg:w-20"
          />
          <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="mt-32 sm:mt-40 lg:mt-28 max-lg:text-center">
              {/* Responsive Title */}
              <div className="relative inline-block">
                <h1 className="mt-4 max-[400px]:text-[50px] text-[70px] sm:text-[100px] md:text-[100px] lg:text-[70px] font-semibold text-[#97e070] lg:mt-8 relative z-10">
                  Green<span className="text-[#647a5a]">Nest</span>
                </h1>

                {/* LeafWater image positioned relative to h1 */}
                <img
                  src={leafWater}
                  alt="Leaf Water"
                  className="absolute top-6 -right-30 w-12 sm:w-20 lg:w-20 z-0"
                />
              </div>

              <p className="mt-2 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[30px] text-black font-semibold">
                Smart Indoor Plants Market..
              </p>

              <p className="mt-2 text-[20px] sm:text-[20px] md:text-[30px] lg:text-[20px] text-[#1e1e1e8a] font-normal">
                GreenNest sells houseplants and offers personalized design
                inspiration for healthier, stylish spaces.
              </p>

              <div className="flex flex-col sm:flex-row max-lg:justify-center gap-4 mt-8 sm:mt-12">
                <button
                  onClick={() => navigate("/shopping-cart")}
                  style={{
                    boxShadow: "-6px 4px 64px 0 rgba(0, 0, 0, 0.25",
                  }}
                  className="bg-[#8B9F8BDB]  py-2 px-6 sm:w-[200px] md:w-[400px] lg:w-[250px] max-lg:h-[70px] h-[50px] rounded-[17px] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-semibold leading-[31px] cursor-pointer"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => navigate("/about-us")}
                  style={{
                    boxShadow: "-6px 4px 64px 0 rgba(0, 0, 0, 0.25",
                  }}
                  className="bg-[#8B9F8BDB] py-2 px-6 sm:w-[200px] md:w-[400px] lg:w-[250px] max-lg:h-[70px] h-[50px] rounded-[17px] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-semibold leading-[31px] cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center max-lg:pl-8 lg:pl-4 lg:justify-end relative lg:right-10">
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
                className="relative z-10 w-[40%] sm:w-[50%] lg:w-[80%] object-contain"
                src={heroImg}
                alt="Hero"
              />

              {/* Ring Leaves */}
              <img
                src={ringLeaf1}
                alt="Leaf 1"
                className="absolute z-20 w-16 sm:w-13 lg:w-15 max-lg:hidden
      lg:top-[15%] lg:left-[10%] top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src={ringLeaf2}
                alt="Leaf 2"
                className="absolute z-20 w-16 sm:w-20 lg:w-18 max-lg:hidden
      lg:top-[50%] lg:left-[-24px] -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src={ringLeaf3}
                alt="Leaf 3"
                className="absolute z-20 w-16 sm:w-20 lg:w-18 max-lg:hidden
      bottom-[15%] left-[10%] -translate-x-1/2 translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      <PlantCarousel />

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
