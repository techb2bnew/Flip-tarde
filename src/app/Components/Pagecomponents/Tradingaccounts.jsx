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
const accountinfo = [
  {
    acount_title: "Classic <br/> Account",
    min_deposit: "2500 USD",
    max_leverage: "1:500",
    spreads: "1.5 Pips",
    account_verified: true
  },
  {
    acount_title: "Professional <br/>  Account",
    min_deposit: "5000 USD",
    max_leverage: "1:500",
    spreads: "1.0 Pips",
    account_verified: true
  },
  {
    acount_title: "ECN  <br/>  Account",
    min_deposit: "5000 USD",
    max_leverage: "1:500",
    spreads: "Raw Spread",
    account_verified: true
  }
];

function Tradingaccounts() {
  return (
    <div className="bg-white">
      <div className="pt-36">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${tradingaccounts.src})` }}
        >
          <div className="inn_container">
            <div className="grid grid-col-1 xl:grid-cols-2">
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

          <div className="relative overflow-hidden pt-20">
            <Image
              src={accountsserface.src}
              alt="Banner"
              width={3000}
              height={500}
              className="relative left-[-10%]"
            />
            <div className="absolute top-0 h-full w-full flex items-center">
              <div className="max-w-[1300px] m-auto relative bottom-[20%]">
                <div className="grid grid-cols-3 gap-5">
                  {accountinfo.map((data, index) =>
                    <div
                      key={index}
                      className="max-w-[350px] 2xl:max-w-[400px] border-[12px] rounded-3xl border-[#DCD0FFCC]"
                    >
                      <div>
                        <div className="py-3 2xl:py-5 px-14 2xl:px-18 text-center bg-white rounded-tl-[18px] rounded-tr-[18px]">
                          <h5
                            className="text-3xl 2xl:text-4xl leading-[35px] font-medium text-primary max-w-[250px] text-center"
                            dangerouslySetInnerHTML={{
                              __html: data.acount_title
                            }}
                          />
                        </div>
                        <div className="bg-[#DCD0FFCC] border-2 border-white rounded-bl-[14px] rounded-br-[14px] flex flex-col items-center">
                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-lg 2xl:text-[22px] text-center">
                              Min Deposit
                            </p>
                            <span className="text-base 2xl:text-xl text-ternary ">
                              {data.min_deposit}
                            </span>
                          </li>
                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-lg 2xl:text-[22px] text-center">
                              Max Leverage
                            </p>
                            <span className="text-base 2xl:text-xl text-ternary ">
                              {data.max_leverage}
                            </span>
                          </li>
                          <li className="list-none text-center py-2 2xl:py-4 min-w-[195px] border-b-3 border-dashed border-white ">
                            <p className="text-lg 2xl:text-[22px] text-center">Spreads</p>
                            <span className="text-base 2xl:text-xl text-ternary ">
                              {data.spreads}
                            </span>
                          </li>
                          <li className="list-none text-center pt-3">
                            <p className="text-lg 2xl:text-[22px] text-center">
                              Account Verified
                            </p>
                            <span className="text-base 2xl:text-xl text-ternary ">
                              {data.account_verified ? "Yes" : "No"}
                            </span>
                          </li>
                          <div className="relative top-8">
                            {index === 1
                              ? <Button
                                  btn_name={"Open Account"}
                                  icon={firebtniconblue.src}
                                  btn_bg="bg-white"
                                  text_color="text-primary"
                                  border_color="border-white"
                                  shadow={true}
                                />
                              : <Button
                                  btn_name={"Open Account"}
                                  icon={firebtn.src}
                                  btn_bg="bg-primary"
                                  text_color="text-white"
                                  border_color="border-primary"
                                  shadow={true}
                                />}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
             
            </div>
             <div className="absolute top-[30%] left-[2%] rotate-[340deg]">
                <Image
                 src={Bitcoin}
                 alt="Bitcoin"
                 width={1000}
                 height={500}
                 className="max-w-[122px]"
                 />
              </div>
              <div className="absolute top-[50%] right-[2%] rotate-[340deg]">
                <Image
                 src={Ethereum}
                 alt="Ethereum"
                 width={1000}
                 height={500}
                 className="max-w-[180px]"
                 />
              </div>
              <div className="absolute top-[2%] right-[5%] rotate-[340deg]">
                <Image
                 src={Zcash}
                 alt="Zcash"
                 width={1000}
                 height={500}
                 className="max-w-[71px]"
                 />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradingaccounts;
