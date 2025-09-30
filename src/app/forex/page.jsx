import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import forexdiscoverleft from "/public/images/forexdiscoverleft.webp";
import forexdiscoverright from "/public/images/forexdiscoverright.webp";
import setp1 from "/public/icons/Advanced.svg";
import setp2 from "/public/icons/forexpoint2.svg";
import setp3 from "/public/icons/forexpoint3.svg";
import setp4 from "/public/icons/Support.svg";
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which forex pairs are available?",
    answer:
      "FlipTrade offers majors like EUR/USD, minors like GBP/JPY, and exotic currency pairs, covering a wide selection for diverse trading strategies."
  },
  {
    question: "What is the minimum deposit?",
    answer: "The minimum deposit varies by account type, starting from a low amount suitable for beginners, making forex trading accessible to all traders."
  },
  {
    question: "What leverage is offered?",
    answer: "FlipTrade provides flexible leverage options, depending on account type and regulations, allowing traders to manage positions efficiently while balancing risk."
  },
  {
    question: "Are spreads competitive?",
    answer: "Yes, FlipTrade provides tight spreads and transparent pricing, ensuring forex traders benefit from low-cost entry and exit points across global markets."
  },
  {
    question: "When is forex market open?",
    answer: "Forex markets operate 24 hours a day, five days a week, and FlipTrade provides access to live trading during all major forex sessions worldwide."
  }
];
const pointdata = [
  {
    id: 1,
    title: "Advanced Tools",
    description:
      "Real-time charts, technical <br/> indicators, and automated <br/> strategies.",
    icon: setp1
  },
  {
    id: 2,
    title: "Secure Platform",
    description: "Fast execution with strong <br/> security measures.",
    icon: setp2
  },
  {
    id: 3,
    title: "Flexible Accounts",
    description: "Options tailored to different <br/> trading styles.",
    icon: setp3
  },
  {
    id: 4,
    title: "Expert Support",
    description: "Dedicated assistance to guide <br/> your trading journey.",
    icon: setp4
  }
];
const pagehead = {
  title: "Forex Trading Online Platform | Trade Currency Pairs FlipTrade",
  description:
    "Trade major, minor, and exotic forex pairs on FlipTrade. Enjoy tight spreads, fast execution, and flexible leverage to enhance your online forex trading experience securely."
};
export default function page() {
  return (
    <div>
      <PageHead PageMeta={pagehead} />
      <Marketbanner
        banner_title="Forex Trading | Online <br/> FX Trading"
        banner_discription="The FX market moves over $5 trillion daily, making it the <br/> world’s largest and most liquid."
      />
      <Graphhome
        title={`What is Forex?`}
        discription={`Forex (Foreign Exchange) is the global market for trading currencies. <br/> Traders buy and sell currency pairs, like EUR/USD and GBP/JPY, to <br/> profit from exchange rate movements. It is the largest financial <br/> market, operating 24 hours a day, 5 days a week.`}
        pagepath={"/forex"}
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={
          "Buy and sell the most liquid currencies, <br/> like EURUSD, 24/5 with market-leading <br/> execution and conditions."
        }
        discoverleftimage={forexdiscoverleft}
        discoverrightimage={forexdiscoverright}
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
