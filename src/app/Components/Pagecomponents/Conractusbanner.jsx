import React from "react";
import contactus from "../../../../public/banners/contactus.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import contactusright from "../../../../public/images/contactusright.webp";
import Image from "next/image";
function Conractusbanner() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${contactus.src})` }}
    >
      <div className="inn_container py-40">
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <div>
                <Title title={"Contact Us"} color={"gradient_text"} />
            <div className="pt-4">
              <Discription
                dispription={
                  "We’re here to assist you. Whether you have questions, <br/> need support, or want to learn more about our <br/> services, feel free to reach out."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <div className="pt-12">
              <Button
                btn_name={"Get in Touch Today"}
                border_color={"border-primary"}
                btn_bg={"bg-primary"}
                shadow={true}
                icon={firebtnicon.src}
                text_color={'text-white'}
              />
            </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={contactusright}
              alt="contactusright"
              width={1500}
              height={500}
              className="max-w-[670px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conractusbanner;
