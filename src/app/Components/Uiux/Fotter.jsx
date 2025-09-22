import React from "react";
import fotterbackground from "../../../../public/banners/fotterbackground.webp";
import logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import Fotterlinks from "../Pagecomponents/Fotterlinks";
import facebookicon from "../../../../public/icons/facebook.svg";
import Instaicon from "../../../../public/icons/Insta.svg";
import xicon from "../../../../public/icons/X.svg";
import Link from "next/link";
const footerdata = {
  linkingdata: [
    {
      title: "Quick Links",
      pagelinks: [
        { pagelink: "/", pagename: "About us" },
        { pagelink: "/", pagename: "Contact Us" },
        { pagelink: "/", pagename: "Forex" },
        { pagelink: "/", pagename: "Indices" },
        { pagelink: "/", pagename: "Commodities" }
      ]
    },
    {
      title: "Tools",
      pagelinks: [
        { pagelink: "/", pagename: "Economic Calendar" },
        { pagelink: "/", pagename: "PIP Calculator" }
      ]
    },
    {
      title: "Platform",
      pagelinks: [{ pagelink: "/", pagename: "Metatrader 5" }]
    }
  ],
  carddata: [
    {
      title: "Physical Address",
      discription:
        "Giorgi Leonid Ze Street, Tbilisi 0105, <br/> Georgia Office 38.",
      link: false
    },
    {
      title: "Registered Address",
      discription:
        "Ground Floor, The Sotheby <br/> Building, Rodney  Village, Rodney <br/> Bay, Saint Lucia",
      link: false
    },
    {
      title: "Registration No.",
      discription: "2025-00621",
      link: false
    },
    {
      title: "Contact No.",
      discription: "+41 2650 06818",
      link: "tel:+41265006818"
    },
    {
      title: "Email",
      discription: "support@fliptradegroup.com",
      link: "mailto:support@fliptradegroup.com"
    }
  ],
  social_links: [
    {
      alt: "Facebook",
      pagelink: "",
      icon: facebookicon
    },
    {
      alt: "Instagram",
      pagelink: "",
      icon: Instaicon
    },
    {
      alt: "X",
      pagelink: "",
      icon: xicon
    }
  ]
};
const Fotter = () => {
  return (
    <div className="bg-white">
      <div
        className="h-[100vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${fotterbackground.src})` }}
      >
        <div className="inn_container relative top-[170px]">
          <div className="2xl:px-[3%]">
            <div className="grid grid-cols-4">
              <div>
                <Image
                  src={logo}
                  alt="Logo"
                  width={1000}
                  height={500}
                  className="max-w-[240px] 2xl:max-w-[295px]"
                />
              </div>
              {footerdata.linkingdata.map((data, index) =>
                <div
                  className={`${index === 2
                    ? null
                    : "border-r-[3px] border-dashed border-[#72727250]"}`}
                  key={index}
                >
                  <Fotterlinks title={data.title} linklist={data.pagelinks} />
                </div>
              )}
            </div>
            <div className="pt-16">
              <div className="grid grid-cols-5 bg-primary p-12 rounded-3xl">
                {footerdata.carddata.map((data, index) =>
                  <div
                    className={`font_secondary ${index === 4
                      ? null
                      : "border-r-[3px] border-dashed border-[#C5C6FF80]"}`}
                    key={index}
                  >
                    <div className="w-max m-auto">
                      <p className="text-lg 2xl:text-2xl font-semibold w-max text-white">
                        {data.title}
                      </p>
                      {data.link !== false
                        ? <Link href={data.link}>
                            <p
                              className="text-[13px] 2xl:text-base pt-3 2xl:pt-4 font-light text-white leading-6"
                              dangerouslySetInnerHTML={{
                                __html: data.discription
                              }}
                            />
                          </Link>
                        : <p
                            className="text-[13px] 2xl:text-base pt-3 2xl:pt-4 font-light text-white leading-6"
                            dangerouslySetInnerHTML={{
                              __html: data.discription
                            }}
                          />}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-12">
              <div className="text-base 2xl:text-lg text-[#AAAAAA] leading-[32px] 2xl:leading-[40px] font-light font_secondary">
                <span className="text-white font-medium">
                  Risk statement :{" "}
                </span>{" "}
                An investment in derivatives and financial markets involves high
                risk and may result in losses greater than your initial
                investment. Trading in securities, forex, commodities, options,
                and futures is not suitable for everyone, and you should only
                invest money you can afford to lose. Before investing, ensure
                such activities are permitted in your country and seek
                independent financial, legal, or tax advice. FlipTrade Trade
                Limited does not provide services to residents of the United
                States, Cuba, Iraq, Myanmar, North Korea, or Sudan, and its
                services are not intended for jurisdictions where they would
                contravene local laws or regulations. Nothing on this site
                should be considered financial advice.
              </div>
            </div>
            <div className="pt-12">
              <div className="border-t-[1px] py-6 border-solid border-[#ffffff57] font_secondary flex justify-between">
                <p className="text-[14px] 2xl:text-base font-light text-[#AAAAAA]">
                  © FlipTrade Group Limited 2024 | All Rights Reserved
                </p>
                <div className="flex gap-2">
                  {footerdata.social_links.map((data, index) =>
                    <Link href={data.pagelink} key={index}>
                      <div className="w-[33px] h-[33px] flex rounded-[50%] items-center justify-center bg-primary">
                        <Image
                          src={data.icon}
                          alt={data.icon}
                          width={1000}
                          height={500}
                          className="w-[18px]"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
