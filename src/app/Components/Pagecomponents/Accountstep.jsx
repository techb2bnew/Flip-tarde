import React from "react";
import Title from "../Uiux/Title";
import Image from "next/image";
import upgradestepbg from "../../../../public/images/upgradestepbg.webp";
function Accountstep() {
  return (
    <div className="bg-white">
      <div className="inn_container py-24">
        <div className="text-center pb-12  lg:text-start">
          <Title
            title="Reasons to Upgrade <br/> Your Account"
            color="text-secondary"
          />
        </div>
        <div className="relative">
          <Image
            src={upgradestepbg}
            alt="upgradestepbg"
            width={2000}
            height={500}
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full">
            <div className="h-[50%] flex items-center w-full relative">
              <div className="grid grid-cols-[1fr_3fr_3fr_1fr] w-full pt-16">
                <div />
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-primary text-center">
                    Lower trading costs
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]">
                    Tighter spreads and <br /> better pricing.
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-primary text-center">
                    Deeper market insight
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]">
                    Access research, analysis, <br /> and signals.
                  </span>
                </div>
                <div />
              </div>
              <div className="absolute left-[9.1%] 2xl:left-[8.8%] top-[11%] 2xl:top-[9%] w-[90px] 2xl:w-[122px] h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                01
              </div>
              <div className="absolute left-[45.6%] 2lx:left-[45.3%] top-[11%] 2xl:top-[9%] w-[90px] 2xl:w-[122px] h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                03
              </div>
              <div className="absolute right-[11%] 2xl:right-[10.7%] top-[11%] 2xl:top-[9%] w-[90px] 2xl:w-[122px] h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                05
              </div>
            </div>
            <div className="h-[50%] flex items-center w-full relative">
              <div className="grid grid-cols-3 w-full pb-8">
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-primary text-center">
                    Faster transactions
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]">
                    Quick deposits and <br/> withdrawals.
                  </span>
                </div>
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-primary text-center">
                   Personalized support
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]">
                   Priority help and dedicated <br/> guidance.
                  </span>
                </div>
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-primary text-center">
                    Advanced tools
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]">
                   More flexibility with <br/> powerful features.
                  </span>
                </div>
              </div>
               <div className="absolute left-[26.9%] 2lx:left-[26.5%] bottom-[8%] w-[90px] 2xl:w-[122px] h-[90px] 2xl:h-[122px] bg-secondary rounded-[50%] text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                02
              </div>
              <div className="absolute right-[29.1%] 2xl:right-[28.8%] bottom-[8%] w-[90px] 2xl:w-[122px] h-[90px] 2xl:h-[122px] bg-secondary rounded-[50%] text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountstep;
