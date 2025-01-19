import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="w-full h-screen px-[10%]">
      <div className="text-center mt-8">
        <h2 className="text-xl text-red-600">Menu Order</h2>
        <h1 className="text-2xl">Checking in Our Menu for Possess</h1>
      </div>

      {/* menu container */}
      <div className=" mt-10 grid grid-cols-3 gap-3 w-full">
        {/* box 1 */}
        <div className="h-[91.5%] w-full overflow-hidden">
          <img
            className="max-w-full hover:scale-[1.1] overflow-hidden transition-all cursor-pointer "
            src="https://img.pikbest.com/origin/06/02/77/54dpIkbEsTiGQ.jpg!bw700"
            alt=""
          />
        </div>

        {/* box 2 */}
        <div className="h-[91.5%] w-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-center hover:scale-[1.1] overflow-hidden transition-all cursor-pointer"
            src="https://marketplace.canva.com/EAFwRADHMsM/1/0/1035w/canva-orange-and-black-bold-geometric-restaurant-menu-AX4bhelWqNA.jpg"
            alt=""
          />
        </div>

        {/* box 3 */}
        <div className="h-[91.5%] w-full overflow-hidden">
          <img
            className="max-w-full hover:scale-[1.1] overflow-hidden transition-all cursor-pointer "
            src="https://marketplace.canva.com/EAF5zO9Utvk/2/0/1131w/canva-orange-and-brown-breakfast-restaurant-menu-Qu02Z9iuDjc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
