import React from "react";
import { PiBowlFoodBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="z-10 shadow-xl shadow-gray-500 flex justify-between items-center overflow-hidden fixed py-4 w-full p-2 bg-gray-600 text-white px-[10%]">
      {/* box 1 */}
      <div>
        <h1 className="flex items-center flex-row gap-3 cursor-pointer text-xl font-semibold">
          <PiBowlFoodBold className="text-4xl text-red-600" />
          Cambodia Food
        </h1>
      </div>

      {/* box 2 */}

      <ul className="flex gap-5">
        <a
          className="hover:bg-lime-500 transition-all p-2 rounded-sm"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:bg-lime-500 transition-all p-2 rounded-sm"
          href="#about"
        >
          About
        </a>

        <a
          className="hover:bg-lime-500 transition-all p-2 rounded-sm"
          href="#menu"
        >
          Menu
        </a>

        <a
          className="hover:bg-lime-500 transition-all p-2 rounded-sm"
          href="#product"
        >
          Products
        </a>

        <a
          className="hover:bg-lime-500 transition-all p-2 rounded-sm"
          href="#contact"
        >
          Contact Us
        </a>
      </ul>

      {/* box 3 */}
      <div className="p-2 border-2 px-4 border-lime-500 rounded-full font-semibold hover:bg-lime-500 transition-all">
        <button>Booked A Table</button>
      </div>
    </nav>
  );
};

export default Navbar;
