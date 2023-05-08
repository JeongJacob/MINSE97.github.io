/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/api/projects",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://jacob-minse97.vercel.app/", // 모든 출처 허용
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS", // 허용할 HTTP 메서드
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization", // 허용할 헤더
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
