import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import stockcoverleft from "/public/images/stockcoverleft.webp";
import stockcoverright from "/public/images/stockcoverright.webp";
import worldwide from "/public/icons/worldwide.svg";
import realtime from "/public/icons/realtime.svg";
import Secure from "/public/icons/forexpoint2.svg";
import Support from "/public/icons/Support.svg";
const faqData = [
  {
    question: "What is FlipTrade?",
    answer:
      "A secure trading platform for Forex, stocks, commodities, indices, and crypto."
  },
  {
    question: "How do I start trading?",
    answer: "Sign up, verify your account, deposit funds, and begin trading."
  },
  {
    question: "What are the fees?",
    answer: "Transparent, low trading fees with no hidden charges."
  },
  {
    question: "Is FlipTrade safe?",
    answer: "Yes, we use strong security, 2FA, and safe fund storage."
  },
  {
    question: "How can I get support?",
    answer: "Via live chat, email, or our Help Center guides."
  }
];
const pointdata = [
  {
    id: 1,
    title: "Wide Selection",
    description: "Access global stocks <br/> across sectors.",
    icon: worldwide
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    description: "Charts, indicators, and <br/> insights.",
    icon: realtime
  },
  {
    id: 3,
    title: "Secure Execution",
    description: "Trade with confidence <br/> and speed.",
    icon: Secure
  },
  {
    id: 4,
    title: "Expert Guidance",
    description: "Support for all <br/> trading levels.",
    icon: Support
  }
];
export default function page() {
  return (
    <div>
      <Marketbanner
        banner_title="Stock Trading | Global <br /> Equities"
        banner_discription="Trade global company shares with low costs, real-time <br/> data, and easy portfolio diversification."
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={
          "Buy and sell top global stocks, like Apple, Netflix, and Amazon, <br/> 24/5 with market-leading execution and conditions."
        }
        discoverleftimage={stockcoverleft}
        discoverrightimage={stockcoverright}
      />
      <div className=" bg-white">
        <div className="inn_container pt-12 pb-16">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color={"text-secondary"}
            />
          </div>
          <div className="pt-8">
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}
