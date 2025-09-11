import React from "react";
import { notFound } from "next/navigation";
import { data, descriptions } from "@/data/blog";
import BlogPostCard from "@/components/blog-post-card";
import Divider from "@/components/layout/divider";
import Image from "next/image";
import Link from "next/link";

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
          <div className="w-full md:w-[30%] shrink-0">
            <Image
              src={`/images/${category}.jpg`}
              className="size-full border border-background-dark/30"
              width="366"
              height="203"
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
                  <BlogPostCard
                    key={blog.key}
                    blog={blog}
                    imageSize="287.5px"
                    className="@3xl:flex-row @3xl:[flex-flow:row] @3xl:items-center @3xl:*:[[data-content]]:px-3.75 @3xl:*:[[data-content]]:py-5"
                    category={category}
                  />
                ))}
              </div>
            </div>

            <div className="self-start lg:w-[30%] lg:sticky lg:top-25">
              <div className="space-y-2.5">
                <h3 className="font-semibold text-lg font-playfair-display">
                  About me
                </h3>
                <div className="size-35">
                  <Image
                    src="/images/author.png"
                    className="rounded-full"
                    width="800"
                    height="800"
                    alt="author's profile image"
                  />
                </div>
                <h3 className="font-semibold text-lg">Lusia BierHoff</h3>
                <p className="text-sm">
                  I'm a traveler, wanderer, explorer, and adventurer of life's
                  great journey.
                </p>
              </div>

              <div>
                <h3 className="text-xl">Categories</h3>

                <ul>
                  <li>
                    <Link href="/travel">Travel</Link>
                  </li>
                  <li>
                    <Link href="/lifestyle">Lifestyle</Link>
                  </li>
                  <li>
                    <Link href="/destination">Destination</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
