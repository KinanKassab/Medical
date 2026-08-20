import { DISPLAY_PHONE, SITE } from '@/lib/site'

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    alternateName: SITE.nameAr,
    url: SITE.url,
    inLanguage: 'ar',
    description: SITE.shortDescription,
    publisher: { '@id': `${SITE.url}/#organization` },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameAr,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.shortDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: DISPLAY_PHONE,
      contactType: 'customer support',
      availableLanguage: ['ar'],
    },
  }
}
