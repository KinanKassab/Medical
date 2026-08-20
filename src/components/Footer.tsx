import Image from 'next/image'
import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'
import { FOOTER_INFO_LINKS, FOOTER_TRUST_LINKS } from '@/lib/nav'
import {
  canClaimLicensedEstablishment,
  displayOrganizationName,
  getOrganization,
  officialPhoneDisplay,
  officialWhatsappOrderUrl,
  officialWhatsappUrl,
} from '@/lib/organization'
import { SITE } from '@/lib/site'

export function Footer() {
  const org = getOrganization()
  const licensed = canClaimLicensedEstablishment(org)
  const phone = officialPhoneDisplay(org)
  const whatsappUrl = officialWhatsappUrl(org)
  const orderUrl = officialWhatsappOrderUrl()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/images/logo.png" alt="" width={64} height={64} />
            <p>
              {SITE.name} بوابة {displayOrganizationName(org)} لطلب سايتوتك
              (ميزوبروستول) ولمعلومات الدواء. ليس الموقع الرسمي لشركة فايزر، ولا
              يقدّم تشخيصًا أو جرعات.
              {licensed
                ? ' صفة المنشأة المرخّصة تُعرض وفق بيانات الترخيص المُدخلة.'
                : ' صفة الصيدلية المرخّصة لا تُعرض حتى تكتمل بيانات الترخيص.'}
            </p>
            {orderUrl ? (
              <p>
                <WhatsAppOrderCta className="header-cta" location="footer" />
              </p>
            ) : null}
          </div>
          <div className="footer-links">
            <h2>الطلب والمعلومات</h2>
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
            {whatsappUrl && phone ? (
              <p>
                واتساب:{' '}
                <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                  {phone}
                </a>
              </p>
            ) : (
              <p>واتساب الرسمي غير مُدخل بعد في إعدادات المنشأة.</p>
            )}
            {org.officialEmail ? (
              <p>
                البريد:{' '}
                <a href={`mailto:${org.officialEmail}`}>{org.officialEmail}</a>
              </p>
            ) : (
              <p>
                البريد على نطاق {SITE.domain} غير مؤكد بعد. لا نعرض عنوانًا على
                نطاق مختلف.
              </p>
            )}
            <p>
              <a href="/order-cytotec">صفحة طلب سايتوتك وشرح المسار</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {SITE.copyrightYear} {displayOrganizationName(org)}. Cytotec علامة
            تجارية تخص مالكتها، واستخدام الاسم هنا للتعريف بالدواء والخدمة فقط.
          </p>
        </div>
      </div>
    </footer>
  )
}
