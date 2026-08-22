/**
 * Central site configuration.
 *
 * Organization and contact facts live in `organization.ts` and environment
 * variables. Do not hard-code emails or WhatsApp numbers here.
 */
export const SITE = {
  name: 'cytotc.com',
  nameAr: 'طلب سايتوتك ومعلومات',
  shortDescription:
    'بوابة عربية لطلب سايتوتك عبر الدكتورة أية، مع معلومات وتحذيرات مستندة إلى مصادر أولية..',
  url: 'https://cytotc.com',
  domain: 'cytotc.com',
  locale: 'ar_SA',
  language: 'ar',
  direction: 'rtl' as const,
  countryLabel: 'المملكة العربية السعودية',
  countryCode: 'SA',
  copyrightYear: 2026,
  defaultOgAlt: 'cytotc.com — طلب سايتوتك ومعلومات',
} as const

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE.url
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}
