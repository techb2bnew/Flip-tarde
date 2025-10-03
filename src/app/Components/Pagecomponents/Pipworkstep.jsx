import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";

const workstep = [
  {
    title: "Account Currency",
    description: "Select your trading account <br/> currency."
  },
  {
    title: "Currency Pair",
    description: "Choose the pair you’re trading <br/> (e.g., EUR/USD)."
  },
  {
    title: "Currency Pair",
    description: "Enter your position size."
  }
];
export default function Pipworkstep() {
  return (
    <div className="bg-white py-12 md:py-18 lg:py-32">
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start">
          <div>
            <Title
              title="What Is a Pip? & <br/> How it works"
              color="text-secondary"
            />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription="A pip (percentage in point) is the <br/> smallest price movement a currency <br/> pair can make based on market convention."
              color="text-secondary"
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto">
            {workstep.map((data, index) =>
              <div key={index}>
                <div className="m-auto w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                  0{index + 1}
                </div>
                <div className="pt-10">
                  <div className="text-center">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium text-primary text-center">
                      {data.title}
                    </p>
                    <span
                      className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px]"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
