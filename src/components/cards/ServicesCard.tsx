"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type ServiceCardProps = {
  title: string;
  faqs: FAQ[];
  image: string;
  dotSvg?: string;
  data: string;
};

export default function ServiceCard({
  title,
  faqs,
  image,
  dotSvg,
  data,
}: ServiceCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // detect when card comes into view
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Track card height changes with ResizeObserver
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.height) {
          setLineHeight(entry.contentRect.height);
        }
      }
    });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4 py-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>

      <div className="flex flex-col md:flex-row items-stretch gap-4 ">
        {/* Dot + Gradient Line */}
        <div className="hidden md:flex flex-col items-center relative">
          {/* Dot */}
          {dotSvg ? (
            <motion.img
              src={dotSvg}
              alt="dot"
              className="w-8 h-8 mb-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="w-5 h-5 bg-gradient-to-b from-red-400 to-yellow-400 rounded-full shadow-md mb-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}

          {/* Gradient Line (follows card height dynamically) */}
          <motion.div
            ref={lineRef}
            initial={{ height: 0 }}
            animate={{ height: isInView ? lineHeight : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-[3px] bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400 rounded-full"
            style={{
              clipPath:
                "polygon(100% 100% , 0 0, 20% 0, 50% 10%, 100% 95%, 100% 100%, 0 100%, 100% 100%, 50% 90%, 0 5%)",
            }}
          />
        </div>

        {/* Card */}
        {/* Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 80,
            height: isExpanded ? "auto" : "fit-content", // 👈 shrink back smoothly
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-b from-[#cf99e0] to-[#9a50c8] rounded-2xl shadow-2xl 
  p-6 flex flex-col md:flex-row items-center gap-6 flex-1 relative min-h-[320px] transition-all duration-500 ease-in-out overflow-hidden"
        >
          {/* Top-left Tab Buttons */}
          <div className="absolute top-4 left-4 flex gap-4 text-sm md:text-lg">
            {["Tab", "FAQs"].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative text-white font-semibold text-lg pb-1"
              >
                {tab}
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-500 to-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeTab === index || hoveredTab === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 w-full mt-10 text-sm md:text-base">
            {activeTab === 1 && (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/30 pb-2">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left text-lg text-white font-medium"
                    >
                      {faq.question}
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-white/90 text-sm">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 0 && (
              <div className="relative text-white text-lg h-[270px] overflow-hidden ">
                <div className="scrollable-content h-full overflow-y-scroll pr-2">
                  <p className="leading-relaxed bg-violet-400/10 rounded-2xl pl-3">{data}</p>
                </div>
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[220px] md:max-w-xs rounded-lg object-contain "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
