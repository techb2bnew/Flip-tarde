"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ darkMode }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: darkMode, 
      isTransparent: false,
      locale: "en",
      height: 550,
    });

    container.current.appendChild(script);
  }, [darkMode]); 

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
