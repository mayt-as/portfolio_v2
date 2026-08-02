/**
 * Base path handling
 * ------------------
 * GitHub Pages serves project sites from a sub-path (e.g. /portfolio_v2), so the
 * site needs `basePath`. Rather than guessing from NODE_ENV, it is read from an
 * explicit env var that the deploy workflow sets. That means:
 *   - `npm run dev`   -> no base path
 *   - local `npm run build` -> no base path (previewable with `npx serve out`)
 *   - CI / GitHub Pages -> NEXT_PUBLIC_BASE_PATH=/portfolio_v2
 * Moving to a custom domain later = drop the env var from the workflow.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath && { basePath, assetPrefix: basePath }),
};

module.exports = nextConfig;
