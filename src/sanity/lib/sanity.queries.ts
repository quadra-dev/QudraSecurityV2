// lib/sanity.queries.ts
export const POSTS_QUERY = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
  _id, title, excerpt, slug, coverImage, publishedAt, author->{name, image}
}`;

export const POSTS_PAGED = (start: number, end: number, q?: string) => {
  const searchFilter = q ? ` && (title match "${q}*" || excerpt match "${q}*")` : '';
  return `*[_type == "blogPost" ${searchFilter}] | order(publishedAt desc)[${start}...${end}]{
    _id, title, excerpt, slug, "coverImage": coverImage.asset->url, publishedAt, author->{name, image}
  }`;
};

export const POST_BY_SLUG = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, excerpt, slug, coverImage, publishedAt, content, collage, author->{name, image}
}`;
