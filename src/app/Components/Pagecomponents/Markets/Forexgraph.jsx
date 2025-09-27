"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ darkMode }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "${darkMode}",
        "isTransparent": false,
        "locale": "en",
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "CNY"
        ],
        "backgroundColor": "${darkMode}",
        "height": 600
      }`;

    container.current.appendChild(script);
  }, [darkMode]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
