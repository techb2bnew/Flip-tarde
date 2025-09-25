"use client";
import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = ({ darkMode }) => {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      market: "forex",
      showToolbar: true,
      defaultColumn: "overview",
      defaultScreen: "general",
      isTransparent: false,
      locale: "en",
      colorTheme: darkMode, 
      width: "100%",
      height: 643,
    });

    container.current.appendChild(script);
  }, [darkMode]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
};

export default memo(TradingViewWidget);
