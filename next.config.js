/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only apply basePath and assetPrefix for production builds
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/portfolio_v2',
    assetPrefix: '/portfolio_v2/',
  }),
  // Enable static export for GitHub Pages deployment
  ...(process.env.GITHUB_PAGES === 'true' && {
    output: 'export',
    distDir: 'out',
  }),
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig