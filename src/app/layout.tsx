import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/navigation/NavigationMenu";
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
      <body className={`${inter.variable} text-theme-white bg-gradient-to-b from-purple-950 to-purple-600`}>
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
