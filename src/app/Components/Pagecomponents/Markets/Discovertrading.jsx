"use client";
import React from "react";
import marketsdiscover from "../../../../../public/images/marketsdiscover.webp";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Button from "../../Uiux/Button";
import firebtnicon from "../../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Discovertrading = ({
  discription,
  discoverleftimage,
  discoverrightimage
}) => {
  const currentpath = usePathname();
  const pathname = currentpath
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  return (
    <div className="bg-white">
      <div
        className="inn_container bg-contain bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${marketsdiscover.src})` }}
      >
        <div className="grid grid-cols-[2fr_3fr_2fr]">
          <div className="flex items-center">
            <Image
              src={discoverleftimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[240px] 2xl:max-w-[288px]"
            />
          </div>
          <div className="text-center py-36 px-8">
            <Title
              title={`Discover <br/> ${pathname} Trading`}
              color="text-primary"
            />
            <div className="flex justify-center py-10">
              <Discription dispription={discription} color={"text-ternary"} />
            </div>
            <div>
              <Button
                btn_name={`Start Trading ${pathname}`}
                border_color={"border-primary"}
                btn_bg={"bg-primary"}
                shadow={true}
                icon={firebtnicon}
                text_color={"text-white"}
              />
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={discoverrightimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[240px] 2xl:max-w-[288px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovertrading;
