import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Link from "next/link";
const Accounttypebanner = () => {
  return (
    <div className="bg-cover relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none brightness-[0.2]"
        src="/videos/accounttypebgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="inn_container py-42 md:py-46 xl:py-48 2xl:py-62">
        <div className="flex flex-col gap-7 items-center lg:items-start relative z-[1]">
          <div className="text-center lg:text-start">
            <Title
              title={"Account Types at FlipTrade <br/> Built for All Traders"}
              color={"gradient_text"}
              ish1={true}
            />
          </div>
          <div className="text-center lg:text-start">
            <Discription
              dispription={
                "FlipTrade empowers traders at every level with account <br/> types tailored to your skills, goals, and trading style. <br/> Choose the one that fits you best."
              }
              color={"text-[#D0D0D0]"}
            />
          </div>
          <Link href={"https://client.fliptradegroup.com/trader/registration"}>
            <Button
              icon={firebtnicon.src}
              text_color={"text-white"}
              btn_name={"Start Trading"}
              border_color="border-primary"
              btn_bg={"bg-primary"}
              shadow={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accounttypebanner;
