// components/Collage.tsx
import type { FC } from 'react';
import { urlFor } from '@/sanity/lib/image';

type CollageImage = {
  _key?: string;
  asset: any;
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
          return (
            <div key={img._key ?? i} style={{ gridColumn: `span ${col}`, gridRow: `span ${row}` }} className="relative overflow-hidden rounded">
              <img
                src={urlFor(img).auto('format').fit('crop').width(1200).url()}
                alt={img.caption ?? `image-${i}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-sm bg-blue bg-opacity-20 text-white">
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
