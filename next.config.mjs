/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'] }
}
export default nextConfig
