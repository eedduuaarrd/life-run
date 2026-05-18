import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.wordpress.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.veylora.app",
          },
        ],
        destination: "https://veylora.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
