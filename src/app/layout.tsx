import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import Footer from "@/components/Footer/Footer";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

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
      <body className={`${inter.variable} text-theme-white bg-solution-purple`}>
        <NavigationMenu />
        {children}
        <ContactForm1/>
        <Footer />
      </body>
    </html>
  );
}
