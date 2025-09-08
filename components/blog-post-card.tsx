import Link from "next/link";
import React from "react";

export default function BlogPostCard({ postId }: { postId: string }) {
  // Generate post through the "postId" prop
  return (
    <div className="space-y-2.5">
      <img />
      <p className="font-medium text-[10px]">FEB 13, 2023 : TRAVEL</p>
      <Link href="/" className="text-xl font-semibold">
        Traveling on a Budget: Tips and Tricks for Affordable Adventures
      </Link>
      <p>
        Instead of rushing through a checklist of attractions, you take the time
        to connect with
      </p>
    </div>
  );
}
