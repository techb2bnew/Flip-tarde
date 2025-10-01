import React from "react";
import tradingaccounts from "../../../../public/banners/tradingaccounts.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import accountsserface from "../../../../public/images/accountsserface.webp";
import Image from "next/image";
import Button from "../Uiux/Button";
import firebtn from "/public/icons/firebtnicon.svg";
import firebtniconblue from "/public/icons/firebtniconblue.svg";
import Ethereum from "../../../../public/icons/Ethereum.svg";
import Zcash from "../../../../public/icons/Zcash.svg";
import Bitcoin from "../../../../public/icons/Bitcoin.svg";
import Tradingaccountsph from "./Tradingaccountsph";
import Link from "next/link";
const accountinfo = [
    {
    acount_title: "Standard <br/>  Account",
    min_deposit: "$25",
    Swap_Free: "No",
    spreads: "1.2",
    Commission: false
  },
  {
    acount_title: "Classic <br/> Account",
    min_deposit: "$100",
    Swap_Free: "Yes",
    spreads: "0.8",
    Commission: false
  },

  {
    acount_title: "ECN  <br/>  Account",
    min_deposit: "$200",
    Swap_Free: "NO",
    spreads: "Raw Spread",
    Commission: true
  },
  {
    acount_title: "Professional <br/>  Account",
    min_deposit: "$500",
    Swap_Free: "Yes",
    spreads: "Raw Spread",
    Commission: true
  }
];
const accountinfoph = [
  {
    acount_title: "Classic <br/> Account",
    min_deposit: "$100",
    Swap_Free: "Yes",
    spreads: "0.8",
    Commission: false
  },

  {
    acount_title: "ECN  <br/>  Account",
    min_deposit: "$200",
    Swap_Free: "NO",
    spreads: "Raw Spread",
    Commission: true
  },
  {
    acount_title: "Professional <br/>  Account",
    min_deposit: "$500",
    Swap_Free: "Yes",
    spreads: "Raw Spread",
    Commission: true
  },

  // copy for slider loop
  {
    acount_title: "Classic <br/> Account",
    min_deposit: "$100",
    Swap_Free: "Yes",
    spreads: "0.8",
    Commission: false
  },

  {
    acount_title: "ECN  <br/>  Account",
    min_deposit: "$200",
    Swap_Free: "NO",
    spreads: "Raw Spread",
    Commission: true
  },
  {
    acount_title: "Professional <br/>  Account",
    min_deposit: "$500",
    Swap_Free: "Yes",
    spreads: "Raw Spread",
    Commission: true
  }
];
function Tradingaccounts() {
  return (
    <div className="bg-white">
      <div className="pt-12 xl:pt-24 2xl:pt-36">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${tradingaccounts.src})` }}
        >
          <div className="inn_container">
            <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
              <Title
                title="Trading Made <br/> Personal"
                color="text-secondary"
              />
              <div className="flex justify-center items-center">
                <Discription
                  dispription={`Ustomize your trading journey with accounts <br/> built to enhance your experience and <br/> strategies.`}
                  color="text-ternary"
                />
              </div>
            </div>
          </div>

          <div className="relative hidden xl:block overflow-hidden pt-20 h-[750px] xl:h-auto">
            <Image
              src={accountsserface.src}
              alt="Banner"
              width={3000}
              height={500}
              className="relative left-[-10%] h-full xl:h-auto"
            />
            <div className="absolute top-0 h-full w-full flex items-center">
              <div className="max-w-[1440px] px-[3%] xl:px-[unset] m-auto relative bottom-[20%]">
                <div className="grid grid-cols-4 gap-5">
                  {accountinfo.map((data, index) =>
                    <div
                      key={index}
                      className="max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px] border-[12px] rounded-3xl border-[#DCD0FFCC] relative z-[2]"
                    >
                      <div>
                        <div className="py-1 xl:py-3 2xl:py-5 px-16 lg:px-10 2xl:px-12 text-center bg-white rounded-tl-[18px] rounded-tr-[18px]">
                          <h5
                            className="text-xl lg:text-2xl xl:text-3xl min-h-16 2xl:text-4xl lg:leading-[35px]  font-medium text-primary lg:max-w-[250px] text-center"
                            dangerouslySetInnerHTML={{
                              __html: data.acount_title
                            }}
                          />
                        </div>
                        <div className="bg-[#DCD0FFCC] border-2 border-white rounded-bl-[14px] rounded-br-[14px] flex flex-col items-center">
                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-base lg:text-lg 2xl:text-[22px] text-center">
                              Min Deposit
                            </p>
                            <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
                              {data.min_deposit}
                            </span>
                          </li>

                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-base lg:text-lg 2xl:text-[22px] text-center">
                              Spreads
                            </p>
                            <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
                              {data.spreads}
                            </span>
                          </li>

                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-base lg:text-lg 2xl:text-[22px] text-center">
                              Swap Free
                            </p>
                            <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
                              {data.Swap_Free}
                            </span>
                          </li>
                          <li className="list-none text-center pt-3">
                            <p className="text-base lg:text-lg 2xl:text-[22px] text-center">
                              Commission
                            </p>
                            <span className="text-[15px] lg:text-base 2xl:text-xl text-ternary ">
                              {data.Commission ? "Yes" : "No"}
                            </span>
                          </li>
                          <div className="relative top-8">
                            {index % 2 === 0
                              ? <Link
                                  href={
                                    "https://client.fliptradegroup.com/trader/registration"
                                  }
                                >
                                  <Button
                                    btn_name={"Open Account"}
                                    icon={firebtniconblue.src}
                                    btn_bg="bg-white"
                                    text_color="text-primary"
                                    border_color="border-white"
                                    shadow={true}
                                  />
                                </Link>
                              : <Link
                                  href={
                                    "https://client.fliptradegroup.com/trader/registration"
                                  }
                                >
                                  <Button
                                    btn_name={"Open Account"}
                                    icon={firebtn.src}
                                    btn_bg="bg-primary"
                                    text_color="text-white"
                                    border_color="border-primary"
                                    shadow={true}
                                  />
                                </Link>}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[30%] left-[2%] rotate-[340deg] z-[1]">
              <Image
                src={Bitcoin}
                alt="Bitcoin"
                width={1000}
                height={500}
                className="max-w-[122px]"
              />
            </div>
            <div className="absolute top-[50%] right-0 lg:right-[2%] rotate-[340deg] z-[1]">
              <Image
                src={Ethereum}
                alt="Ethereum"
                width={1000}
                height={500}
                className="max-w-[80px] lg:max-w-[110px] xl:max-w-[150px] 2xl:max-w-[180px]"
              />
            </div>
            <div className="absolute top-[2%] right-[5%] rotate-[340deg] z-[1]">
              <Image
                src={Zcash}
                alt="Zcash"
                width={1000}
                height={500}
                className="max-w-[71px]"
              />
            </div>
          </div>
          <div className="block xl:hidden">
           <Tradingaccountsph accountinfo={accountinfoph} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradingaccounts;
