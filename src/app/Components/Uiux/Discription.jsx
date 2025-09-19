import React from "react";

const Discription = ({ dispription, color }) => {
  return (
    <p
      className={`description_text font-light w-max font_ternary  ${color}`}
      dangerouslySetInnerHTML={{ __html: dispription }}
    />
  );
};

export default Discription;
