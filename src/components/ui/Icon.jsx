import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Add more social icons if needed
const SocialIcons = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

const formatHeroIconName = (name) => {
  // Remove prefix like "heroicons:"
  let clean = name.replace(/^heroicons:/, "");

  // Convert kebab-case -> PascalCase and append "Icon"
  return (
    clean
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Icon"
  );
};

const Icon = ({ icon, className = "", size = "w-6 h-6", type = "hero" }) => {
  let IconComponent;

  if (type === "social") {
    IconComponent = SocialIcons[icon.toLowerCase()] || FaTwitter;
  } else {
    const heroName = formatHeroIconName(icon);
    IconComponent = HeroIcons[heroName] || HeroIcons["QuestionMarkCircleIcon"];
  }

  return <IconComponent className={`${size} ${className}`} />;
};

export default Icon;
