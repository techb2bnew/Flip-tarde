import React from "react";

const Title = ({ title, color,ish1}) => {
  return (
    <>
    {
      ish1 ?
      <h1
      className={`${color}  font-medium title_text`}
      dangerouslySetInnerHTML={{ __html: title }}
    /> 
    :
    <h2
      className={`${color}  font-medium title_text`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    }
    </>
  );
};

export default Title;
