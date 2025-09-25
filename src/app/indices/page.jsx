import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import Advanced from "/public/icons/Advanced.svg";
import market from "/public/icons/market.svg";
import fastexu from "/public/icons/fastexu.svg";
import Support from "/public/icons/Support.svg";
import indicescoverleft from "/public/images/indicescoverleft.webp";
import indicescoverright from "/public/images/indicescoverright.webp";
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
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
    title: "Market Access",
    description: "Trade major global <br/> indices.",
    icon: market
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Real-time charts and <br/> market insights.",
    icon: Advanced
  },
  {
    id: 3,
    title: "Fast Execution",
    description: "Trade without delays or <br /> slippage.",
    icon: fastexu
  },
  {
    id: 4,
    title: "Dedicated Support",
    description: "Guidance from expert <br /> traders.",
    icon: Support
  }
];
export default function page() {
  return (
    <div>
      <Marketbanner
        banner_title="For Difference (CFD) <br /> Trading  on Indices"
        banner_discription="FlipTrade offers global cash and futures index <br/> trading with low costs."
      />
       <Graphhome 
        title="What are Indices?"
        discription={`Indices track the performance of a group of stocks, representing an <br /> overall market or sector, such as the S&P 500 or NASDAQ. Trading <br /> indices allows you to gain exposure to the broader market without <br /> buying individual stocks.`}
        pagepath={'/indices'} 
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={`Trade the world’s top stock market indices, like <br />  S&P 500, NASDAQ, and DAX, with fast <br /> execution and competitive conditions.`}
        discoverleftimage={indicescoverleft}
        discoverrightimage={indicescoverright}
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
