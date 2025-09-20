import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/Icon";

import Drawer from "@/components/ui/Drawer"; // ✅ import your drawer
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        location.pathname === "/"
          ? scrolled
            ? "bg-white/30 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          : "bg-white/30 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container mx-auto 2xl:px-32">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className={`${
                  location.pathname === "/"
                    ? "w-[105px] h-[105px]"
                    : "w-[102px] h-[105px]"
                }`}
                src={location.pathname === "/" ? lightLogo : darkLogo}
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
                    ${
                      isActive
                        ? "text-[#264d10] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#264d10]"
                        : "text-black hover:text-[#264d10] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#264d10]"
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
              <Link to="/contact-us">
                <Icon icon="heroicons:phone" />
              </Link>
              <Link to="#">
                <Icon icon="heroicons:magnifying-glass" />
              </Link>
              <Link to="/shopping-cart">
                <Icon icon="heroicons:shopping-cart" />
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setDrawerOpen(true)}
            >
              <Icon icon="heroicons:bars-3" />
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
        <div className="flex flex-col space-y-6 bg-[#fff2f2">
          {links.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setDrawerOpen(false)}
                className={`block text-lg ${
                  isActive
                    ? "text-[#264d10]"
                    : "text-black hover:text-[#264d10]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Icons inside Drawer */}
          <div className="flex gap-6 pt-6">
            <Link to="/contact-us">
              <Icon icon="heroicons:phone" />
            </Link>
            <Link to="#">
              <Icon icon="heroicons:magnifying-glass" />
            </Link>
            <Link to="/shopping-cart">
              <Icon icon="heroicons:shopping-cart" />
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default NavBar;
