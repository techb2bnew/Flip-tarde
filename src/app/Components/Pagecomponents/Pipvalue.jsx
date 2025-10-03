import React from "react";
import pipvaluebanner from "../../../../public/images/pipvalues.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtnicon.svg";
const Pipvalue = () => {
  return (
    <div className="bg-white">
      <div className="inn_container py-12 md:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              src={pipvaluebanner}
              alt="side image"
              width={1500}
              height={500}
              className="max-w-[650px] w-full m-auto"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start pt-12 lg:pt-0 text-center lg:text-start">
            <div>
              <Title
                title="Calculate Your <br/> Pip Values Instantly"
                color="text-secondary"
              />
              <div className="pt-2">
                <Discription
                  dispription="Know the value of each pip and make smarter <br /> trading decisions."
                  color="text-ternary"
                />
              </div>
              <div className="pt-8">
                <Button
                  btn_name="Start Calculating Now"
                  icon={fireicon}
                  border_color="border-primary"
                  btn_bg="bg-primary"
                  shadow={true}
                  text_color="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipvalue;
