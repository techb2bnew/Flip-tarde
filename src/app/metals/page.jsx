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
export default function page() {
  return (
    <div>
      <Marketbanner
        banner_title="Precious Metals Trading <br/> Gold & Silver"
        banner_discription="Trade Gold, Silver, and Platinum with tight <br/> spreads and high liquidity."
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
