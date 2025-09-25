// utils/truncatePortableText.ts
export function truncatePortableText(blocks: any[], wordLimit: number) {
  let wordCount = 0;
  const truncatedBlocks: any[] = [];

  for (const block of blocks) {
    if (block._type !== "block" || !block.children) {
      truncatedBlocks.push(block);
      continue;
    }

    const newChildren: any[] = [];
    for (const child of block.children) {
      const words = child.text.split(/\s+/);

      if (wordCount + words.length <= wordLimit) {
        newChildren.push(child);
        wordCount += words.length;
      } else {
        const remaining = wordLimit - wordCount;
        if (remaining > 0) {
          newChildren.push({
            ...child,
            text: words.slice(0, remaining).join(" ") + "..."
          });
        }
        wordCount = wordLimit;
        break;
      }
    }

    truncatedBlocks.push({ ...block, children: newChildren });

    if (wordCount >= wordLimit) break;
  }

  return truncatedBlocks;
}
