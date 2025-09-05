import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="h-auto w-full  bg-gradient-to-b from-[#040630] to-[#1F07DE]">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-8xl font-bold text-[#B7D3FF] text-shadow-md">
            Services
          </h1>
          <p className="text-lg white">
            Quadra Security: Committed to<br/>
            Safeguarding Your Home, Business,<br/>
            and Community
          </p>
          <button className="px-6 py-3 bg-[#434CFF] text-white rounded-3xl shadow-md hover:bg-yellow-600">
            Explore Services
          </button>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/ServicesImages/servicesheroimage.svg"
            alt="Hero Image"
            width={500}
            height={600}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
