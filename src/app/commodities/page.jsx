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
export default function page() {
  return (
    <div>
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
