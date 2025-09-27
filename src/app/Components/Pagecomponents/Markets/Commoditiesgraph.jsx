"use client";
import React, { useEffect, useRef, memo } from "react";

function Commoditiesgraph({ darkMode }) {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: darkMode, 
      dateRange: "12M",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "#DBDBDB",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "TVC:GOLD", d: "Gold" },
            { s: "EIGHTCAP:COCOA", d: "COCOA" },
            { s: "TRADENATION:COFFEE", d: "COFFEE" },
            { s: "TRADENATION:CORN", d: "CORN" },
            { s: "EIGHTCAP:COTTON", d: "COTTON" },
            { s: "MCX:NATURALGAS1!", d: "NATURAL GAS" },
            { s: "TRADENATION:SOYABEAN", d: "SOYABEAN" },
            { s: "TVC:UKOIL", d: "UKOIL" },
            { s: "MCX:ALUMINIUM1!", d: "ALUMINIUM" }
          ],
          originalTitle: "Indices"
        },
        {
          title: "Futures",
          symbols: [
            { s: "BMFBOVESPA:ISP1!", d: "S&P 500" },
            { s: "BMFBOVESPA:EUR1!", d: "Euro" },
            { s: "CMCMARKETS:GOLD", d: "Gold" },
            { s: "PYTH:WTI3!", d: "WTI Crude Oil" },
            { s: "BMFBOVESPA:CCM1!", d: "Corn" }
          ],
          originalTitle: "Futures"
        },
        {
          title: "Bonds",
          symbols: [
            { s: "EUREX:FGBL1!", d: "Euro Bund" },
            { s: "EUREX:FBTP1!", d: "Euro BTP" },
            { s: "EUREX:FGBM1!", d: "Euro BOBL" }
          ],
          originalTitle: "Bonds"
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR to USD" },
            { s: "FX:GBPUSD", d: "GBP to USD" },
            { s: "FX:USDJPY", d: "USD to JPY" },
            { s: "FX:USDCHF", d: "USD to CHF" },
            { s: "FX:AUDUSD", d: "AUD to USD" },
            { s: "FX:USDCAD", d: "USD to CAD" }
          ],
          originalTitle: "Forex"
        }
      ],
      support_host: "https://www.tradingview.com",
      backgroundColor: darkMode === "dark" ? "#0f0f0f" : "#ffffff",
    
      height: "550",
      showSymbolLogo: true,
      showChart: true
    });

    container.current.appendChild(script);
  }, [darkMode]); 

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(Commoditiesgraph);
