import React from "react";
import burger from "../images/img.jpg";
import { IoArrowUpCircleOutline } from "react-icons/io5";
export const HomeContent = () => {
  return (
    <div>
      <div id="home"
        className="mx-10 h-[500px]
        mt-10 flex justify-center items-center"
      >
        <img
          src={burger}
          className=" absolute ani  shadow rounded-2xl h-[500px] object-cover w-5/6"
        />
        <div className=" flex-col flex mx-10 w-[500px] animate ">
          <p
            className="relative w-[450px] mx-10 text-white transition-shadow text-5xl lg:w-[600px] lg:text-6xl
           font-bold"
          >
            order your <span className="text-7xl text-red-400">favourite </span>
            foods here
          </p>
          <p className="relative w-[400px] mx-10 lg:flex text-[20px] text-white font-semibold w- ">
            before you ask someone why they're vegan ask yourself why you
            aren't.
          </p>
          <button
            className=" bg-gradient-to-bl ring-2 ring-red-200 ring-offset-1  from-red-400 to-red-600 via-red-500 relative text-[18px] mt-5 w-36 h-10 rounded-xl text-white
           hover:bg-gradient-to-br mx-10 hover:from-red-800 hover:via-red-700 hover:to-red-600  font-bold capitalize
           ">
            view menu
          </button>
        </div>
      </div>
      <div className="fixed right-0">
        <a href="#nav">
          <IoArrowUpCircleOutline onClick={()=> setMenu('nav')}
            className=" text-white rounded-full
      fixed right-0 mr-10 animate-bounce size-8"
          />
        </a>
      </div>
    </div>
  );
};
