import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/NavigationBar"

import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // will hook into Tailwind
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden text-theme-white  bg-gradient-to-b from-[#1d002e] via-[#2e0152] to-[#4b0082]`}>
        <NavigationBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
