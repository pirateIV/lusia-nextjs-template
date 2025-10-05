import RecentPosts from "@/components/posts/recent-posts";
import ButtonLink from "@/components/button-link";

export default function Home() {
  return (
    <div className="max-w-305 mx-auto @container">
      <RecentPosts />
      <ButtonLink href="/blog">More Posts</ButtonLink>
    </div>
  );
}
