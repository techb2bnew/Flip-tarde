import React from "react";
import Pipbanner from "../Components/Pagecomponents/Pipbanner";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Pipuse from "../Components/Pagecomponents/Pipuse";
import Pipvalue from "../Components/Pagecomponents/Pipvalue";
import Pipcalculator from "../Components/Pagecomponents/Pipcalculator";

function page() {
  return (
    <div>
      <Pipbanner />
      <Pipworkstep />
      {/* <Pipcalculator /> */}
      <Pipuse />
      <Pipvalue/>
    </div>
  );
}

export default page;
