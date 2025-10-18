// components/BlogHero.tsx
import Link from 'next/link';
import Image from 'next/image'; // 1. Import Next.js Image component
import { urlFor } from '@/sanity/lib/image';

// 1. Define specific types for the Sanity data structure
interface SanityImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface Post {
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  mainImage?: SanityImageAsset;
  slug: {
    current: string;
  };
  categories?: { title: string }[];
}

// Use the defined Post type instead of 'any'
export default function BlogHero({ post }: { post: Post | null }) {
  if (!post) return null;

  // Generate the image URL once
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(800).height(520).url() 
    : undefined;

  return (
    <section className="bg-gradient-to-b from-[#0f1b5a] to-[#2f00ff] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[320px] lg:h-[400px]"> {/* Set relative container and fixed height */}
          {post.mainImage && imageUrl && (
            // 2. Use Next.js <Image /> component instead of <img>
            <Image
              src={imageUrl}
              alt={post.title}
              fill // Use fill to make it cover the parent container
              sizes="(max-width: 1024px) 100vw, 50vw" // Helps Next.js optimize image loading
              className="rounded-2xl object-cover shadow-xl"
            />
          )}
        </div>
        <div>
          <p className="text-sm text-orange-400 font-semibold mb-2">
            {post.categories?.[0]?.title ?? 'Getting started'} • {post.readingTime ?? '5 min read'}
          </p>
          <h2 className="text-4xl font-extrabold mb-4">{post.title}</h2>
          <p className="text-gray-200 mb-5">{post.excerpt}</p>
          <p className="text-sm text-gray-300">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <Link 
            href={`/blog/${post.slug.current}`} 
            className="inline-block mt-6 bg-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition"
          >
            Read full article
          </Link>
        </div>
      </div>
    </section>
  );
}