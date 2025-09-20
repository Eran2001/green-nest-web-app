import React from "react";
import logoImg from "../../assets/home/logoLight.png";
import sendIcon from "../../assets/home/send.png";
import phone from "../../assets/home/Phone call.png";
import location from "../../assets/home/location_on.png";
import mail from "../../assets/home/mark_email_unread.png";

import Icon from "../../components/ui/Icon"; // custom icon component
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#96BE8C] text-gray-800">
      <div className="max-sm:px-4 mx-auto container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Address */}
          <div className="space-y-4">
            <img src={logoImg} alt="GreenNest Logo" className="h-20" />
            {/* border under logo */}
            <div className="border-b border-gray-400 w-3/4 my-2"></div>

            <p className="text-[23px] font-medium">
              No.225, Jaya mawatha, Pasyala <br /> Colombo
            </p>

            {/* Social Icons using Heroicons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-green-700 w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-green-800"
              >
                {/* <Icon icon="heroicons:facebook" className="w-5 h-5" /> */}
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-green-700 w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-green-800"
              >
                {/* <Icon icon="heroicons:youtube" className="w-5 h-5" /> */}
                <BsYoutube />
              </a>
              <a
                href="#"
                className="bg-green-700 w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-green-800"
              >
                {/* <Icon icon="heroicons:instagram" className="w-5 h-5" /> */}
                <BsInstagram />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="font-semibold text-gray-900 mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-green-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-900">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-900">
                  Plant Decoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-gray-900 mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              CONTACT US
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <img src={location} alt="Location" className="w-5 h-5" />
                <span>No.225, Jaya Mawatha, Pasyala.</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={phone} alt="Phone" className="w-5 h-5" />
                <span>+9471 5134456</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={mail} alt="Email" className="w-5 h-5" />
                <span>greennest@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="font-semibold text-gray-900 mb-6 relative inline-block 
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-700 after:mt-1"
            >
              NEWSLETTER
            </h3>
            <p className="text-sm mb-4">
              Stay Updated With Our Latest Plants & Offers
            </p>
            <form className="flex items-center bg-white rounded-md shadow overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-green-700 px-4 py-2 flex items-center justify-center hover:bg-green-800"
              >
                <img src={sendIcon} alt="Send" className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#264D10] py-4">
        <p className="text-center text-white text-sm">
          © 2025 GreenNest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
