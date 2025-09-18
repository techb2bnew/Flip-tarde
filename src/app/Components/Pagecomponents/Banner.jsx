import React from "react";
import banner from "../../../../public/banners/Homebanner.webp";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import giftbtnicon from "../../../../public/icons/giftbtnicon.svg";
import Homesidebanner from "../../../../public/banners/Homesidebanner.webp";
import Image from "next/image";
export default function Banner() {
  return (
    <div
      className="bg-no-repeat"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="inn_container top-[135px] relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 pt-4 2xl:pt-12">
          <div>
            <div>
              <h5 className="font-light banner_secondary_text text-white">
                Tap into the
              </h5>
              <h1 className="font-medium  banner_primary_text gradient_text leading-[115px]">
                Trillion Dollar <br />
                Market
              </h1>
              <h5 className="font-light banner_secondary_text text-white">
                with a Single Click
              </h5>
            </div>
            <div className="pt-5">
              <Discription
                dispription="Access the world’s largest financial market and trade <br/> multiple instruments in one place."
                color="text-do"
              />
              <div className="pt-10 2xl:pt-14 flex gap-12">
                <Button
                  icon={firebtnicon.src}
                  btn_name="Open Live Account"
                  btn_class="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
                <Button
                  icon={giftbtnicon.src}
                  btn_name="Try Demo"
                  btn_class="bg-lightsecondry"
                  text_color="text-white"
                  border_color="border-ternary"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Homesidebanner.src}
              alt="Side banner"
              width={2000}
              height={500}
              className="relative right-[-2%] w-full"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
}
