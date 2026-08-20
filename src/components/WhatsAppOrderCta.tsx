import { WhatsAppOrderButton } from '@/components/WhatsAppOrderButton'
import { officialWhatsappOrderUrl } from '@/lib/organization'

export function WhatsAppOrderCta({
  className = 'cta-btn',
  location,
}: {
  className?: string
  location: string
}) {
  const href = officialWhatsappOrderUrl()
  if (!href) return null
  return (
    <WhatsAppOrderButton href={href} className={className} location={location} />
  )
}
