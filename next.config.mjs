/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "surakiat-images.imgix.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
