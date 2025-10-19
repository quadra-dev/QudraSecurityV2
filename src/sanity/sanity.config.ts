import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision'; // Optional but very useful plugin
import { media } from 'sanity-plugin-media'; // Another useful plugin for media management
import blog from '@/sanity/schemas/blog';
import author from '@/sanity/schemas/author';
import blockContent from '@/sanity/schemas/blockContent';

export default defineConfig({
  name: 'default',
  title: 'QuadraSecurity Blog',
  
  // Make sure these environment variables are set in your .env.local file
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  
  // This must match your Next.js route for the studio (e.g., app/studio/page.tsx)
  basePath: '/studio', 

  plugins: [
    structureTool(),
    visionTool(), // Provides an interactive query editor for testing
    media(), // Enhances media asset management (e.g., bulk uploads, organization)
  ],

  schema: {
    types: [blog, author, blockContent],
  },
});