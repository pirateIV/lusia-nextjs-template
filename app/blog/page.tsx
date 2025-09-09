import React from "react";
import { blogs } from "@/data/blog";
import BlogPostCard from "@/components/blog-post-card";

export default function Blogs() {
  return (
    <div className="flex items-center justify-center px-12.5 py-15">
      <div className="max-w-305 w-full">
        <div className="grid grid-cols-[minmax(100px,1fr)] md:grid-cols-[repeat(2,minmax(100px,1fr))] lg:grid-cols-[repeat(3,minmax(100px,1fr))] gap-5">
          {blogs.map((blog) => (
            <BlogPostCard
              key={blog.key}
              category={blog.key.split("-")[0]}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
