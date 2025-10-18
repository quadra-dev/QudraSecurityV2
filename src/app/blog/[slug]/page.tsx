import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG, POSTS_PAGED } from "@/sanity/lib/sanity.queries";
import { urlFor } from "@/sanity/lib/image";
import Collage from "@/components/Collage";
import PostCard from "@/components/cards/BlogCard";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 60;

// 🧩 Types
type Post = {
  _id: string;
  title: string;
  subtitle?: string;
  coverImage?: any;
  collage?: any;
  content?: any;
  slug: { current: string };
};

type Props = {
  params: { slug: string };
};

// ✅ Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: Post | null = await client.fetch(POST_BY_SLUG, { slug: params.slug });

  if (!post) {
    return {
      title: "Post Not Found | Quadra Security Blog",
      description: "The blog post you’re looking for could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.subtitle || "Read this insightful article on Quadra Security Blog.",
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).url()] : [],
    },
  };
}

// 🧠 Page Component
export default async function PostPage({ params }: Props) {
  const slug = params.slug;
  const post: Post | null = await client.fetch(POST_BY_SLUG, { slug });
  const otherPosts: Post[] = await client.fetch(POSTS_PAGED(0, 8));
  const related = otherPosts.filter((p) => p.slug.current !== slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-10  text-white bg-gradient-to-b from-[#1c012b] to-[#320443]">
        <p className="text-2xl font-semibold tracking-wide">Post not found.</p>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-b pt-10 from-[#191970] via-[#082567] to-[#000080] relative text-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12  md:py-16 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
        {/* ===== MAIN CONTENT ===== */}
        <section className="bg-white/5 shadow-2xl p-10 rounded-3xl">
          {/* ===== Header ===== */}
          <header className="text-center mb-10 md:mb-14 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight bg-white bg-clip-text text-transparent drop-shadow-md">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-gray-300 text-base sm:text-lg md:text-xl italic tracking-wide px-3">
                {post.subtitle}
              </p>
            )}
          </header>

          {/* ===== Cover Image ===== */}
          {post.coverImage && (
            <div className="relative mb-10 md:mb-14 group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlFor(post.coverImage).width(1600).auto("format").url()}
                alt={post.title}
                className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c012b]/70 via-transparent to-transparent opacity-80"></div>
            </div>
          )}

          {/* ===== Collage ===== */}
          {post.collage && (
            <div className="mb-10 md:mb-16 animate-fadeUp">
              <Collage collage={post.collage} />
            </div>
          )}

          {/* ===== Article Content ===== */}
          <article
            className="prose prose-invert prose-base sm:prose-lg max-w-none leading-relaxed animate-fadeUp
              prose-headings:text-purple-300 prose-a:text-pink-400 hover:prose-a:text-pink-300
              prose-blockquote:border-l-4 prose-blockquote:border-pink-400 prose-blockquote:text-gray-200
              prose-strong:text-white prose-code:text-indigo-300 prose-img:rounded-xl"
          >
            <PortableText value={post.content} />
          </article>
        </section>

        {/* ===== SIDEBAR (Desktop) ===== */}
        <aside className="hidden lg:flex flex-col gap-6 animate-fadeIn sticky top-30 h-fit">
          <h3 className="text-xl font-semibold tracking-wide text-transparent bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] bg-clip-text mb-3">
            More Blogs
          </h3>

          <div className="flex flex-col gap-5">
            {related.slice(0, 5).map((p) => (
              <Link
                key={p._id}
                href={`/blog/${p.slug.current}`}
                className="group relative p-4 bg-[#2b0340]/40 rounded-2xl border border-transparent hover:border-indigo-400/40 hover:bg-[#050a41]/50 transition-all duration-300 backdrop-blur-sm shadow-md"
              >
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {p.coverImage && (
                    <img
                      src={urlFor(p.coverImage).width(100).height(80).auto("format").url()}
                      alt={p.title}
                      className="w-20 h-16 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-indigo-300 transition-colors duration-300">
                      {p.title.length > 50 ? p.title.slice(0, 50) + "..." : p.title}
                    </h4>
                    {p.subtitle && (
                      <p className="text-xs text-gray-400 italic line-clamp-2">
                        {p.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-2 w-0 h-[2px] bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] transition-all duration-500 group-hover:w-[95%]"></div>
              </Link>
            ))}
          </div>
        </aside>
      </main>

      {/* ===== MORE BLOGS GRID (Mobile / Tablet) ===== */}
      {related.length > 0 && (
        <section className="block lg:hidden mt-16 px-6 animate-fadeUp">
          <h2 className="text-center text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] bg-clip-text">
            More Blogs
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p._id}
                href={`/blog/${p.slug.current}`}
                className="group bg-[#2b0340]/40 p-4 rounded-2xl shadow-md hover:bg-[#360a52]/50 transition-all duration-300 border border-transparent hover:border-pink-400/40 backdrop-blur-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {p.coverImage && (
                  <img
                    src={urlFor(p.coverImage).width(600).height(400).auto("format").url()}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <h3 className="text-lg font-semibold text-gray-200 mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                  {p.title.length > 60 ? p.title.slice(0, 60) + "..." : p.title}
                </h3>
                {p.subtitle && (
                  <p className="text-sm text-gray-400 italic line-clamp-2">{p.subtitle}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}