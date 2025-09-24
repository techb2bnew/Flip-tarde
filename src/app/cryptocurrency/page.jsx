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
    title: "Multiple Cryptos",
    description:
      "Trade top digital  <br/>  currencies.",
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
export default function page() {
  return (
    <div>
      <Marketbanner
        banner_title="Cryptocurrency Trading | <br/>  Buy & Sell Digital Assets"
        banner_discription="Trade top cryptos like Bitcoin and Ethereum with <br /> low spreads and high security."
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
