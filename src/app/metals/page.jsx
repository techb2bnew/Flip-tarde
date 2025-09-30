import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import metalcoverleft from "/public/images/metalcoverleft.webp";
import metalcoverright from "/public/images/metalcoverright.webp";
import globlemetals from "/public/icons/globlemetals.svg";
import Advanced from "/public/icons/Advanced.svg";
import Secure from "/public/icons/forexpoint2.svg";
import Support from "/public/icons/Support.svg";
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which metals are available?",
    answer:
      "FlipTrade supports trading in gold, silver, platinum, and palladium, offering multiple opportunities in precious metals."
  },
  {
    question: "What spreads apply to metals?",
    answer:
      "FlipTrade offers competitive, low spreads for metals trading with transparent costs."
  },
  {
    question: "Can I use leverage for metals?",
    answer:
      "Yes, leverage is available depending on account type, giving traders flexible exposure to global metal markets."
  },
  {
    question: "What are metal trading hours?",
    answer:
      "Metals like gold and silver trade nearly 24 hours during weekdays. FlipTrade aligns with global sessions."
  },
  {
    question: "Can metals be used for hedging?",
    answer:
      "Yes, metals are traditional safe-haven assets, often used to hedge against inflation and economic uncertainty."
  }
];

const pointdata = [
  {
    id: 1,
    title: "Global Metals Access",
    description: "Trade gold, silver, <br/> platinum, and more.",
    icon: globlemetals
  },
  {
    id: 2,
    title: "Advanced Tools",
    description: "Real-time charts and <br/> technical indicators.",
    icon: Advanced
  },
  {
    id: 3,
    title: "Secure Trading",
    description: "Trade safely with advanced platform security.",
    icon: Secure
  },
  {
    id: 4,
    title: "Professional Support",
    description: "Expert guidance <br/> whenever needed.",
    icon: Support
  }
];
const Pagemeta  = {
  title : 'Precious Metals Trading Platform | Gold, Silver, Platinum',
  description :'Trade gold, silver, and platinum CFDs with FlipTrade. Benefit from secure trading accounts, tight spreads, leverage, and near 24-hour market access on metals.'
}
export default function page() {
  return (
    <div>
      <PageHead PageMeta={Pagemeta} />
      <Marketbanner
        banner_title="Precious Metals Trading <br/> Gold & Silver"
        banner_discription="Trade Gold, Silver, and Platinum with tight <br/> spreads and high liquidity."
      />
      <Graphhome
        title={`What are <br/> Metals?`}
        discription={`Metals trading includes precious metals like gold, silver, and <br /> platinum. Investors trade metals to hedge risk or capitalize on <br/> price movements.`}
        pagepath={"/metals"}
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={
          "Buy and sell precious metals like Gold and Silver,  <br/> 24/5 with market-leading execution and conditions."
        }
        discoverleftimage={metalcoverleft}
        discoverrightimage={metalcoverright}
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
