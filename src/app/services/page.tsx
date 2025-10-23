// app/services/page.tsx
import services from "@/constants/servicePage/cards.json";
import ServiceCard from "@/components/cards/ServicesCard";

export const metadata = {
  title: "Security Services — CCTV, Biometric & Access Control | Quadra Security",
  description: "Explore Quadra Security's services: CCTV, biometric systems, access control, VDP and maintenance across Gurugram.",
  alternates: { canonical: "https://www.quadrasecurity.com/services" },
  openGraph: {
    title: "Security Services — Quadra Security",
    description: "Explore CCTV, biometric systems, access control and more.",
    url: "https://www.quadrasecurity.com/services",
    images: [{ url: "https://www.quadrasecurity.com/og/services-og.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Security System Installation and Support",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Quadra Security",
    "telephone": "+91-8708187957", // Use a real number if possible
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    }
  },
  "areaServed": { "@type": "Country", "name": "India" },
  "url": "https://www.quadrasecurity.com/services", // Use the canonical URL from your metadata
  "description": "Quadra Security offers a full range of security solutions including CCTV, Access Control, Alarms, and Maintenance.",
};

export default function ServicesPage() {  
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    <div>
      
      <div className="space-y-12 px-4 py-20 sm:px-6 md:px-8 bg-gradient-to-b from-[#1d002e] via-[#2e0152] to-[#4b0082] min-h-screen">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            faqs={service.faqs}
            image={service.image}
            data={service.paragraph}
            dotSvg="/ServicesImages/glowingdot.svg"
          />
        ))}
        {/* <div className="flex justify-center">
          <div className="w-full md:w-[600px]">
            <ServicesFunnelCard />
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
}
