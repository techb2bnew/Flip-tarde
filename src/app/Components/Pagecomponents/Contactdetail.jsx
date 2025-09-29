import React from "react";
import Title from "../Uiux/Title";
import locationicon from "../../../../public/icons/location.svg";
import call from "../../../../public/icons/call.svg";
import email from "../../../../public/images/email.webp";
import Image from "next/image";
import Link from "next/link";
export default function Contactdetail() {
  // const contactnumber = process.env.NEXT_CONTACT_NUMBER;
  // contactnumber.toString();
  // const noSpacesnumber = contactnumber.split(" ").join("");
  const contactdetail = [
    {
      id: 1,
      cardtitle: "Our Office",
      cardsubtitleb:
        " Giorgi Leonidze Street, Tbilisi <br /> 0105, Georgia, Office 38",
      subtitlelink: "",
      cardicon: locationicon
    },
    {
      id: 2,
      cardtitle: "Email Support",
      cardsubtitleb: "support@fliptradegroup.com",
      subtitlelink: "mailto:support@fliptradegroup.com",
      cardicon: email
    },
    {
      id: 3,
      cardtitle: "Phone Support",
      cardsubtitleb: "+41 265 006 818",
      subtitlelink: `tel:+41265006818`,
      cardicon: call
    }
  ];
  return (
    <div className="bg-white">
      <div className="inn_container py-16 md:py-24 lg:py-32">
        <div className="text-center">
          <Title
            title={"Office & Contact <br /> Details"}
            color={"text-secondary"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1380px] gap-5 xl:gap-0 m-auto pt-10 md:pt-16 lg:pt-20">
          {contactdetail.map(data =>
            <div
              key={data.id}
              className="bg-[#F3EFFF] flex flex-col items-center max-w-[400px] w-full m-auto gap-2 px-[4px] lg:gap-4 2xl:gap-5 py-[20px] md:py-[24px] lg:py-[36px] [clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,20%_100%,0_80%)] rounded-2xl"
            >
              <div className="flex flex-col items-center lg:items-start pb-4 border-b-[2px] border-solid border-[#bcc1ff]">
                <p className="text-2xl md:text-4xl lg:text-3xl 2xl:text-4xl null  font-medium text-primary">
                  {data.cardtitle}
                </p>
                {data.id === 1
                  ? <Link href={data.subtitlelink} target="_blank">
                      <span
                        className="list_text font-light text-center lg:text-start  max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex"
                        dangerouslySetInnerHTML={{ __html: data.cardsubtitleb }}
                      />
                    </Link>
                  : <a href={data.subtitlelink}>
                      <span
                        className="list_text font-light text-center lg:text-start  max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex"
                        dangerouslySetInnerHTML={{ __html: data.cardsubtitleb }}
                      />
                    </a>}
              </div>
              <div>
                <Image
                  src={data.cardicon}
                  alt={data.cardtitle}
                  width={1000}
                  height={500}
                  className="max-w-[90px] lg:max-w-[120px] 2xl:w-[146px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
