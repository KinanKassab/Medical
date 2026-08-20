import type { Metadata } from 'next'
import { absoluteUrl, SITE } from '@/lib/site'

type SeoInput = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  imageAlt?: string
}

export function createMetadata({
  title,
  description,
  path,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
  imageAlt,
}: SeoInput): Metadata {
  const url = absoluteUrl(path)
  const ogImage = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: imageAlt ?? SITE.defaultOgAlt,
  }

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: ogType,
      images: [ogImage],
      ...(ogType === 'article'
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
