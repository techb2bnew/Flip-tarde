"use client";
import React, { useState } from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import exploremarket1 from "../../../../public/images/exploremarket1.webp";
import Image from "next/image";
import explorelower from "../../../../public/images/explorelower.webp";
import Button from "../Uiux/Button";
const markettype = [
  {
    marketname: "Forex",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  },
  {
    marketname: "CFD Shares",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  },
  {
    marketname: "Precious Metals",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  },
  {
    marketname: "Energies",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  },
  {
    marketname: "Soft Commodities",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  },
  {
    marketname: "Indicies",
    sidebanner: exploremarket1,
    discription: "Trade global currency pairs in the world’s largest market"
  }
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
      {/* <div className="pt-32">
        <div className="max-w-6xl m-auto bg-primary  rounded-3xl">
          <div className="grid grid-cols-2 py-8 px-16">
            <div className="flex items-center">
              <div>
                <Title title={"Forex"} color={"text-white"} />
                <Discription
                  dispription={
                    "Trade global currency <br/> pairs in the world’s <br/> largest market"
                  }
                  color={`text-white`}
                />
                <Button
                  btn_name={`Expolre More`}
                  btn_bg="gradient_bg"
                  text_color="text-secondary"
                  border_color="border-transparent"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={exploremarket1}
                alt="Forex"
                width={1000}
                height={500}
                className="w-[80%]"
              />
            </div>
          </div>
        </div>
      </div> */}
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
                3 Steps
              </p>
              <div className="pt-6 flex gap-5">
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
