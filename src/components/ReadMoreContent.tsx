"use client";

import { useState } from "react";
import PortableTextRenderer, { PortableTextBlock } from "./PortableTextRenderer"; // <-- IMPORT PortableTextBlock
import { truncatePortableText } from "./truncatePortableText";

// REMOVED: Redundant local interface PortableTextBlock definition

type Props = {
  // Use the imported PortableTextBlock type
  value: PortableTextBlock[];
  wordLimit?: number;
};

export default function ReadMoreContent({ value, wordLimit = 100 }: Props) {
  const [expanded, setExpanded] = useState(false);

  // The truncatePortableText function should accept the PortableTextBlock[] type
  const previewContent = truncatePortableText(value, wordLimit);

  return (
    <div>
      {expanded ? (
        // Ensure the prop name matches what PortableTextRenderer expects ('content')
        <PortableTextRenderer content={value} />
      ) : (
        <PortableTextRenderer content={previewContent} />
      )}

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white
            rounded hover:bg-gradient-to-b from-purple-900 via-purple-800
            to-purple-700 hover:scale-105 hover:shadow-fuchsia-800 shadow-2xl"
        >
          Read More
        </button>
      )}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white
            rounded hover:bg-gradient-to-b from-purple-900 via-purple-800
            to-purple-700 hover:scale-105 hover:shadow-fuchsia-800 shadow-2xl"
        >
          Show Less
        </button>
      )}
    </div>
  );
}