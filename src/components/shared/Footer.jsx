import React from "react";
import logoImg from "../../assets/home/logoLight.png";
import phone from "../../assets/home/Phone call.png";
import location from "../../assets/home/location_on.png";
import mail from "../../assets/home/mark_email_unread.png";

import { IoSend } from "react-icons/io5";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#96BE8C8C] text-gray-800">
      <div className="max-sm:px-4 px-20 mx-auto container py-8">
        <div className="flex justify-center items-start gap-20 max-lg:grid max-lg:grid-cols-2">
          {/* Logo + Address */}
          <div className="flex flex-col items-center text-center space-y-3">
            <img src={logoImg} alt="GreenNest Logo" className="h-[90px]" />
            <div className="border-b border-[#264D1080] w-full my-1"></div>

            <p className="text-sm font-medium leading-relaxed">
              No.225, Jaya mawatha, Pasyala <br /> Colombo
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {[
                {
                  icon: <FaFacebookSquare className="text-[#1877F2] w-7 h-7" />,
                  link: "https://facebook.com",
                },
                {
                  icon: <FaYoutube className="text-[#FF0000] w-7 h-7" />,
                  link: "https://youtube.com",
                },
                {
                  icon: <FaInstagram className="text-[#E4405F] w-7 h-7" />,
                  link: "https://instagram.com",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-base text-black mb-4">LINKS</h3>
            <ul className="space-y-2 text-sm font-medium">
              {["About Us", "Product", "Plant Decoration", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#3d893fdb] text-[#636A63]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base text-black mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2 text-sm text-[#636A63] font-medium">
              <li className="flex items-center gap-2">
                <img src={location} alt="Location" className="h-[20px]" />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  No.225, Jaya Mawatha, Pasyala.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={phone} alt="Phone" className="h-[18px]" />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  +9471 5134456
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={mail} alt="Email" className="h-[20px]" />
                <span className="hover:text-[#3d893fdb] cursor-pointer">
                  greennest@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-base text-black mb-4">
              NEWSLETTER
            </h3>
            <p className="text-sm text-[#5C5555C7] font-medium mb-3 leading-snug">
              Stay updated with our latest plants & offers
            </p>
            <form className="flex items-center bg-[#D9D9D980] rounded-md shadow overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-[#D9D9D980] px-5 py-2 flex items-center justify-center"
              >
                <IoSend className="w-5 h-5 text-[#264D10]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#264D10A3] py-4">
        <p className="text-center text-white text-sm font-medium">
          © {new Date().getFullYear()} GreenNest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
