import React from "react";
import { PostCategory } from "@/types";
import { blogs, blogData } from "@/data/blog";
import PostCard from "../post-card";
import { getRelatedPosts } from "@/utils/blog-posts-filter";

type RelatedPostsProps = {
  category: PostCategory;
  slug: string;
};

export default function RelatedPosts({ category, slug }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(blogData, {
    category: category,
    slug: slug,
    limit: 4,
    shuffle: true,
  });

  return (
    <div className="pt-12.5 pb-25">
      <div className="flex flex-col-reverse">
        <h2 className="text-[34px] font-bold">Related posts</h2>
        <p className="text-sm text-accent-orange font-semibold">
          Stay up-to-date
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {relatedPosts?.map((blog) => (
          <div className="@container" key={blog.key}>
            <PostCard category={category} blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
