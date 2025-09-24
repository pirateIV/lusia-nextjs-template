import React from "react";
import Image from "next/image";
import { getCategory, getPostsByKey } from "@/helpers/posts";
import { blogData } from "@/data/blog";
import ActiveLink from "../active-link";
import PostCard from "../post-card";

const blogCategories = Object.keys(blogData);

const trendingPosts = getPostsByKey([
  "travel-06",
  "travel-07",
  "lifestyle-02",
  "destination-05",
]);

export default function Sidebar() {
  return (
    <div className="self-start space-y-12.5 lg:w-[30%] lg:sticky lg:top-25">
      <SidebarItem>
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
          I'm a traveler, wanderer, explorer, and adventurer of life's great
          journey.
        </p>
        <Image
          src="/images/signature.png"
          className="object-cover"
          width="120"
          height="43"
          alt="signature"
        />
      </SidebarItem>

      <SidebarItem>
        <h3 className="text-xl font-semibold">Trending Posts</h3>
        {trendingPosts.map((post) => (
          <PostCard
            key={post.key}
            variant="sm"
            category={getCategory(post.key)}
            blog={post}
          />
        ))}
      </SidebarItem>

      <SidebarItem>
        <h3 className="text-xl font-semibold">Categories</h3>
        <ul className="space-2.5">
          {blogCategories.map((category) => (
            <li key={category}>
              <ActiveLink
                href={`/${category}`}
                className="text-xs font-semibold uppercase"
                activeClassName="underline"
              >
                {category}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </SidebarItem>
    </div>
  );
}

function SidebarItem({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5">{children}</div>;
}
