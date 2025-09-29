import React from "react";
import formsidebanner from "../../../../public/images/formsidebanner.webp";
import Image from "next/image";
import Maincontactform from "./Maincontactform";
import contactusbanner from "../../../../public/banners/contactusbanner.webp";
import facebookblack from "../../../../public/icons/facebookblack.svg";
import instablack from "../../../../public/icons/instablack.svg";
import youtubeblack from "../../../../public/icons/youtubeblack.svg";
import Link from "next/link";
export default function Contactfrom() {
  return (
    <div>
      <div
        className="py-12 md:py-16 lg:py-22 relative overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${contactusbanner.src})` }}
      >
        <div className="inn_container">
          <div className=" max-w-[1380px] m-auto">
            <div className="flex justify-center xl:justify-end">
              <Maincontactform />
            </div>
            <div className="hidden xl:block absolute max-w-[700px] top-0 ">
              <Image
                src={formsidebanner}
                alt="formsidebanner"
                width={2000}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 md:py-20">
        <div className="inn_container">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl 2xl:text-4xl null  font-medium text-primary">
              Stay Connected
            </p>
            <span className="list_text font-light  pt-4 text-center  leading-[28px] font_ternary max-w[330px] min-h-[65px] h-full flex">
              Follow us on our social media channels for updates, tips, and
              more.
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 m-auto max-w-[1024px] pt-2 md:pt-12 lg:pt-16 md:gap-5">
            <div className=" border-b-[3px] md:border-b-0 w-max m-auto md:w-full py-6 md:py-0 md:border-r-[3px] border-dashed border-[#BCC1FFB2] cursor-pointer">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={facebookblack}
                    alt="facebook"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61580314210503"
                  }
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex items-center pt-8 justify-center gap-2.5  font-medium text-primary font_ternary">
                    Facebook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" border-b-[3px] md:border-b-0 w-max m-auto md:w-full py-6 md:py-0 md:border-r-[3px] border-dashed border-[#BCC1FFB2] cursor-pointer">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={instablack}
                    alt="insta"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={"https://www.instagram.com/fliptradegroup/"}
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex justify-center pt-8 items-center gap-2.5  font-medium text-primary font_ternary">
                    Instagram
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cursor-pointer  py-6 md:py-0">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={youtubeblack}
                    alt="youtube"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={"https://www.youtube.com/@fliptradegroup"}
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex justify-center pt-8 items-center gap-2.5  font-medium text-primary font_ternary">
                    Youtube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#6A40EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
