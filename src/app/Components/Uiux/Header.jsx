import Image from "next/image";
import React from "react";
import Logo from "../../../../public/images/Logo.webp";
import Link from "next/link";
const navlistdata = [
  { id: 1, nav_name: "Home", nav_link: "/" },
  { id: 2, nav_name: "Markets", nav_link: "/" },
  { id: 3, nav_name: "Account Type", nav_link: "/" },
  { id: 4, nav_name: "Platform", nav_link: "/" },
  { id: 5, nav_name: "Tools", nav_link: "/" },
  { id: 6, nav_name: "Contact", nav_link: "/" }
];

export default function Header() {
  return (
    <div className="pt-12 pb-6">
      <div className="inn_container flex justify-between">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={2000}
            height={500}
            className="max-w-44 2xl:max-w-56"
          />
        </div>
        <div className="w-[50%] 2xl:w-[55%] max-w-[900px] flex justify-center bg-[linear-gradient(90deg,rgba(43,38,55,1)_0%,rgba(72,56,123,1)_100%)] border-[3px] border-[#D9D9D926] border-solid rounded-[40px]">
          <div className="flex w-[80%] 2xl:w-[90%] justify-around items-center 2xl:py-3">
            {navlistdata.map(data =>
              <Link href={data.nav_link} key={data.id}>
                <span className="text-white list_text font-medium">
                  {data.nav_name}
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-white list_text font-medium px-8 cursor-pointer">
            Login
          </button>
          <div className="sign_up_btn rounded-[50px]">
            <button className="border-primary cursor-pointer gap-2 border-[3px] border-solid py-[8px] px-[36px] 2xl:py-[13px] 2xl:px-[50px] bg-[#00000057] text-white traking-[0.4px] text-xl 2xl:text-[23px] font-medium rounded-[50px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
