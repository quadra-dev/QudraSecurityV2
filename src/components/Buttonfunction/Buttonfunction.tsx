"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const areas = [
  { id: 1, name: "Entrance", top: "80%", left: "45%" },
  { id: 2, name: "Lobby", top: "60%", left: "40%" },
  { id: 3, name: "Indoors", top: "25%", left: "38%" },
  { id: 4, name: "Boundary", top: "35%", left: "90%" },
  { id: 5, name: "Control Room", top: "50%", left: "56%" },
  { id: 6, name: "Parking", top: "60%", left: "70%" },
  { id: 7, name: "Lift", top: "15%", left: "31%" },
];

const challenges = [
  {
    id: 1,
    challange1: "this is challange1 entrance",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 2,
    challange1: "this is challange1 lobby",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 3,
    challange1: "this is challange1 indoors",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 4,
    challange1: "this is challange1 boundary",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 5,
    challange1: "this is challange1 control room",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 6,
    challange1: "this is challange1 parking",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
  {
    id: 7,
    challange1: "this is challange1 lift",
    challange2: "this is challange2",
    challange3: "this is challange3",
    challange4: "this is challange4",
    offering1: "this is offering1",
    offering2: "this is offering 2",
    offering3: "this is offering 3",
    offering4: "this is offering 4",
  },
];

export default function ComparisonSection() {
  const [selected, setSelected] = useState(1);
  const selectedChallenge = challenges.find((c) => c.id === selected);

  return (
    <div className="p-4 w-full max-w-5xl mx-auto flex flex-col items-center relative">
      {/* Image with buttons */}
      <div className="relative w-full z-10">
        <Image
          src="/solutionImage/apartmentPage/apartmentImage.png"
          alt="Building"
          width={1200}
          height={800}
          className="rounded-[4rem] w-full h-auto object-contain"
        />
        {areas.map((area) => (
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
