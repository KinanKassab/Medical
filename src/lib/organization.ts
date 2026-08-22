/**
 * Organization and commerce configuration.
 * Empty env values are treated as missing. Placeholder-looking values are ignored
 * so they never appear as fake contacts in the UI.
 */
function readPublic(name: string): string | null {
  const raw = process.env[name]?.trim() ?? ''
  if (!raw) return null
  if (
    /^(todo|tbd|changeme|n\/a|na|none|null|your[_-]|placeholder|xxx+$)/i.test(
      raw,
    )
  ) {
    return null
  }
  return raw
}

function digitsOnly(value: string | null): string | null {
  if (!value) return null
  const digits = value.replace(/\D/g, '')
  return digits.length >= 8 ? digits : null
}

export type OrganizationConfig = {
  legalName: string | null
  physicalAddress: string | null
  officialPhone: string | null
  officialWhatsapp: string | null
  officialEmail: string | null
  registeredPresentation: string | null
  prescriptionRequired: boolean
}

export function getOrganization(): OrganizationConfig {
  return {
    legalName: readPublic('NEXT_PUBLIC_LEGAL_ORGANIZATION_NAME'),
    physicalAddress: readPublic('NEXT_PUBLIC_PHYSICAL_ADDRESS'),
    officialPhone: readPublic('NEXT_PUBLIC_OFFICIAL_PHONE'),
    officialWhatsapp: digitsOnly(readPublic('NEXT_PUBLIC_OFFICIAL_WHATSAPP')),
    officialEmail: readPublic('NEXT_PUBLIC_OFFICIAL_EMAIL'),
    registeredPresentation: readPublic('NEXT_PUBLIC_REGISTERED_PRESENTATION'),
    prescriptionRequired:
      (process.env.NEXT_PUBLIC_PRESCRIPTION_REQUIRED ?? 'true').toLowerCase() !==
      'false',
  }
}

export function displayOrganizationName(org = getOrganization()) {
  return org.legalName ?? 'الدكتورة أية'
}

export function officialWhatsappUrl(org = getOrganization()) {
  return org.officialWhatsapp ? `https://wa.me/${org.officialWhatsapp}` : null
}

export const WHATSAPP_ORDER_LABEL = 'طلب الدواء عبر واتساب'

export const WHATSAPP_ORDER_MESSAGE =
  'مرحباً، أريد الاستفسار عن توفر سايتوتك وبدء طلب شراء عبر موقع cytotc.com.'

export function officialWhatsappOrderUrl(org = getOrganization()) {
  if (!org.officialWhatsapp) return null
  return `https://wa.me/${org.officialWhatsapp}?text=${encodeURIComponent(WHATSAPP_ORDER_MESSAGE)}`
}

export function officialPhoneDisplay(org = getOrganization()) {
  const raw = org.officialPhone ?? org.officialWhatsapp
  if (!raw) return null
  const digits = raw.replace(/\D/g, '')
  return digits ? `+${digits}` : raw
}

export const ORDER_STEPS = [
  { id: 'click', label: 'اضغط «طلب الدواء عبر واتساب»' },
  { id: 'contact', label: 'تواصل مع فريق المنشأة' },
  { id: 'verify', label: 'التحقق من المتطلبات والوصفة عند الحاجة' },
  { id: 'confirm', label: 'تأكيد التوفر والسعر' },
  { id: 'fulfill', label: 'اعتماد الطلب واستكمال الدفع والتسليم' },
] as const
