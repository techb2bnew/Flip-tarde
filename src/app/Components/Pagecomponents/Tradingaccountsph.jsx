"use client";
import React from "react";
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
const Tradingaccountsph = ({ accountinfo }) => {
  return (
    <div className="pb-16 relative">
      <div className="block md:hidden">
        <Swiper
          effect="coverflow"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          centeredSlides={true}
          slidesPerView={1.3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 10,
            stretch: 5,
            depth: 200,
            modifier: 2
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className="min-h-[450px]"
        >
          {accountinfo.map((data, index) =>
            <SwiperSlide key={index}>
              <div className="max-w-[300px] mx-auto xl:max-w-[350px] 2xl:max-w-[400px] border-[12px] rounded-3xl border-[#DCD0FFCC]">
                <CardContent data={data} index={index} />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

const CardContent = ({ data, index }) =>
  <div>
    <div className="py-1 xl:py-3 2xl:py-5 px-16 lg:px-14 2xl:px-18 text-center bg-white rounded-tl-[18px] rounded-tr-[18px]">
      <h5
        className="text-2xl xl:text-3xl min-h-16 2xl:text-4xl lg:leading-[35px] font-medium text-primary lg:max-w-[250px] text-center"
        dangerouslySetInnerHTML={{ __html: data.acount_title }}
      />
    </div>

    <div className="bg-[#DCD0FFCC] border-2 border-white rounded-bl-[14px] rounded-br-[14px] flex flex-col items-center">
      {[
        { label: "Min Deposit", value: data.min_deposit },
        { label: "Max Leverage", value: data.max_leverage },
        { label: "Spreads", value: data.spreads }
      ].map((item, i) =>
        <li
          key={i}
          className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white "
        >
          <p className="text-base lg:text-lg 2xl:text-[22px]">
            {item.label}
          </p>
          <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
            {item.value}
          </span>
        </li>
      )}
      <li className="list-none text-center pt-3">
        <p className="text-base lg:text-lg 2xl:text-[22px]">Account Verified</p>
        <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
          {data.account_verified ? "Yes" : "No"}
        </span>
      </li>
      <div className="relative top-8">
        {index === 1
          ? <Button
              btn_name={"Open Account"}
              icon={firebtniconblue.src}
              btn_bg="bg-white"
              text_color="text-primary"
              border_color="border-white"
              shadow={true}
            />
          : <Button
              btn_name={"Open Account"}
              icon={firebtn.src}
              btn_bg="bg-primary"
              text_color="text-white"
              border_color="border-primary"
              shadow={true}
            />}
      </div>
    </div>
  </div>;

export default Tradingaccountsph;
