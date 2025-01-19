import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen px-[10%]">
      <div className="text-center mt-8">
        <h2 className="text-xl text-red-600">About Food</h2>
        <h1 className="text-2xl">Delicious Food is Providing the best</h1>
      </div>

      {/* about container */}
      <div className="h-[50%] flex w-full justify-between items-center gap-3 p-[3%]">
        <div className="w-full">
          <h3 className="text-sm text-lime-600">Hamburger Food</h3>
          <h2 className="text-2xl pt-2 capitalize font-semibold">
            picture the perfect hamburger
          </h2>
          <p className="max-w-xl pt-2 text-base">
            Make burgers your way and have them come out flawless every time
            with what I consider the Best Hamburger Patty Recipe, in my humble
            opinion. It’s a classic all-American recipe for mouthwatering
            burgers that can be cooked on the grill, on the stovetop, as thick
            1/3 pound patties, or as ultra-thin griddle patties.
          </p>
          <p className="max-w-xl pt-2 text-base">
            These homemade burgers offer a rich and meaty taste, with a punch of
            zesty herbs that can be customized with your preferred flavors. A
            few simple key ingredients help to consistently create juicy
            hamburger patties, no matter which cooking method you prefer.
          </p>
        </div>

        <div>
          <img
            className="max-w-md"
            src="https://png.pngtree.com/png-clipart/20241231/original/pngtree-fast-food-burger-and-cola-png-image_18419316.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
