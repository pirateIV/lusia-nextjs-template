import React from "react";
import { notFound } from "next/navigation";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/post";
import { getMDXSlugKey } from "@/helpers/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(getMDXSlugKey(slug));

  if (!post) {
    return notFound();
  }

  const {
    content,
    frontmatter: { title, description, image },
  } = post;

  return (
    <>
      {/* <NextSeo
        title={title}
        description={description}
        openGraph={{
          images: [{ url: image }],
        }}
      /> */}
      <article className="prose max-w-full flex items-center justify-center px-10 py-7">
        <div className="max-w-305">
          <MDXRemote source={content} />
        </div>
      </article>
    </>
  );
}
