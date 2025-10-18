"use client";

import { useState, useEffect } from "react";
// Import useMotionValue for better control over the animation value
import { motion, useAnimation, useMotionValue } from "framer-motion"; 
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

// Define the full duration for one complete scroll cycle (adjust as needed)
const SCROLL_DURATION = 25; 

export default function AboutPageCarousel({ cards }: Props) {
  const controls = useAnimation();
  // Using an underscore to silence the unused variable warning
  const [_isPaused, setIsPaused] = useState(false); 
  // Track the x position directly using useMotionValue
  const x = useMotionValue(0); 
  
  // 1. Start continuous scrolling
  useEffect(() => {
    // The animation target here uses the MotionValue
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: SCROLL_DURATION,
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
    
    // Get the current progress of the animation
    const currentX = x.get(); // Get the current animated 'x' value (e.g., -300px)
    
    // Calculate the percentage of the track scrolled
    // Use the width of the motion.div (which contains all cards) to determine 100% travel
    const trackWidth = cards.length * 300 + (cards.length - 1) * 24; // Approximation: (card width * count) + (gap * count)
    const scrolledPercentage = Math.abs(currentX) / trackWidth;

    // Calculate the remaining time
    const remainingDuration = SCROLL_DURATION * (1 - scrolledPercentage);

    // Restart the animation from the current position to the end (-100%)
    controls.start({
        x: "-100%", // Travel to the end of the duplicated set
        transition: {
            duration: remainingDuration, // Use the calculated remaining time
            ease: "linear",
        },
    }).then(() => {
        // Once it reaches the end, instantly reset and start the loop again
        controls.set({ x: "0%" });
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                repeat: Infinity,
                duration: SCROLL_DURATION,
                ease: "linear",
            },
        });
    });
  };

  return (
    <div className="overflow-hidden w-full py-16">
      {/* Attach useMotionValue to the motion.div */}
      <motion.div className="flex gap-6" animate={controls} style={{ x }}> 
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            // Use index for key when duplicating, as card.id is not unique
            // Using Math.random() in the original key is inefficient/bad practice
            key={card.id.toString() + index.toString()} 
            className="relative min-w-[280px] max-w-[300px] h-[340px] rounded-[16%] shadow-lg overflow-hidden flex-shrink-0 cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            {/* ... Card Content ... (Rest of the JSX remains the same) */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
              <div>
                <h3 className="text-lg font-semibold text-center">
                  {card.id + `) `} {card.title}
                </h3>
                <div className="border-t border-dotted border-gray-300 mt-2"></div>
              </div>
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