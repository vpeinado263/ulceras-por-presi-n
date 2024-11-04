/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'botiquinsans.com',
      },
      {
        protocol: 'https',
        hostname: 'techdent.cl',
      },
      {
        protocol: 'https',
        hostname: 'prevencionulcerasyheridas.com',
      },
    ],
  }
};

export default nextConfig;
