// studio/schemas/blog.ts

// Define a type for the Sanity validation Rule object
type SanityValidationRule = {
  required: () => SanityValidationRule;
  custom: (fn: (arg: unknown) => true | string) => SanityValidationRule;
};

const blogPostSchema = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: SanityValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule: SanityValidationRule) => Rule.required() },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    {
      name: "collage",
      title: "Image Collage",
      type: "object",
      fields: [
        {
          name: "layout",
          title: "Layout",
          type: "string",
          options: { list: [{ title: "Grid", value: "grid" }, { title: "Masonry", value: "masonry" }] },
          initialValue: "grid",
        },
        {
          name: "columns",
          title: "Columns",
          type: "number",
          description: "Number of columns (for grid layout)",
          initialValue: 4,
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                { name: "caption", title: "Caption", type: "string" },
                { name: "colSpan", title: "Column span", type: "number", initialValue: 1 },
                { name: "rowSpan", title: "Row span", type: "number", initialValue: 1 },
              ],
            },
          ],
        },
      ],
    },
    { name: "content", title: "Content", type: "blockContent" },
    { name: "publishedAt", title: "Published at", type: "datetime" },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
};

export default blogPostSchema;
