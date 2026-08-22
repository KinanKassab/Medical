'use client'

import { useEffect, useState } from 'react'
import { PRIMARY_NAV } from '@/lib/nav'
import { Icon } from '@/components/Icon'
import { NavLink } from '@/components/NavLink'
import { WhatsAppOrderButton } from '@/components/WhatsAppOrderButton'

export function MobileNav({
  whatsappOrderUrl,
}: {
  whatsappOrderUrl: string | null
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    if (open) window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className="mobile-menu-btn"
        aria-expanded={open}
        aria-controls="primary-nav"
        hidden={open}
        onClick={() => setOpen(true)}
      >
        <Icon name="menu" />
        <span className="sr-only">فتح القائمة</span>
      </button>
      {open ? (
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="إغلاق القائمة"
          onClick={close}
        />
      ) : null}
      <ul id="primary-nav" className={open ? 'show' : undefined}>
        <li className="mobile-nav-close-item">
          <button
            type="button"
            className="mobile-nav-close"
            onClick={close}
            aria-label="إغلاق القائمة"
          >
            <Icon name="close" />
          </button>
        </li>
        {whatsappOrderUrl ? (
          <li className="mobile-order-cta">
            <WhatsAppOrderButton
              href={whatsappOrderUrl}
              className="header-cta"
              location="mobile-nav"
              onNavigate={close}
            />
          </li>
        ) : null}
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} onClick={close}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}
