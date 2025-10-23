// app/metadata.ts
import { Metadata } from "next";

const SITE_URL = "https://www.quadrasecurity.com"; // your live domain
const SITE_NAME = "Quadra Security";
const DEFAULT_TITLE = "Quadra Security — CCTV, Biometric & Security Systems in Gurugram";
const DEFAULT_DESCRIPTION =
  "Quadra Security offers CCTV installation, biometric access, and complete security solutions for homes and businesses in Gurugram.";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Quadra Security",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og/default-og-image.png`, // recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Quadra Security - Trusted Security Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(SITE_URL),
  other: {
    "linkedin:profile": "https://www.linkedin.com/company/quadra-security/", // 👈 added LinkedIn reference
  },
};
