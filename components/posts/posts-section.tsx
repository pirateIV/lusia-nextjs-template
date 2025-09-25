import React from "react";
import PostCard from "../post-card";
import { Post } from "@/types";
import { getCategory } from "@/helpers/posts";

export default function PostsSection({
  title,
  data,
  category,
}: {
  title: string;
  data: Post[];
  category?: string;
}) {
  return (
    <div className="pt-12.5 pb-25">
      <div className="flex flex-col-reverse">
        <h2 className="text-[34px] font-bold">{title}</h2>
        <p className="text-sm text-accent-orange font-semibold">
          Stay up-to-date
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((blog) => (
          <div className="@container" key={blog.key}>
            <PostCard
              category={category ? category : getCategory(blog.key)}
              blog={blog}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
