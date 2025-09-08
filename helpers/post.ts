import { blogs } from "@/data/blog";

export function getPostSlugs(): string[] {
  return blogs.map(({ slug }) => slug);
}

export function getMDXSlugKey(slug: string) {
  return blogs.find((blog) => blog.slug === slug)?.key;
}
