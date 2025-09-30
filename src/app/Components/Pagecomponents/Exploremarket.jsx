"use client";
import React, { useState } from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import exploremarket1 from "../../../../public/images/exploremarket1.webp";
import exploremarket2 from "../../../../public/images/exploremarket2.webp";
import exploremarket3 from "../../../../public/images/exploremarket3.webp";
import exploremarket4 from "../../../../public/images/exploremarket4.webp";
import exploremarket5 from "../../../../public/images/exploremarket5.webp";
import exploremarket6 from "../../../../public/images/exploremarket6.webp";
import Image from "next/image";
import explorelower from "../../../../public/images/explorelower.webp";
import explorelowerph from "../../../../public/images/explorelowerph.webp";
import buildtraderimagelowerph from "../../../../public/images/buildtraderimagelowerph.webp";
import Button from "../Uiux/Button";
import Exploreslider from "./Exploreslider";
import Link from "next/link";
const markettype = [
  {
    marketname: "Forex",
    sidebanner: exploremarket1
  },
  {
    marketname: "Indices",
    sidebanner: exploremarket2
  },
  {
    marketname: "Cryptocurrency",
    sidebanner: exploremarket4
  },
  {
    marketname: "Metals",
    sidebanner: exploremarket5
  },
  {
    marketname: "Commodities",
    sidebanner: exploremarket3
  },
  {
    marketname: "Stocks",
    sidebanner: exploremarket6
  }
];

const Exploremarket = () => {
  return (
    <div className="bg-white">
      <div className="inn_container pt-10 md:pt-18 lg:pt-24">
        <div className="text-center">
          <Title
            title="What can you trade with <br/> FlipTrade"
            color="text-secondary"
          />
        </div>
      </div>
      <div className="pt-6 md:pt-12 lg:pt-16">
        <div className="max-w-[1340px] m-auto">
          <Exploreslider sliderdata={markettype} />
        </div>
      </div>

      <div className="inn_container hidden lg:block py-12">
        <div className="relative">
          <Image src={explorelower} alt="banner" width={3000} height={500} />

          <div className="absolute top-0 h-full flex items-center w-[50%]">
            <div className="relative top-[13%] left-[6%] xl:left-[10%]">
              <Title
                title={`Practice Trading, <br/> Risk-Free`}
                color="gradient_text"
              />
              <div className="xl:pt-4">
                <Discription
                  dispription={`Get $100,000 virtual funds. Learn, test, <br/> and trade with zero risk.`}
                  color="text-white"
                />
              </div>
              <p className="text-4xl xl:text-[60px] pt-3 xl:pt-6 xl:leading-[98px] font-[350] font_ternary bg-[linear-gradient(180deg,rgb(255_255_255/90%)_51%,rgb(0_0_0)_95%)] bg-clip-text text-transparent">
                3 Steps
              </p>
              <div className="pt-4 xl:pt-2 flex gap-2 xl:gap-5">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={`Create profile`}
                    btn_bg="gradient_bg"
                    text_color="text-secondary"
                    border_color="border-transparent"
                  />
                </Link>
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={`Choose size`}
                    btn_bg="gradient_bg"
                    text_color="text-secondary"
                    border_color="border-transparent"
                  />
                </Link>
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={`Start trading`}
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

      <div className="block lg:hidden inn_container pt-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-3">
          <div>
            <Image
              src={explorelowerph}
              alt="explorelowerph"
              width={1000}
              height={500}
              className=""
            />
          </div>
          <div
            className=" relative bg-cover h-[400px]   bg-no-repeat rounded-[20px]"
            style={{ backgroundImage: `url(${buildtraderimagelowerph.src})` }}
          >
            <div className="md:w-[90%] m-auto flex items-center justify-center h-full">
              <div className="relative top-[7%] p-4 md:left-[6%] xl:left-[10%] text-center px-8 md:px-0">
                <Title
                  title={`Practice Trading, <br/> Risk-Free`}
                  color="gradient_text"
                />
                <div className="xl:pt-4">
                  <Discription
                    dispription={`Get $100,000 virtual funds. Learn, test, <br/> and trade with zero risk.`}
                    color="text-white"
                  />
                </div>
                <p className="text-4xl xl:text-[60px] pt-3 xl:pt-6 xl:leading-[98px] font-[350] font_ternary bg-[linear-gradient(180deg,rgb(255_255_255/90%)_51%,rgb(0_0_0)_95%)] bg-clip-text text-transparent">
                  3 Steps
                </p>
                <div className="pt-4 xl:pt-2 hidden md:flex  justify-center gap-2 xl:gap-5">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Create profile`}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Choose size`}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Start trading`}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
                <div className="pt-4 xl:pt-2 grid md:hidden grid-cols-1 gap-2 xl:gap-5">
                  <div className="gap-2 flex justify-center">
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={`Create profile`}
                        btn_bg="gradient_bg"
                        text_color="text-secondary"
                        border_color="border-transparent"
                      />
                    </Link>
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={`Choose size`}
                        btn_bg="gradient_bg"
                        text_color="text-secondary"
                        border_color="border-transparent"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={`Start trading`}
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
  );
};

export default Exploremarket;
