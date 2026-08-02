import type { WritingItem } from '@/lib/types';

/**
 * Manually maintained for now — add an entry per post you publish (Medium,
 * dev.to, LinkedIn article, wherever it lives) and it shows up here. No entry
 * needed until you actually have something published: an empty array hides
 * the Writing section from the page and nav automatically.
 *
 * href: link to the published post
 * date: e.g. "Jan 2027" — shown next to the title
 * description: one line, optional
 * source: e.g. "Medium", "dev.to" — optional, shown under the description
 */
export const writing: WritingItem[] = [];
