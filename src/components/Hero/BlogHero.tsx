// components/BlogHero.tsx
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

export default function BlogHero({ post }: { post: any }) {
  if (!post) return null
  return (
    <section className="bg-gradient-to-b from-[#0f1b5a] to-[#2f00ff] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          {post.mainImage && (
            <img
              src={urlFor(post.mainImage).width(800).height(520).url()}
              alt={post.title}
              className="rounded-2xl w-full object-cover shadow-xl"
            />
          )}
        </div>
        <div>
          <p className="text-sm text-orange-400 font-semibold mb-2">{post.categories?.[0]?.title ?? 'Getting started'} • {post.readingTime ?? '5 min read'}</p>
          <h2 className="text-4xl font-extrabold mb-4">{post.title}</h2>
          <p className="text-gray-200 mb-5">{post.excerpt}</p>
          <p className="text-sm text-gray-300">{new Date(post.publishedAt).toLocaleDateString()}</p>
          <Link href={`/blog/${post.slug.current}`} className="inline-block mt-6 bg-orange-500 text-black px-4 py-2 rounded-full font-semibold">Read full article</Link>
        </div>
      </div>
    </section>
  )
}
