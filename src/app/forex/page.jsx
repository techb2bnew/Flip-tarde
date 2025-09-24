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
export default function page() {
  return (
    <div>
      <Marketbanner
        banner_title="Forex Trading | Online <br/> FX Trading"
        banner_discription="The FX market moves over $5 trillion daily, making it the <br/> world’s largest and most liquid."
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
