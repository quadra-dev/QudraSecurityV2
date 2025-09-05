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
};

export default function ServiceCard({ title, faqs, image, dotSvg }: ServiceCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [lineHeight, setLineHeight] = useState(0);

  // detect when card comes into view
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (cardRef.current) {
      setLineHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6 w-[950px] mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white pl-10">{title}</h2>

      <div className="flex items-stretch gap-4">
        {/* Dot + Line */}
        <div className="flex flex-col items-center">
          {/* Dot */}
          {dotSvg ? (
            <motion.img
              src={dotSvg}
              alt="dot"
              className="w-5 h-5"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="w-5 h-5 bg-gradient-to-b from-red-400 to-yellow-400 rounded-full shadow-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}

          {/* Line */}
          <motion.div
            ref={lineRef}
            className="w-[2px] bg-indigo-400"
            initial={{ height: 0 }}
            animate={isInView ? { height: lineHeight } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        {/* Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-b from-[#8582DD] to-[#532D6A] rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 flex-1 rounded-xl"
        >
          {/* FAQ Section */}
          <div className="flex-1 w-full">
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
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
