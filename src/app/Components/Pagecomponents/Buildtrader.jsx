import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import buildtraderimage from "../../../../public/images/buildtraderimage.webp";
import Button from "../Uiux/Button";
const buildtradetagcard = [
  {
    title: "20,000 +",
    sub_title: "Tradable <br/> Instruments"
  },
  {
    title: "1:500",
    sub_title: "Leverage <br/> up to"
  },
  {
    title: "1 MS",
    sub_title: "Trade <br/> Execution"
  },
  {
    title: "$0 Deposit",
    sub_title: "& Withdrawals <br/> fees"
  },
  {
    title: "24/7",
    sub_title: "Client <br/> Support"
  }
];
const Buildtrader = () => {
  return (
    <div className="bg-white">
      <div className="inn_container pt-44">
        <div className="grid grid-col-1 xl:grid-cols-2">
          <Title
            title="Built for Traders. <br/> Backed by Trust."
            color="text-secondary"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`From zero deposit fees to ultra-low <br/> latency, everything is designed to give you <br/> an edge.`}
              color="text-ternary"
            />
          </div>
        </div>
        <div className="py-16 grid grid-cols-5  gap-7">
          {buildtradetagcard.map((data, index) =>
            <div
              key={index}
              className={`bg-[#F3EFFF] flex flex-col items-center gap-4 2xl:gap-5 py-[46px] ${index %
                2 ===
              0
                ? "[clip-path:polygon(0_0,80%_0,100%_25%,100%_100%,20%_100%,0_75%)]"
                : "[clip-path:polygon(20%_0,100%_0,100%_75%,80%_100%,0_100%,0_25%)]"} `}
            >
              <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-center pb-4 2xl:pb-5 border-b-[3px] !border-solid border-[#BCC1FF]">
                {data.title}
              </p>
              <p
                className="list_text font-light text-center font_secondary leading-[28px]"
                dangerouslySetInnerHTML={{ __html: data.sub_title }}
              />
            </div>
          )}
        </div>
        <div className="pt-16">
          <div className="relative">
            <Image
              src={buildtraderimage.src}
              alt="banner"
              width={3000}
              height={500}
              className="w-full"
            />
            <div className="absolute top-[30%] right-[5%]">
              <div>
                <Title
                  title={`FlipTrade. Built <br/> for Traders.`}
                  color="gradient_text"
                />
                <div className="pt-4">
                  <Discription
                    dispription={`Seamless trading across Forex, CFDs, metals, and <br/> more. Real-time insights, advanced tools, and <br/> reliable support — everything you need to grow.`}
                    color="text-white"
                  />
                </div>
                <div className="pt-10">
                  <Button
                    btn_name={`Read More`}
                    btn_class="gradient_bg"
                    text_color="text-secondary"
                    border_color="border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buildtrader;
