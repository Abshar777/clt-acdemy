/**
 * Estimate reading time from HTML/text content.
 * Strips tags, counts words, assumes ~200 words/minute.
 * Falls back to an explicit value (e.g. post.readTime) when content is empty.
 */
export function getReadTime(content?: string, fallback?: string): string {
  if (fallback && fallback.trim()) return fallback;
  if (!content) return "1 min read";
  const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
