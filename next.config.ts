import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // markdown plugins
});

export default withMDX(nextConfig);
  