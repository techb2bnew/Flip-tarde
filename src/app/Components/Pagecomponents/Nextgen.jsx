import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import nextgen from "../../../../public/images/nextgen.webp";
const Nextgen = () => {
  return (
    <div className="bg-white">
      <div className="inn_container pt-38">
        <div className="grid grid-col-1 xl:grid-cols-[3fr_2fr]">
          <Title
            title="Next-Gen Forex <br/> Trading for Everyone"
            color="text-secondary"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Trade with zero hidden fees, ultra-tight spreads, <br/> and lightning-fast execution. FlipTrade gives <br/>
                       you transparent pricing, expert insights, & <br/> a stable platform you can trust.`}
              color="text-ternary"
            />
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            src={nextgen.src}
            alt="poster"
            width={3000}
            height={500}
            className="w-[80%]"
          />
          <div className="absolute left-0 w-full h-full grid grid-cols-2">
            <div className="flex flex-col justify-evenly items-center">
              <div className="w-max relative right-[0%] top-[3%]">
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-center pb-2 2xl:pb-3 ">
                  Exclusive Insights
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  Signals & analysis.
                </p>
              </div>
              <div className="w-max relative right-[1%] top-[2%]">
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-center pb-2 2xl:pb-3 ">
                  Ultra-Tight Spreads
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  From 0.0 pips.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <div className="w-max relative bottom-[3%] left-[-3%]">
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-center pb-2 2xl:pb-3 ">
                  Fast Execution
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  Milliseconds matter.
                </p>
              </div>
              <div className="w-max relative top-[8%] left-[2%]">
                <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-center pb-2 2xl:pb-3 ">
                  Transparent Pricing
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  No hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextgen;
