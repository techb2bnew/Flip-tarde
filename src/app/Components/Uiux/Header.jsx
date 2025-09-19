"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../public/images/Logo.webp";

const navlistdata = [
  { id: 1, nav_name: "Home", nav_link: "/" },
  { id: 2, nav_name: "Markets", nav_link: "/markes" },
  { id: 3, nav_name: "Account Type", nav_link: "/account" },
  { id: 4, nav_name: "Platform", nav_link: "/platform" },
  { id: 5, nav_name: "Tools", nav_link: "/tools" },
  { id: 6, nav_name: "Contact", nav_link: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [hoverPos, setHoverPos] = useState({ left: 0, width: 0 });
  const [activePos, setActivePos] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const active = containerRef.current?.querySelector(
      `a[data-link="${pathname}"]`
    );
    if (active) {
      const rect = active.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();
      setActivePos({ left: rect.left - parentRect.left, width: rect.width });
    }
  }, [pathname]);

  const showPos = hoverPos.width ? hoverPos : activePos;

  return (
    <div className="pt-12 pb-6">
      <div className="inn_container flex justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={2000}
            height={500}
            className="max-w-44 2xl:max-w-56"
          />
        </div>

        <div className="w-[50%] 2xl:w-[55%] max-w-[900px] 
                        flex justify-center
                        bg-[linear-gradient(90deg,rgba(43,38,55,1)_0%,rgba(72,56,123,1)_100%)]
                        border-[3px] border-[#D9D9D926] border-solid rounded-[40px]">
          <div
            ref={containerRef}
            className="relative flex w-[90%] 2xl:w-[90%] justify-around items-center py-1 2xl:py-3 font_secondary"
          >
            <div
              className="absolute top-[18%] 2xl:top-[16%] h-[65%] rounded-full bg-primary transition-all duration-500"
              style={{ left: showPos.left -5, width: showPos.width + 10 }}
            ></div>

            {navlistdata.map(data => (
              <Link
                key={data.id}
                data-link={data.nav_link}
                href={data.nav_link}
                onMouseEnter={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parentRect = containerRef.current.getBoundingClientRect();
                  setHoverPos({
                    left: rect.left - parentRect.left,
                    width: rect.width
                  });
                }}
                onMouseLeave={() => setHoverPos({ left: 0, width: 0 })}
                className="relative z-10 text-white list_text font-medium py-2 px-3"
              >
                {data.nav_name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white list_text font-medium px-8 cursor-pointer">
            Login
          </button>
          <div className="sign_up_btn rounded-[50px]">
            <button className="border-primary cursor-pointer gap-2 border-[3px] border-solid py-[8px] px-[36px] 2xl:py-[13px] 2xl:px-[50px] bg-[#00000057] text-white tracking-[0.4px] text-xl 2xl:text-[23px] font-medium rounded-[50px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
