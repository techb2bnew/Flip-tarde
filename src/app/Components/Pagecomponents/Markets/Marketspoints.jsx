"use client";
import React from "react";
import Title from "../../Uiux/Title";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Marketspoints = ({ pointdata }) => {
  const currentpath = usePathname();
  const pathname = currentpath
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  return (
    <div className="bg-white">
      <div className="inn_container pt-12">
        <div className="text-center lg:text-start max-w-[350px] md:max-w-[600px] lg:max-w-[unset] m-auto">
          <Title
            title={`Why Trade ${pathname} <br/> with FlipTrade`}
            color={"text-secondary"}
          />
        </div>
        {/* for desktop */}
        <div className="hidden lg:block xl:px-[5%] pt-14">
          <div className="flex justify-between">
            <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
              01
            </div>
            <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
              02
            </div>
            <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
              03
            </div>
            <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
              04
            </div>
          </div>
          <div className="flex justify-between bg-white relative top-[-55px] ">
            {pointdata.map(data =>
              <div
                key={data.id}
                className={`py-12 flex items-center shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] ${data.id %
                  2 ===
                0
                  ? "flex-col-reverse"
                  : "flex-col"} `}
              >
                <div
                  className={`flex justify-center ${data.id % 2 === 0
                    ? "pt-8"
                    : null}`}
                >
                  <Image
                    src={data.icon}
                    alt="icon"
                    width={1000}
                    height={500}
                    className="max-w-[80px]"
                  />
                </div>
                <div>
                  <div
                    className={`text-3xl 2xl:text-4xl ${data.id % 2 === 0
                      ? null
                      : "pt-8"}  font-medium text-primary text-center`}
                  >
                    {data.title}
                  </div>
                  <p
                    className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px]"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* for tab  */}
        <div className="hidden md:block lg:hidden">
          <div className="xl:px-[5%] pt-10">
            <div className="flex justify-between">
              <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
                01
              </div>
              <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
                02
              </div>
            </div>
            <div className="flex justify-between bg-white relative top-[-55px] ">
              {pointdata.slice(0, 2).map(data =>
                <div
                  key={data.id}
                  className={`py-12 max-w-[320px] m-auto flex items-center shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] ${data.id %
                    2 ===
                  0
                    ? "flex-col-reverse"
                    : "flex-col"} `}
                >
                  <div
                    className={`flex justify-center ${data.id % 2 === 0
                      ? "pt-8"
                      : null}`}
                  >
                    <Image
                      src={data.icon}
                      alt="icon"
                      width={1000}
                      height={500}
                      className="max-w-[80px]"
                    />
                  </div>
                  <div>
                    <div
                      className={`text-3xl 2xl:text-4xl ${data.id % 2 === 0
                        ? null
                        : "pt-8"}  font-medium text-primary text-center`}
                    >
                      {data.title}
                    </div>
                    <p
                      className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px]"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="xl:px-[5%]">
            <div className="flex justify-between">
              <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
                03
              </div>
              <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max lg:leading-[185px]">
                04
              </div>
            </div>
            <div className="flex justify-between bg-white relative top-[-55px] ">
              {pointdata.slice(2, 4).map(data =>
                <div
                  key={data.id}
                  className={`py-12 max-w-[320px] m-auto flex items-center shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] ${data.id %
                    2 ===
                  0
                    ? "flex-col-reverse"
                    : "flex-col"} `}
                >
                  <div
                    className={`flex justify-center ${data.id % 2 === 0
                      ? "pt-8"
                      : null}`}
                  >
                    <Image
                      src={data.icon}
                      alt="icon"
                      width={1000}
                      height={500}
                      className="max-w-[80px]"
                    />
                  </div>
                  <div>
                    <div
                      className={`text-3xl 2xl:text-4xl ${data.id % 2 === 0
                        ? null
                        : "pt-8"}  font-medium text-primary text-center`}
                    >
                      {data.title}
                    </div>
                    <p
                      className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px]"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="py-12 block md:hidden">
          <div className={`flex flex-col gap-4 justify-between bg-white `}>
            {pointdata.map(data =>
              <div key={data.id}>
                <div>
                  <div className="text-[120px] xl:text-[160px] 2xl:text-[185px] gradient_text_secondary h-max leading-[120px]">
                    {data.id}
                  </div>
                </div>
                <div
                  className={`py-12 flex items-center shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145]  ${data.id %
                    2 ===
                  0
                    ? "flex-col-reverse"
                    : "flex-col"} `}
                >
                  <div
                    className={`flex justify-center ${data.id % 2 === 0
                      ? "pt-8"
                      : null}`}
                  >
                    <Image
                      src={data.icon}
                      alt="icon"
                      width={1000}
                      height={500}
                      className="max-w-[80px]"
                    />
                  </div>
                  <div className="">
                    <div
                      className={`text-2xl 2xl:text-4xl ${data.id % 2 === 0
                        ? null
                        : "pt-8"}  font-medium text-primary text-center`}
                    >
                      {data.title}
                    </div>
                    <p
                      className="list_text font-light text-center  pt-6 font_ternary leading-[28px] m-auto max-w-[300px]"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketspoints;
