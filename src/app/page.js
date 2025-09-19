import React from "react";
import Banner from "./Components/Pagecomponents/Banner";
import Homemarquee from "./Components/Pagecomponents/Homemarquee";
import Buildtrader from "./Components/Pagecomponents/Buildtrader";
import Nextgen from "./Components/Pagecomponents/Nextgen";
import Exploremarket from "./Components/Pagecomponents/Exploremarket";
import Workprocess from "./Components/Pagecomponents/Workprocess";
import Tradingaccounts from "./Components/Pagecomponents/Tradingaccounts";

function page() {
  return (
    <div className="bg-black">
      <Banner />
      <p className="pb-24" />
      <Homemarquee />
      <Buildtrader/>
      <Nextgen/>
      <Exploremarket/>
      <Workprocess />
      <Tradingaccounts/>
    </div>
  );
}

export default page;
