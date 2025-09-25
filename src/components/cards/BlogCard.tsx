// components/PostCard.tsx
import Link from "next/link";
import type { FC } from "react";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  post: any;
};

const PostCard: FC<Props> = ({ post }) => {
  return (
    <article
      className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out 
        hover:scale-105 hover:shadow-xl"
    >
      {post.coverImage && (
        <img
          src={urlFor(post.coverImage).width(1200).auto("format").url()}
          alt={post.title}
          className="w-full h-44 object-cover"
        />
      )}
      <div className="p-4">
        <div className="text-xs text-yellow-300 uppercase mb-2">
          Getting Started •{" "}
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : ""}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-200 line-clamp-3">{post.excerpt}</p>
        <div className="mt-3">
          <Link
            href={`/blog/${post.slug.current}`}
            className="inline-block bg-white text-purple-800 px-3 py-1 rounded-full text-xs"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
