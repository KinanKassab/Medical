import Image from 'next/image'
import { FOOTER_INFO_LINKS, FOOTER_TRUST_LINKS } from '@/lib/nav'
import { DISPLAY_PHONE, SITE, WHATSAPP_URL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/images/logo.png" alt="" width={64} height={64} />
            <p>
              {SITE.name} موقع معلوماتي عن سايتوتك (ميزوبروستول). ليس الموقع
              الرسمي للشركة المصنعة، ولا يقدّم استشارة طبية أو تشخيصًا.
            </p>
          </div>
          <div className="footer-links">
            <h2>محتوى معلوماتي</h2>
            <ul>
              {FOOTER_INFO_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h2>الشفافية والسياسات</h2>
            <ul>
              {FOOTER_TRUST_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h2>التواصل</h2>
            <p>
              واتساب:{' '}
              <a href={WHATSAPP_URL}>{DISPLAY_PHONE}</a>
            </p>
            <p>
              البريد الإلكتروني: غير مؤكد على نطاق {SITE.domain} حتى يوثّق
              المشغّل صندوق البريد.
            </p>
            <p>النطاق الجغرافي المذكور للمحتوى: {SITE.countryLabel}.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {SITE.copyrightYear} {SITE.name}. جميع الحقوق محفوظة للموقع
            المعلوماتي. Cytotec علامة تجارية تخص مالكتها، واستخدام الاسم هنا
            للتعريف بالمادة المعلوماتية فقط.
          </p>
        </div>
      </div>
    </footer>
  )
}
