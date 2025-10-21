import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://srv-captain--api-larevangelico:9833/api/:path*`,
      },
    ];
  },

  eslint: {
    // Desativa ESLint durante o build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de tipo durante o build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
