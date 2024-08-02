import withBundleAnalyzer from "@next/bundle-analyzer";

// Configure the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Next.js configuration
const nextConfig = {
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION",
    NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-S66GX9CHSJ",
  },
  images: {
    domains: [
      "cms-service.xn--42cmi5cav0akb2kza7ech6u.com",
      "cms-service.พระครูบาบุญชุ่ม.com",
      "i1.ytimg.com",
    ],
  },
};

// Export the configuration
export default bundleAnalyzer(nextConfig);
