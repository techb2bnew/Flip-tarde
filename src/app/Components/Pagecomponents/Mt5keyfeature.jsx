import React from "react";
import Title from "../Uiux/Title";
import sidebanner from "../../../../public/images/mt5keyfeature.webp";
import Image from "next/image";
const features = [
  {
    id: 1,
    title: "Multi-Asset Trading",
    description: "Access over 1,000 instruments from one platform."
  },
  {
    id: 2,
    title: "Advanced Charts & Analysis",
    description: "38 indicators, 39 tools, 21 timeframes."
  },
  {
    id: 3,
    title: "Automated Trading",
    description: "Use Expert Advisors and MQL5 scripts."
  },
  {
    id: 4,
    title: "Economic Calendar",
    description: "Track global events affecting the markets."
  }
];

function Mt5keyfeature() {
  return (
    <div className="bg-white py-12 md:py-18 lg:py-28">
      <div className="inn_container text-center pb-6 xl:text-start">
        <Title title={"Key Features"} color={"text-secondary"} />
      </div>
      <div className="grid xl:grid-cols-[1fr_2fr]">
        <div>
          <Image
            src={sidebanner}
            alt=""
            width={1500}
            height={500}
            className="w-[70%] xl:w-full m-auto"
          />
        </div>
        <div className="px-[5%] flex flex-col justify-center gap-6">
          {features.map(data =>
            <div
              key={data.id}
              className="flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-12 p-6 lg:p-10 2xl:p-14 rounded-4xl bg-[linear-gradient(90deg,rgba(197,198,255,0.59)_0%,rgba(197,198,255,0.58)_9%,rgba(255,255,255,1)_100%)]"
            >
              <div className="text-[45px] pr-8 lg:pr-12 flex md:border-r-[3px] border-dashed items-center">
                0{data.id}
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary">
                  {data.title}
                </h5>
                <span className="list_text font-light font_ternary leading-6 xl:leading-[28px]">
                  {data.description}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mt5keyfeature;
