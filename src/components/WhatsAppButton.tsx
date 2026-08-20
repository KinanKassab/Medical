import {
  getOrganization,
  officialPhoneDisplay,
  officialWhatsappOrderUrl,
} from '@/lib/organization'
import { Icon } from '@/components/Icon'
import { WhatsAppOrderButton } from '@/components/WhatsAppOrderButton'

export function WhatsAppButton() {
  const org = getOrganization()
  const href = officialWhatsappOrderUrl(org)
  const phone = officialPhoneDisplay(org)
  if (!href || !phone) return null

  return (
    <WhatsAppOrderButton
      href={href}
      className="whatsapp-icon show"
      location="floating"
    >
      <span className="sr-only">طلب الدواء عبر واتساب</span>
      <Icon name="whatsapp" />
    </WhatsAppOrderButton>
  )
}
