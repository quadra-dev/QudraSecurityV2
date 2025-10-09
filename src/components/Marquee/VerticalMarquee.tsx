"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Reusable Button component
function ScrollButton({ text, Svg }: { text: string; Svg: React.FC }) {
  return (
    <button className="flex w-full items-center  gap-2 px-4 py-3  bg-white/10 backdrop-blur-md rounded-full shadow-md hover:bg-white/20 transition">
      <Svg className="w-5 h-5" />
      <span className="text-3xl">{text}</span>
    </button>
  );
}

export default function VerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let animationId: number;
    let offset = 0;

    const scroll = () => {
      if (!paused && marqueeRef.current) {
        offset += 0.5; // speed
        marqueeRef.current.scrollTop = offset;
        if (offset >= marqueeRef.current.scrollHeight / 2) {
          offset = 0; // reset for infinite loop
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  const items = [
    { text: "CCTV Cameras", Svg: () => <svg className="w-5 h-5"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg> },
    { text: "Metal Detectors", Svg: () => <svg className="w-5 h-5"><rect x="4" y="4" width="16" height="16" fill="currentColor"/></svg> },
    { text: "ANPR Systems", Svg: () => <svg className="w-5 h-5"><polygon points="4,4 20,12 4,20" fill="currentColor"/></svg> },
    { text: "Door Access", Svg: () => <svg className="w-5 h-5"><path d="M4 4h16v16H4z" fill="currentColor"/></svg> },
  ];

  return (
    <div className="relative w-9/10   h-full mx-auto overflow-hidden">
      {/* Blur overlays */}
      <div className="pointer-events-none absolute top-0 h-10 w-full bg-gradient-to-b from-purple-900 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 h-10 w-full bg-gradient-to-t from-purple-900 to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="h-full overflow-hidden"
      >
        <div
          className="flex flex-col"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...items, ...items].map((item, idx) => (
            <Link key={idx} href="#" className="my-2">
              <ScrollButton text={item.text} Svg={item.Svg} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
