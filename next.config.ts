import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/', permanent: true },
      { source: '/privacy', destination: '/', permanent: true },
      { source: '/terms-of-service', destination: '/', permanent: true },
      { source: '/terms', destination: '/', permanent: true },
      { source: '/editorial-policy', destination: '/', permanent: true },
      { source: '/medical-review-policy', destination: '/', permanent: true },
      { source: '/corrections-policy', destination: '/', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/order', destination: '/order-cytotec', permanent: true },
      { source: '/order/', destination: '/order-cytotec', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
