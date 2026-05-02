import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/publish',
        destination: '/publish.html',
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
