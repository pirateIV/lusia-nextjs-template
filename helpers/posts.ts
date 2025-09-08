import { blogs } from "@/data/blog";

export function getPostSlugs(): string[] {
  return blogs.map(({ slug }) => slug);
}

export function getMDXSlugKey(slug: string) {
  return blogs.find((blog) => blog.slug === slug)?.key;
}

export function sortPostsByDate(blogsArray: typeof blogs): typeof blogs {
  return [...blogsArray].sort(
    (a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
  );
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
