/**
 * Central site configuration.
 *
 * Organization/license/contact facts live in `organization.ts` and environment
 * variables. Do not hard-code licenses, emails, or WhatsApp numbers here.
 */
export const SITE = {
  name: 'cytotc.com',
  nameAr: 'طلب سايتوتك ومعلومات ميزوبروستول',
  shortDescription:
    'بوابة عربية لطلب سايتوتك (ميزوبروستول) عبر المنشأة المشغّلة، مع معلومات وتحذيرات مستندة إلى مصادر أولية. ليس الموقع الرسمي لشركة فايزر.',
  url: 'https://cytotc.com',
  domain: 'cytotc.com',
  locale: 'ar_SA',
  language: 'ar',
  direction: 'rtl' as const,
  mismatchedEmailDoNotUse: 'support@cytotec.com',
  countryLabel: 'المملكة العربية السعودية',
  countryCode: 'SA',
  copyrightYear: 2026,
  defaultOgAlt: 'cytotc.com — طلب سايتوتك ومعلومات ميزوبروستول',
} as const

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE.url
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}
