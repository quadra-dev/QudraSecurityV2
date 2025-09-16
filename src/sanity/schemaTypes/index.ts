import { type SchemaTypeDefinition } from 'sanity'
import blog from '@/sanity/schemas/blog'
import author from '@/sanity/schemas/author'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,author],
}
