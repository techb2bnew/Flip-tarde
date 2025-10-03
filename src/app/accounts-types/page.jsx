import React from "react";
import Accounttypebanner from "../Components/Pagecomponents/Accounttypebanner";
import Tradingaccounts from "../Components/Pagecomponents/Tradingaccounts";
import PageHead from "../Pagehead";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import Accountstep from "../Components/Pagecomponents/Accountstep";
import Accountupgrade from "../Components/Pagecomponents/Accountupgrade";
const faqData = [
  {
    question: "What account types are available?",
    answer:
      "FlipTrade offers Standard, ECN, and VIP accounts with different features for traders of all levels."
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "Minimum deposits vary by account type, making it easy for beginners and professionals to start trading."
  },
  {
    question: "Do spreads differ by account type?",
    answer:
      "Yes, ECN and VIP accounts offer tighter spreads compared to Standard accounts."
  },
  {
    question: "Can I change my account type later?",
    answer:
      "Yes, you can upgrade or switch accounts by contacting FlipTrade support."
  },
  {
    question: "What benefits do VIP accounts offer?",
    answer:
      "VIP accounts provide premium spreads, lower fees, and priority support."
  }
];
const Pagemeta = {
  title: "Trading Account Types | Standard, ECN & VIP FlipTrade",
  description:
    "Choose FlipTrade account types — Standard, ECN, or VIP. Compare minimum deposits, spreads, leverage, and benefits to find the best fit for your trading style."
};
export default function page() {
  return (
    <div>
      <PageHead PageMeta={Pagemeta} />
      <Accounttypebanner />
      <Tradingaccounts />
      <Accountstep />
      <Accountupgrade />
      <div className="bg-white pb-12 md:pb-18 lg:py-24">
        <div className="inn_container">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color="text-secondary"
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
