// components/PortableTextRenderer.tsx
'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value || !value.asset) return null;

      return (
        <img
          src={urlFor(value).width(400).auto('format').url()}
          alt={value?.caption ?? ''}
          className="my-4 mx-auto rounded"
        />
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || '';
      const external = href && href.startsWith('http');
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-blue-400 underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 space-y-1">{children}</ol>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold my-4">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="my-3 leading-7">{children}</p>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value || []} components={components} />;
}
