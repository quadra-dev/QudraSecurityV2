"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

interface OrangeButtonProps {
  text: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ text }) => {
   const router = useRouter();
  return (
    <motion.button
      className="group flex items-center gap-3 cursor-pointer bg-[#FF850B] text-white p-1 rounded-full relative overflow-hidden"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={() => router.push("/contact")}
    >
      <span className="font-semibold pl-5">{text}</span>

      {/* Animated Circle */}
      <motion.div
        className="relative w-9 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 0.9 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Base Arrow - exits first */}
        <motion.span
          className="absolute text-[#DE6F00]"
          style={{ rotate: -45 }}
          variants={{
            rest: { opacity: 1, x: 0, y: 0 },
            hover: { opacity: 0, x: 4, y: -4 },
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        >
          <ArrowRight size={24} />
        </motion.span>

        {/* Hover Arrow - enters after first one leaves */}
        <motion.span
          className="absolute text-[#DE6F00]"
          style={{ rotate: -45 }}
          variants={{
            rest: { opacity: 0, x: -4, y: 4 },
            hover: { opacity: 1, x: 0, y: 0 },
          }}
          transition={{
            duration: 0.15,
            delay: 0.1, // Delay to start after first arrow begins leaving
            ease: "easeOut",
          }}
        >
          <ArrowRight size={24} />
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default OrangeButton;
