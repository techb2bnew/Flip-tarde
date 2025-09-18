import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import nextgen from "../../../../public/images/nextgen.webp";
const Nextgen = () => {
  return (
    <div className="bg-white">
      <div className="inn_container py-38">
        <div className="grid grid-col-1 xl:grid-cols-2">
          <Title
            title="Next-Gen Forex <br/> Trading for Everyone"
            color="text-secondary"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Trade with zero hidden fees, ultra-tight spreads, <br/> and lightning-fast execution. FlipTrade gives <br/>
                       you transparent pricing, expert insights, & <br/> a stable platform you can trust.`}
              color="text-ternary"
            />
          </div>
        </div>
        <div className="flex justify-center"> 
          <Image src={nextgen.src} alt="poster" width={3000} height={500} className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Nextgen;
