/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aws-quiz-app',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig