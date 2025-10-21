// app/services/page.tsx
import services from "@/constants/servicePage/cards.json";
import ServiceCard from "@/components/cards/ServicesCard";

export default function ServicesPage() {
  return (
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
  );
}
