import withBundleAnalyzer from '@next/bundle-analyzer';

// Configure the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Next.js configuration
const nextConfig = {
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  images: {
    domains: [
      'surakiat.dev',
    ],
  },
};

// Export the configuration
export default bundleAnalyzer(nextConfig);