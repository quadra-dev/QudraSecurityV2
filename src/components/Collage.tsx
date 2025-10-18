// components/Collage.tsx
import type { FC } from 'react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'; // 1. FIX: Corrected typo from 'Iamge' to 'Image'

type SanityAsset = {
  _ref: string;
  _type: 'reference';
};

type CollageImage = {
  _key?: string;
  asset: SanityAsset;
  caption?: string;
  colSpan?: number;
  rowSpan?: number;
};

type CollageProps = {
  collage?: {
    layout?: string;
    columns?: number;
    images?: CollageImage[];
  } | null;
};

const Collage: FC<CollageProps> = ({ collage }) => {
  if (!collage || !collage.images || collage.images.length === 0) return null;
  const columns = collage.columns || 4;

  return (
    <div className="my-8">
      <div
        style={{ display: 'grid', gap: '8px', gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {collage.images.map((img, i) => {
          const col = img.colSpan || 1;
          const row = img.rowSpan || 1;
          
          // Since the grid items have dynamic dimensions based on colSpan/rowSpan,
          // the parent div needs a specific ratio, and the Image component needs 'fill'.
          const imageUrl = urlFor(img).auto('format').fit('crop').width(1200).url();

          return (
            <div 
              key={img._key ?? i} 
              style={{ 
                gridColumn: `span ${col}`, 
                gridRow: `span ${row}`,
                // Add padding-top trick for maintaining aspect ratio inside the grid cell
                paddingTop: '66.66%' // Assuming a 3:2 aspect ratio, adjust as needed (e.g., '100%' for square)
              }} 
              className="relative overflow-hidden rounded"
            >
              {/* 2. FIX: Use 'Image' component */}
              <Image
                src={imageUrl}
                alt={img.caption ?? `image-${i}`}
                // 3. FIX: Use 'fill' property instead of fixed width/height
                fill 
                className="absolute inset-0 w-full h-full object-cover"
                sizes={`(min-width: 1024px) ${100 / columns}vw, 100vw`} // Optimization hint
                loading="lazy"
              />
              
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-sm bg-blue bg-opacity-20 text-white z-10">
                  {img.caption}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collage;