import { blogs } from "@/data/blog";
import React from "react";

export default function RecentPosts() {
  return (
    <div>
      {blogs.slice(6).map((blog) => (
        <div></div>
      ))}

      <button>More Post</button>
    </div>
  );
}
