import React from "react";
import sidebanner from "../../../../public/banners/mt5.webp";
import banner from "../../../../public/banners/mt5main.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
function Mt5banner() {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${banner.src})` }}>
      <div className="inn_container pt-48 2xl:pt-64">
        <div className="grid xl:grid-cols-2">
          <div className="text-center xl:text-start">
            <div>
              <Title
                title={`MetaTrader 5 – Trade Smarter, Faster`}
                color="gradient_text"
              />
              <div className="flex w-full pt-4">
                <Discription
                  dispription={`MetaTrader 5 (MT5) is a next-gen trading platform for traders of all  levels. Trade Forex, stocks, commodities, indices, and cryptocurrencies in one place.`}
                  color="text-[#D0D0D0]"
                />
              </div>

              <div className="pt-12 pb-5">
                <Button
                  btn_name="Download MT5"
                  border_color="border-primary"
                  btn_bg={"bg-primary"}
                  shadow={true}
                  text_color={"text-white"}
                  icon={firebtn}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 xl:pt-0">
            <Image
              src={sidebanner}
              alt="side banner"
              width={1500}
              height={500}
              className="w-[70%] xl:w-[95%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mt5banner;
