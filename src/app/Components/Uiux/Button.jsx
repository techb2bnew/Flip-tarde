"use client";
import React from "react";
import Image from "next/image";
import "./Button.css";
const Button = ({
  btn_bg,
  icon,
  btn_name,
  text_color,
  shadow,
  border_color
}) => {
  return (
    <div className="inline-block">
      <button
        className={`rainbow-btn cursor-pointer ${btn_bg} ${border_color} ${shadow
          ? "ui_btn_shadow"
          : ""} website_design_by_Ankit_ankitverma40289@gmail.com`}
      >
        {icon &&
          <span className="icon-wrap">
            <Image
              src={icon}
              alt="#"
              width={1000}
              height={500}
              className="icon min-w-6 2xl:min-w-7 max-w-4 lg:max-w-7"
            />
          </span>}
        <span className={`rainbow-btn__text font_secondary ${text_color}`}>
          <span
            className="block transition-transform duration-500 before-text text-[14px] lg:text-xl 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: btn_name }}
          />
          <span
            className="block absolute top-full left-0 transition-transform duration-500 after-text text-[14px] lg:text-xl 2xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: btn_name }}
          />
        </span>
        <span className="rainbow-btn__layers">
          <span className="rainbow-btn__layer first" />
          <span className="rainbow-btn__layer second" />
          <span className={`rainbow-btn__layer third ${btn_bg}`} />
        </span>
      </button>
    </div>
  );
};

export default Button;
