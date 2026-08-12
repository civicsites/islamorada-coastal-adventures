import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sandbar-excursions",
        destination: "/sandbar",
        permanent: true,
      },
      {
        source: "/charters",
        destination: "/",
        permanent: true,
      },
      {
        source: "/charters-deposit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-banner-gallery",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;