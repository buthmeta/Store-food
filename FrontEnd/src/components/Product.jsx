import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const Product = () => {
  return (
    <div id="product" className="w-full h-screen px-[10%]">
      <div className="text-center mt-8">
        <h2 className="text-xl text-red-600">Products Food</h2>
        <h1 className="text-2xl">Type of Production That We're Services</h1>
      </div>

      {/* container Product */}
      <div className="mt-[10%] grid grid-cols-3 gap-3">
        {/* box 1 */}
        <div className="relative  h-[60%] bg-gray-600 py-[40%] cursor-pointer rounded-md flex justify-center items-center flex-col  ">
          <div className="h-[70%] w-[70%] flex justify-center">
            <img
              className="absolute top-0 -mt-[20%]  h-[50%] w-[50%] object-contain object-center "
              src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"
              alt=""
            />
          </div>

          <div className="flex absolute justify-center items-center flex-col ">
            <h2 className="text-white font-semibold text-xl">Hamburger</h2>
            <div className="flex flex-row mt-3 text-red-600 text-xl gap-2">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <p className="max-w-[80%] mt-3 text-white text-sm px-3">
              These homemade burgers offer a rich and meaty taste
            </p>
          </div>
        </div>

        {/* box 2 */}
        <div className="relative  h-[60%] bg-gray-600 py-[40%] cursor-pointer rounded-md flex justify-center items-center flex-col  ">
          <div className="h-[70%] w-[70%] flex justify-center">
            <img
              className="absolute top-0 -mt-[20%]  h-[50%] w-[50%] object-contain object-center "
              src="https://png.pngtree.com/element_our/20240627/89608014a79e2567106a143545257a9e.png"
              alt=""
            />
          </div>
          <div className="flex absolute justify-center items-center flex-col ">
            <h2 className="text-white font-semibold text-xl">Hamburger</h2>
            <div className="flex flex-row mt-3 text-red-600 text-xl gap-2">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <p className="max-w-[80%] mt-3 text-white text-sm px-3">
              These homemade burgers offer a rich and meaty taste
            </p>
          </div>
        </div>

        {/* box 3 */}
        <div className="relative h-[60%] bg-gray-600 py-[40%] cursor-pointer rounded-md flex justify-center items-center flex-col  ">
          <div className="h-[70%] w-[70%] flex justify-center">
            <img
              className="absolute top-0 -mt-[20%]  h-[50%] w-[50%] object-contain object-center "
              src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-club-sandwich-free-material-png-image_13590118.png"
              alt=""
            />
          </div>
          <div className="flex absolute justify-center items-center flex-col ">
            <h2 className="text-white font-semibold text-xl">Hamburger</h2>
            <div className="flex flex-row mt-3 text-red-600 text-xl gap-2">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <p className="max-w-[80%] mt-3 text-white text-sm px-3">
              These homemade burgers offer a rich and meaty taste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
