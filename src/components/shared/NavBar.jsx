import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/Icon";

import Drawer from "@/components/ui/Drawer";
import lightLogo from "../../assets/home/logoLightNew.png";
import darkLogo from "@/assets/about us/darkLogo.png";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/products", label: "Product" },
    { path: "/plant-decoration", label: "Plant Decoration" },
  ];

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-gradient-to-r from-[#8EE261]/80 to-[#D1E0C8]/80 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
          : "bg-gradient-to-r from-[#8EE261]/60 to-[#D1E0C8]/60 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto 2xl:px-32">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className={`${
                  isHome ? "w-[105px] h-[105px]" : "w-[102px] h-[105px]"
                }`}
                src={isHome ? lightLogo : darkLogo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {links.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative text-base transition-all duration-200 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
    ${
      isHome
        ? isActive
          ? "text-[#264d10] after:bg-[#264d10]"
          : "text-black after:bg-transparent hover:text-[#264d10] hover:after:bg-[#264d10]"
        : isActive
        ? "text-black after:bg-black" // active link black in non-home pages
        : "text-white after:bg-transparent hover:text-gray-200 hover:after:bg-white"
    }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Icons & Hamburger */}
          <div className="flex items-center gap-6">
            {/* Desktop icons */}
            <div className="hidden sm:flex gap-6">
              <Link
                to="/contact-us"
                className={isHome ? "text-black" : "text-white"}
              >
                <Icon icon="heroicons:phone" className="w-6 h-6" />
              </Link>
              <Link to="#" className={isHome ? "text-black" : "text-white"}>
                <Icon icon="heroicons:magnifying-glass" className="w-6 h-6" />
              </Link>
              <Link
                to="/shopping-cart"
                className={isHome ? "text-black" : "text-white"}
              >
                <Icon icon="heroicons:shopping-cart" className="w-6 h-6" />
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className={`lg:hidden focus:outline-none ${
                isHome ? "text-black" : "text-white"
              }`}
              onClick={() => setDrawerOpen(true)}
            >
              <Icon icon="heroicons:bars-3" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile Nav */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Menu"
        width="w-[60vw]"
      >
        <div className="flex flex-col space-y-6">
          {links.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setDrawerOpen(false)}
                className={`block text-lg ${
                  isHome
                    ? isActive
                      ? "text-[#264d10]"
                      : "text-black hover:text-[#264d10]"
                    : isActive
                    ? "text-white"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Icons inside Drawer */}
          <div className="flex gap-6 pt-6">
            <Link
              to="/contact-us"
              className={isHome ? "text-black" : "text-white"}
            >
              <Icon icon="heroicons:phone" className="w-6 h-6" />
            </Link>
            <Link to="#" className={isHome ? "text-black" : "text-white"}>
              <Icon icon="heroicons:magnifying-glass" className="w-6 h-6" />
            </Link>
            <Link
              to="/shopping-cart"
              className={isHome ? "text-black" : "text-white"}
            >
              <Icon icon="heroicons:shopping-cart" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default NavBar;
