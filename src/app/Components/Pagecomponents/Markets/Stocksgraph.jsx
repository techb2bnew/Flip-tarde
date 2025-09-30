"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ darkMode }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;

    const isDark = darkMode === "dark";

    script.innerHTML = JSON.stringify({
      exchange: "US",
      colorTheme: darkMode, 
      dateRange: "1M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: isDark
        ? "rgba(240, 243, 250, 0)"
        : "rgba(0, 0, 0, 0.08)",
      scaleFontColor: isDark ? "#DBDBDB" : "#333333",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      autosize: true,
      height: 550
    });

    container.current.appendChild(script);
  }, [darkMode]); 

  return (
    <div className="tradingview-widget-container !w-full" ref={container}>
      <div className="tradingview-widget-container__widget "></div>
    </div>
  );
}

export default memo(TradingViewWidget);
