"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHeroImage() {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* ===== Mobile CCTV Mask ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative
          block md:hidden
          h-[80vh]
          w-[80vh]
          max-w-[90vw]
        "
        style={{
          WebkitMaskImage: "url('/shapes/cctv-mask.svg')",
          maskImage: "url('/shapes/cctv-mask.svg')",
          WebkitMaskSize: "cover", // changed from 'contain'
          maskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        <Image
          src="/HomeImages/HomeHero.png"
          alt="Modern city inside CCTV silhouette"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* ===== Desktop QS Mask ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative
          hidden md:block
          h-[80vh]
          aspect-square
          max-w-[80vh]
        "
        style={{
          WebkitMaskImage: "url('/shapes/qs-mask.svg')",
          maskImage: "url('/shapes/qs-mask.svg')",
          WebkitMaskSize: "cover", // key change
          maskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        <Image
          src="/HomeImages/HomeHero.png"
          alt="City inside Quadra Security logo mask"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </div>
  );
}
