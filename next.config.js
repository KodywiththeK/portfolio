/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'invented-song-ea3.notion.site',
      },
    ],
  },
}

module.exports = nextConfig
