// app/page.tsx
import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient"; // New client wrapper

export const metadata: Metadata = {
  title: "CCTV Installation in Gurugram | Quadra Security",
  description:
    "Quadra Security provides expert CCTV installation, biometric systems, and site visits across Gurugram. Book a free consultation today.",
  alternates: { canonical: "https://www.quadrasecurity.com/" },
  openGraph: {
    title: "CCTV Installation in Gurugram | Quadra Security",
    description:
      "Quadra Security provides expert CCTV installation, biometric systems, and site visits across Gurugram. Book a free consultation today.",
    url: "https://www.quadrasecurity.com/",
    images: [
      {
        url: "https://www.quadrasecurity.com/og/home-og.png",
        width: 1200,
        height: 630,
        alt: "Quadra Security - CCTV Gurugram",
      },
    ],
    siteName: "Quadra Security",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: {
    "linkedin:profile": "https://www.linkedin.com/company/quadra-security",
  },
};

export default function HomePage() {
  // ✅ Server Component — metadata now works
  return <HomeClient />;
}
