"use client";
import React from "react";
import firebtnicon from "../../../../../public/icons/firebtnicon.svg";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Button from "../../Uiux/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
const marketpagesdata = [
  {
    id: 1,
    pagename: "Forex",
    pagelink: "/forex",
    class: "menu-item w-[85%] max-w-[360px]"
  },
  {
    id: 2,
    pagename: "Indices",
    pagelink: "/indices",
    class: "menu-item w-[90%] max-w-[395px]"
  },
  {
    id: 3,
    pagename: "Commodities",
    pagelink: "/commodities",
    class: "menu-item w-full max-w-[435px]"
  },
  {
    id: 4,
    pagename: "Crypto Currency",
    pagelink: "/cryptocurrency",
    class: "menu-item w-full max-w-[435px]"
  },
  {
    id: 5,
    pagename: "Metals",
    pagelink: "/metals",
    class: "menu-item w-[90%] max-w-[395px]"
  },
  {
    id: 6,
    pagename: "Stocks",
    pagelink: "/stocks",
    class: "menu-item  w-[85%]  max-w-[360px]"
  }
];
const VIDEO_MAP = {
  "/forex": "/videos/forexbgvideo.mp4",
  "/indices": "/videos/indicesbgvideo.mp4",
  "/commodities": "/videos/commoditiesbgvideo.mp4",
  "/cryptocurrency": "/videos/cryptocurrencybgvideo.mp4",
  "/metals": "/videos/metalsbgvideo.mp4",
  "/stocks": "/videos/stocksbgvideo.mp4"
};

const Marketbanner = ({ banner_title, banner_discription}) => {
  const currentpath = usePathname();
  const pathname = currentpath
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  const currentBg = VIDEO_MAP[currentpath] || "/videos/forexbgvideo.mp4";
  return (
    <div className="relative">
      {/* This video static call becasue of fast loading */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none brightness-[0.2]"
        src={currentBg}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="inn_container h-full pt-[180px]  2xl:pt-[270px] pb-[110px] lg:pb-[160px] ">
        <div className="grid grid-cols-1 relative z-[1]">
          <div className="text-center lg:text-start max-w-[700px] px-0 md:px-[12] lg:px-0 lg:max-w-[unset] m-auto lg:m-0">
              <Title title={banner_title} color="gradient_text"  ish1={true}/>
            <div className="pt-2 2xl:pt-4">
              <Discription
                dispription={banner_discription}
                color="text-[#D0D0D0]"
              />
            </div>
            <div className="pt-8 2xl:pt-12">
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
              >
                <Button
                  icon={firebtnicon.src}
                  btn_name="Start Trading"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
              </Link>
            </div>
            <div className="pt-12 2xl:pt-24">
              <div className="text-base md:text-xl lg:text-[25px] text-white">
                <Link href="/"> Home / </Link>{" "}
                <span className="gradient_text cursor-pointer">{`${pathname}`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-[28%] 2xl:top-[30%] right-0 w-[25%]  z-[1]">
          <div className="relative flex flex-col items-end gap-2 2xl:gap-4">
            {marketpagesdata.map(data =>
              <div
                className={`py-1.5 2xl:py-3 rounded-tl-[50px] rounded-bl-[50px] mt-3 ${data.pagelink ===
                currentpath
                  ? "gradient_bg"
                  : "bg-[#4d4d4db0]"} ${data.class}`}
                key={data.id}
              >
                <Link href={data.pagelink}>
                  <p
                    className={`text-xl 2xl:text-2xl  relative left-[12%] w-max ${data.pagelink ===
                    currentpath
                      ? "text-black "
                      : "text-white"}`}
                  >
                    {data.pagename}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketbanner;
