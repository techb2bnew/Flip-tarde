"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow
} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
const Exploreslider = ({ sliderdata }) => {
  const [slideitem, setSlideItem] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(2);
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
    <div>
      <div className="inn_container">
        <div className="pt-3">
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
            className="tradewith_slider h-[340px] md:h-[520px]"
            modules={[Autoplay, Pagination, Navigation,EffectCoverflow]}
          >
            {sliderdata.map((data, index) =>
              <SwiperSlide key={index}>
                <div className="w-max flex justify-center relative">
                  <Image
                    src={data.sidebanner}
                    alt={data.marketname}
                    width={1000}
                    height={500}
                    className="max-w-[250px] md:max-w-[410px] rounded-[20px]"
                  />
                  <div className="absolute text-[30px] font-normal text-white w-full h-[15%] flex items-center justify-center bottom-0 bg-[#000000c3] rounded-[20px] font_ternary">
                    {data.marketname}
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Exploreslider;
