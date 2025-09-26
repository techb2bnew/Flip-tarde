import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import nextgen from "../../../../public/images/nextgen.webp";
import nextgenph from "../../../../public/images/nextgenph.webp";
import Ethereum from "../../../../public/icons/Ethereum.svg";
import Zcash from "../../../../public/icons/Zcash.svg";
import Bitcoin from "../../../../public/icons/Bitcoin.svg";
import Litecoin from "../../../../public/icons/Litecoin.svg";
const Nextgen = () => {
  return (
    <div className="bg-white">
      <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-38">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-[3fr_2fr]">
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
        <div className="hidden md:flex justify-center relative">
          <Image
            src={nextgen.src}
            alt="poster"
            width={3000}
            height={500}
            className="w-[80%]"
          />
          <div className="absolute left-0 w-full h-full grid grid-cols-2">
            <div className="flex flex-col justify-evenly items-center">
              <div className="w-max relative right-[0%] top-[7%] lg:top-[3%]">
                <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                  Exclusive Insights
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  Signals & analysis.
                </p>
              </div>
              <div className="w-max relative right-[1%] top-[2%]">
                <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                  Ultra-Tight Spreads
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  From 0.0 pips.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <div className="w-max relative bottom-[3%] left-[2%] lg:left-[-3%]">
                <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                  Fast Execution
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  Milliseconds matter.
                </p>
              </div>
              <div className="w-max relative top-[8%] left-[2%]">
                <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                  Transparent Pricing
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  No hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden relative">
          <div className="flex justify-center ">
          <Image
            src={nextgenph.src}
            alt="poster"
            width={3000}
            height={500}
            className="w-[95%] py-24"
          />
          <div className="absolute left-0 w-full h-full grid grid-cols-2">
            <div className="flex flex-col justify-between items-center">
              <div className="w-full relative top-[40px] right-[0%]">
                <p className="text-[15px] font-semibold text-primary text-start xl:text-center  2xl:pb-3 ">
                  Exclusive Insights
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  Signals & analysis.
                </p>
              </div>
              <div className="w-full relative right-[1%] bottom-[40px]">
                <p className="text-[15px] font-semibold text-primary text-start xl:text-center  2xl:pb-3 ">
                  Ultra-Tight Spreads
                </p>
                <p className="list_text font-light text-start font_ternary leading-[28px]">
                  From 0.0 pips.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="w-full relative top-[40px] left-[2%] lg:left-[-3%]">
                <p className="text-[15px] font-semibold text-primary text-end  2xl:pb-3 ">
                  Fast Execution
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  Milliseconds matter.
                </p>
              </div>
              <div className="w-full relative left-[2%] bottom-[40px]">
                <p className="text-[15px] font-semibold text-primary text-end  2xl:pb-3 ">
                  Transparent Pricing
                </p>
                <p className="list_text font-light text-end font_ternary leading-[28px]">
                  No hidden costs.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[21%] left-[23%]">
            <Image 
             src={Zcash}
             alt="Zcash"
             width={1000}
             height={500}
             className="max-w-[46px]"
             />
          </div>
          <div className="absolute top-[55%] left-[21%]">
            <Image 
             src={Ethereum}
             alt="Ethereum"
             width={1000}
             height={500}
             className="max-w-[70px]"
             />
          </div>
          <div className="absolute  top-[45%] right-[18%]">
            <Image 
             src={Bitcoin}
             alt="Bitcoin"
             width={1000}
             height={500}
             className="max-w-[100px]"
             />
          </div>
          <div className="absolute bottom-[20%] right-[18%]">
            <Image 
             src={Litecoin}
             alt="Litecoin"
             width={1000}
             height={500}
             className="max-w-[75px]"
             />
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Nextgen;
