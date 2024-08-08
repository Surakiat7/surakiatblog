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
  compress: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        vendor: {
          name: "vendor",
          chunks: "all",
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
