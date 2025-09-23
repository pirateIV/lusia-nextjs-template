import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPosts, getPostBySlug } from "@/lib/post";
import { getMDXSlugKey } from "@/helpers/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug: `/blog/${slug}` }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const { default: Post } = await import(
  //   `@/content/${getMDXSlugKey(slug)}.mdx`
  // );

  const post = getPostBySlug(slug);
  if (!post) {
    return notFound();
  }

  const mdxSource = await serialize(post.content);

  return (
    <article className="prose max-w-full flex items-center justify-center px-10 py-7">
      <div className="max-w-305">
        <MDXRemote source={mdxSource} />
      </div>
    </article>
  );
}

// export async function generateStaticParams() {
//   return getPostSlugs().map((slug) => ({
//     slug: `/blog/${slug}`,
//   }));
// }
