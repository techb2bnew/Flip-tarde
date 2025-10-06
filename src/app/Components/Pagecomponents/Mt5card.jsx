import React from "react";
import Title from "../Uiux/Title";
import fastexu from "../../../../public/icons/fastexu.svg";
import timewhite from "../../../../public/icons/timewhite.svg";
import networkblue from "../../../../public/icons/networkblue.svg";
import settingwhite from "../../../../public/icons/settingwhite.svg";
import customerblue from "../../../../public/icons/customerblue.svg";
import Image from "next/image";
const features = [
  {
    icon: timewhite,
    title: "Fast Execution",
    description: "Trade with lightning-fast order speed and low latency.",
    class: 'z-[4]'
  },
  {
    icon: networkblue,
    title: "Seamless <br/> Integration",
    description: "Connect your FlipTrade account to MT5 instantly.",
    class: 'xl:w-[120%] left-[-20%] z-[3]'
  },
  {
    icon: settingwhite,
    title: "Powerful <br/> Tools",
    description: "Use advanced charts, indicators, and automation.",
    class: 'xl:w-[120%] left-[-20%] z-[2]'
  },
  {
    icon: customerblue,
    title: "Expert <br/> Support",
    description: "Learn and grow with guides, tools, and 24/7 help.",
    class: 'xl:w-[120%] left-[-20%] z-[1]'
  }
];

const Mt5card = () => {
  return (
    <div className="bg-white">
      <div className="inn_container py-12 lg:py-18 ">
        <div className="text-center lg:text-start">
          <Title title={"Why FlipTrade + MT5"} color={"text-secondary"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-0 xl:grid-cols-4 pt-18">
          {features.map((data, index) =>
            <div
              key={index}
              className={`xl:relative px-10 py-20 flex flex-col gap-8 h-full rounded-[50px] ${data.class}  ${index %
                2 ===
              0
                ? "bg-primary"
                : "bg-[#E2E2FF]"}`}
            >
              <div>
                <Image
                  src={data.icon}
                  alt=""
                  width={1000}
                  height={500}
                  className={`max-w-[88px] m-auto xl:relative ${index === 0 ? '' : 'left-[10%]'}`}
                />
              </div>
              <div className={`text-center flex flex-col justify-center gap-4 m-auto max-w-[330px] xl:relative ${index === 0 ? '' : 'left-[10%]'}`}>
                <h5
                  className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-primary"}`}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
                <span
                  className={`list_text font-light font_ternary leading-6 xl:leading-[28px] ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-secondary"}`}
                >
                  {data.description}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mt5card;
