import { getOrganization, officialPhoneDisplay } from '@/lib/organization'
import { SITE } from '@/lib/site'

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
  const org = getOrganization()
  const phone = officialPhoneDisplay(org)

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: org.legalName ?? SITE.name,
    alternateName: SITE.nameAr,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.shortDescription,
    ...(phone
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: phone,
            contactType: 'customer support',
            availableLanguage: ['ar'],
          },
        }
      : {}),
    ...(org.officialEmail ? { email: org.officialEmail } : {}),
    ...(org.physicalAddress
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: org.physicalAddress,
            addressCountry: SITE.countryCode,
          },
        }
      : {}),
  }
}
