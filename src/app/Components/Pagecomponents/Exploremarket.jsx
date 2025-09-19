"use client";
import React, { useState } from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import exploremarket1 from "../../../../public/images/exploremarket1.webp";
import Image from "next/image";
import explorelower from "../../../../public/images/explorelower.webp";
import Button from "../Uiux/Button";
const markettype = [
  { marketname: "Forex", sidebanner: exploremarket1 },
  { marketname: "CFD Shares", sidebanner: exploremarket1 },
  { marketname: "Precious Metals", sidebanner: exploremarket1 },
  { marketname: "Energies", sidebanner: exploremarket1 },
  { marketname: "Soft Commodities", sidebanner: exploremarket1 },
  { marketname: "Indicies", sidebanner: exploremarket1 }
];

const Exploremarket = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleHover = index => {
    setFade(true);
    setTimeout(() => {
      setHoveredIndex(index);
      setFade(false);
    }, 300);
  };

  return (
    <div className="bg-white">
      <div className="inn_container pt-38">
        <div className="grid grid-col-1 xl:grid-cols-[3fr_2fr]">
          <Title
            title="Explore 1,000+ <br/> Market Opportunities"
            color="text-secondary"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`From Forex to commodities, indices, and <br/> more — all in one platform.`}
              color="text-ternary"
            />
          </div>
        </div>
      </div>
      <div className="pt-32">
        <div className="relative">
          {markettype.map((data, index) =>
            <div
              key={index}
              className={`py-4 2xl:py-8 border-b-2 !border-solid border-[#6C6C6C] cursor-pointer ${index ===
              0
                ? "border-t-2"
                : ""}`}
              onMouseEnter={() => handleHover(index)}
            >
              <div className="flex items-center gap-14 inn_container cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    d="M0 5.42857L11.7003 0.599859C14.7021 -0.63896 18 1.56772 18 4.81506C18 7.88627 15.0255 10.0793 12.0916 9.17121L0 5.42857Z"
                    fill="#212121"
                  />
                </svg>
                <p
                  className={`text-[40px] 2xl:text-[50px] leading-[60px] transition-colors duration-300 ${hoveredIndex ===
                  index
                    ? "text-secondary"
                    : "text-primary"}`}
                >
                  {data.marketname}
                </p>
              </div>
            </div>
          )}

          <div className="absolute top-0 right-0 h-full flex justify-center items-center w-[50%]">
            <div
              className={`transition-opacity duration-300 flex items-center justify-center w-[60%] ${fade
                ? "opacity-0"
                : "opacity-100"}`}
            >
              <Image
                key={hoveredIndex}
                src={markettype[hoveredIndex].sidebanner}
                alt="Market Banner"
                width={1500}
                height={500}
                className="max-w-[400px] 2xl:max-w-[575px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inn_container py-12">
        <div className="relative">
          <Image src={explorelower} alt="banner" width={3000} height={500} />

          <div className="absolute top-0 h-full flex items-center w-[50%]">
            <div className="relative top-[10%] left-[10%]">
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
              <p className="text-[60px] leading-[98px] font-[350] text-white font_ternary">
                3  Steps
              </p>
              <div className="pt-6 flex gap-5">
                <Button
                  btn_name={`Create profile`}
                  btn_class="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
                 <Button
                  btn_name={`Choose size`}
                  btn_class="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
                 <Button
                  btn_name={`Start trading`}
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
  );
};

export default Exploremarket;
