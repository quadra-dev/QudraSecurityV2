"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { POSTS_PAGED } from "@/sanity/lib/sanity.queries";
import PostCard from "@/components/cards/BlogCard";
import { urlFor } from "@/sanity/lib/image";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [heroPost, setHeroPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      // Fetch posts with categories populated
      const query =
        POSTS_PAGED(0, 9) +
        `{
        ...,
        "categories": categories[]->title
      }`;
      const data = await client.fetch(query);
      setPosts(data);
      setFilteredPosts(data);
      setHeroPost(data[0]);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  // Filter posts by search query and category
  useEffect(() => {
    const filtered = posts.filter((post) => {
      // Check if post matches search query
      const matchesSearch = searchQuery
        ? post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      // Check if post matches selected category
      const matchesCategory = activeCategory
        ? post.categories?.some(
            (category: string) => category === activeCategory
          )
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory, posts]);

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      // If clicking the same category, deselect it
      setActiveCategory(null);
    } else {
      // Select the new category
      setActiveCategory(category);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory(null);
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
          <img
            src={urlFor(heroPost.coverImage).width(2000).auto("format").url()}
            alt={heroPost.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
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
                {/* Search Form */}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                      />
                    </svg>
                  </button>
                </form>

                {/* Clear Filters Button */}
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

              {/* Active Filters Display */}
              {(searchQuery || activeCategory) && (
                <div className="text-sm text-gray-300">
                  Showing results for:
                  {searchQuery && (
                    <span className="ml-2 text-white">"{searchQuery}"</span>
                  )}
                  {searchQuery && activeCategory && (
                    <span className="mx-2">in</span>
                  )}
                  {activeCategory && (
                    <span className="text-blue-400 font-semibold">
                      {activeCategory}
                    </span>
                  )}
                </div>
              )}
            </motion.div>

            {/* POSTS GRID */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts
                  .filter((p) => p._id !== heroPost?._id) // Exclude hero post from grid
                  .map((p) => <PostCard key={p._id} post={p} />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400 text-lg mb-4">
                    No posts found matching your criteria.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-6 animate-fadeIn sticky top-20 h-fit">
            <h3 className="text-xl font-semibold tracking-wide text-transparent bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] bg-clip-text mb-3">
              More Blogs
            </h3>

            <div className="flex flex-col gap-5">
              {posts.slice(0, 5).map((p) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug.current}`}
                  className="group relative p-4 bg-[#2b0340]/40 rounded-2xl border border-transparent hover:border-indigo-400/40 hover:bg-[#050a41] transition-all duration-300 backdrop-blur-sm shadow-md"
                >
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {p.coverImage && (
                      <img
                        src={urlFor(p.coverImage)
                          .width(100)
                          .height(80)
                          .auto("format")
                          .url()}
                        alt={p.title}
                        className="w-20 h-16 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 group-hover:text-indigo-300 transition-colors duration-300">
                        {p.title.length > 50
                          ? p.title.slice(0, 50) + "..."
                          : p.title}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["CCTV", "SmartHome", "IoT", "SecurityTips", "AI"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 hover:bg-blue-700/50 hover:text-white cursor-pointer transition"
                      >
                        #{tag}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}