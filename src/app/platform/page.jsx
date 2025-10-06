import React from "react";
import Mt5banner from "../Components/Pagecomponents/Mt5banner";
import Mt5keyfeature from "../Components/Pagecomponents/Mt5keyfeature";
import Mt5anywhere from "../Components/Pagecomponents/Mt5anywhere";
import Mt5card from "../Components/Pagecomponents/Mt5card";
import Mt5download from "../Components/Pagecomponents/Mt5download";
import Title from "../Components/Uiux/Title";
import PageHead from "../Pagehead";
import Faq from "../Components/Pagecomponents/Faq";
const pagemeta = {
  title: "FlipTrade Platform | Trade with MetaTrader 5 & Multi-Asset Access",
  description:
    "Explore FlipTrade’s trading platform powered by MetaTrader 5 access forex, stocks, commodities, indices & crypto. Trade seamlessly with charts, alerts & advanced tools"
};
const faqData = [
  {
    question: "What is MetaTrader 5 (MT5)?",
    answer:
      "MT5 is a trading platform for Forex, stocks, commodities, indices, and crypto in one place."
  },
  {
    question: "How is MT5 different from MT4?",
    answer:
      "MT5 offers more advanced features than MT4, including faster execution, more order types, additional technical indicators, improved charting tools, and support for trading multiple asset classes."
  },
  {
    question: "Can I use MT5 on mobile?",
    answer:
      "Yes, MT5 is available on both iOS and Android devices, allowing you to trade and monitor the markets anytime, anywhere."
  },
  {
    question: "How do I connect MT5 with FlipTrade?",
    answer:
      "You can connect by downloading MT5, selecting FlipTrade as your broker, and logging in with the account credentials provided by FlipTrade."
  },
  {
    question: "Do I need to pay to use MT5?",
    answer:
      "No, the MT5 platform itself is free to use. However, trading involves spreads, commissions, or fees depending on your account type with FlipTrade."
  }
];

function page() {
  return (
    <div>
      <PageHead PageMeta={pagemeta} />
      <Mt5banner />
      <Mt5keyfeature />
      <Mt5anywhere />
      <Mt5card />
      <Mt5download />
      <div className=" bg-white ">
        <div className="inn_container pb-12">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br /> Questions"}
              color={"text-secondary"}
            />
          </div>
          <div>
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
