/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const basePath = isGitHubPages ? (process.env.NEXT_PUBLIC_BASE_PATH || '/my-portfolio') : '';

const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,

  // Local: /
  // GitHub Pages: /my-portfolio
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',

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