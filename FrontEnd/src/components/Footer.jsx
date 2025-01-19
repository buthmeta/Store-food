import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-600 w-full h-48 text-white">
      {/* container */}
      <div className="flex gap-3">
        <a
          className="hover:bg-red-600 transition-all px-3 py-2 rounded"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:bg-red-600 transition-all px-3 py-2 rounded"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:bg-red-600 transition-all px-3 py-2 rounded"
          href="#menu"
        >
          Menu
        </a>
        <a
          className="hover:bg-red-600 transition-all px-3 py-2 rounded"
          href="#product"
        >
          Product
        </a>
        <a
          className="hover:bg-red-600 transition-all px-3 py-2 rounded"
          href="#contact"
        >
          Contact Us
        </a>
      </div>

      <div className="flex flex-row mt-5 gap-5">
        <FaFacebookF className="text-xl cursor-pointer hover:text-red-600 transition-all" />
        <FaTwitter className="text-xl cursor-pointer hover:text-red-600 transition-all" />
        <FaTiktok className="text-xl cursor-pointer hover:text-red-600 transition-all" />
        <FaYoutube className="text-xl cursor-pointer hover:text-red-600 transition-all" />
      </div>

      <div className="mt-5">
        Our shop |{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Thank for your joing us",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "We had a great time",
            2000,
            "That we can enroll next session",
            2000,
            "Our shop gratitude to all customer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "15px", display: "inline-block", color: "red" }}
          repeat={Infinity}
        />
      </div>
      <p className="mt-5">© 2025 COPIRIGHT. ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
