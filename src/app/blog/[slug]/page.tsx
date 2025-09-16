// app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG } from "@/sanity/lib/sanity.queries";
import PortableTextRenderer from "../../../components/PortableTextRenderer";
import Collage from "../../../components/Collage";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const post = await client.fetch(POST_BY_SLUG, { slug });

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.coverImage && (
        <img
          src={urlFor(post.coverImage).width(1600).auto("format").url()}
          alt={post.title}
          className="w-full h-96 object-cover rounded"
        />
      )}

      <div className="mt-6 text-gray-800">
        <PortableTextRenderer value={post.content} />
      </div>

      {/* Collage */}
      <Collage collage={post.collage ?? null} />
    </main>
  );
}
