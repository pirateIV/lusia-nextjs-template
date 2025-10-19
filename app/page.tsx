import RecentPosts from "@/components/posts/recent-posts";
import ButtonLink from "@/components/button-link";
import { getStories } from "@/utils/blog-posts-filter";
import { blogs } from "@/data/blog";
import PostCard from "@/components/post-card";
import { getCategory } from "@/helpers/posts";
import PostsSection from "@/components/posts/posts-section";

export default function Home() {
  const posts = getStories(blogs, { limit: 4 });
  return (
    <div className="max-w-305 mx-auto @container">
      <PostsSection data={posts} />
      <RecentPosts />
      <ButtonLink href="/blog">More Posts</ButtonLink>
    </div>
  );
}
