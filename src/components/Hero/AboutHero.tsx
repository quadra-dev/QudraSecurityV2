import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="h-auto w-full ">
      <div className="min-h-screen w-full realtive ">
        <div className="w-full flex  top-[25%] absolute flex-col items-center justify-center gap-5">
          <h1 className="font-black text-center text-7xl">Our Story</h1>
          <p className="text-center sm:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
            vero delectus? Nesciunt magni ea quo aspernatur accusantium ad nisi
            voluptate optio. Voluptates accusamus cumque provident consectetur
            rerum corporis ea, dignissimos quasi! Quis eveniet id, in illum non
            dolore nisi ducimus doloremque veniam iusto voluptatibus ut voluptas
            error inventore expedita.
          </p>
        </div>
        <div className="absolute md:w-[80%] flex justify-between left-[50%] -translate-x-[50%] flex-row gap-10 bottom-0 translate-y-[30%]">
          <Image
            src="/AboutImages/AboutHeroImage1.png"
            alt="Building"
            width={328}
            height={369}
            className=""
          />
          <Image
            src="/AboutImages/AboutHeroImage2.png"
            alt="Building"
            width={328}
            height={369}
            className="relative -translate-y-[20%]"
          />
          <Image
            src="/AboutImages/AboutHeroImage3.png"
            alt="Building"
            width={328}
            height={369}
            className=""
          />
        </div>
        {/* <div className="h-screen"></div> */}
      </div>
    </div>
  );
}