"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const images = [
  "/contactImages/ContactFormIMG1.png",
  "/images/car2.jpg",
  "/images/car3.jpg",
];

export default function ContactFormCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="  w-[85%] h-120 left-0   absolute mx-auto overflow-hidden rounded-lg ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-3xl font-bold mb-5">Why Choose <span className="text-[#FF850B]">Quadra Security</span>?</h2>
                <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        Specialized in residential security for 10+ years
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        Custom solutions for each property's unique needs
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        Integration with existing building systems
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        24/7 professional monitoring available
                    </div>
                </div>
                 <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        Regular system maintenance & updates
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="bg-[#FF850B] size-10 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-2xl " />
                    </div>
                    <div className="text-lg px-3 flex items-center">
                        Competitive pricing for HOAs & developers
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`size-3 rounded-full transition-colors ${
              current === index ? "bg-white scale-80" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
{/* <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0} // optional: make first load faster
            /> */}
