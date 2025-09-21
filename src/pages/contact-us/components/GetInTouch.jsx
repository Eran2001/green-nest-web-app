import React from "react";

import topLeftImg from "../../../assets/contact us/topLeftImg.png";
import bottomLeftImg from "../../../assets/contact us/bottomLeftImg.png";

const GetInTouch = () => {
  return (
    <section className="relative bg-white pb-12 overflow-hidden">
      {/* Top Left Image */}
      <img
        src={topLeftImg}
        alt="Top Left Decoration"
        className="absolute -top-4 left-0 w-20 h-20 md:w-28 md:h-28"
      />

      <div className="relative container mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between px-6 py-32">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 px-4">
          <h2 className="text-[63px] font-bold text-[#264D10] mb-4">
            Get in Touch
          </h2>
          <p className="text-black text-[26px] font-medium leading-[47px] tracking-[2%] text-justify">
            We’d love to hear from you! Whether you have a question about our
            plants, need design advice, or want to share feedback, the GreenNest
            team is here to help.
          </p>
          <div className="border-b-2 border-[#264D1094] mt-6 w-full"></div>
        </div>

        {/* Right Section - Contact Form */}
        <div
          className="lg:w-2/4 bg-green-50 px-12 py-12 rounded"
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h3 className="font-bold text-[39px] text-[#3C6232] mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-8">
            {/* Name */}
            <input
              type="text"
              placeholder="enter name"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)" }}
              className="w-full px-4 py-2 text-[20px] font-semibold border border-none bg-white rounded-[21px] focus:outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="enter email"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)" }}
              className="w-full px-4 py-2 text-[20px] font-semibold border-none bg-white rounded-[21px]  border focus:outline-none"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="enter number"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)" }}
              className="w-full px-4 py-2 text-[20px] font-semibold border-none bg-white rounded-[21px]  border focus:outline-none"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)" }}
              className="w-full px-4 py-2 text-[20px] font-semibold border-none bg-white rounded-[21px]  border focus:outline-none"
            ></textarea>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-[#4E6A3EF0] text-white text-[25px] font-semibold px-20 py-2 rounded-[22px] transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Bottom Left Image */}
        <img
          src={bottomLeftImg}
          alt="Bottom Left Decoration"
          className="absolute bottom-20 left-30 max-md:top-20 w-[400px] h-auto md:w-[450px]"
        />
      </div>
    </section>
  );
};

export default GetInTouch;
