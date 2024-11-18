/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: '/aws-quiz-app',
  assetPrefix: '/aws-quiz-app/',
  trailingSlash: true,
}

module.exports = nextConfig