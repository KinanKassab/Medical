/**
 * Central site configuration.
 *
 * OWNER TODO (do not invent values in the UI):
 * - Confirm the WhatsApp number actually controlled by the operator.
 *   Visible HTML used +966593984751; the old script opened +971585667242.
 * - Provide an email on @cytotc.com only after mailbox control is verified.
 *   Do not use support@cytotec.com (different domain).
 * - Provide legal entity name, commercial registration, licensed-pharmacy
 *   status, and street address only if independently verified.
 * - Provide GA4 ID and Search Console verification via environment variables.
 */
export const SITE = {
  name: 'cytotc.com',
  nameAr: 'معلومات عن سايتوتك وميزوبروستول',
  shortDescription:
    'موقع معلوماتي بالعربية عن سايتوتك (ميزوبروستول). ليس الموقع الرسمي للشركة المصنعة، ولا يقدّم استشارة طبية.',
  url: 'https://cytotc.com',
  domain: 'cytotc.com',
  locale: 'ar_SA',
  language: 'ar',
  direction: 'rtl' as const,
  /** Confirmed from visible page content. OWNER must verify control of this number. */
  whatsappE164: '966593984751',
  /**
   * Found in the previous JavaScript file, not shown in visible contact blocks.
   * Do not display until the owner confirms which number is correct.
   */
  whatsappNumberConflict: '971585667242',
  email: null as string | null,
  mismatchedEmailDoNotUse: 'support@cytotec.com',
  countryLabel: 'المملكة العربية السعودية',
  countryCode: 'SA',
  copyrightYear: 2026,
  defaultOgAlt: 'cytotc.com — معلومات عن سايتوتك (ميزوبروستول)',
} as const

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappE164}`

export const DISPLAY_PHONE = `+${SITE.whatsappE164}`

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE.url
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}
