'use client'

import { useEffect, useState } from 'react'
import { PRIMARY_NAV } from '@/lib/nav'
import { Icon } from '@/components/Icon'
import { NavLink } from '@/components/NavLink'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="mobile-menu-btn"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'menu'} />
        <span className="sr-only">{open ? 'إغلاق القائمة' : 'فتح القائمة'}</span>
      </button>
      <ul id="primary-nav" className={open ? 'show' : undefined}>
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}
