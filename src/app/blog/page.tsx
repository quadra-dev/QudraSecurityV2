// app/blog/page.tsx
import { client } from '@/sanity/lib/client';
import { POSTS_PAGED } from '@/sanity/lib/sanity.queries';
import PostCard from '@/components/cards/BlogCard';

export const revalidate = 60;

type Props = { searchParams?: { page?: string; q?: string } };

export default async function BlogPage({ searchParams }: Props) {
 const awaitedSearchParams = await searchParams; // Await the searchParams object
  const page = Number(awaitedSearchParams?.page ?? 1);
  const q = (awaitedSearchParams?.q ?? '').trim();
  const pageSize = 8;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const query = POSTS_PAGED(start, end, q || undefined);
  const posts = await client.fetch(query);

  // For simple hero: show the very first post (only on page 1)
  const hero = page === 1 && posts.length > 0 ? posts[0] : null;

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-900 to-indigo-700 text-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Blogs</h1>
          <p className="text-lg opacity-80 mb-8">Discover the latest news, tips and research insights from Quadra Security.</p>

          {hero && (
            <div className="grid md:grid-cols-2 gap-6 items-center bg-indigo-800 rounded-lg p-6">
              <div>
                <div className="uppercase text-sm text-yellow-300">Getting started • 5 min read</div>
                <h2 className="text-2xl font-bold my-3">{hero.title}</h2>
                <p className="text-sm opacity-90">{hero.excerpt}</p>
                <div className="mt-4 text-xs opacity-80">{hero.publishedAt ? new Date(hero.publishedAt).toLocaleDateString() : ''}</div>
              </div>
              <div>
                {hero.coverImage && (
                  <img src={hero.coverImage} alt={hero.title} className="w-full h-56 object-cover rounded" />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-semibold text-white">Latest articles</div>

            <form method="get" className="flex items-center">
              <input name="q" placeholder="search your query" defaultValue={q} className="px-4 py-2 rounded-l shadow-sm" />
              <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-r">🔍</button>
            </form>
          </div>

          {/* grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p: any) => (
              <PostCard key={p._id} post={p} />
            ))}
          </div>

          {/* simple prev/next */}
          <div className="mt-8 flex justify-between">
            <a
              href={`/blog?page=${Math.max(1, page - 1)}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
              className="px-4 py-2 bg-white text-purple-800 rounded"
            >
              ← Prev
            </a>
            <a
              href={`/blog?page=${page + 1}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
              className="px-4 py-2 bg-white text-purple-800 rounded"
            >
              Next →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
