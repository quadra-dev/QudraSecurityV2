import AboutPageCarousel from "@/components/carousels/AboutPageCarousel";
import HomePageCarousel from "@/components/carousels/HomePageCarousel";
import HomeHero from "@/components/Hero/HomeHero";
import HomeMarquee from "@/components/Marquee/HomeMarquee";
import Image from "next/image";
import Link from "next/link";
import cardsData from "@/constants/aboutPage/cards.json";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import ThreeGridCarousel from "@/components/carousels/ThreeGridCarousel";

export default function Home() {
  const Offerings = [
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
    "/HomeImages/WhatWeOfferImage1.png",
  ];
  return (
    <div>
      <HomeHero />

      <div
        className="w-full min-h-screen bg-gradient-to-b from-[#1d002e] via-[#2e0152] to-[#4b0082]"
      >
        {/* comp 1 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          What <span className="text-[#FF850B]">We Offer</span>?
        </h2>
        <p className="text-center pt-3 lg:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet
          aspernatur nostrum itaque excepturi omnis nulla commodi necessitatibus
          doloribus doloremque! Consequatur ullam error nostrum, perspiciatis
          nemo non ipsa laboriosam eos.
        </p>
        <div className="flex p-10 gap-5 justify-center flex-wrap">
          {Offerings.map((Offering, idx) => {
            return (
              <div className="relative" key={idx}>
                <Image
                  src={Offering}
                  key={idx}
                  alt="offering"
                  width={150}
                  height={150}
                />
                <Link
                  href="/contact"
                  className="absolute bottom-5 hover:underline text-sm font-semibold text-[#2D1212] hover:text-[#D83C15] text-center w-full"
                >
                  View More
                </Link>
              </div>
            );
          })}
        </div>
        {/* comp 2 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          Explore <span className="text-[#FF850B]">Our Services</span>
        </h2>
        <p className="text-center pt-3 lg:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit, eos dolorum nobis quidem voluptatibus. Dolores est hic
          sit. Expedita suscipit maiores modi numquam. Fugit architecto enim
          eligendi, excepturi expedita corporis perspiciatis eius, dignissimos,
          qui perferendis eos vitae odit ipsa asperiores! Atque earum vero,
          soluta rem, vitae modi eum illo fuga tempora cum quos veniam
          perferendis qui laudantium beatae ab?
        </p>
        <div className="pt-10">
          <HomePageCarousel />
        </div>
        {/* comp 3 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          Brands <span className="text-[#FF850B]">We Deal</span> In
        </h2>
        <HomeMarquee />
        <h2 className="text-5xl pt-15 font-bold text-center">
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
        />
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
