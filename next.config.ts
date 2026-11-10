
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate static HTML files for GitHub Pages
  output: "export",

  // GitHub repository path
  basePath: "/Confectionery-",

  // Generate index.html for each route
  trailingSlash: true,

  // Disable Next.js image optimization
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "xwatch.vn",
        pathname: "/upload_images/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // Keep existing Tailwind Turbopack configuration
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
