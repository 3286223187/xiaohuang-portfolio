import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com",
      },
    ],
  },
};

export default nextConfig;
