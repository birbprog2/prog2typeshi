import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
        <div className="w-full underline text-orange-500 bg-gradient-to-b from-[#F1DABF] to-[#FFF94F]">Yellow Birb</div>
        {children}
      </body>
    </html>
  );
}
