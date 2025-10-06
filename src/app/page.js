import React from "react";
import Banner from "./Components/Pagecomponents/Banner";
import Homemarquee from "./Components/Pagecomponents/Homemarquee";
import Buildtrader from "./Components/Pagecomponents/Buildtrader";
import Nextgen from "./Components/Pagecomponents/Nextgen";
import Exploremarket from "./Components/Pagecomponents/Exploremarket";
import Workprocess from "./Components/Pagecomponents/Workprocess";
import Tradingaccounts from "./Components/Pagecomponents/Tradingaccounts";
import Tradeyourway from "./Components/Pagecomponents/Tradeyourway";
import tradeyouwaygraf from "/public/images/tradeyouwaygraf.webp";

function page() {
  return (
    <div className="bg-black">
      <Banner />
      <Homemarquee />
      <Buildtrader />
      <Nextgen />
      <Exploremarket />
      <Workprocess />
      <Tradingaccounts />
      <Tradeyourway/>
    </div>
  );
}

export default page;
