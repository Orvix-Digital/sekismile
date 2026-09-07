import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed as a container on Coolify, so ship the standalone server bundle.
  output: "standalone",
  images: {
    // The only image is a static brand logo, and sharp is deliberately not
    // built in this project, so skip the optimizer entirely.
    unoptimized: true,
  },
};

export default nextConfig;
