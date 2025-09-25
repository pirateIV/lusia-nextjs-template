import { Post, PostCategory } from "@/types";

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRelatedPosts = (
  posts: Record<PostCategory, Post[]>,
  {
    category,
    limit,
    slug,
    shuffle = false,
  }: {
    category: PostCategory;
    slug: string;
    limit?: number;
    shuffle?: boolean;
  }
) => {
  const categoryPosts = posts[category];
  if (!categoryPosts) return [];

  let filteredPosts = categoryPosts.filter((post) => {
    return post.slug !== slug;
  });

  if (shuffle) {
    filteredPosts = shuffleArray(filteredPosts);
  }

  return typeof limit === "number"
    ? filteredPosts.slice(0, limit)
    : filteredPosts;
};
