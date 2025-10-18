"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Item {
  src: string;
  text?: string;
  name?: string;
  rating?: number;
}

interface CarouselProps {
  items: Item[];
  direction: "vertical" | "horizontal";
  index: number;
  _paused: boolean;
  setPaused: (value: boolean) => void;
  showOverlay?: boolean;
  gradient?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  direction,
  index,
  _paused,
  setPaused,
  showOverlay = false,
  gradient = "from-black/50 to-transparent",
}) => {
  return (
    <div
      className="relative overflow-hidden w-full h-full rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={direction === "vertical" ? { y: "100%" } : { x: "-100%" }}
          animate={{ x: 0, y: 0 }}
          exit={direction === "vertical" ? { y: "-100%" } : { x: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          <Image
            src={items[index].src}
            alt="carousel item"
            fill
            className="object-cover rounded-xl"
          />
          {showOverlay && (
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-60 rounded-xl`}
            ></div>
          )}
          {showOverlay && (
            <div className="absolute bottom-4 left-4 text-white max-w-[80%]">
              <p className="text-sm italic">“{items[index].text || ""}”</p>
              <p className="mt-2 font-semibold">{items[index].name}</p>
              {items[index].rating && (
                <p className="mt-1 font-bold flex items-center gap-1">
                  {items[index].rating}{" "}
                  <span className="text-yellow-300">★</span>
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function ThreeGridCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const interval = 3000;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3); // sync all carousels with same step
    }, interval);
    return () => clearInterval(timer);
  }, [paused]);

  const verticalItems: Item[] = [
    {
      src: "/images/person1.png",
      text: "Best service ever I have gotten. Perfect to the last moment.",
      name: "Mr. Satya",
      rating: 4.7,
    },
    {
      src: "/images/person2.png",
      text: "Quick installation and friendly staff.",
      name: "Ms. Anjali",
      rating: 4.8,
    },
    {
      src: "/images/person3.png",
      text: "Professional and reliable service!",
      name: "Mr. Rahul",
      rating: 4.9,
    },
  ];

  const horizontalItems1: Item[] = [
    { src: "/images/install1.png" },
    { src: "/images/install2.png" },
    { src: "/images/install3.png" },
  ];

  const horizontalItems2: Item[] = [
    { src: "/images/cctv1.png" },
    { src: "/images/cctv2.png" },
    { src: "/images/cctv3.png" },
  ];

  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4 h-[700px] md:grid-cols-2 md:grid-rows-2 md:h-[600px] w-3/4">
      {/* Carousel 1 (vertical, green gradient + overlay & text) */}
      <div className="row-span-1 md:row-span-2">
        <Carousel
          items={verticalItems}
          direction="vertical"
          index={index}
          _paused={paused}
          setPaused={setPaused}
          showOverlay
          gradient="from-green-400 to-transparent"
        />
      </div>

      {/* Carousel 2 (horizontal, pink gradient) */}
      <div>
        <Carousel
          items={horizontalItems1}
          direction="horizontal"
          index={index}
          _paused={paused}
          setPaused={setPaused}
          showOverlay
          gradient="from-pink-500 to-transparent"
        />
      </div>

      {/* Carousel 3 (horizontal, yellow gradient) */}
      <div>
        <Carousel
          items={horizontalItems2}
          direction="horizontal"
          index={index}
          _paused={paused}
          setPaused={setPaused}
          showOverlay
          gradient="from-yellow-400 to-transparent"
        />
      </div>
    </div>
  );
}
