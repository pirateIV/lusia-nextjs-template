import { Blog } from "@/types";

export function sortPostsByDate(blogsArray: Blog[]): Blog[] {
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
