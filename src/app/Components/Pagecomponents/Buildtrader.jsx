import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import buildtraderimage from "../../../../public/images/buildtraderimage.webp";
import buildtraderimageloerph from "../../../../public/images/buildtraderimagelowerph.webp";
import buildtraderimageuppervrph from "../../../../public/images/buildtraderimageuppervrph.webp";
import buildtraderimageupperhzph from "../../../../public/images/buildtraderimageupperhzph.webp";
import coinph from "../../../../public/images/coinph.webp";
import gradient from "../../../../public/images/gradient.webp";
import Button from "../Uiux/Button";
import Link from "next/link";
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
      <div className="inn_container pt-16 md:pt-20 lg:pt-40">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title="Built for Traders. <br/> Backed by Trust."
            color="text-secondary"
            hovercolor="gradient_text_title"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`From zero deposit fees to ultra-low <br/> latency, everything is designed to give you <br/> an edge.`}
              color="text-ternary"
            />
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-5  gap-4 md:gap-7">
          {buildtradetagcard.map((data, index) =>
            <div
              key={index}
              className={`bg-[#F3EFFF] flex flex-col items-center gap-2 lg:gap-4 2xl:gap-5 py-[24px] md:py-[30px] lg:py-[46px] 
                ${index % 2 === 0
                  ? "[clip-path:polygon(0_0,80%_0,100%_25%,100%_100%,20%_100%,0_75%)]"
                  : "[clip-path:polygon(20%_0,100%_0,100%_75%,80%_100%,0_100%,0_25%)]"} `}
            >
              <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-primary md:min-w-[200px] text-center pb-4 2xl:pb-5 border-b-[3px] !border-solid border-[#BCC1FF]">
                {data.title}
              </p>
              <p
                className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] px-3 md:px-0"
                dangerouslySetInnerHTML={{ __html: data.sub_title }}
              />
            </div>
          )}
        </div>
        <div className="pt-16 hidden xl:block">
          <div className="relative">
            <Image
              src={buildtraderimage.src}
              alt="banner"
              width={3000}
              height={500}
              className="w-full"
            />
            <div className="absolute top-[30%] right-[2.5%]  2xl:right-[3.5%]">
              <div className="">
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
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Join Now`}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block xl:hidden relative">
          <div className="absolute right-0 top-[-25%] block md:hidden">
            <Image
              src={coinph}
              alt="coin"
              width={1000}
              height={500}
              className="max-w-[150px]"
            />
          </div>
          <div className="absolute right-0 top-[-20%] block md:hidden">
            <Image
              src={gradient}
              alt="coin"
              width={1000}
              height={500}
              className="max-w-[150px]"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[2fr_4fr]">
            <div className="hidden md:block">
              <Image
                src={buildtraderimageuppervrph}
                alt=""
                width={1000}
                height={500}
                className="max-h-[575px]"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={buildtraderimageupperhzph}
                alt=""
                width={1000}
                height={500}
                className="max-h-[330px]"
              />
            </div>
            <div
              className=" relative bg-cover   bg-no-repeat hidden md:block"
              style={{ backgroundImage: `url(${buildtraderimageloerph.src})` }}
            >
              <div className="md:w-[80%] m-auto flex items-center justify-center h-full">
                <div className="relative top-8 lg:top-6 lg:left-2">
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
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={`Join Now`}
                        btn_bg="gradient_bg"
                        text_color="text-secondary"
                        border_color="border-transparent"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 block md:hidden">
              <div className="relative">
                {/* <Image
                  src={buildtraderimageloerph.src}
                  alt="banner"
                  width={3000}
                  height={500}
                  className="w-full"
                /> */}
                <div
                  className="relative  bg-cover w-full h-full flex items-center justify-center top-0"
                  style={{
                    backgroundImage: `url(${buildtraderimageloerph.src})`
                  }}
                >
                  <div className=" top-[15%] py-12 right-0 px-5 2xl:right-[3.5%]">
                    <div className="relative top-3 text-center px-4 md:px-0">
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
                      <div className="pt-4">
                        <Link
                          href={
                            "https://client.fliptradegroup.com/trader/registration"
                          }
                        >
                          <Button
                            btn_name={`Join Now`}
                            btn_bg="gradient_bg"
                            text_color="text-secondary"
                            border_color="border-transparent"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
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
