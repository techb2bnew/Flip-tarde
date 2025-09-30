import React from "react";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import giftbtnicon from "../../../../public/icons/giftbtnicon.svg";
import Homesidebanner from "../../../../public/banners/Homesidebanner.webp";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className={`bg-no-repeat main_banner`}>
      <div className="inn_container pt-[135px] pb-0 md:pb-8 xl:pb-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 2xl:pt-12">
          <div className="text-center lg:text-start">
            <div>
              <h5 className="font-light banner_secondary_text text-white font_ternary">
                Tap into the
              </h5>
              <h1 className="font-medium  banner_primary_text gradient_text leading-[115px]">
                Trillion Dollar <br />
                Market
              </h1>
              <h5 className="font-light banner_secondary_text text-white font_ternary">
                with a Single Click
              </h5>
            </div>
            <div className="pt-5">
              <Discription
                dispription="Access the world’s largest financial market and trade <br/> multiple instruments in one place."
                color="text-do"
              />
              <div className="pt-8 xl:pt-10 2xl:pt-14  flex justify-center lg:justify-start flex-row lg:flex-col xl:flex-row gap-6 xl:gap-12 ">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    icon={firebtnicon.src}
                    btn_name="Open Live Account"
                    btn_bg="bg-primary"
                    text_color="text-white"
                    border_color="border-primary"
                    shadow={true}
                  />
                </Link>
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    icon={giftbtnicon.src}
                    btn_name="Try Demo"
                    btn_bg="bg-lightsecondry"
                    text_color="text-white"
                    border_color="border-ternary"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-16 lg:pt-0">
            <Image
              src={Homesidebanner.src}
              alt="Side banner"
              width={2000}
              height={500}
              className="relative right-[-2%] w-[90%] md:w-[60%] lg:w-full m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
