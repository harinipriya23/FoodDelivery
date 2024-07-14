import React, { useState } from "react";
import { ImCross } from "react-icons/im";

export const SignIn = ({ setSignIn }) => {
  const [currentState, setCurrentState] = useState("login");
  console.log('ghj')
  return (
    <div  className=" absolute items-center w-full h-full z-20 justify-center
     bg-slate-900/50 flex">
      <div className=" bg-slate-900 rounded-lg text-white
     flex flex-col ani h-96 w-96 gap-4 px-10 py-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{currentState}</h2>
          <ImCross className="mt-2 cursor-pointer" onClick={() => setSignIn(false)} />
        </div>
        <div className="flex text-slate-800 flex-col w-full gap-5">
          {currentState === "login" ? (
            <></>
          ) : (
            <input
              required
              type="name"
              placeholder="enter your name"
              className="p-1 text-[15px] outline-none  w-full"
            />
          )}
          <input required type="email" placeholder="enter your email"
          className="w-full p-1 text-[15px] outline-none " />
          <input required type="password" placeholder="enter your password" 
          className="p-1 text-[15px] outline-none " />
        </div>
        <button className=" bg-emerald-600 capitalize font-medium hover:bg-emerald-700 rounded-md py-2 w-36">
          {currentState === "sign up" ? "create account" : "login"}
        </button>
        <div className="flex">
          <input className="size-4 cursor-pointer mt-1" type="checkbox" required />
          <p className="mx-3 text-slate-400 text-[12px]">i agree to all terms of use and privacy policy</p>{" "}
        </div>
        {currentState === "login" ? (
          <p className="cursor-pointer">
            create a new account ? <span  className="text-sky-500 font-medium" onClick={()=> setCurrentState('sign up')}>click here</span>
          </p>
        ) : (
          <p className=" text-[15px] text-slate-300 cursor-pointer">
            already have an account ? <span className="text-sky-500 font-medium" onClick={()=> setCurrentState('login')}>login here</span>
          </p>
        )}
      </div>
    </div>
  );
};
