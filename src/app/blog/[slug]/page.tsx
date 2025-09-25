import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG, POSTS_PAGED } from "@/sanity/lib/sanity.queries";
import { urlFor } from "@/sanity/lib/image";
import Collage from "../../../components/Collage";
import ReadMoreContent from "../../../components/ReadMoreContent";
import PostCard from "@/components/cards/BlogCard";

export const revalidate = 60;

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const slug = params.slug;
  const post = await client.fetch(POST_BY_SLUG, { slug });

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  // fetch other posts (exclude current one)
  const otherPosts = await client.fetch(POSTS_PAGED(0, 4)); // first 4 posts
  const related = otherPosts.filter((p: any) => p.slug.current !== slug);

  return (
    <div className="bg-[#380551]">
    <main className="max-w-4xl  p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.coverImage && (
        <img
          src={urlFor(post.coverImage).width(1600).auto("format").url()}
          alt={post.title}
          className=" w-full md:w[70%]- h-96 object-cover rounded "
        />
      )}

      {/* Content with Read More */}
      <div className="mt-6 text-white max-w-4xl">
        <ReadMoreContent value={post.content} wordLimit={400} />
      </div>

      {/* Collage */}
      <Collage collage={post.collage ?? null} />

      {/* You might be interested in */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {related.map((p: any) => (
            <PostCard key={p._id} post={p} />
          ))}
        </div>
      </section>
    </main>
    </div>
  );
}
