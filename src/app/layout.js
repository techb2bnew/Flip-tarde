import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Uiux/Header";
const monaSans = localFont({
  src: [
    { path: "../../public/fonts/Mona-Sans-MediumWide.ttf"},
  ],

  variable: "--font-mona-sans",
});
const monaSansnormal = localFont({
  src: [
    { path: "../../public/fonts/Mona-Sans.ttf"},
  ],

  variable: "--font-mona-sans-normal",
});
const monaSansnormallight = localFont({
  src: [
    { path: "../../public/fonts/Mona-Sans-LightWide.ttf"},
  ],

  variable: "--font-mona-sans-normallight",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} ${monaSansnormal.variable} ${monaSansnormallight.variable} antialiased`} cz-shortcut-listen="true">
        <div className="main_outer_container">
         <div className="absolute w-full max-w-[1960px] z-[999] bg-[linear-gradient(1deg,rgba(255,255,255,0)_15%,rgb(0_0_0_/_76%)_99%)]">
           <Header/>
          </div>  
           {children}
        </div>
      </body>
    </html>
  );
}
