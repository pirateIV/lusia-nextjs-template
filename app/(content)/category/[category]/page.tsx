import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogPostCard from "@/components/blog-post-card";
import Divider from "@/components/layout/divider";
import Sidebar from "@/components/layout/sidebar";
import { data, descriptions } from "@/data/blog";
import PostCard from "@/components/post-card";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;

  const blogCategoryData = data[category as keyof typeof data];
  const description = descriptions[category as keyof typeof data];

  if (!blogCategoryData) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center px-7 lg:px-15">
      <div className="max-w-305 w-full">
        <div className="flex flex-col items-center gap-7.5 py-12.5 md:flex-row lg:gap-12.5">
          <div className="space-y-2.5">
            <h1 className="capitalize font-playfair-display text-[40px] font-semibold">
              {category}
            </h1>
            <p>{description}</p>
          </div>
          <div className="size-full overflow-hidden md:w-[30%] shrink-0">
            <Image
              src={`/images/${category}.jpg`}
              width="366"
              height="203"
              sizes="(min-width: 1200px) max(min(max(100vw - 120px, 1px), 1220px) * 0.3, 1px), (max-width: 809.98px) max(min(max(100vw - 40px, 1px), 1220px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(max(100vw - 56px, 1px), 1220px) * 0.3, 1px)"
              className="size-full aspect-[366/203] object-cover border border-background-dark/30"
              alt={category}
            />
          </div>
        </div>

        <div className="relative space-y-5 py-12.5 w-full">
          <Divider />
          <div className="relative lg:flex gap-12.5">
            <div className="w-full min-h-screen space-y-5 lg:w-[70%]">
              <div className="flex flex-col-reverse">
                <h2 className="text-[34px]/[1.2em] font-semibold font-playfair-display">
                  Recent Posts
                </h2>
                <p className="text-sm font-medium text-accent-orange">
                  Stay up-to-date
                </p>
              </div>
              <Divider />
              <div className="@container">
                {blogCategoryData.map((blog) => (
                  <PostCard
                    key={blog.key}
                    variant="md"
                    blog={blog}
                    category={category}
                  />
                ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
