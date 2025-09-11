"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/HomeImages/HomeCarouselImage/BankSecurity.jpg",
    heading: "Heading One",
    text: "This is the first paragraph description for slide one."
  },
  {
    id: 2,
    image: "/HomeImages/HomeCarouselImage/BankSecurity.jpg",
    heading: "Heading Two",
    text: "This is the second paragraph description for slide two."
  },
  {
    id: 3,
    image: "/HomeImages/HomeCarouselImage/BankSecurity.jpg",
    heading: "Heading Three",
    text: "This is the third paragraph description for slide three."
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto switch with timer
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-[80%] mx-auto h-[500px] overflow-hidden rounded-lg shadow-sm">
      {/* Tabs at top */}
      {/* <div className="absolute top-4 left-4 flex gap-4 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              current === index ? "bg-white text-black" : "bg-black/50 text-white"
            }`}
          >
            {slide.heading}
          </button>
        ))}
      </div> */}

      {/* Image Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          <motion.div
            key={slides[current].id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].heading}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Heading & Paragraph */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <AnimatePresence mode="wait">
            <motion.h2
              key={slides[current].heading}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white drop-shadow-md"
            >
              {slides[current].heading}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[current].text}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-white max-w-md drop-shadow-md"
            >
              {slides[current].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-6 rounded-full transition-all duration-300 ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}