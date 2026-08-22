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
      <div className="container header-inner">
        <a className="logo" href="/" aria-label={`${SITE.name} — الصفحة الرئيسية`}>
          <Image src="/images/logo.png" alt="" width={48} height={48} />
          <span className="logo-text">{SITE.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          {whatsappOrderUrl ? (
            <WhatsAppOrderCta className="header-cta" location="header" />
          ) : null}
          <MobileNav whatsappOrderUrl={whatsappOrderUrl} />
        </div>
      </div>
    </header>
  )
}
