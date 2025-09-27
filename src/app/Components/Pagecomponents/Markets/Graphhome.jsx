"use client";
import React, { useState } from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Forexgraph from "./Forexgraph";
import Indicesgraph from "./Indicesgraph";
import Commoditiesgraph from "./Commoditiesgraph";
import Cryptocurrencygraph from "./Cryptocurrencygraph";
import Metalgraph from "./Metalgraph";
import Stocksgraph from "./Stocksgraph";

const Graphhome = ({ title, discription, pagepath }) => {
  const [darkMode, setDarkMode] = useState("light");

  const toggleDarkMode = () => {
    setDarkMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`py-12 md:py-18 lg:py-24 xl:py-32 bg-white`}>
      <div className="inn_container">
        <div className="grid  text-center xl:text-start xl:grid-cols-2 max-w-[700px] md:max-w-[unset]">
          <div className="flex justify-center xl:justify-start">
            <Title title={title} color={"text-secondary"} />
          </div>
          <div className="flex justify-center xl:justify-start">
            <Discription dispription={discription} color={"text-ternary"} />
          </div>
        </div>

        <div className="pt-12 2xl:max-w-[1380px] m-auto relative">
          {
            pagepath === "/forex" ? <Forexgraph darkMode={darkMode} />
            : pagepath === "/indices" ? <Indicesgraph darkMode={darkMode} /> 
            : pagepath === "/commodities" ? <Commoditiesgraph darkMode={darkMode} /> 
            : pagepath === "/cryptocurrency" ? <Cryptocurrencygraph darkMode={darkMode} /> 
            : pagepath === "/metals" ? <Metalgraph darkMode={darkMode} /> 
            : pagepath === "/stocks" ? <Stocksgraph darkMode={darkMode} />
            : null 
          } 

          <div className="absolute top-[10px] right-3">
            <button
              onClick={toggleDarkMode}
              className="relative w-16 h-8 rounded-full bg-gray-300 transition-colors duration-500 p-1"
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500
                ${darkMode === "dark" ? "translate-x-8" : "translate-x-0"}`}
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-500 text-xs">
                ☀️
              </span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 text-xs">
                🌙
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphhome;
