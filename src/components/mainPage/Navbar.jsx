import React, { useState } from "react";
import chef from "../images/logo/chef.png";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export const Navbar = ({setMenu,setSignIn}) => {
  return (
    <div
      id="nav"
      className="flex justify-between items-center text-white
     bg-slate-950 shadow mt-8 px-5 h-[50px]"
    >
      <div className="flex items-center">
        <img src={chef} className=" size-28 z-10" />
     <Link to='/' ><h1 className="font-extrabold text-lg sm:text-2xl">
          food<span className="text-red-400">Delivery</span>
        </h1></Link>
      </div>
      <div>
        <ul className="hidden lg:flex justify-around m-5 gap-5 ">
          <li
            onClick={() => setMenu("home")}
            className="hover:text-slate-300 active:text-red-400"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setMenu("menu")}
            className="hover:text-slate-300 active:text-red-400"
          >
            <a href="#menu">menu</a>
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className="hover:text-slate-300 active:text-red-400"
          >
            <a href="#mobile-app">mobileApp</a>
          </li>
          <li
            onClick={() => setMenu("contact")}
            className="hover:text-slate-300 active:text-red-400"
          >
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex">
        <input
          className="relative h-[30px] rounded-2xl px-8 text-[15px]
       lg:w-36 xl:w-52 outline-none text-slate-600"
          placeholder="search food"
        />
        <BiSearch className="absolute text-black size-5 items-center mx-2 mt-1 " />{" "}
      </div>
      <div>
        <ul className="flex justify-between sm:justify-evenly gap-10 m-4">
          <li className="flex gap-1 hover:text-slate-300 active:text-red-400">
            <HiShoppingCart className="relative size-[20px] cursor-pointer mt-0.5 " />
            <GoDotFill className="absolute text-red-400 active:text-white ml-2 size-4 active:animate-ping " />
            <Link to="/cart">Cart </Link>
          </li>
          <li className="flex gap-1 hover:text-slate-300 active:text-red-400 ">
            <MdAccountCircle className="size-[20px] cursor-pointer mt-0.5 " />
            <button onClick={()=> setSignIn(true)}>sign in</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
