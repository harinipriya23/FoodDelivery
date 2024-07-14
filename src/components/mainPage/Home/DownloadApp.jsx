import React from "react";
import AppStore from "../images/appstore.png";
import PlayStore from "../images/googleplay.png";

export const DownloadApp = () => {
  return (
    <div>
      <div id="mobile-app" className="text-white text-center my-10 ">
        <h2 className="text-4xl font-bold ">for better experience download</h2>
        <p className="mt-4  text-slate-400 text-4xl font-bold">
          food<span className="text-red-400">Delivery</span>
        </p>
        <div className="flex justify-center cursor-pointer gap-5 mt-3">
          <img src={AppStore} className="w-[220px] h-[100px] hover:scale-105" />
          <img
            src={PlayStore}
            className="w-[220px] hover:scale-105 h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};
