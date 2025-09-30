"use client";
import { useState } from "react";
import plus from "../../../../public/icons/plus.svg";
import Image from "next/image";
const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[900px] 2xl:max-w-7xl m-auto pt-6 md:pt-12 xl:pt-16">
      <div className="flex flex-col gap-4 md:gap-5 font_secondary">
        {faqData.map((faq, index) =>
          <div
            key={index}
            className="bg-[#F3EFFF] px-6 2xl:px-8 py-3 2xl:py-4  border-[2px] border-solid border-[#2962FF40] rounded-[10px] md:rounded-[20px] 2xl:rounded-3xl  transition-all duration-500 ease-in-out"
          >
            {/* Question */}
            <div
              onClick={() => toggleAnswer(index)}
              className={` cursor-pointer text-primary font-normal text-[17px] md:text-xl 2xl:text-[25px] flex justify-between items-center transition-all duration-500   ease-in-out`}
            >
              {index + 1}. {faq.question}
              <span
                className={`ml-2 transform   transition-all duration-500 ease-in-out ${activeIndex ===
                index
                  ? "rotate-135"
                  : "rotate-0"}`}
              >
                <Image
                  src={plus}
                  alt="#"
                  width={1000}
                  height={500}
                  className="max-w-[18px] md:max-w-6"
                />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px"
              }}
            >
              <div className=" text-secondary text-base 2xl:text-xl font-light py-2 ps-[2%] text-start">
                {faq.answer}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
