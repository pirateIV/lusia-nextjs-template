import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { EllipsisVertical } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cx } from "@/utils/cx";
import { Blog } from "@/types";

const postCardVariants = cva(
  "group w-full flex gap-2.5 text-[10px] not-[p]:font-semibold",
  {
    variants: {
      size: {
        default: "flex-col",
        md: "flex-col @3xl:flex-row @3xl:[flex-flow:row] @3xl:items-center",
        sm: "py-3.75",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface PostCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof postCardVariants> {
  blog: Blog;
  className?: string;
  category?: string;
}

export default function PostCard({
  blog,
  className,
  category,
  size = "default",
  ...props
}: PostCardProps) {
  return (
    <div className={cx(postCardVariants({ size, className }))} {...props}>
      <div
        className={cx(
          "relative aspect-[1.2/1] shrink-0 overflow-hidden",
          size === "md" && "@3xl:aspect-[1.7/1] @3xl:w-62.5 h-full",
          size === "sm" && "size-25"
        )}
      >
        <Image
          src={blog.image}
          sizes={
            size === "default"
              ? "calc(min(314px,100vw))"
              : size === "md"
              ? "287.5px"
              : "115px" 
          }
          className={cx(
            "size-full object-cover scale-[115%]",
            "transition-transform duration-500 group-hover:scale-100"
          )}
          priority
          fill
          alt=""
        />
      </div>
      <div
        className={cx(
          "flex flex-col gap-2.5",
          size === "md" && "@3xl:px-3.75 @3xl:py-5"
        )}
      >
        <div className="flex items-center text-accent-orange gap-0.5">
          <span>{formatDate(blog.postDate)}</span>
          <EllipsisVertical className="size-2.5" />
          {size === "md" ? (
            <Link
              href={`/category/${category}`}
              className="uppercase underline"
            >
              {category}
            </Link>
          ) : (
            <span className="uppercase">{category}</span>
          )}
        </div>
        <Link
          href={`/blog/${blog.slug}`}
          className={cx(
            "inline-block font-playfair-display hover:underline",
            size === "sm" ? "text-lg/[1.2em]" : "text-[22px]/[1.2em]"
          )}
        >
          {blog.title}
        </Link>
        {size !== "sm" && (
          <p className="text-sm font-normal">{blog.description}</p>
        )}
      </div>
    </div>
  );
}
