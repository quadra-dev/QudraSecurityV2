// components/QuarterHole.jsx
import React from "react";

/**
 * QuarterHole
 * Props:
 *  - size (number) : side length in pixels (default 200)
 *  - bg (string)   : rectangle fill color (any valid CSS color) (default '#0f172a')
 *  - corner (string): one of 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' (default 'top-left')
 *  - className (string): extra Tailwind classes for the wrapper
 */
export default function QuarterHole({
  size = 200,
  bg = "#0f172a",
  corner = "top-left",
  className = "",
}) {
  // unique id for mask to avoid collisions if multiple components are on the page
  const maskId = `quarter-hole-mask-${Math.random().toString(36).slice(2, 9)}`;

  // determine circle center based on corner
  const cx = corner === "top-right" || corner === "bottom-right" ? size : 0;
  const cy = corner === "bottom-left" || corner === "bottom-right" ? size : 0;

  return (
    <div
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* In SVG masks: white = visible, black = transparent (masked-out). 
              We draw a white rect then a black circle to cut a hole. */}
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={size} height={size} fill="white" />
            {/* circle center at chosen corner, radius = size (equal to side length) */}
            <circle cx={cx} cy={cy} r={size} fill="black" />
          </mask>
        </defs>

        {/* The rect uses the mask so the circle area becomes transparent */}
        <rect
          x="0"
          y="0"
          width={size}
          height={size}
          fill={bg}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}
