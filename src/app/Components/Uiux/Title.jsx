import React from "react";

const Title = ({ title, color,hovercolor}) => {
  return (
    <h2
      className={`${color}  font-medium title_text`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default Title;
