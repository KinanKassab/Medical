'use client'

import { WHATSAPP_ORDER_LABEL } from '@/lib/organization'
import type { ReactNode } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function WhatsAppOrderButton({
  href,
  className = 'cta-btn',
  location,
  onNavigate,
  children,
}: {
  href: string
  className?: string
  location: string
  onNavigate?: () => void
  children?: ReactNode
}) {
  function onClick() {
    onNavigate?.()
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_order_click', {
        page_path: window.location.pathname,
        cta_location: location,
      })
    }
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={WHATSAPP_ORDER_LABEL}
    >
      {children ?? WHATSAPP_ORDER_LABEL}
    </a>
  )
}
