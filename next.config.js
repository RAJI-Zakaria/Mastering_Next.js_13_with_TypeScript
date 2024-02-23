/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverComponentsExternalPackages: [
    //         '@react-email/components',
    //         '@react-email/render',
    //         '@react-email/tailwind'
    //     ]
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'earthsky.org',
          },
        ],
      },
}

module.exports = nextConfig
