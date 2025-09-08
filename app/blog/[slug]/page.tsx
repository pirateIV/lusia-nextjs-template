import React from "react";
import { getMDXSlugKey, getPostSlugs } from "@/helpers/post";

// export async function generateStaticParams() {
//   return getPostSlugs().map((slug) => {
//     slug;
//   });
// }

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(
    `@/content/${getMDXSlugKey(slug)}.mdx`
  );

  console.log(getMDXSlugKey(slug));

  return (
    <article className="prose max-w-full flex items-center justify-center px-10 py-7">
      <div className="max-w-305">
        <Post />
      </div>
    </article>
  );
}
