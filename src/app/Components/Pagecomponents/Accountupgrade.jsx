import React from "react";
import workprocessbanner from "../../../../public/banners/workprocess.webp";
import accountupgrade from "../../../../public/images/accountupgrade.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
const upgradepoints = [
  {
    title: "Log In",
    classname: "top-[3%] 2xl:top-[4%] left-[2.1%] rotate-[355deg]"
  },
  {
    title: "Open Account <br/> Settings",
    classname: "top-[1.3%] 2xl:top-[2.3%] left-[2.9%] rotate-[1deg]"
  },
  {
    title: "Choose Account <br/> Level",
    classname: "left-[3.2%] top-[5%] 2xl:top-[6%] rotate-[9deg]"
  },
  {
    title: "Complete <br/> KYC",
    classname: "left-[2.8%] top-[15%] 2xl:top-[16%] rotate-[16deg]"
  },
  {
    title: "Deposit funds",
    classname: "top-[31.5%] 2xl:top-[32.5%] left-[2.8%] rotate-[25deg]"
  },
  {
    title: "Upgrade <br/> activated.",
    classname: "top-[52%] 2xl:top-[53%] left-[0.5%] rotate-[33deg]"
  }
];

const Accountupgrade = () => {
  return (
    <div className="bg-white relative">
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${workprocessbanner.src})` }}
      >
        <div className="py-12 overflow-hidden">
          <div className="inn_container">
            <Title title="How to Upgrade" color="text-secondary" />
          </div>
          <div className="pt-72 ">
            <div className="relative">
              <Image
                src={accountupgrade}
                alt="accountupgrade"
                width={5000}
                height={500}
                className="scale-[1.2]"
              />
              <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                {upgradepoints.map((data, index) =>
                  <div
                    key={index}
                    className={`relative inline-block h-max ${data.classname}`}
                  >
                    <div
                      className="max-w-sm bg-[#E2E2FF] text-black px-8 2xl:px-12 py-2 rounded-lg text-center text-[19px] 2xl:text-2xl font_ternary
                        min-h-[70px] 2xl:min-h-[96px] flex items-center"
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                    <span className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 w-0 h-0
                         border-l-[10px] border-r-[10px] border-t-[30px]
                         border-l-transparent border-r-transparent border-t-indigo-100" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="absolute w-full top-[55%]">
            <div className="inn_container">
              <Button
                btn_name="Upgrade Now"
                border_color="border-primary"
                shadow={true}
                btn_bg="bg-primary"
                text_color="text-white"
                icon={firebtnicon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountupgrade;
