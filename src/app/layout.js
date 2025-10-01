import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Uiux/Header";
import Fotter from "./Components/Uiux/Fotter";
import Canonical from "./Canonical";
import GoogleAnalytics from "./GoogleAnalytics";
const monaSans = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans"
});
const monaSansnormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans.ttf" }],

  variable: "--font-mona-sans-normal"
});
const monaSansnormallight = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight"
});
const monaSanswidenormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-UltraLightWide.ttf" }],

  variable: "--font-mona-sans-monaSanswidenormal"
});
export const metadata = {
  title: "Best Forex & Multi-Asset Trading Platform | FlipTrade Group",
  description:
    "Trade forex, stocks, cryptos, commodities & metals with FlipTrade — low spreads, fast execution, secure platform. Start your trading journey today.",
  verification: {
    google: "KgCqFoO6NlFNiJg06rxf_0u6vjoiAAGn4sVMH_X-1aQ"
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Canonical />
      </head>
      <body
        className={`${monaSans.variable} ${monaSansnormal.variable} ${monaSansnormallight.variable} ${monaSanswidenormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <GoogleAnalytics />
        <div className="main_outer_container">
          <div className="absolute w-full max-w-[1960px] z-[999] bg-[linear-gradient(1deg,rgba(255,255,255,0)_15%,rgb(0_0_0_/_76%)_99%)]">
            <Header />
          </div>
          {children}
          <Fotter />
        </div>
      </body>
    </html>
  );
}
