/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',

  compiler: {
    styledComponents: true,
  },

  compress: true,

  poweredByHeader: false,

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;