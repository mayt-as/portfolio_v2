/**
 * Utility function to get the correct asset path based on the environment
 * In production with basePath, assets need to include the base path manually
 * because they are referenced in JavaScript, not in Next.js's static optimization
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the base path
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio_v2/${cleanPath}`;
  }
  
  // In development, use the standard path
  return `/${cleanPath}`;
}

/**
 * Get the correct base path for the application
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/portfolio_v2' : '';
}
