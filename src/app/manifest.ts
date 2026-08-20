import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.nameAr,
    short_name: SITE.name,
    description: SITE.shortDescription,
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0b7a3a',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/favicon/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
