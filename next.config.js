/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Silence workspace root warning by setting explicit output file tracing root
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig