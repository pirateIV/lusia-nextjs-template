import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/post";
import { getMDXSlugKey } from "@/helpers/posts";
import Seo from "@/components/seo";
import Divider from "@/components/layout/divider";
import DateCategory from "@/components/date-category";
import Sidebar from "@/components/layout/sidebar";
import RelatedPosts from "@/components/related-posts";

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
    frontmatter: { title, description, category, image, date },
  } = post;

  return (
    <>
      <Seo title={title} description={description} image={image} />
      <div className="px-15 py-12.5">
        <div className="w-full max-w-305 mx-auto">
          <div className="pt-7.5 pb-12.5">
            <Image
              src={image}
              width={600}
              height={400}
              className="w-full object-cover aspect-auto"
              priority
              alt=""
            />
          </div>
          <Divider />
          <div className="relative lg:flex gap-12.5 py-12.5">
            <div className="w-full min-h-screen space-y-5 lg:w-[70%]">
              <article className="prose max-w-full">
                <div className="!space-y-2.5">
                  <DateCategory variant="md" category={category} date={date} />
                  <h1 className="!mt-0">{title}</h1>
                  <p className="!mt-0">{description}</p>
                  <Divider />
                </div>
                <MDXRemote source={content} />
              </article>
            </div>
            <Sidebar />
          </div>
          <Divider />
          <RelatedPosts filter={slug} category={category} />
        </div>
      </div>
    </>
  );
}
