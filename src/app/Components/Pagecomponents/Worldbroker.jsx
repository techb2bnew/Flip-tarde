import React from "react";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import giftbtnicon from "../../../../public/icons/giftbtnicon.svg";
import Ethereum from "../../../../public/icons/Ethereum.svg";
import Zcash from "../../../../public/icons/Zcash.svg";
import Bitcoin from "../../../../public/icons/Bitcoin.svg";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import Image from "next/image";
import Link from "next/link";
function Worldbroker() {
  return (
    <div className="bg-white">
      <div className="inn_container py-24 overflow-hidden">
        <div className="grid grid-cols-[2fr_5fr_2fr] relative h-[340px] md:h-[280px] xl:h-[390px] z-[5px]">
          <div className="bg-[#EAE3FF] rounded-br-[60px]" />
          <div className="bg-[#EAE3FF] rounded-bl-[60px] rounded-tr-[60px] relative z-20" />
          <div className="bg-[#EAE3FF] rounded-tl-[60px]" />
          <div className="absolute top-0 h-full w-full flex items-center z-30">
            <div className="px-[5%] pb-0 md:pb-12 xl:pb-0">
              <Title
                title={`Get Onboard with the World’s <br/> Rapidly Growing Broker`}
                color="text-seondary"
              />
            </div>
          </div>
          <div className="absolute right-[5%] bottom-[5%] flex flex-col gap-6 z-30">
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name={`Open Live Account`}
                icon={firebtnicon.src}
                btn_bg={`bg-primary`}
                text_color="text-white"
                border_color="border-primary"
                shadow={true}
              />
            </Link>
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name={`Become a Partner`}
                icon={giftbtnicon.src}
                btn_bg={`bg-[#CAC2DE]`}
                text_color="text-black"
                border_color="border-[#FFFFFF87]"
              />
            </Link>
          </div>
          <div className="absolute top-[12%]  right-[-2%] z-30  rotate-[335deg]">
            <Image
              src={Ethereum}
              alt="Ethereum"
              width={1000}
              height={500}
              className="max-w-[60px] lg:max-w-[100px] xl:max-w-[144px]"
            />
          </div>
          <div className="absolute top-[-18%] left-[50%] z-10  rotate-[45deg]">
            <Image
              src={Zcash}
              alt="Zcash"
              width={1000}
              height={500}
              className="max-w-[50px] lg:max-w-[80px] xl:max-w-[117px]"
            />
          </div>
          <div className="absolute bottom-[12%] left-[-8%] rotate-[45deg]">
            <Image
              src={Bitcoin}
              alt="Bitcoin"
              width={1000}
              height={500}
              className="max-w-[80px] lg:max-w-[120px] xl:max-w-[172px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worldbroker;
