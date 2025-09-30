import React from "react";

function Thankyoubanner() {
  return (
    <div className="pt-42">
      <div className="min-h-[475px]  p-4 lg:p-10 border-2 border-[#00000033] rounded-[44px] flex justify-center items-center">
        <div className=" text-xl md:text-2xl lg:text-3xl text-center xl:text-5xl leading-7 md:leading-8 lg:leading-10 xl:leading-14 null  font-medium text-primary">
          Your From has been submited, <br /> We will connect with you shorly.
          <br />
          <br />
          <p className="font-semibold text-center  text-xl md:text-2xl lg:text-3xl xl:text-6xl leading-7 md:leading-8 lg:leading-10 xl:leading-18">
            Thank You !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thankyoubanner;
