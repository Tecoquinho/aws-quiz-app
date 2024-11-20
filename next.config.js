/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aws-quiz-app',
  assetPrefix: '/aws-quiz-app/',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig