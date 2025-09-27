"use client";
import React, { useEffect, useRef, memo } from "react";

function Metalgraph({ darkMode }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    const isDark = darkMode === "dark";

    script.innerHTML = JSON.stringify({
      lineWidth: 2,
      lineType: 0,
      chartType: "area",
      fontColor: isDark ? "rgb(206, 208, 220)" : "rgb(106, 109, 120)",
      gridLineColor: isDark ? "rgba(242, 242, 242, 0.06)" : "rgba(0, 0, 0, 0.06)",
      volumeUpColor: "rgba(34, 171, 148, 0.5)",
      volumeDownColor: "rgba(247, 82, 95, 0.5)",
      backgroundColor: isDark ? "#0F0F0F" : "#FFFFFF",
      widgetFontColor: isDark ? "#DBDBDB" : "#333333",
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
      colorTheme: darkMode, 
      isTransparent: false,
      locale: "en",
      chartOnly: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      valuesTracking: "1",
      changeMode: "price-and-percent",
      symbols: [
        ["TVC:SILVER|1D"],
        ["TVC:GOLD|1D"],
        ["TVC:PLATINUM|1D"]
      ],
      dateRanges: [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ],
      fontSize: "10",
      headerFontSize: "medium",
      autosize: true,
      noTimeScale: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false
    });

    container.current.appendChild(script);
  }, [darkMode]); 

  return (
    <div className="tradingview-widget-container min-h-[500px] h-full" ref={container}>
      <div className="tradingview-widget-container__widget min-h-[500px] h-full"></div>
    </div>
  );
}

export default memo(Metalgraph);
