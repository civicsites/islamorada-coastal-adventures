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
      {
        source: "/home-page-gallery",
        destination: "/",
        permanent: true,
      },
      {
        source: "/snorkeling-gallery/uhfjpstzclpqna66qdirscerzkh3p0",
        destination: "/snorkeling",
        permanent: true,
      },
      {
        source: "/snorkeling-gallery/we89sga0yd3t6odwqk0fbfwtmfkj72",
        destination: "/snorkeling",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;