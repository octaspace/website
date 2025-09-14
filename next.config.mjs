/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export',
    devIndicators: {
      buildActivity: false, // disables the build spinner in the corner
      autoPrerender: false, // optional, disables auto-prerender overlay if needed
    },
  };
  
  export default nextConfig;
  
