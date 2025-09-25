// import React from "react";
// import Marquee from "react-fast-marquee";
// import marqueeimg1 from "../../../../public/images/maerquee1.webp";
// import marqueeimg2 from "../../../../public/images/maerquee2.webp";
// import marqueeimg3 from "../../../../public/images/maerquee3.webp";
// import marqueeimg4 from "../../../../public/images/maerquee4.webp";
// import Image from "next/image";

// const marqueedata = [
//   {
//     id: 1,
//     marqueeimg: marqueeimg1,
//     stockname: "S&P 500 Index",
//     stockprice: "6,507.5",
//     stockchange: -8.5
//   },
//   {
//     id: 2,
//     marqueeimg: marqueeimg2,
//     stockname: "US 100 Cash CFD",
//     stockprice: "23,818.3",
//     stockchange: 57.2
//   },
//   {
//     id: 3,
//     marqueeimg: marqueeimg3,
//     stockname: "Bitcoin",
//     stockprice: "113,038",
//     stockchange: 940
//   },
//   {
//     id: 4,
//     marqueeimg: marqueeimg4,
//     stockname: "Ethereum",
//     stockprice: "4,369.1",
//     stockchange: 63.0
//   },
//   {
//     id: 5,
//     marqueeimg: marqueeimg1,
//     stockname: "S&P 500 Index",
//     stockprice: "6,507.5",
//     stockchange: -8.5
//   },
//   {
//     id: 6,
//     marqueeimg: marqueeimg2,
//     stockname: "US 100 Cash CFD",
//     stockprice: "23,818.3",
//     stockchange: 57.2
//   },
//   {
//     id: 7,
//     marqueeimg: marqueeimg3,
//     stockname: "Bitcoin",
//     stockprice: "113,038",
//     stockchange: 2800
//   },
//   {
//     id: 8,
//     marqueeimg: marqueeimg4,
//     stockname: "Ethereum",
//     stockprice: "4,369.1",
//     stockchange: 63.0
//   }
// ];

// export default function Homemarquee() {
//   return (
//     <div className="relative top-8">
//       <Marquee>
//         {marqueedata.map(data => {
//           const price = parseFloat(data.stockprice.replace(/,/g, ""));
//           const change = data.stockchange;
//           const percent = (change / price * 100).toFixed(2);
//           return (
//             <div
//               key={data.id}
//               className="text-2xl mx-6 bg-[#ffffff] py-4 2xl:py-5 px-10 2xl:px-12 rounded-[50px] shadow-[3px_1px_20px_0px_#6a40ec59] my-3"
//             >
//               <div className="flex items-center font_secondary ">
//                 <Image
//                   src={data.marqueeimg}
//                   alt={data.stockname}
//                   width={24}
//                   height={24}
//                   className="inline-block mr-2 rounded-[50%]"
//                 />
//                 <p className="text-base font-semibold text-black">
//                   {data.stockname}{" "}
//                   <span className="mx-2 text-base font-[400]">
//                     {data.stockprice}
//                   </span>
//                 </p>

//                 {change > 0
//                   ? <p className="text-[#00A446] text-base font-light">
//                       {`+${change} (${percent}%)`}
//                     </p>
//                   : <p className="text-red-400 text-base font-light">
//                       {`${change} (${percent}%)`}
//                     </p>}
//               </div>
//             </div>
//           );
//         })}
//       </Marquee>
//     </div>
//   );
// }

// TradingViewWidget.jsx
"use client";
import React, { useEffect, useRef, memo } from "react";

function Homemarquee() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100 Cash CFD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "colorTheme": "light",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="bg-white py-4 relative z-[2] top-5">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
}

export default memo(Homemarquee);
