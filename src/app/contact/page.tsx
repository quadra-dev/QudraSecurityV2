import FaqCard from "@/components/Accordion/FaqCard";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export const metadata = {
  title: "Contact Quadra Security — Book Free Site Visit",
  description: "Contact Quadra Security to book a free site visit, request a quotation, or get support for CCTV and access control installations in Gurugram.",
  alternates: { canonical: "https://www.quadrasecurity.com/contact-us" },
  openGraph: {
    title: "Contact Quadra Security",
    description: "Book a free site visit for CCTV installation and security consultation.",
    url: "https://www.quadrasecurity.com/contact-us",
    images: [{ url: "https://www.quadrasecurity.com/og/contact-og.png", width: 1200, height: 630 }],
  }
};


export default function Contact() {
  return (
    <div className="h-auto w-full ">
      <ContactForm1 />
      <div className="bg-white">
        <h2 className="text-5xl text-gray-900 font-bold text-center p-5">
          Frequently Asked Questions
        </h2>
        <div className="bg-white flex flex-col items-center justify-center  p-6">
          <FaqCard
            question=" How does Quadra Security’s CCTV solution operate?"
            answer="Our CCTV systems integrate HD/IP cameras, NVRs, and cloud connectivity to provide real-time 
                    monitoring and smart analytics. Footage can be accessed remotely via secure mobile or desktop 
                    dashboards for complete situational awareness. "
          />
          <FaqCard
            question=" Can CCTV be integrated with other security systems? "
            answer="Yes! We specialize in integrating CCTV with access control, alarm systems, and ANPR cameras for 
                    unified security management and event-based automation.r"
          />
          <FaqCard
            question="How do biometric systems enhance operational efficiency?"
            answer="Our systems automate attendance tracking, eliminate proxy access, and generate instant reports — 
                    improving workforce accountability and administrative accuracy. "
          />
          <FaqCard
            question="Can ANPR data be used for automation and record-keeping? "
            answer="Yes! The data seamlessly integrates with toll, parking, and gate management systems for automated 
                    entry, billing, and audit trails."
          />
          <FaqCard
            question="Do you offer remote maintenance or upgrades? "
            answer="Absolutely! Our team provides remote diagnostics, firmware updates, and priority on-site support to 
                    ensure uninterrupted communication. "
          />
          <FaqCard
            question=" Do you provide complete installation and support services?"
            answer="Absolutely! Quadra Security provides end-to-end services including delivery, installation, 
                    configuration, and after-sales maintenance to ensure smooth operation and long-term reliability."
          />
        </div>
      </div>
    </div>
  );
}
