"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ComparisonSection(data) {
  const [selected, setSelected] = useState(1);
  const selectedChallenge = data.data.challenges.find((c) => c.id === selected);
  console.log(data.data.areas)

  return (
    <div className="p-4 w-full max-w-5xl mx-auto flex flex-col items-center relative">
      {/* Image with buttons */}
      <div className="relative w-full z-10">
        <Image
          src={data.data.imagePath}
          alt="Building"
          width={1200}
          height={800}
          className="rounded-[4rem] w-full h-auto object-contain"
        />
        {data.data.areas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelected(area.id)}
            className={`absolute flex items-center space-x-2 
              px-2 py-1 text-xs 
              md:px-4 md:py-1 md:text-sm
              rounded-full bg-blue-500 border-2 border-yellow-400 text-white 
              shadow-md hover:bg-blue-800 transition-all duration-300 
              ${
                selected === area.id ? "ring-2 ring-yellow-400 bg-blue-900" : ""
              }`}
            style={{
              top: area.top,
              left: area.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span
              className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center 
                bg-orange-500 rounded-full text-white 
                text-[10px] md:text-sm font-bold"
            >
              {area.id}
            </span>
            <span className="text-[10px] md:text-sm font-medium whitespace-nowrap">
              {area.name}
            </span>
          </button>
        ))}
      </div>

     {/* Animated Cards */}
<div className="flex flex-col md:flex-row gap-6 w-full mt-12">
  <AnimatePresence mode="wait">
    {selectedChallenge && (
      <>
        {/* Challenges Card */}
        <motion.div
          key={`challenges-${selected}`}
          initial={{ opacity: 0, x: -150 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier easing
            },
          }}
          exit={{
            opacity: 0,
            x: -150,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="flex-1 bg-[#150D15] text-white rounded-3xl shadow-lg p-6 min-h-[320px]"
        >
          <div className="flex items-center gap-2 mb-4">
            {/* <Image
              src=""
              alt="challange"
              height={40}
              width={40}
            /> */}
            <span className="text-3xl font-semibold">Challenges</span>
          </div>
          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>{selectedChallenge.challange1}</li>
            <li>{selectedChallenge.challange2}</li>
            <li>{selectedChallenge.challange3}</li>
            <li>{selectedChallenge.challange4}</li>
          </ul>
        </motion.div>

        {/* Offerings Card */}
        <motion.div
          key={`offerings-${selected}`}
          initial={{ opacity: 0, x: 150 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1], // smoother curve
            },
          }}
          exit={{
            opacity: 0,
            x: 150,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="flex-1 bg-[#1F150E] text-white rounded-3xl shadow-lg p-6 min-h-[320px]"
        >
          <div className="flex items-center gap-2 mb-4">
            {/* <Image
              src=""
              alt="offering"
              height={50}
              width={50}
            /> */}
            <span className="text-3xl font-semibold">What We Offer...</span>
          </div>
          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>{selectedChallenge.offering1}</li>
            <li>{selectedChallenge.offering2}</li>
            <li>{selectedChallenge.offering3}</li>
            <li>{selectedChallenge.offering4}</li>
          </ul>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</div>

    </div>
  );
}
