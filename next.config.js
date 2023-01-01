/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'giphy.com',
        port: '',
        
      },
    ],
  },
}
module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}
module.exports = nextConfig
