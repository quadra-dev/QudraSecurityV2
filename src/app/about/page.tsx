import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
export default function Contact() {
  return (
    <div>
      <AboutHero />
      <div className="bg-indigo-800 min-h-screen  ">
        <div className="mx-auto w-[90%]">
          <h2 className="font-semibold text-center text-3xl md:text-5xl lg:text-7xl pt-30 text-[#FF850B]">
            Security | Surveillance | Safety | Support{" "}
          </h2>
          <p className=" pt-7">
            We at Quadra Security believe security should be reliable,
            accessible, and trustworthy. We provide the best security solution
            designed to meet your property needs, using technologies from the
            most trusted brands. We offer the advanced CCTV cameras, EPABX
            systems, and alarm systems to baggage scanners, biometric devices,
            and other smart security solutions for your complete security
          </p>
          <p className=" pt-7">
            Our strength lies in our four core pillars
          </p>
          <Image
          src="/AboutImages/aboutcirculars.svg"
            alt="about"
            width={600}                 
            height={500}
            className="mx-auto py-4"/>
          <h2 className="font-semibold text-center text-3xl md:text-4xl lg:text-6xl pt-3 ">
            What <span className="text-[#FF850B]">We Offer</span>?{" "}
          </h2>
          <p className=" pt-7 text-center">
            We at Quadra Security believe security should be reliable,
            accessible, and trustworthy. We provide the best security solution
            designed to meet your property needs, using technologies from the
            most trusted brands. We offer the advanced CCTV cameras, EPABX
            systems, and alarm systems to baggage scanners, biometric devices,
            and other smart security solutions for your complete security
          </p>
        </div>
      </div>
      <ContactForm1/>
    </div>
  );
}
