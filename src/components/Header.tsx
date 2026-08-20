import Image from 'next/image'
import { PRIMARY_NAV } from '@/lib/nav'
import { SITE } from '@/lib/site'
import { MobileNav } from '@/components/MobileNav'
import { NavLink } from '@/components/NavLink'

export function Header() {
  return (
    <header className="site-header">
      <div className="header">
        <div className="container header-inner">
          <a className="logo" href="/" aria-label={`${SITE.name} — الصفحة الرئيسية`}>
            <Image
              src="/images/logo.png"
              alt=""
              width={64}
              height={64}
            />
            <p className="logo-text">{SITE.name}</p>
          </a>
        </div>
      </div>
      <nav className="navbar" aria-label="التنقل الرئيسي">
        <div className="container navbar-inner">
          <div className="desktop-nav">
            <ul>
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
