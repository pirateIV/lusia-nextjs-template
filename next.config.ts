import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // markdown plugins
});

export default withMDX(nextConfig);
