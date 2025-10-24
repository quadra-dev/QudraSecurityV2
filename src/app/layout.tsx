import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/NavigationBar"
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

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
      <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quadra Security",
            "url": "https://www.quadrasecurity.com",
            "logo": "https://www.quadrasecurity.com/logo.png",
            "description": "Quadra Security provides advanced security solutions including CCTV, surveillance, access control, and more.",
            "sameAs": [
              "https://www.linkedin.com/company/quadra-security",
              "https://www.instagram.com/quadra_security/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8708187957",
              "contactType": "Customer Support",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          }),
        }}
      />
    </Head>
      <body className={`${inter.variable} overflow-x-hidden text-theme-white  bg-gradient-to-b from-[#1d002e] via-[#2e0152] to-[#4b0082]`}>
        <NavigationBar/>
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
