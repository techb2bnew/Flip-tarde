"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow
} from "swiper/modules";
import Button from "../Uiux/Button";
import firebtn from "/public/icons/firebtnicon.svg";
import firebtniconblue from "/public/icons/firebtniconblue.svg";
import Ethereum from "../../../../public/icons/Ethereum.svg";
import Litecoin from "../../../../public/icons/Litecoin.svg";
import Bitcoin from "../../../../public/icons/Bitcoin.svg";
import Image from "next/image";
import Link from "next/link";
const Tradingaccountsph = ({ accountinfo }) => {
  const [slideitem, setSlideItem] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(1.3);
      } else if (window.innerWidth < 1025) {
        setSlideItem(2);
      } else if (window.innerWidth < 1400) {
        setSlideItem(2);
      } else {
        setSlideItem(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="pb-16 md:pb-0 relative">
      <div className="">
        <Swiper
          effect={"coverflow"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={1000}
          slidesPerView={slideitem}
          pagination={{ clickable: true }}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 5,
            depth: 200,
            modifier: 2
          }}
          className="tradewith_slider h-[450px] md:h-[520px]"
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        >
          {accountinfo.map((data, index) =>
            <SwiperSlide key={index} className="overflow-hidden">
              <div className="max-w-[300px] mx-auto xl:max-w-[350px] 2xl:max-w-[400px] border-[12px] rounded-3xl border-[#DCD0FFCC]">
                <CardContent data={data} index={index} />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="block md:hidden absolute top-[-3%] left-[-5%] rotate-[340deg]">
        <Image
          src={Bitcoin}
          alt="Bitcoin"
          width={1000}
          height={500}
          className="max-w-[51px]"
        />
      </div>
      <div className="block md:hidden absolute bottom-[10%] right-[5%] rotate-[340deg]">
        <Image
          src={Ethereum}
          alt="Ethereum"
          width={1000}
          height={500}
          className="max-w-[80px] lg:max-w-[110px] xl:max-w-[150px] 2xl:max-w-[180px]"
        />
      </div>
      <div className="block md:hidden absolute top-[-14%] right-[5%] rotate-[340deg] z-[1]">
        <Image
          src={Litecoin}
          alt="Litecoin"
          width={1000}
          height={500}
          className="max-w-[47px]"
        />
      </div>
    </div>
  );
};

const CardContent = ({ data, index }) =>
  <div>
    <div className="py-1 xl:py-3 2xl:py-5 px-14 lg:px-14 2xl:px-18 text-center bg-white rounded-tl-[18px] rounded-tr-[18px]">
      <h5
        className="text-[21px] xl:text-3xl min-h-16 2xl:text-4xl text-primary text-center"
        dangerouslySetInnerHTML={{ __html: data.acount_title }}
      />
    </div>

    <div className="bg-[#DCD0FFCC] border-2 border-white rounded-bl-[14px] rounded-br-[14px] flex flex-col items-center">
      {[
        { label: "Min Deposit", value: data.min_deposit },
        { label: "Swap Free", value: data.Swap_Free },
        { label: "Spreads", value: data.spreads }
      ].map((item, i) =>
        <li
          key={i}
          className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white "
        >
          <p className="text-[13.7px] lg:text-lg 2xl:text-[22px] ">
            {item.label}
          </p>
          <span className="text-[12.5px] lg:text-base 2xl:text-xl text-ternary  ">
            {item.value}
          </span>
        </li>
      )}
      <li className="list-none text-center pt-3">
        <p className="text-[13.7px] lg:text-lg 2xl:text-[22px]">
          Commission
        </p>
        <span className="text-[12.5px] lg:text-base 2xl:text-xl text-ternary ">
          {data.Commission ? "Yes" : "No"}
        </span>
      </li>
      <div className="relative top-8">
        {index % 2 === 0
          ? <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name={"Open Account"}
                icon={firebtniconblue.src}
                btn_bg="bg-white"
                text_color="text-primary"
                border_color="border-white"
                shadow={true}
              />
            </Link>
          : <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name={"Open Account"}
                icon={firebtn.src}
                btn_bg="bg-primary"
                text_color="text-white"
                border_color="border-primary"
                shadow={true}
              />
            </Link>}
      </div>
    </div>
  </div>;

export default Tradingaccountsph;
