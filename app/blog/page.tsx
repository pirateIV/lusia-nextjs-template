import React from "react";
import Link from "next/link";
import { blogs } from "@/data/blog";
import { formatDate, sortPostsByDate } from "@/helpers/posts";

export default function Blogs() {
  console.log(blogs.length);
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-405 px-12.5 py-15">
        <div className="grid grid-cols-3 gap-5">
          {sortPostsByDate(blogs).map((blog) => (
            <div key={blog.key} className="text-[10px] not-[p]:font-semibold">
              {/* <img src="" className="size-full" alt="" /> */}
              <div className="flex items-center gap-0.5">
                <span className="text-accent-orange">
                  {formatDate(blog.postDate)}
                </span>
                <span className="h-full w-0.5 bg-accent-orange"></span>
                <span className="text-accent-orange uppercase">
                  {blog.key.split("-")[0]}
                </span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-[22px] font-playfair-display inline-block hover:underline"
              >
                {blog.title}
              </Link>
              <p className="text-sm font-normal">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
