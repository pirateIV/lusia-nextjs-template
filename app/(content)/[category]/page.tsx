import { data, descriptions } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;

  const blogCategoryData = data[category as keyof typeof data];
  const description = descriptions[category as keyof typeof data];

  if (!blogCategoryData) {
    return <div>Category Not Found</div>;
  }
  return (
    <div>
      <div className="space-y-2.5 px-12.5 py-15">
        <h1 className="capitalize font-playfair-display text-[40px] font-semibold">
          {category}
        </h1>
        <p>{description}</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-405 w-full">
          <div className="space-y-5 py-12.5 px-15 pb-25 w-full">
            <h2 className="text-[34px] font-semibold font-playfair-display">Recent Posts</h2>
            {blogCategoryData.map((blog) => (
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
    </div>
  );
}
