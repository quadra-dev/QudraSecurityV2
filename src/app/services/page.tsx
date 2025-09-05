import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import ServicesHero from "@/components/Hero/ServicesHero";
import services from "@/constants/servicePage/cards.json";
import ServiceCard from "@/components/cards/ServicesCard";

import Image from "next/image";
export default function Contact() {
  return (
    <div>
      <ServicesHero />
       <div className="space-y-12 p-8 bg-gradient-to-b from-[#532D6A] to-[#4D00AB] min-h-screen">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          faqs={service.faqs}
          image={service.image}
          dotSvg="/ServicesImages/glowingdot.svg"
        />
      ))}
    </div>
     
    </div>
  );
}
