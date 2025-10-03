"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

import pipcalculator from "../../../../public/banners/pipcalculator.webp";
import downarrow from "../../../../public/icons/downarrow.svg";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import piphandupper from "../../../../public/images/piphandupper.webp";
import piphanddown from "../../../../public/images/piphanddown.webp";

const HIDE_CONV_FOR = new Set(["EUR/USD", "GBP/USD", "NZD/USD", "AUD/USD"]);

const Pipcalculator = () => {
  const [pipData, setPipdata] = useState({
    accountbalance: "",
    Instrument: "",
    riskpersentage: "",
    accountcurrency: "",
    stoploss: "",
    convRate: ""
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setPipdata((d) => ({ ...d, [name]: value }));
  };

  const [base, quote] = useMemo(() => {
    if (!pipData.Instrument?.includes("/")) return ["", ""];
    const [b, q] = pipData.Instrument.split("/");
    return [b, q];
  }, [pipData.Instrument]);

  const conversionLabel = useMemo(() => {
    if (!pipData.accountcurrency || !quote) return "Current Bid Price";
    return `Current ${quote}/${pipData.accountcurrency} Bid Price`;
  }, [pipData.accountcurrency, quote]);

  const showConvField = useMemo(() => {
    if (!pipData.Instrument) return false;
    return !HIDE_CONV_FOR.has(pipData.Instrument);
  }, [pipData.Instrument]);
  const [results, setResults] = useState({
    amountAtRisk: 0,
    units: 0,
    lotsStd: 0,
    lotsMini: 0,
    lotsMicro: 0
  });
  const calc = () => {
    const bal = parseFloat(pipData.accountbalance) || 0;
    const riskPct = parseFloat(pipData.riskpersentage) || 0;
    const pips = parseFloat(pipData.stoploss) || 0;
    const needConversion =
      Boolean(pipData.accountcurrency) &&
      Boolean(quote) &&
      pipData.accountcurrency !== quote &&
      showConvField;

    const quotePerAccount = needConversion ? parseFloat(pipData.convRate) : 1;

    if (needConversion && (!quotePerAccount || quotePerAccount <= 0)) {
      setResults({ amountAtRisk: 0, units: 0, lotsStd: 0, lotsMini: 0, lotsMicro: 0 });
      return;
    }

    const pipSize = quote === "JPY" ? 0.01 : 0.0001;
    const accountPerQuote = 1 / quotePerAccount;
    const pipValueInAccountPerUnit = pipSize * accountPerQuote;

    const amountAtRisk = bal * (riskPct / 100);
    const riskPerUnit = pipValueInAccountPerUnit * pips;

    const units =
      riskPerUnit > 0 && isFinite(riskPerUnit) ? amountAtRisk / riskPerUnit : 0;

    setResults({
      amountAtRisk,
      units,
      lotsStd: units / 100000,
      lotsMini: units / 10000,
      lotsMicro: units / 1000
    });
  };

  const fmt = (n, d = 6) =>
    isFinite(n) ? Number(n).toLocaleString(undefined, { maximumFractionDigits: d }) : "—";

  return (
    <div className="bg-cover relative overflow-hidden" style={{ backgroundImage: `url(${pipcalculator.src})` }}>
      <div className="absolute hidden 2xl:block right-[-2%] top-[-1%] z-[1]">
        <Image
          src={piphandupper}
          alt="hand image"
          width={2000}
          height={500}
          className="max-w-[926px] w-full"
        />
      </div>
      <div className="inn_container  py-18 lg:py-24 2xl:py-40 relative z-[3]">
        <div className="max-w-[800px] bg-white w-full m-auto lg:p-6 rounded-[38px] lg:rounded-[58px] ">
          <div className="border-2 border-[#00000033] p-6 rounded-[22px] lg:rounded-[42px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 max-w-[670px] m-auto">
              <div className="relative inline-block w-full md:max-w-[300px]  mt-5">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Account Currency
                </div>
                <select
                  name="accountcurrency"
                  value={pipData.accountcurrency}
                  onChange={handelchange}
                  className="appearance-none outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                >
                  <option value="">Select Currency</option>
                  {["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "INR", "CHF", "NZD"].map((c) => (
                    <option key={c} className="bg-white text-primary hover:bg-[#D8D8FF80]" value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 bottom-[14%] pointer-events-none text-primary">
                  <Image src={downarrow} alt="downarrow" width={22} height={22} className="max-w-[22px] w-full" />
                </span>
              </div>

              <div className="md:max-w-[300px] mt-5">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Account Balance
                </div>
                <input
                  type="number"
                  name="accountbalance"
                  placeholder="Account Balance"
                  value={pipData.accountbalance}
                  onChange={handelchange}
                  data-np-intersection-state="visible"
                  className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                />
              </div>

              <div className="md:max-w-[300px] mt-5">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Risk Percentage
                </div>
                <input
                  type="number"
                  name="riskpersentage"
                  placeholder="Risk Percentage"
                  value={pipData.riskpersentage}
                  onChange={handelchange}
                  data-np-intersection-state="visible"
                  className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                />
              </div>

              <div className="md:max-w-[300px] mt-5">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Stop Loss (pips)
                </div>
                <input
                  type="number"
                  name="stoploss"
                  placeholder="Enter Pip Size"
                  value={pipData.stoploss}
                  onChange={handelchange}
                  data-np-intersection-state="visible"
                  className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                />
              </div>

              <div className="relative inline-block w-full md:max-w-[300px] mt-5">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Currency Pair
                </div>
                <select
                  name="Instrument"
                  value={pipData.Instrument}
                  onChange={handelchange}
                  className="appearance-none outline-none border-[3px] border-[#D8D8FF80] 
                        border-solid text-base lg:text-lg text-primary 
                        px-3 md:px-6 py-2 rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                >
                  <option value="">Currency Pair</option>
                  {["EUR/USD", "GBP/USD", "NZD/USD", "AUD/USD", "USD/JPY", "USD/CAD", "EUR/GBP", "EUR/JPY", "EUR/CAD"].map((p) => (
                    <option key={p} className="bg-white text-primary hover:bg-[#D8D8FF80]" value={p}>{p}</option>
                  ))}
                </select>
                <span className="absolute right-4 bottom-[14%] pointer-events-none text-primary">
                  <Image src={downarrow} alt="downarrow" width={22} height={22} className="max-w-[22px] w-full" />
                </span>
              </div>

              {showConvField && (
                <div className="md:max-w-[300px] mt-5">
                  <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                    {conversionLabel}
                  </div>
                  <input
                    type="number"
                    name="convRate"
                    placeholder="0.0000"
                    value={pipData.convRate}
                    onChange={handelchange}
                    data-np-intersection-state="visible"
                    className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                  />
                </div>
              )}

              <div className="flex items-end mt-5" onClick={calc}>
                <Button
                  btn_name="Calculate"
                  border_color={"border-primary"}
                  btn_bg={"bg-primary"}
                  icon={firebtnicon}
                  text_color={"text-white"}
                />
              </div>
            </div>


          </div>
          <div className="bg-[#E8E8FF] p-6 rounded-[22px] lg:rounded-[42px] mt-8">
            <div className="col-span-1">
              <div className="text-3xl lg:text-[40px] text-center text-secondary mb-4">
                Results
              </div>
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                <ResultRow title="Amount at Risk" value={`${fmt(results.amountAtRisk, 2)} ${pipData.accountcurrency || ""}`} />

                <ResultRow title="Position Size (units)" value={fmt(results.units, 0)} />

                <ResultRow title="Standard Lots" value={fmt(results.lotsStd)} />

                <ResultRow title="Mini Lots" value={fmt(results.lotsMini)} />

                <ResultRow title="Micro Lots" value={fmt(results.lotsMicro)} />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden 2xl:block bottom-[-7%] left-[-3%] z-[1]">
        <Image
          src={piphanddown}
          alt="hand image"
          width={2000}
          height={500}
          className="max-w-[926px] w-full"
        />
      </div>
    </div>
  );
};

function ResultRow({ title, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-secondary text-base lg:text-[18px] font-[350]">{title}</div>
      <div className="text-primary text-lg md:text-xl font-extrabold">{value}</div>
    </div>
  );
}

export default Pipcalculator;
