/** @type {import('next').NextConfig} */

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig = {
  // Static export is only needed for GitHub Pages. Local Next.js dev/start should
  // keep the normal app router behavior so '/' resolves without a 404.
  ...(isGithubPages && { output: 'export' }),
  ...(isGithubPages && { trailingSlash: true }),

  // GitHub Pages only
  basePath: isGithubPages ? '/my-portfolio' : '',
  assetPrefix: isGithubPages ? '/my-portfolio/' : '',

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