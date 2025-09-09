"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
};

type Props = {
  cards: Card[];
};

export default function AboutPageCarousel({ cards }: Props) {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Start scrolling when component mounts
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleHoverStart = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsPaused(false);
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  };

  return (
    <div className="overflow-hidden w-full py-16">
      <motion.div className="flex gap-6" animate={controls}>
        {[...cards, ...cards].map((card) => (
          <motion.div
            key={card.id + Math.random()}
            className="relative min-w-[280px] max-w-[300px] h-[340px] rounded-[16%] shadow-lg overflow-hidden flex-shrink-0 cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
              {/* Title at the top */}
              <div>
                <h3 className="text-lg font-semibold text-center">
                  {card.id + `) `} {card.title}
                </h3>
                <div className="border-t border-dotted border-gray-300 mt-2"></div>
              </div>

              {/* Description at the bottom */}
              <div>
                <div className="border-t border-dotted border-gray-300 mb-2"></div>
                <p className="text-sm text-gray-100 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
