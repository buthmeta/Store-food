import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center flex-col bg-home-bg bg-no-repeat bg-cover bg-center"
    >
      <h1 className="text-5xl text-center leading-2 font-semibold ">
        Best Food for Testing <br /> with Your Round
      </h1>
      <p className="text-2xs pt-3 text-center">
        Discover delectable cuisine and providing a joy moments <br /> in your
        greating with us such as guests
      </p>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Lomo Saltado",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "Currywurst",
          2000,
          "Cracker",
          2000,
          "Alfajor",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "30px", display: "inline-block", color: "green" }}
        repeat={Infinity}
      />

      <div className="mt-3 flex gap-5">
        <button className="p-3 bg-red-600 px-4 rounded hover:bg-red-700 text-white">
          Booked A Table
        </button>
        <button className="p-3 border-2 border-gray-600 px-4 rounded  text-red-500 ">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
