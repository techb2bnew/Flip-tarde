"use client";
import React, { useState } from "react";
import pipcalculator from "../../../../public/banners/pipcalculator.webp";
import piphandupper from "../../../../public/images/piphandupper.webp";
import piphanddown from "../../../../public/images/piphanddown.webp";
import downarrow from "../../../../public/icons/downarrow.svg";
import Image from "next/image";
const Pipcalculator = () => {
  const [pipData, setPipdata] = useState({
    pips: "",
    Instrument: "",
    lots: "",
    depositcurrency: "",
    pipsize: ""
  });

  const handelchange = e => {
    const { name, value } = e.target;
    setPipdata({ ...pipData, [name]: value });
  };
  console.log(pipData);

  return (
    <div style={{ backgroundImage: `url(${pipcalculator.src})` }}>
      <div className="inn_container py-24">
        <div className="max-w-[800px] bg-white w-full m-auto lg:p-6 rounded-[38px] lg:rounded-[58px] ">
          <div>
            <div className="grid grid-cols-2">
              <div className="max-w-[300px]">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Pips
                </div>
                <input
                  type="number"
                  name="pips"
                  id=""
                  placeholder="Enter Pips"
                  value={pipData.pips}
                  onChange={handelchange}
                  className={`outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4`}
                  data-np-intersection-state="visible"
                />
              </div>
              <div className="relative inline-block w-full max-w-[300px]">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Pips
                </div>
                <select
                  name="Instrument"
                  value={pipData.Instrument}
                  onChange={handelchange}
                  className="appearance-none outline-none border-[3px] border-[#D8D8FF80] 
               border-solid text-base lg:text-lg text-primary 
               px-3 md:px-6 py-2 rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                >
                  <option value="">Select Instrument</option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="EUR/USD"
                  >
                    EUR/USD
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="GBP/USD"
                  >
                    GBP/USD
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="USD/JPY"
                  >
                    USD/JPY
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="AUD/USD"
                  >
                    AUD/USD
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="USD/CAD"
                  >
                    USD/CAD
                  </option>
                </select>
                <span className="absolute right-4 bottom-[14%] pointer-events-none text-primary">
                  <Image
                    src={downarrow}
                    alt="downarrow"
                    width={1000}
                    height={500}
                    className="max-w-[22px] w-full"
                  />
                </span>
              </div>
              <div className="max-w-[300px]">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Lots (Trade Size)
                </div>
                <input
                  type="number"
                  name="lots"
                  id=""
                  placeholder="Enter Lots"
                  value={pipData.lots}
                  onChange={handelchange}
                  className={`outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4`}
                  data-np-intersection-state="visible"
                />
              </div>
              <div className="relative inline-block w-full max-w-[300px]">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Deposit Currency
                </div>
                <select
                  name="depositcurrency"
                  value={pipData.depositcurrency}
                  onChange={handelchange}
                  className="appearance-none outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                >
                  <option value="">Select Currency</option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="USD"
                  >
                    US Dollar (USD)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="EUR"
                  >
                    Euro (EUR)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="GBP"
                  >
                    British Pound (GBP)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="JPY"
                  >
                    Japanese Yen (JPY)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="AUD"
                  >
                    Australian Dollar (AUD)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="CAD"
                  >
                    Canadian Dollar (CAD)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="INR"
                  >
                    Indian Rupee (INR)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="CHF"
                  >
                    Swiss Franc (CHF)
                  </option>
                  <option
                    className="bg-white text-primary hover:bg-[#D8D8FF80]"
                    value="NZD"
                  >
                    New Zealand Dollar (NZD)
                  </option>
                </select>
                <span className="absolute right-4 bottom-[14%] pointer-events-none text-primary">
                  <Image
                    src={downarrow}
                    alt="downarrow"
                    width={1000}
                    height={500}
                    className="max-w-[22px] w-full"
                  />
                </span>
              </div>
              <div className="max-w-[300px]">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  {pipData.Instrument} {pipData.pips} Pip Size
                </div>
                <input
                  type="number"
                  name="pips"
                  id=""
                  placeholder="Enter Pips"
                  value={pipData.pips}
                  onChange={handelchange}
                  className={`outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4`}
                  data-np-intersection-state="visible"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipcalculator;
