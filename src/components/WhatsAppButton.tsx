import { DISPLAY_PHONE, WHATSAPP_URL } from '@/lib/site'
import { Icon } from '@/components/Icon'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-icon show"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`التواصل عبر واتساب على ${DISPLAY_PHONE}`}
    >
      <Icon name="whatsapp" />
    </a>
  )
}
