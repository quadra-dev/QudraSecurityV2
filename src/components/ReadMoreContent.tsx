"use client";

import { useState } from "react";
import PortableTextRenderer from "./PortableTextRenderer";
import { truncatePortableText } from "./truncatePortableText";

type Props = {
  value: any;
  wordLimit?: number;
};

export default function ReadMoreContent({ value, wordLimit = 100 }: Props) {
  const [expanded, setExpanded] = useState(false);

  const previewContent = truncatePortableText(value, wordLimit);

  return (
    <div>
      {expanded ? (
        <PortableTextRenderer value={value} />
      ) : (
        <PortableTextRenderer value={previewContent} />
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
    </div>
  );
}
