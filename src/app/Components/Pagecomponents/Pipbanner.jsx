import React from "react";
import pipcalculatersidebanner from "../../../../public/images/pipcalculatersidebanner.webp";
import pipbanner from "../../../../public/banners/pipbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
export default function Pipbanner() {
  return (
    <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${pipbanner.src})` }}>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] inn_container pt-28 md:pt-40 xl:pt-60 pb-12">
        <div className="pt-10 text-center lg:text-start max-w-[700px] lg:max-w-[unset] m-auto h-full">
          <div>
            <Title title="Pip Calculator" color="gradient_text" />
          </div>
          <div className="pb-12">
            <Discription
              dispription="Accurately calculate the value of pips <br/> for your trades to improve your risk <br/> management and profit estimates."
              color="text-[#D0D0D0]"
            />
          </div>
          <Button
            btn_name="View Pip Calculator"
            border_color="border-primary"
            text_color="text-white"
            icon={fireicon}
            shadow={true}
            btn_bg="bg-primary"
          />
        </div>
        <div className="pt-16 lg:pt-0">
          <Image
           src={pipcalculatersidebanner}  
           alt="side banner"
           width={2000}
           height={500}
           />
        </div>
      </div>
    </div>
  );
}
