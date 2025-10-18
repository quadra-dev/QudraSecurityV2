// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }
// lib/image.ts
import imageUrlBuilder from '@sanity/image-url';
// 1. IMPORT the specific type for a Sanity image source
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; 
import { client } from './client'; // Assuming './client' exports the Sanity client instance

const builder = imageUrlBuilder(client);

// 2. Use the specific imported type instead of 'any'
export const urlFor = (source: SanityImageSource) => builder.image(source);