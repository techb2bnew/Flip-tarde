"use client";
import React from "react";
import banner from "../../../../../public/banners/market1.webp";
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

const Marketbanner = ({banner_title,banner_discription}) => {
  const currentpath = usePathname();
  const pathname = currentpath
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  console.log(pathname);

  return (
    <div
      style={{ backgroundImage: `url(${banner.src})` }}
      className="relative"
    >
      <div className="inn_container h-full pt-[180px]  2xl:pt-[270px] pb-[160px]">
        <div className="grid grid-cols-1">
          <div>
            <Title
              title={banner_title}
              color="gradient_text"
            />
            <div className="pt-2 2xl:pt-4">
              <Discription
                dispription={banner_discription}
                color="text-[#D0D0D0]"
              />
            </div>
            <div className="pt-8 2xl:pt-12">
              <Button
                icon={firebtnicon.src}
                btn_name="Start Trading"
                btn_bg="bg-primary"
                text_color="text-white"
                border_color="border-primary"
                shadow={true}
              />
            </div>
            <div className="pt-12 2xl:pt-24">
              <div className="text-[25px] text-white">
                <Link href="/"> Home / </Link>{" "}
                <span className="gradient_text cursor-pointer">{`${pathname}`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[28%] 2xl:top-[30%] right-0 w-[25%]">
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
