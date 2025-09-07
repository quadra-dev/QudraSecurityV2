"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeItemProps {
  images: string[];
  from: string | number;
  to: string | number;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-20"
      >
        {images.map((src, index) => (
          <div key={index} className="h-40 w-56 relative">
            <Image
              src={src}
              alt={`marquee-${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-20"
      >
        {images.map((src, index) => (
          <div key={index} className="h-40 w-56 relative">
            <Image
              src={src}
              alt={`marquee-${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;

