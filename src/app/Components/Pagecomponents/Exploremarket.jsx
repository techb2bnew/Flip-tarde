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
import Button from "../Uiux/Button";
import Exploreslider from "./Exploreslider";
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
      <div className="inn_container pt-24">
        <div className="text-center">
          <Title
            title="What can you trade with <br/> FlipTrade"
            color="text-secondary"
          />
        </div>
      </div>
      <div className="pt-16">
        <div className="max-w-[1340px] m-auto">
          <Exploreslider sliderdata={markettype} />
        </div>
      </div>
      <div className="inn_container py-12">
        <div className="relative">
          <Image src={explorelower} alt="banner" width={3000} height={500} />

          <div className="absolute top-0 h-full flex items-center w-[50%]">
            <div className="relative top-[13%] left-[10%]">
              <Title
                title={`Practice Trading, <br/> Risk-Free`}
                color="gradient_text"
              />
              <div className="pt-4">
                <Discription
                  dispription={`Get $100,000 virtual funds. Learn, test, <br/> and trade with zero risk.`}
                  color="text-white"
                />
              </div>
              <p className="text-[60px] pt-6 leading-[98px] font-[350] font_ternary bg-[linear-gradient(180deg,rgb(255_255_255/90%)_51%,rgb(0_0_0)_95%)] bg-clip-text text-transparent" >
                3 Steps
              </p>
              <div className="pt-2 flex gap-5">
                <Button
                  btn_name={`Create profile`}
                  btn_bg="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
                <Button
                  btn_name={`Choose size`}
                  btn_bg="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
                <Button
                  btn_name={`Start trading`}
                  btn_bg="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploremarket;
