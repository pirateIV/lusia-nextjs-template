import React from "react";
import { PostCategory } from "@/types";
import { blogs } from "@/data/blog";
import PostCard from "./post-card";

type RelatedPostsProps = {
  category: PostCategory;
  filter?: string;
};

export default function RelatedPosts({ category, filter }: RelatedPostsProps) {
  return (
    <div className="pt-12.5 pb-25">
      <div className="flex flex-col-reverse">
        <h2 className="text-[34px] font-bold">Recent posts</h2>
        <p className="text-sm text-accent-orange font-semibold">
          Stay up-to-date
        </p>
      </div>

      <div className="@container grid lg:grid-cols-4 gap-5">
        {blogs.slice(0, 4).map((blog) => (
          <PostCard
            key={blog.key}
            variant="md"
            category={category}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}
