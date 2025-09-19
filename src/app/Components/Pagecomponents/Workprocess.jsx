import React from "react";
import workprocessbanner from "../../../../public/banners/workprocess.webp";
import Title from "../Uiux/Title";
import workprocessbar from "../../../../public/banners/workprocessbar.webp";
import Image from "next/image";
import Discription from "../Uiux/Discription";
export default function Workprocess() {
  return (
    <div className="bg-white">
      <div className="pt-36">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${workprocessbanner.src})` }}
        >
          <div className="inn_container pb-40">
            <div className="text-center">
              <h5 className="text-primary text-5xl font-medium pb-5">
                How It’s Work
              </h5>

              <Title
                title={`Start Trading with FlipTrade <br/> in Minutes`}
                color={"text-secondary"}
              />

              <div className="py-18">
                <div className="relative">
                  <Image
                    src={workprocessbar}
                    alt=""
                    width={3000}
                    height={500}
                  />

                  <div className="absolute w-full top-0 h-[150%] flex items-center">
                    <div className="grid grid-cols-3 w-full h-full">
                      <div className="flex justify-center">
                        <div className="text-start w-max h-max relative bottom-[10%]">
                          <div className="flex items-end">
                            <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Set Up Your <br /> Account
                            </p>
                            <span className="text-[150px] 2xl:text-[185px] leading-[140px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              1
                            </span>
                          </div>

                          <Discription
                            dispription={`Begin trading online with just <br/> your basic contact details`}
                            color={"text-black"}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-end">
                        <div className="text-start w-max h-max relative bottom-[5%]">
                          <div className="flex items-end">
                            <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Easy <br /> Funding
                            </p>
                            <span className="text-[150px] 2xl:text-[185px] leading-[140px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              2
                            </span>
                          </div>

                          <Discription
                            dispription={`Securely deposit and withdraw <br/> using convenient local <br/> solutions`}
                            color={"text-black"}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-end">
                        <div className="text-start w-max h-max relative bottom-[5%]">
                          <div className="flex items-end">
                            <p className="text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Start <br/> Trading
                            </p>
                            <span className="text-[150px] 2xl:text-[185px] leading-[140px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              3
                            </span>
                          </div>

                          <Discription
                            dispription={`Start trading on your live <br/> account and Access <br/> +2000 instruments`}
                            color={"text-black"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
