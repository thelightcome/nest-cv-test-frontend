/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST: 'https://nest-cv-test-backend.herokuapp.com'
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
