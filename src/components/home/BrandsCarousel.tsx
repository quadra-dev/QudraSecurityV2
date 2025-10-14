"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const authorizedBrands = [
  { src: "/brands/cpplus.jpg", name: "CP Plus" },
  { src: "/brands/prama.png", name: "Prama" },
  { src: "/brands/Hikvision.svg", name: "Hikvision" },
];

const otherBrands = [
  
  "/brands/beetel.png",

  "/brands/daichi.jpeg",
  "/brands/dlink.png",
  "/brands/essl.jpg",
  "/brands/Godrej.svg",
  "/brands/hawkvision.webp",

  "/brands/tenda.png",
  "/brands/Western_ Digital.svg",
  "/brands/consistent.png",
];

export default function BrandsGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="px-4 md:px-8 max-w-6xl mx-auto h-full ">
      {/* Title */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
        <h2 className="text-white md:text-3xl text-xl font-semibold font-serif">
          Brands we Deal In
        </h2>
      </div>

      {/* Authorized Sellers */}
      {/* <h3 className="text-base text-white font-medium mb-3">
        Authorized Sellers
      </h3> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {authorizedBrands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-white rounded-xl overflow-hidden w-full h-[90px] md:h-[110px] flex items-center justify-center p-1.5"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
            {/* <span className="absolute top-1.5 right-1.5 bg-green-600 text-white text-[9px] md:text-[10px] px-1.5 py-[1px] rounded-full">
              Authorized Seller
            </span> */}
          </motion.div>
        ))}
      </div>

      {/* Other Brands */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {otherBrands.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden w-full h-[90px] md:h-[110px] flex items-center justify-center p-1.5"
          >
            <Image
              src={src}
              alt="Brand Logo"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
            
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}
