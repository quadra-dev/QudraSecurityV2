"use client";

import { motion } from "framer-motion";
import OrangeButton from "@/components/buttons/OrangeButton";
import SiteVisitForm from "../contactForms/SiteVisitForm";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-b from-[#191970] via-[#082567] to-[#000080] text-white px-6 md:px-10 py-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative lg:pl-10 z-10 w-full lg:w-1/2 space-y-6 text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] bg-clip-text text-transparent"
        >
          The Future of <br className="hidden md:block" /> Security is{" "}
          <br className="hidden md:block" /> Quadra Security
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
        >
          Empower your home and business with next-gen surveillance and
          intelligent monitoring. Experience precision, innovation, and peace of
          mind — designed for the modern world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <OrangeButton text="Book Your Free Consultation" />
        </motion.div>
      </motion.div>

      {/* Right Image (Shared for Desktop + Mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mt-12 md:mt-0 w-full lg:w-1/2 flex justify-center md:justify-end"
      >
        <div className="relative group w-[90%] sm:w-[70%] md:w-[90%] max-w-[600px]">
          {/* Glowing border effect */}
          {/* <div className="absolute -inset-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30  transition-all duration-700"></div> */}

          {/* Hero Image */}
          <SiteVisitForm/>
        </div>
      </motion.div>
    </section>
  );
}
