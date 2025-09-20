import React from "react";
import logoImg from "../../assets/home/logoLight.png";
import sendIcon from "../../assets/home/send.png";
import phone from "../../assets/home/Phone call.png";
import location from "../../assets/home/location_on.png";
import mail from "../../assets/home/mark_email_unread.png";

import fb from "../../assets/home/fb.png";
import yt from "../../assets/home/yt.png";
import ig from "../../assets/home/ig.png";

const Footer = () => {
  return (
    <footer className="bg-[#96BE8C8C] text-gray-800">
      <div className="max-sm:px-4 mx-auto container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Address */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img src={logoImg} alt="GreenNest Logo" className="h-[120px]" />
            {/* border under logo */}
            <div className="border-b-2 border-[#264D1080] w-[100%] my-2"></div>

            <p className="text-[23px] font-medium">
              No.225, Jaya mawatha, Pasyala <br /> Colombo
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-[#45A64882] w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <img src={fb} alt="Facebook" className="w-auto h105" />
              </a>
              <a
                href="#"
                className="bg-[#45A64882] w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <img src={yt} alt="YouTube" className="w-auto h-8" />
              </a>
              <a
                href="#"
                className="bg-[#45A64882] w-[60px] h-[60px] rounded-full flex items-center justify-center"
              >
                <img src={ig} alt="Instagram" className="w-auto 10-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="font-medium text-[23px] text-black mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              LINKS
            </h3>
            <ul className="space-y-3 text-[23px] font-medium">
              <li>
                <a href="#" className="hover:text-[#3d893fdb] text-[#636A63]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3d893fdb] text-[#636A63]">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3d893fdb] text-[#636A63]">
                  Plant Decoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3d893fdb] text-[#636A63]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-medium text-[23px] text-black mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              CONTACT US
            </h3>
            <ul className="space-y-3 text-[23px] text-[#636A63]  font-medium">
              <li className="flex items-center space-x-2">
                <img
                  src={location}
                  alt="Location"
                  className="w-auto h-[30px]"
                />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  No.225, Jaya Mawatha, Pasyala.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={phone} alt="Phone" className="w-auto h-[24px] mr-4" />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  +9471 5134456
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={mail} alt="Email" className="w-auto h-[30px] mr-4" />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  greennest@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="font-medium text-[23px] text-black mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              NEWSLETTER
            </h3>
            <p className="text-[23px] text-[#5C5555C7] font-medium mb-4">
              Stay Updated With Our Latest Plants & Offers
            </p>
            <form className="flex items-center bg-[#D9D9D980] rounded-md shadow overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-3 py-2 text-[23px] outline-none"
              />
              <button
                type="submit"
                className="bg-[#D9D9D980] px-8 py-[20px] flex items-center justify-center"
              >
                <img src={sendIcon} alt="Send" className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#264D10A3] py-8">
        <p className="text-center text-white text-[23px] font-medium">
          © 2025 GreenNest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
