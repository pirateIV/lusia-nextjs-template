import React from "react";
import { notFound } from "next/navigation";
import { data, descriptions } from "@/data/blog";
import BlogPostCard from "@/components/blog-post-card";
import Divider from "@/components/layout/divider";

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
    <div className="flex items-center justify-center px-15">
      <div className="max-w-305 w-full">
        <div className="space-y-2.5 py-12.5">
          <h1 className="capitalize font-playfair-display text-[40px] font-semibold">
            {category}
          </h1>
          <p>{description}</p>
        </div>

        <div className="space-y-5 py-12.5 w-full">
          <Divider />
          <div className="lg:flex gap-12.5">
            <div className="w-full lg:w-[70%]">
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
                  <BlogPostCard
                    key={blog.key}
                    blog={blog}
                    imageSize="287.5px"
                    className="@3xl:flex-row @3xl:[flex-flow:row] @3xl:items-center [&_data-content]:px-3.75 [&_data-content]:py-5"
                    category={category}
                  />
                ))}
              </div>
            </div>

            <div className="lg:w-[30%] lg:sticky lg:top-25">
              <h3 className="font-semibold text-xl font-playfair-display">
                About me
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
