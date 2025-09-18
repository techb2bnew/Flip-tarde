import React from "react";
import Image from "next/image";
const Button = ({ btn_class, icon, btn_name, text_color, shadow ,border_color }) => {
  return (
    <div
      className={`${btn_class} relative cursor-pointer ${shadow
        ? "ui_btn_shadow"
        : null}  flex items-center gap-3 border-[3px] ${border_color} !border-solid py-[10px]  px-[32px] 2xl:py-[14px] 2xl:px-[36px] rounded-[50px] w-max`}
    >
      {icon
        ? <Image
            src={icon}
            alt="icon"
            width={1000}
            height={500}
            className="max-w-8"
          />
        : null}

      <span className={`${text_color} text-xl 2xl:text-[23.91px] font-medium`}>
        {btn_name}
      </span>
    </div>
  );
};

export default Button;
