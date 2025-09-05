import OrangeButton from "@/components/buttons/OrangeButton";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="min-h-screen bg-indigo-800 w-full flex flex-col md:flex-row justify-between items-center px-6  md:px-0  md:pl-10 py-10">
      {/* Left Content */}
      <div className="lg:w-1/2 w-full text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:pb-10 leading-tight">
          The Future of <br className="hidden md:block" />security is <br className="hidden md:block" /> Quadra Security
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius alias consequuntur quaerat delectus quasi nihil, reprehenderit omnis voluptates neque aut porro et id! Quisquam voluptates debitis praesentium quam minus deleniti similique delectus, dolore eaque nostrum expedita dolorem incidunt perspiciatis!
        </p>
        <div className="flex justify-center md:justify-start">
          <OrangeButton text="Book Your Free Consultation" />
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 hidden  md:flex justify-center md:justify-end lg:w-1/2 w-full">
        <Image
          src="/HomeImages/HomeHeroImage.png"
          alt="blue camera"
          width={600}
          height={600}
          className="max-w-full h-auto"
          priority
        />
      </div>
      <div className="md:hidden">
        <Image
          src="/HomeImages/HomeHeroImageMobile.png"
          alt="blue camera"
          width={300}
          height={300}
          className="max-w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}