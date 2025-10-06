import React from "react";
import boxbg from "../../../../public/banners/box-bg.webp";
import mainbanner from "../../../../public/images/mt5where.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
const Mt5anywhere = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container py-12 lg:py-18">
          <div className="text-center pb-8">
            <Title title={"Trade Anywhere"} color={"text-secondary"} />
          </div>
          <div className="relative">
            <Image
              src={mainbanner}
              alt="main banner"
              width={2000}
              height={500}
              className="max-w-[990px] w-full m-auto"
            />
            <div className=" md:absolute mt-3 bottom-[15%] left-[10%] list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-[60px] text-white">
              <span className="font-semibold">Web </span>   – Trade from any browser.
            </div>
             <div className=" md:absolute mt-3 right-[10%]  list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-[60px] text-white">
              <span className="font-semibold">Mobile  </span>   – iOS & Android apps for trading on-the-go.
            </div>
           <div className=" md:absolute mt-3 top-[15%] right-[5%] list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-[60px] text-white">
              <span className="font-semibold">Desktop </span>  – Windows & macOS.
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mt5anywhere;
