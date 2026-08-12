import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sandbar-excursions",
        destination: "/sandbar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;