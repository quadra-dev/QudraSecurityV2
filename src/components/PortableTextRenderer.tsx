import React, { ReactNode } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// EXPORTED TYPES: These are the definitive type definitions for the project
export interface SanityAsset {
  _type: "image";
  asset: {
    _ref: string;
  };
  caption?: string;
  alt?: string;
}

export interface PortableTextMarkDefinition {
  href: string;
  _key: string;
  _type: string;
}

export interface PortableTextBlock {
  _key: string;
  _type: string;
  children: { text: string }[];
  markDefs: PortableTextMarkDefinition[]; // Using the strict exported type here
}
// End of EXPORTED TYPES

// Define the custom components object
const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityAsset }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlFor(value).auto("format").fit("max").url();
      const caption = value.caption || value.alt;

      return (
        <figure className="my-8 rounded-lg overflow-hidden">
          <div
            className="relative w-full h-auto"
            style={{ minHeight: "300px" }}
          >
            <Image
              src={imageUrl}
              alt={caption || "Content image"}
              fill
              className="object-contain"
              sizes="(max-width: 800px) 100vw, 800px"
              loading="lazy"
            />
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },

  marks: {
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children: ReactNode;
    }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          {children}
        </a>
      );
    },
  },

  block: {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
  },
};

export default function PortableTextRenderer({
  content,
}: {
  content: PortableTextBlock[];
}) {
  if (!content) return null;

  return (
    <div className="prose max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}