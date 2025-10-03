import React from "react";
import boxbg from "../../../../public/banners/box-bg.webp";
import Title from "../Uiux/Title";
const tradeInfo = [
  {
    title: "Risk Management",
    description: "Know the impact of each <br/> pip movement."
  },
  {
    title: "Position Sizing",
    description: "Align trade size with your <br/> risk tolerance."
  },
  {
    title: "Informed Decisions",
    description: "Plan trades more <br/> effectively."
  },
  {
    title: "Profit Planning",
    description:
      "Estimate potential gains or <br/> losses before entering a trade."
  }
];

const Pipuse = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-contain"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="max-w-[1340px] m-auto py-18 px-[3%] xl:px-0">
          <div className="text-center">
            <Title title="Why Use It?" color="text-secondary" />
          </div>
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-y-18 gap-x-6">
            {tradeInfo.map((data, index) =>
              <div
                key={index}
                className={`relative flex ${index % 2 === 0
                  ? "justify-end"
                  : "justify-start"} `}
              >
                <div
                  className={`${index == 1 || index == 2
                    ? "bg-subprimary"
                    : "bg-primary"} py-4 md:py-7 px-6 md:px-12 max-w-[300px] xl:max-w-[400px] w-full text-[24px] lg:text-[40px] font_ternary  rounded-[70px] text-white ${index %
                    2 ===
                  0
                    ? "text-end"
                    : "text-start"}`}
                >
                  0{index + 1}
                </div>
                <div
                  className={`absolute z-[20] top-[-9px] xl:top-[-20px] bg-[#E2E2FF] py-3 min-h-[94px] md:min-h-[123px] lg:min-h-[unset] justify-center md:py-6 px-8 md:px-16 max-w-[300px] md:max-w-[400px] xl:max-w-[500px] w-full text-[40px] font_ternary text-end rounded-[90px] text-white transition-all duration-700 cursor-pointer ${index %
                    2 ===
                  0
                    ? "right-[15%] md:right-[19%] hover:right-0"
                    : "left-[15%] md:left-[19%] hover:left-0"}`}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0
                      ? "items-start"
                      : "text-end"}`}
                  >
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-primary ">
                      {data.title}
                    </p>
                    <span
                      className={`list_text text-secondary font-light font_ternary ${index %
                        2 ===
                      0
                        ? "text-start"
                        : "text-end"}`}
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipuse;
