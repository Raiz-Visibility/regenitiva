const KNOWN_CATEGORIES = ['Compliance', 'Practice Growth', 'Clinical', 'Operations'];

export function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getReadTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function validateCategory(category: string, slug: string): void {
  if (!KNOWN_CATEGORIES.includes(category)) {
    console.warn(
      `[blog] Unknown category "${category}" in post "${slug}". ` +
      `Known categories: ${KNOWN_CATEGORIES.join(', ')}`
    );
  }
}

export { KNOWN_CATEGORIES };
