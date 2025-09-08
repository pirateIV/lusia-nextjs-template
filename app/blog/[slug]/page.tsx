import React from "react";
import { blogs } from "@/data/blog";

function getMDXSlugKey(slug: string) {
  return blogs.find((blog) => blog.slug === slug)?.key;
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(
    `@/content/${getMDXSlugKey(slug)}.mdx`
  );

  return (
    <article className="prose">
      <Post />
    </article>
  );
}
