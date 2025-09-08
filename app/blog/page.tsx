import { blogs } from "@/data/blog";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  console.log(blogs.length);
  return (
    <div className="space-y-5">
      {blogs.map((blog) => (
        <div key={blog.key} className="text-[10px] not-[a]:font-medium">
          <div className="flex items-center gap-0.5">
            <span className="text-accent-orange">{blog.postDate}</span>
            <span className="h-full w-0.5 bg-accent-orange"></span>
            <span className="text-accent-orange uppercase">
              {blog.key.split("-")[0]}
            </span>
          </div>
          <Link
            href={`/blog/${blog.slug}`}
            className="text-2xl font-semibold font-playfair-display inline-block hover:underline"
          >
            {blog.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
