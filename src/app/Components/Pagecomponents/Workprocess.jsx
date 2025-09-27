import React from "react";
import workprocessbanner from "../../../../public/banners/workprocess.webp";
import Title from "../Uiux/Title";
import workprocessbar from "../../../../public/banners/workprocessbar.webp";
import workprocessbarph from "../../../../public/banners/workprocessbarph.webp";
import Image from "next/image";
export default function Workprocess() {
  return (
    <div className="bg-white">
      <div className="pt-12 md:pt-22 lg:pt-36">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${workprocessbanner.src})` }}
        >
          <div className="inn_container md:pb-18 lg:pb-26 xl:pb-32 2xl:pb-40">
            <div className="text-center">
              <h5 className="text-primary text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium pb-5">
                How It’s Work
              </h5>
              <div className="px-8 md:px-0"> 
              <Title
                title={`Start Trading with FlipTrade <br/> in Minutes`}
                color={"text-secondary"}
              />
              </div>

              <div className="hidden md:block py-18">
                <div className="relative">
                  <Image
                    src={workprocessbar}
                    alt="#"
                    width={3000}
                    height={500}
                  />

                  <div className="absolute w-full top-0 h-[150%] flex items-center">
                    <div className="grid grid-cols-3 w-full h-full">
                      <div className="flex justify-center">
                        <div className="text-start w-max h-max relative bottom-[25%] lg:bottom-[10%]  max-w-[220px] lg:max-w-[unset]">
                          <div className="flex items-end">
                            <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Set Up Your <br /> Account
                            </p>
                            <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              1
                            </span>
                          </div>
                          <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                            Begin trading online with just <br /> your basic
                            contact details
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-end">
                        <div className="text-start w-max h-max relative bottom-[2%]  lg:bottom-[5%]  max-w-[220px] lg:max-w-[unset]">
                          <div className="flex items-end">
                            <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Easy <br /> Funding
                            </p>
                            <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              2
                            </span>
                          </div>
                          <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                            Securely deposit and withdraw <br /> using
                            convenient local <br /> solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-end">
                        <div className="text-start w-max h-max relative bottom-[2%]  lg:bottom-[5%]  max-w-[220px] lg:max-w-[unset]">
                          <div className="flex items-end">
                            <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary min-w-[200px] text-start pb-2 2xl:pb-4 ">
                              Start <br /> Trading
                            </p>
                            <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                              3
                            </span>
                          </div>
                          <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                            Start trading on your live <br /> account and Access{" "}
                            <br /> +2000 instruments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="block md:hidden">
              <div
                className="bg-cover  max-w-[450px] m-auto"
                style={{ backgroundImage: `url(${workprocessbarph.src})` }}
              >
                <div className="inn_container py-12">
                  <div className="flex flex-col">
                    <div className="flex justify-end">
                      <div className="text-start w-max h-max relative bottom-[25%] lg:bottom-[10%]  max-w-[220px] lg:max-w-[unset]">
                        <div className="flex items-end">
                          <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary  text-start pb-2 2xl:pb-4 ">
                            Set Up Your <br /> Account
                          </p>
                          <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                            1
                          </span>
                        </div>
                        <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                          Begin trading online with just <br /> your basic
                          contact details
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-end">
                      <div className="text-start w-max h-max relative bottom-[2%]  lg:bottom-[5%]  max-w-[220px] lg:max-w-[unset]">
                        <div className="flex items-end">
                          <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary  text-start pb-2 2xl:pb-4 ">
                            Easy <br /> Funding
                          </p>
                          <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                            2
                          </span>
                        </div>
                        <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                          Securely deposit and withdraw <br /> using convenient
                          local <br /> solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-end">
                      <div className="text-start w-max h-max relative bottom-[2%]  lg:bottom-[5%]  max-w-[220px] lg:max-w-[unset]">
                        <div className="flex items-end">
                          <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary  text-start pb-2 2xl:pb-4 ">
                            Start <br /> Trading
                          </p>
                          <span className="text-[80px] lg:text-[150px] 2xl:text-[185px] lg:leading-[140px] leading-[100px] 2xl:leading-[170px] font_ternary bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,rgba(0,0,0,1)_122%)] bg-clip-text text-transparent font-bold">
                            3
                          </span>
                        </div>
                        <p className="list_text font-light text-start font_ternary text-black leading-[28px]">
                          Start trading on your live <br /> account and Access{" "}
                          <br /> +2000 instruments
                        </p>
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
