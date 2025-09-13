/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      buildActivity: false, // disables the build spinner in the corner
      autoPrerender: false, // optional, disables auto-prerender overlay if needed
    },
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  };
  
  export default nextConfig;
  