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
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which stocks can I trade?",
    answer:
      "FlipTrade provides access to US, European, and Asian stock CFDs, covering leading global companies."
  },
  {
    question: "What are stock trading hours?",
    answer:
      "Stock trading hours vary by region, and FlipTrade aligns access with respective market sessions."
  },
  {
    question: "What fees apply to stock CFDs?",
    answer:
      "Spreads and overnight swaps apply on stock CFDs. FlipTrade offers competitive and transparent pricing."
  },
  {
    question: "Can I trade fractional shares?",
    answer:
      "Yes, fractional share trading is available, making stock CFDs accessible for traders with smaller investments."
  },
  {
    question: "Do stock CFDs include dividends?",
    answer:
      "Yes, dividend adjustments are made on CFD positions to reflect corporate actions."
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

const Pagemeta  = {
  title : 'Stock Trading CFDs Online | Trade Global Equities FlipTrade',
  description :'Trade stock CFDs on US, European, and Asian companies with FlipTrade. Access global equities with competitive spreads, fractional trading, and fast execution.'
}
export default function page() {
  return (
    <div>
      <PageHead PageMeta={Pagemeta}/>
      <Marketbanner
        banner_title="Stock Trading | Global <br /> Equities"
        banner_discription="Trade global company shares with low costs, real-time <br/> data, and easy portfolio diversification."
      />
      <Graphhome
        title={`What are <br/> Stocks?`}
        discription={`Stocks represent ownership in a company. Trading stocks <br/> allows you to profit from share price movements and potential <br/> dividends.`}
        pagepath={"/stocks"}
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
