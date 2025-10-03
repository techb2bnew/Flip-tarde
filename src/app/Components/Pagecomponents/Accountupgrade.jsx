import React from "react";
import workprocessbanner from "../../../../public/banners/workprocess.webp";
import accountupgrade from "../../../../public/images/accountupgrade.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import accupgradetab1 from "../../../../public/images/accupgradetab1.webp";
import accupgradetab2 from "../../../../public/images/accupgradetab2.webp";
import accupgradeph1 from '../../../../public/images/accupgradeph1.webp';
import accupgradeph2 from '../../../../public/images/accupgradeph2.webp';
import accupgradeph3 from '../../../../public/images/accupgradeph3.webp';
const upgradepoints = [
  {
    title: "Log In",
    classname:
      "top-[0%] xl:top-[3%] 2xl:top-[4%] left-[2.8%] xl:left-[2.1%] rotate-[355deg]"
  },
  {
    title: "Open Account <br/> Settings",
    classname:
      "top-[-2%] xl:top-[1.3%] 2xl:top-[2.3%] left-[4%] xl:left-[2.9%] rotate-[1deg]"
  },
  {
    title: "Choose Account <br/> Level",
    classname: "left-[3.2%] top-[2%] xl:top-[5%] 2xl:top-[6%] rotate-[9deg]"
  },
  {
    title: "Complete <br/> KYC",
    classname: "left-[2.8%] top-[11%] xl:top-[15%] 2xl:top-[16%] rotate-[16deg]"
  },
  {
    title: "Deposit funds",
    classname:
      "top-[28%] xl:top-[31.5%] 2xl:top-[32.5%] left-[2.8%] rotate-[25deg]"
  },
  {
    title: "Upgrade <br/> activated.",
    classname: "top-[48%] xl:top-[52%] 2xl:top-[53%] left-[0.5%] rotate-[33deg]"
  }
];
const upgradepointstab = [
  {
    title: "Log In",
    classname: "top-[-6%] left-[-3.2%]  rotate-[355deg]"
  },
  {
    title: "Open Account <br/> Settings",
    classname: "top-[-13%] left-[1.5%] rotate-[1deg]"
  },
  {
    title: "Choose Account <br/> Level",
    classname: "left-[5.2%] top-[0%] xl:top-[5%] 2xl:top-[6%] rotate-[9deg]"
  },

  {
    title: "Complete <br/> KYC",
    classname: "left-[-6.2%] top-[30%] rotate-[353deg]"
  },
  {
    title: "Deposit funds",
    classname: "top-[25%] left-[-2.2%] rotate-[2deg]"
  },
  {
    title: "Upgrade <br/> activated.",
    classname: "top-[36%] left-[4.5%] rotate-[9deg]"
  }
];
const upgradepointsph = [
  {
    title: "Log In",
    classname: "top-[-17%] left-[-4.2%]  rotate-[355deg]"
  },
  {
    title: "Open Account <br/> Settings",
    classname: "top-[-20%] left-[7.5%] rotate-[1deg]"
  },
  {
    title: "Choose Account <br/> Level",
    classname: "left-[-7.8%] top-[33%] rotate-[9deg]"
  },

  {
    title: "Complete <br/> KYC",
    classname: "left-[-3.2%] top-[31%] rotate-[4deg]"
  },
  {
    title: "Deposit funds",
    classname: "top-[36%] left-[-2.2% rotate-[355deg]"
  },
  {
    title: "Upgrade <br/> activated.",
    classname: "top-[34%] left-[4.5%] rotate-[9deg]"
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
          <div className="inn_container text-center lg:text-start">
            <Title title="How to Upgrade" color="text-secondary" />
          </div>
          <div className="pt-32 lg:pt-72 ">
            {/* Desktop Section */}
            <div className="hidden lg:block relative">
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
                      className="max-w-sm bg-[#E2E2FF] text-black px-6 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
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

            {/* Tab Section */}
            <div className="hidden md:block lg:hidden">
              <div className="relative">
                <Image
                  src={accupgradetab1}
                  alt="accountupgrade"
                  width={5000}
                  height={500}
                  className="scale-[1.2]"
                />
                <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                  {upgradepointstab.slice(0, 3).map((data, index) =>
                    <div
                      key={index}
                      className={`relative inline-block h-max ${data.classname}`}
                    >
                      <div
                        className="lg:max-w-sm bg-[#E2E2FF] text-black px-6 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
                        min-h-[70px] 2xl:min-h-[96px] flex items-center max-w-[200px]"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      />
                      <span className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 w-0 h-0
                         border-l-[10px] border-r-[10px] border-t-[30px]
                         border-l-transparent border-r-transparent border-t-indigo-100" />
                    </div>
                  )}
                </div>
              </div>
              <div className="relative pt-16">
                <Image
                  src={accupgradetab2}
                  alt="accountupgrade"
                  width={5000}
                  height={500}
                  className="scale-[1.2]"
                />
                <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                  {upgradepointstab.slice(3, 6).map((data, index) =>
                    <div
                      key={index}
                      className={`relative inline-block h-max ${data.classname}`}
                    >
                      <div
                        className="max-w-sm bg-[#E2E2FF] text-black px-6 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
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
            {/* Phone sction */}
            <div className="block md:hidden">
              <div className="relative">
                <Image
                  src={accupgradeph1}
                  alt="accountupgrade"
                  width={5000}
                  height={500}
                  className="scale-[1.2]"
                />
                <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                  {upgradepointsph.slice(0, 2).map((data, index) =>
                    <div
                      key={index}
                      className={`relative inline-block h-max ${data.classname}`}
                    >
                      <div
                        className="lg:max-w-sm bg-[#E2E2FF] text-black px-4 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
                        min-h-[60px] 2xl:min-h-[96px] flex items-center max-w-[200px]"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      />
                      <span className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 w-0 h-0
                         border-l-[10px] border-r-[10px] border-t-[30px]
                         border-l-transparent border-r-transparent border-t-indigo-100" />
                    </div>
                  )}
                </div>
              </div>
              <div className="relative pt-16">
                <Image
                  src={accupgradeph2}
                  alt="accountupgrade"
                  width={5000}
                  height={500}
                  className="scale-[1.2]"
                />
                <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                  {upgradepointsph.slice(2, 4).map((data, index) =>
                    <div
                      key={index}
                      className={`relative inline-block h-max ${data.classname}`}
                    >
                      <div
                        className="lg:max-w-sm bg-[#E2E2FF] text-black px-4 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
                        min-h-[60px] 2xl:min-h-[96px] flex items-center max-w-[200px]"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      />
                      <span className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 w-0 h-0
                         border-l-[10px] border-r-[10px] border-t-[30px]
                         border-l-transparent border-r-transparent border-t-indigo-100" />
                    </div>
                  )}
                </div>
              </div>
                <div className="relative pt-16">
                <Image
                  src={accupgradeph3}
                  alt="accountupgrade"
                  width={5000}
                  height={500}
                  className="scale-[1.2]"
                />
                <div className="absolute flex w-full justify-evenly h-full top-[-28%]">
                  {upgradepointsph.slice(4, 6).map((data, index) =>
                    <div
                      key={index}
                      className={`relative inline-block h-max ${data.classname}`}
                    >
                      <div
                        className="lg:max-w-sm bg-[#E2E2FF] text-black px-4 xl:px-8 2xl:px-12 py-1 xl:py-2 rounded-lg text-center text-[17px] xl:text-[19px] 2xl:text-2xl font_ternary
                        min-h-[60px] 2xl:min-h-[96px] flex items-center max-w-[200px]"
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
          </div>

          <div className="lg:absolute flex lg:block justify-center w-full lg:top-[55%]">
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
