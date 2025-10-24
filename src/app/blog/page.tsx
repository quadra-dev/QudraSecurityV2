"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, ChangeEvent } from "react";
import { client } from "@/sanity/lib/client";
import { POSTS_PAGED } from "@/sanity/lib/sanity.queries";
import PostCard from "@/components/cards/BlogCard";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  excerpt: string;
  subtitle?: string;
  coverImage?: SanityImage;
  categories?: string[];
  publishedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [heroPost, setHeroPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const PAGE_SIZE = 6; // 👈 number of posts to load each time

  // Fetch posts
  async function fetchPosts(pageNumber = 0) {
    const start = pageNumber * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    try {
      const query =
        POSTS_PAGED(start, end) +
        `{
          ...,
          "categories": categories[]->title
        }`;

      const data: Post[] = await client.fetch(query);

      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      if (pageNumber === 0) {
        setPosts(data);
        setHeroPost(data[0]);
      } else {
        setPosts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    fetchPosts(0);
  }, []);

  // Filter posts
  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch = searchQuery
        ? post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesCategory = activeCategory
        ? post.categories?.some((category) => category === activeCategory)
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory, posts]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory(null);
  };

  const loadMorePosts = () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#191970] via-[#082567] to-[#000080] text-white text-lg">
        Loading blogs...
      </div>
    );
  }

  const categories = [
    "CCTV",
    "Smart Security",
    "Surveillance",
    "Tech Insights",
    "IoT",
    "Company News",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#191970] via-[#082567] to-[#000080] text-white">
      {/* HERO SECTION */}
      {heroPost && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {heroPost.coverImage && (
            <img
              src={urlFor(heroPost.coverImage).width(2000).auto("format").url()}
              alt={heroPost.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
          )}
          <div className="relative z-20 max-w-6xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {heroPost.title}
              </h1>
              {heroPost.excerpt && (
                <p className="text-gray-200 text-lg mb-6">{heroPost.excerpt}</p>
              )}
              <Link
                href={`/blog/${heroPost.slug?.current}`}
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 transition"
              >
                Read Full Post →
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-16">
            {/* Search + Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full sm:w-auto bg-white/10 backdrop-blur-md rounded-full overflow-hidden border border-white/10"
                >
                  <input
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="flex-1 px-5 py-2 text-sm bg-transparent text-white placeholder-gray-400 outline-none min-w-[200px]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center"
                    aria-label="Search"
                  >
                    🔍
                  </button>
                </form>

                {(searchQuery || activeCategory) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm bg-red-600/20 hover:bg-red-600/30 rounded-full border border-red-500/30 transition"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Category Buttons */}
              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      activeCategory === category
                        ? "bg-blue-600 text-white border-blue-500"
                        : "bg-white/5 hover:bg-blue-700/40 border-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* POSTS GRID */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredPosts
                .filter((p) => p._id !== heroPost?._id)
                .map((p) => (
                  <PostCard key={p._id} post={p} />
                ))}
            </motion.div>

            {/* LOAD MORE BUTTON */}
            {hasMore && !searchQuery && !activeCategory && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMorePosts}
                  disabled={loadingMore}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition-all disabled:opacity-50"
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          {/* (keep your sidebar code as-is) */}
        </div>
      </section>
    </main>
  );
}
