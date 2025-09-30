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
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which indices can I trade?",
    answer:
      "FlipTrade supports global indices such as the S&P 500, Nasdaq, Dow Jones, FTSE 100, DAX, and more, offering exposure to worldwide markets."
  },
  {
    question: "How does index CFD trading work?",
    answer:
      "You trade price movements of indices without owning the underlying assets, using CFDs to profit from both rising and falling market conditions."
  },
  {
    question: "What leverage is available on indices?",
    answer:
      "FlipTrade offers flexible leverage levels on indices, depending on account type and regulations, helping traders manage risk and exposure effectively."
  },
  {
    question: "What are trading hours for indices?",
    answer:
      "Global indices follow specific market sessions, and FlipTrade provides access to major index trading hours aligned with each region."
  },
  {
    question: "Are there fees for index trading?",
    answer:
      "Yes, spreads and overnight swap fees may apply on index CFDs, ensuring transparent costs for traders engaging in global indices."
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
const pagemeta = {
  title : 'Global Indices Trading Platform | Trade Index CFDs FlipTrade' ,
  description : 'FlipTrade lets you trade leading global indices like S&P 500, Nasdaq, FTSE, and DAX. Access CFDs with leverage, tight spreads, and transparent trading conditions.'
}
export default function page() {
  return (
    <div> 
      <PageHead PageMeta={pagemeta} />
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
