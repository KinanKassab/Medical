import Image from 'next/image'
import { PRIMARY_NAV } from '@/lib/nav'
import { officialWhatsappOrderUrl } from '@/lib/organization'
import { SITE } from '@/lib/site'
import { MobileNav } from '@/components/MobileNav'
import { NavLink } from '@/components/NavLink'
import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'

export function Header() {
  const whatsappOrderUrl = officialWhatsappOrderUrl()

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
          {whatsappOrderUrl ? (
            <WhatsAppOrderCta className="header-cta" location="header" />
          ) : null}
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
          <MobileNav whatsappOrderUrl={whatsappOrderUrl} />
        </div>
      </nav>
    </header>
  )
}
