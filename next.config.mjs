/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  },
  async redirects() {
    return [
      { source: "/laser-hair-removal", destination: "/", permanent: true },
      { source: "/laser-hair-removal-dubai", destination: "/clinics/dubai/", permanent: true },
      { source: "/prices", destination: "/cost/", permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" }
        ]
      }
    ];
  }
};

export default nextConfig;
