import AboutPageCarousel from "@/components/carousels/AboutPageCarousel";
import HomePageCarousel from "@/components/carousels/HomePageCarousel";
import HomeHero from "@/components/Hero/HomeHero";
import HomeMarquee from "@/components/Marquee/HomeMarquee";
import Image from "next/image";
import Link from "next/link";
import cardsData from "@/constants/aboutPage/cards.json";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import ThreeGridCarousel from "@/components/carousels/ThreeGridCarousel";
import WhyChooseUs from "@/components/cards/WhyChooseUs";

export default function Home() {
  const Offerings = [
    "/HomeImages/WhatWeOffer/Apartments.png",
    "/HomeImages/WhatWeOffer/Retail.png",
    "/HomeImages/WhatWeOffer/Campus.png",
    "/HomeImages/WhatWeOffer/Hotel.png",
    "/HomeImages/WhatWeOffer/Bank.png",
  ];
  const links = [
    "/solutions/apartments",
    "/solutions/retail",
    "/solutions/campus",
    "/solutions/hotels",
    "/solutions/retail",
  ];
  return (
    <div>
      <HomeHero />

      <div className="w-full min-h-screen bg-gradient-to-b from-[#1d002e] via-[#2e0152] to-[#4b0082]">
        {/* comp 1 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          What <span className="text-[#FF850B]">We Offer</span>?
        </h2>
        <p className=" pt-3  p-3 lg:w-3/4 mx-auto">
          At <b>Quadra Security</b>, we provide professional{" "}
          <b>CCTV installation</b>, <b>ANPR systems</b>, <b>EPABX</b>,{" "}
          <b>boom barriers</b>, <b>video door phones</b>, and{" "}
          <b>interactive display panels</b> across <b>Gurgaon, Delhi NCR</b>,
          and beyond. Our customized security solutions ensure reliable
          protection for <b>apartments, banks, hotels, campuses, resorts</b>,
          and other commercial or residential spaces. Secure your premises with
          trusted experts.
        </p>

        <div className="flex p-10 gap-5 justify-center flex-wrap">
          {Offerings.map((Offering, idx) => {
            return (
              <div className="relative" key={idx}>
                <Image
                  src={Offering}
                  key={idx}
                  alt="offering"
                  width={200}
                  height={200}
                />
                <Link
                  href={links[idx]}
                  className="absolute bottom-5 hover:underline text-sm font-semibold text-[#2D1212] hover:text-[#D83C15] text-center w-full"
                >
                  View More
                </Link>
              </div>
            );
          })}
        </div>
        {/* comp 2 */}
        <h2 className="text-5xl  pt-15 font-bold text-center">
          Explore <span className="text-[#FF850B]">Our Services</span>
        </h2>
        <p className=" pt-3 p-3 lg:w-3/4 mx-auto">
          Discover comprehensive <b>security and surveillance</b> solutions with{" "}
          <b>Quadra Security</b>, your trusted partner for{" "}
          <b>CCTV installation</b>, <b>ANPR systems</b>, <b>EPABX setups</b>,{" "}
          <b>boom and toll barriers</b>, <b>video door phones</b>, and{" "}
          <b>interactive display panels</b>. We deliver end-to-end,
          high-performance systems tailored for{" "}
          <b>apartments, banks, hotels, campuses, resorts</b>, and{" "}
          <b>corporate offices</b>. Serving <b>Gurgaon, Delhi NCR</b>, and
          nearby regions, our expert team ensures seamless installation,
          integration, and maintenance — helping you create a safer, smarter,
          and more connected environment for both residential and commercial
          spaces.
        </p>
        <div className="pt-10">
          <HomePageCarousel />
        </div>
        {/* comp 3 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          Brands <span className="text-[#FF850B]">We Deal</span> In
        </h2>
        <HomeMarquee />
        {/* <h2 className="text-5xl pt-15 font-bold text-center">
          Why <span className="text-[#FF850B]">Choose </span> Us
        </h2>
        <AboutPageCarousel cards={cardsData} />
        <h2 className="text-5xl pt-15 font-bold text-center">
          Our <span className="text-[#FF850B]">Moto </span>
        </h2>
        <Image
          src="/AboutImages/aboutcirculars.svg"
          alt="about"
          width={600}
          height={500}
          className="mx-auto py-10"
        /> */}
        <WhyChooseUs />
        <div className="min-h-screen w-full flex items-center flex-col justify-center bg-white py-8">
          <h2 className="md:text-5xl text-3xl pt-15 text-black font-bold pb-10 w-3/4">
            What our clients are saying
          </h2>
          <ThreeGridCarousel />
        </div>
        <ContactForm1 />
      </div>
    </div>
  );
}
