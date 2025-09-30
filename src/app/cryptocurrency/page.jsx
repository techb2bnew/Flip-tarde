import React from "react";
import Marketbanner from "../Components/Pagecomponents/Markets/Marketbanner";
import Marketspoints from "../Components/Pagecomponents/Markets/Marketspoints";
import Discovertrading from "../Components/Pagecomponents/Markets/Discovertrading";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import cryptocoverleft from "/public/images/cryptocoverleft.webp";
import cryptocoverright from "/public/images/cryptocoverright.webp";
import cryptoicon from "/public/icons/cryptoicon.svg";
import realtime from "/public/icons/realtime.svg";
import Secure from "/public/icons/forexpoint2.svg";
import Support from "/public/icons/Support.svg";
import Graphhome from "../Components/Pagecomponents/Markets/Graphhome";
import PageHead from "../Pagehead";
const faqData = [
  {
    question: "Which cryptocurrencies are supported?",
    answer:
      "FlipTrade offers trading on major cryptocurrencies like Bitcoin, Ethereum, Litecoin, and various altcoins, available with secure and fast execution."
  },
  {
    question: "Is crypto trading 24/7?",
    answer:
      "Yes, cryptocurrency markets are open 24/7, and FlipTrade provides continuous access for traders worldwide without market closing times."
  },
  {
    question: "Are there fees for crypto trading?",
    answer:
      "Yes, spreads and swap fees may apply, but FlipTrade ensures transparent pricing with competitive spreads on crypto trades."
  },
  {
    question: "Does FlipTrade offer leverage on crypto?",
    answer:
      "Yes, leverage options are available, allowing traders to maximize exposure while managing risks responsibly within regulatory limits."
  },
  {
    question: "Is my crypto trading account secure?",
    answer:
      "Yes, FlipTrade uses advanced security measures like encryption and compliance protocols to ensure safe cryptocurrency trading."
  }
];

const pointdata = [
  {
    id: 1,
    title: "Multiple Cryptos",
    description: "Trade top digital  <br/>  currencies.",
    icon: cryptoicon
  },
  {
    id: 2,
    title: "Live Market Data",
    description: "Charts and indicators for <br/> precise trading.",
    icon: realtime
  },
  {
    id: 3,
    title: "Fast & Secure",
    description: "Trade safely with advanced <br/> platform security.",
    icon: Secure
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Assistance whenever <br/> you need it.",
    icon: Support
  }
];
const PageMeta  = {
  title : 'Cryptocurrency Trading Platform | Trade Bitcoin & Altcoins',
  description : 'Trade Bitcoin, Ethereum, and altcoins 24/7 with FlipTrade. Enjoy secure accounts, low spreads, fast execution, and leverage options for crypto CFD trading.'
}
export default function page() {
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Marketbanner
        banner_title="Cryptocurrency Trading | <br/>  Buy & Sell Digital Assets"
        banner_discription="Trade top cryptos like Bitcoin and Ethereum with <br /> low spreads and high security."
      />
      <Graphhome
        title={`What is <br/> Cryptocurrency?`}
        discription={`Cryptocurrency trading involves buying and selling digital <br/> currencies like Bitcoin, Ethereum, and others, aiming to profit <br/> from price changes in a decentralized market.`}
        pagepath={"/cryptocurrency"}
      />
      <Marketspoints pointdata={pointdata} />
      <Discovertrading
        discription={
          "Trade popular commodities like Gold, Silver, and <br/> Oil with tight spreads and reliable execution."
        }
        discoverleftimage={cryptocoverleft}
        discoverrightimage={cryptocoverright}
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
