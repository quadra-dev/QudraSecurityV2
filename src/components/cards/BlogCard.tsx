// src/components/cards/BlogCard.tsx

import Link from "next/link";
import type { FC } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Define the type for the Sanity Image asset reference
export interface SanityImageSource {
    asset: {
        _ref: string;
    };
}

// Define the specific structure for the blog post data
export interface Post {
    title: string;
    excerpt: string;
    // FIX 1: Make publishedAt REQUIRED (remove the '?' if it was optional)
    publishedAt: string; 
    coverImage?: SanityImageSource;
    slug: {
        current: string;
        _type: 'slug';
    };
    // If you need categories, add them here:
    // categories?: string[];
}

// Define the component Props
type PostCardProps = {
    // FIX 2: Ensure the component uses the strict Post type
    post: Post; 
};

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <article
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-xl"
        >
            {post.coverImage && (
                <div className="relative w-full h-44">
                    <Image
                        src={urlFor(post.coverImage).width(800).auto("format").url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />
                </div>
            )}
            <div className="p-4">
                <div className="text-xs text-yellow-300 uppercase mb-2">
                    Getting Started •{" "}
                    {/* Accessing the required publishedAt property */}
                    {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-gray-200 line-clamp-3">{post.excerpt}</p>
                <div className="mt-3">
                    <Link
                        href={`/blog/${post.slug.current}`}
                        className="inline-block bg-white text-blue-800 px-3 py-1 rounded-full text-xs"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostCard;