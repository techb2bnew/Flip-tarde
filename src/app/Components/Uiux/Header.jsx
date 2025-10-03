"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Logoblack from "../../../../public/images/Logoblack.webp";
import Button from "./Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import menuicon from "../../../../public/icons/menuicon.svg";
import menucross from "../../../../public/icons/menucross.svg";
import downarrow from "../../../../public/icons/downarrow.svg";
const navlistdata = [
  { id: 1, nav_name: "Home", nav_link: "/" },
  {
    id: 2,
    nav_name: "Markets",
    nav_link: "/forex",
    dropdown: [
      { id: "forex", name: "Forex", link: "/forex" },
      { id: "stocks", name: "Indices", link: "/indices" },
      { id: "crypto", name: "Commodities", link: "/commodities" },
      { id: "indices", name: "Crypto Currency", link: "/cryptocurrency" },
      { id: "commodities", name: "Metals", link: "/metals" },
      { id: "metals", name: "Stocks", link: "/stocks" },
    ],
  },
  { id: 3, nav_name: "Account Type", nav_link: "/accounts-types" },
  // { id: 4, nav_name: "Platform", nav_link: "/platform" },
  { id: 5, nav_name: "Pip Calculator", nav_link: "/pip-calculator" },
  { id: 6, nav_name: "Contact", nav_link: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [hoverPos, setHoverPos] = useState({ left: 0, width: 0 });
  const [activePos, setActivePos] = useState({ left: 0, width: 0 });
  const [isMarketsOpen, setIsMarketsOpen] = useState(false); 
  const [isMenu , setIsMenu] = useState(false);
  const [isMarket , setisMarket] = useState(false);
  const containerRef = useRef(null);
   
useEffect(() => {
  if (!containerRef.current) return;
  const marketsDropdown =
    navlistdata.find((n) => n.nav_name === "Markets")?.dropdown || [];
  const marketsLinks = new Set(marketsDropdown.map((d) => d.link));
  const isMarketsPath = marketsLinks.has(pathname);
  const selector = isMarketsPath
    ? '[data-link="/forex"]'
    : `[data-link="${pathname}"]`;

  const target = containerRef.current.querySelector(selector);
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const parentRect = containerRef.current.getBoundingClientRect();
  setActivePos({ left: rect.left - parentRect.left, width: rect.width });
}, [pathname]);


  const showPos = hoverPos.width ? hoverPos : activePos;

  const moveHighlightTo = (el) => {
    if (!el || !containerRef.current) return;
    const rect = el.getBoundingClientRect();
    const parentRect = containerRef.current.getBoundingClientRect();
    setHoverPos({ left: rect.left - parentRect.left, width: rect.width });
  };

  return (
    <div className={`pt-10 md:pt-12 pb-6 w-full ${isMenu ? 'fixed' : 'relative'}`}>
      <div className="inn_container flex justify-between">
        <div className="flex items-center relative z-[999]">
          <Link href="/">
           <Image
            src={Logo }
            alt="Logo"
            width={2000}
            height={500}
            className="max-w-44 2xl:max-w-56 "
            priority
           />
          </Link>
        </div>

        <div className="hidden  w-[52%] 2xl:w-[55%] max-w-[850px] xl:flex justify-center bg-[linear-gradient(90deg,rgba(43,38,55,1)_0%,rgba(72,56,123,1)_100%)] border-[3px] border-[#D9D9D926] border-solid rounded-[40px]">
          <div
            ref={containerRef}
            className="relative flex w-[90%] 2xl:w-[90%] justify-around items-center py-1 font_secondary "
          >
            <div
              className="absolute top-[18%] 2xl:top-[16%] h-[65%] rounded-full bg-primary transition-all duration-500 ui_btn_shadow"
              style={{ left: showPos.left - 5, width: showPos.width + 10 }}
            />

            {navlistdata.map((data) => {
              const isMarkets = !!data.dropdown; 
              return (
                <div
                  key={data.id}
                  className="relative group"
                  onMouseEnter={(e) => {
                    const anchor = e.currentTarget.querySelector("[data-link]");
                    moveHighlightTo(anchor);
                    if (isMarkets) setIsMarketsOpen(true); 
                  }}
                  onMouseLeave={() => {
                    setHoverPos({ left: 0, width: 0 });
                    if (isMarkets) setIsMarketsOpen(false); 
                  }}
                >
                {
                  data.id == 2 ?
                  <p
                    data-link={data.nav_link}
                    className="relative z-10 text-white list_text font-medium py-2 px-3 block cursor-pointer"
                  >
                    {data.nav_name}
                  </p>
                  :
                  <Link
                    data-link={data.nav_link}
                    href={data.nav_link}
                    className="relative z-10 text-white list_text font-medium py-2 px-3 block"
                  >
                    {data.nav_name}
                  </Link>
                }
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="hidden xl:flex items-center gap-6">
          <Link href={'https://client.fliptradegroup.com/trader'} >
          <button className="text-white list_text font-medium px-8 cursor-pointer hover:underline  duration-500 transition-all  ">
            Login
          </button>
          </Link>
          <div className="sign_up_btn rounded-[50px]">
              <Link href={'https://client.fliptradegroup.com/trader/registration'}>
               <button className="border-primary cursor-pointer gap-2 border-[3px] border-solid py-[8px] px-[36px] 2xl:py-[13px] 2xl:px-[50px] bg-[#00000057] text-white tracking-[0.4px] text-xl 2xl:text-[23px] font-normal rounded-[50px] font_secondary">
                 Sign Up
               </button>
            </Link>
          </div>
        </div>

        <div className="flex xl:hidden gap-6">
          <div className="hidden lg:flex items-center gap-8">
            <Link href={'https://client.fliptradegroup.com/trader'} >
          <button className="text-white list_text font-medium px-8 cursor-pointer  hover:underline  duration-500 transition-all  ">
            Login
          </button>
          </Link>
          <div className="sign_up_btn rounded-[50px]">
              <Link href={'https://client.fliptradegroup.com/trader/registration'}>
                <button className="border-primary cursor-pointer gap-2 border-[3px] border-solid py-[8px] px-[36px] 2xl:py-[13px] 2xl:px-[50px] bg-[#00000057] text-white tracking-[0.4px] text-xl 2xl:text-[23px] font-normal rounded-[50px] font_secondary">
                  Sign Up
               </button>
            </Link>
          </div>
          </div>
          <div className={` relative z-[999] duration-700 transition-all ${isMenu ? 'rotate-0' : 'rotate-[225deg]'}`} onClick={()=>setIsMenu(!isMenu)}>
           <Image 
            src={!isMenu ?  menuicon : menucross}
            alt="menu" 
            width={1000}
            height={500}
            className="max-w-10 cursor-pointer"
           />
          </div>
        </div>
      </div>
      <div>
        
      </div>
        <div className={`fixed  bg-white h-[120vh] w-[100vw] duration-700 transition-all ${!isMenu ? 'right-[-300%] scale-0 top-[-300%]' : 'right-0 top-0 scale-[1]'} `}>
           <div
            className="relative flex flex-col w-[80%] m-auto justify-around items-start pt-[110px] py-1 font_secondary "
          >


            {navlistdata.map((data) => {
              return (
                <div
                  key={data.id}
                  className="relative group"
                  
                >
                  {
                     data.id === 2 ?
                     <div className="">
                        <p className="relative z-10 flex items-center gap-2 text-secondary text-base font-medium py-2 px-3 " onClick={()=>setisMarket(!isMarket)}>
                          {data.nav_name} 
                          <Image
                           src={downarrow}
                           alt="downarrow"
                           width={1000}
                           height={500}
                           className={`max-w-[18px] duration-500 transition-all ease-in-out  ${isMarket ? 'rotate-180': 'rotate-0'}`}
                           />
                        </p> 
                        <div className={` ${isMarket ? 'scale-[1] h-auto' : 'scale-[0] h-0'} w-[250px] duration-500 transition-all ease-in-out rounded-2xl bg-primary`}>
                            {navlistdata
                             .find((n) => n.nav_name === "Markets")
                               ?.dropdown.map((item) => (
                                 <div key={item.id} className="text-start">
                                   <Link
                                     href={item.link}
                                     className="relative z-10 text-white font_secondary py-2 px-3 block  rounded-lg text-base 2xl:text-xl   font-medium" 
                                     onClick={()=>setIsMenu(!isMenu)  }
                                   >
                                     {item.name}
                                  </Link>
                                 </div>
                               ))}
                        </div>
                     </div>
                     :
                  <Link
                   onClick={()=>setIsMenu(!isMenu)}
                    data-link={data.nav_link}
                    href={data.nav_link}
                    className="relative z-10 text-secondary text-base font-medium py-2 px-3 block"
                  >
                    {data.nav_name}
                  </Link>
                  }
                
                </div>
              );
            })}
          </div>  
            <div className="lg:hidden flex items-center w-[80%] pt-5 m-auto gap-8">
                <Link href={'https://client.fliptradegroup.com/trader/registration'}>
                    <Button
                      btn_name={`Sign Up`}
                      btn_bg={`gradient_bg`}
                      text_color="text-secondary"
                      border_color="border-primary"
                      shadow={true}
                    />
                 </Link>
             <Link href={'https://client.fliptradegroup.com/trader'} >
               <button className="text-primary text-base font-medium px-8 cursor-pointer  hover:underline  duration-500 transition-all  ">
                 Login
               </button>
             </Link>      
          </div>
         </div>
      <div
        onMouseEnter={() => setIsMarketsOpen(true)}
        onMouseLeave={() => setIsMarketsOpen(false)}
        className={
          `
          absolute left-0 top-[100px] z-20 origin-top
          transition-all duration-300 ease-in-out w-full 
          ` +
          (isMarketsOpen
            ? " scale-100 opacity-100 pointer-events-auto"
            : " scale-0 opacity-0 pointer-events-none")
        }
      >
        <div className="pt-8 h-full">
          <div className="max-w-[1280px] m-auto  bg-[#ffffff] border border-[#75757526] rounded-[40px] shadow-lg overflow-hidden h-full">
          <div className="grid grid-cols-2 gap-4 py-16 ps-32">
             <div className="flex flex-col items-start">
                <div className="text-secondary text-5xl leading-16">
                   Start Your Trading <br/>
                   Journey With <br/>
                   Flip Trade
                </div>
                <div className="pt-8">
                 <div className="flex flex-col gap-8">
                    <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                <Button
                  icon={firebtnicon.src}
                  btn_name="Start Trading"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
                </Link>
              </div>
               </div>
             </div>
             <div>
               <div className=" grid grid-cols-2 gap-1 py-4 px-6 h-max">
                {navlistdata
              .find((n) => n.nav_name === "Markets")
              ?.dropdown.map((item) => (
                <div key={item.id} className="text-start">
                  <Link
                    href={item.link}
                    className="relative z-10 text-black hover:text-[var(--primary)] font_secondary  hover:underline py-2 px-3 block  rounded-lg text-base 2xl:text-xl pt-8  font-medium hover:text-primary transition-all duration-500" 
                    onMouseEnter={(e) =>
                      moveHighlightTo(
                        document.querySelector('a[data-link="/forex"]') 
                      )
                    }
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
               </div>
              
             </div>
            
          </div>
        </div>
        </div>
        
      </div>
   
    </div>
  );
}
