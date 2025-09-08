import React from "react";
import { getMDXSlugKey, getPostSlugs } from "@/helpers/posts";

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
    <article className="prose max-w-full flex items-center justify-center px-10 py-7">
      <div className="max-w-305">
        <Post />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: `/blog/${slug}`,
  }));
}
