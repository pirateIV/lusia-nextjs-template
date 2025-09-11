import { blogs } from "@/data/blog";

export function getPostSlugs(): string[] {
  return blogs.map(({ slug }) => slug);
}

export function getMDXSlugKey(s: string) {
  return blogs.find(({ slug }) => slug === s)?.key;
}

export function getPostsByKey(keys: string[]) {
  return blogs.filter(({ key }) => keys.includes(key));
}

export function getCategory(key: string) {
  return key.split("-")[0];
}
