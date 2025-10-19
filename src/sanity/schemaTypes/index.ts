import { type SchemaTypeDefinition } from 'sanity'
import blog from '../schemas/blog'
import author from '../schemas/author'
import blockContent from '../schemas/blockContent'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,author,blockContent],
}