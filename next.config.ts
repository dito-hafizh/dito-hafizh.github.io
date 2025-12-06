import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to produce static HTML
  output: 'export',

  // 2. Disable server-based image optimization
  images: {
    unoptimized: true, 
  },

  // 3. OPTIONAL: Only if your repo is NOT username.github.io
  // If your repo is "my-portfolio", uncomment the line below:
  // basePath: '/my-portfolio',
};

export default nextConfig;