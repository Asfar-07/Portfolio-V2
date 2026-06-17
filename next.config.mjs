/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'], 
    deviceSizes: [450, 640, 750, 828, 1080, 1200],
    imageSizes: [50, 100, 200, 450],
  },
};

export default nextConfig;
