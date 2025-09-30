import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import commoditiescoverleft from "/public/images/commoditiescoverleft.webp";
import commoditiescoverright from "/public/images/commoditiescoverright.webp";
import Diverse from "/public/icons/Diverse.svg";
import realtime from "/public/icons/realtime.svg";
import Secure from "/public/icons/forexpoint2.svg";
import Support from "/public/icons/Support.svg";
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which commodities are available?",
    answer:
      "FlipTrade offers crude oil, natural gas, sugar, coffee, and agricultural products, giving traders exposure to diverse commodity markets."
  },
  {
    question: "How does commodity CFD trading work?",
    answer:
      "You trade price movements of commodities through CFDs without owning physical goods, allowing profit opportunities in rising or falling markets."
  },
  {
    question: "What leverage is provided on commodities?",
    answer:
      "FlipTrade provides leverage tailored to commodity markets, enabling flexible position sizes with responsible risk management."
  },
  {
    question: "What fees apply to commodity trading?",
    answer:
      "Spreads and overnight swaps may apply. FlipTrade ensures competitive pricing with transparent cost structures."
  },
  {
    question: "Are commodities good for hedging?",
    answer:
      "Yes, commodities like oil and agricultural products are often used for hedging against inflation or market fluctuations."
  }
];

const pointdata = [
  {
    id: 1,
    title: "Diverse Options",
    description:
      "Trade energy, <br/> agriculture, and other <br/> commodities.",
    icon: Diverse
  },
  {
    id: 2,
    title: "Real-Time Tools",
    description: "Charts and market data <br/> for informed trading.",
    icon: realtime
  },
  {
    id: 3,
    title: "Secure & Reliable",
    description: "Fast execution with robust <br/> security.",
    icon: Secure
  },
  {
    id: 4,
    title: "Expert Assistance",
    description: "Support for all trading <br/> levels.",
    icon: Support
  }
];
const  PageMeta ={
  title : 'Commodity Trading Platform | Oil, Gas & Agriculture CFDs',
  description :'FlipTrade offers commodity CFD trading in oil, natural gas, coffee, sugar, and agricultural products. Access global commodity markets with leverage and transparent pricing.'
}
export default function page() {
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Marketbanner
        banner_title="Commodities <br /> CFDs"
        banner_discription="Trade spot and futures commodities across metals, <br /> energy, and agriculture markets."
      />
      <Graphhome
        title={`What are Commodities?`}
        discription={`Commodities are raw materials like oil, wheat, and coffee. <br /> Trading commodities allows you to profit from price <br />  movements in essential resources.`}
        pagepath={"/commodities"}
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={
          "Trade popular commodities like Gold, Silver, and <br/> Oil with tight spreads and reliable execution."
        }
        discoverleftimage={commoditiescoverleft}
        discoverrightimage={commoditiescoverright}
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
