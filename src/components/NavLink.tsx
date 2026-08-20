'use client'

import { usePathname } from 'next/navigation'

export function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <a
      href={href}
      className={active ? 'active' : undefined}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
