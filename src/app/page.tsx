import HomePageCarousel from "@/components/carousels/HomePageCarousel";
import HomeHero from "@/components/Hero/HomeHero";
import HomeMarquee from "@/components/Marquee/HomeMarquee";
import Image from "next/image";
import Link from "next/link";

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

      <div className="w-full min-h-screen bg-gradient-to-b from-purple-950 to-purple-800">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit, eos dolorum nobis quidem voluptatibus. Dolores est hic sit. Expedita suscipit maiores modi numquam. Fugit architecto enim eligendi, excepturi expedita corporis perspiciatis eius, dignissimos, qui perferendis eos vitae odit ipsa asperiores! Atque earum vero, soluta rem, vitae modi eum illo fuga tempora cum quos veniam perferendis qui laudantium beatae ab?
        </p>
        <div className="pt-10">
          <HomePageCarousel/>
        </div>
        {/* comp 3 */}
        <h2 className="text-5xl pt-15 font-bold text-center">
          Brands <span className="text-[#FF850B]">We Deal</span> In
        </h2>
        <HomeMarquee />
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
