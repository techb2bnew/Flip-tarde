import React from "react";
import Banner from "./Components/Pagecomponents/Banner";
import Homemarquee from "./Components/Pagecomponents/Homemarquee";
import Buildtrader from "./Components/Pagecomponents/Buildtrader";
import Nextgen from "./Components/Pagecomponents/Nextgen";

function page() {
  return (
    <div className="bg-black">
      <Banner />
      <p className="pb-24" />
      <Homemarquee />
      <Buildtrader/>
      <Nextgen/>
    </div>
  );
}

export default page;
