// utils/truncatePortableText.ts

// IMPORT the definitive PortableTextBlock and related types
import { PortableTextBlock, PortableTextMarkDefinition } from '@/components/PortableTextRenderer'; 
// NOTE: Adjust the path if PortableTextRenderer is not in the '@/components' directory

// Define internal types consistent with PortableText structure
interface PortableTextSpan {
  _key: string;
  _type: 'span';
  text: string;
  marks?: string[];
}

interface PortableTextBaseBlock {
  _key: string;
  _type: string;
}

// 1. Update the function signature to only accept the PortableTextBlock array
export function truncatePortableText(blocks: PortableTextBlock[], wordLimit: number): PortableTextBlock[] {
  let wordCount = 0;
  // 2. The return type is strictly PortableTextBlock[]
  const truncatedBlocks: PortableTextBlock[] = [];

  for (const block of blocks) {
    // Narrowing the type to ensure we only process PortableTextBlock
    if (block._type !== "block" || !('children' in block) || !block.children) {
      // NOTE: If you have custom non-'block' types, you will need to filter them out 
      // or define a return type of (PortableTextBlock | CustomBlock)[]
      continue; 
    }
    
    const textBlock = block as PortableTextBlock;

    const newChildren: PortableTextSpan[] = [];
    for (const child of textBlock.children as PortableTextSpan[]) { // Cast to PortableTextSpan for safety
      if (typeof child.text !== 'string') {
        newChildren.push(child);
        continue;
      }
      
      const words = child.text.split(/\s+/).filter(w => w.length > 0);

      if (wordCount + words.length <= wordLimit) {
        newChildren.push(child);
        wordCount += words.length;
      } else {
        const remaining = wordLimit - wordCount;
        if (remaining > 0) {
          newChildren.push({
            ...child,
            text: words.slice(0, remaining).join(" ") + "..."
          } as PortableTextSpan); // Cast the new object to PortableTextSpan
        }
        wordCount = wordLimit;
        break; 
      }
    }

    // Push the truncated block back
    truncatedBlocks.push({ ...textBlock, children: newChildren });

    if (wordCount >= wordLimit) break;
  }

  return truncatedBlocks;
}