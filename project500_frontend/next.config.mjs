/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com'
      },
    ]
  },
  env: {
    NEXT_PUBLIC_BREVO_API_KEY: process.env.NEXT_PUBLIC_BREVO_API_KEY,
  },
};

export default nextConfig;
