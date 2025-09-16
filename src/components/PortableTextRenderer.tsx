// components/PortableTextRenderer.tsx
'use client'

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

export default function PortableTextRenderer({ value }: { value: any }) {
  const components = {
    types: {
      image: ({ value }: any) => {
        // Add this check to prevent errors with missing or invalid image data.
        if (!value || !value.asset) {
          return null;
        }
        
        return (
          <img
            src={urlFor(value).width(1200).auto('format').url()}
            alt={value?.caption ?? ''}
            className="my-4 rounded"
          />
        );
      }
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
            className="text-blue-600 underline"
          >
            {children}
          </a>
        );
      }
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc ml-6">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal ml-6">{children}</ol>
    },
    block: {
      h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-4">{children}</h2>,
      normal: ({ children }: any) => <p className="my-3 leading-7">{children}</p>
    }
  };

  return <PortableText value={value || []} components={components} />;
}