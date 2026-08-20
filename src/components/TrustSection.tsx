import {
  canClaimLicensedEstablishment,
  getOrganization,
} from '@/lib/organization'

export function TrustSection({
  heading = 'بيانات المنشأة',
}: {
  heading?: string
}) {
  const org = getOrganization()
  const licensed = canClaimLicensedEstablishment(org)
  const rows: { label: string; value: string; href?: string }[] = []

  if (org.legalName) {
    rows.push({ label: 'الاسم القانوني', value: org.legalName })
  }
  if (licensed && org.pharmaceuticalLicenseNumber) {
    rows.push({
      label: 'رقم الترخيص الدوائي',
      value: org.pharmaceuticalLicenseNumber,
    })
  }
  if (licensed && org.licenseAuthority) {
    rows.push({ label: 'جهة الترخيص', value: org.licenseAuthority })
  }
  if (org.commercialRegistrationNumber) {
    rows.push({
      label: 'السجل التجاري',
      value: org.commercialRegistrationNumber,
    })
  }
  if (org.physicalAddress) {
    rows.push({ label: 'العنوان', value: org.physicalAddress })
  }
  if (org.licensedPharmacistName) {
    rows.push({
      label: 'الصيدلي المسؤول (موثّق في الإعدادات)',
      value: org.licensedPharmacistName,
    })
  }
  if (org.officialPhone) {
    rows.push({ label: 'الهاتف الرسمي', value: org.officialPhone })
  }
  if (org.officialWhatsapp) {
    rows.push({
      label: 'واتساب الرسمي',
      value: `+${org.officialWhatsapp}`,
      href: `https://wa.me/${org.officialWhatsapp}`,
    })
  }
  if (org.officialEmail) {
    rows.push({
      label: 'البريد الرسمي',
      value: org.officialEmail,
      href: `mailto:${org.officialEmail}`,
    })
  }
  if (org.licenseVerificationUrl) {
    rows.push({
      label: 'رابط التحقق',
      value: 'فتح صفحة التحقق لدى الجهة المختصة',
      href: org.licenseVerificationUrl,
    })
  }

  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="section-title">
        <h2 id="trust-heading">{heading}</h2>
        {licensed ? (
          <p>بيانات ترخيص منشأة دوائية كما زُوّدت في إعدادات الموقع.</p>
        ) : (
          <p>
            لا تُعرض صفة «منشأة دوائية مرخّصة» حتى تُستكمل: الاسم القانوني، رقم
            الترخيص، وجهة الترخيص. الحقول الفارغة لا تُخترع ولا تُملأ بأرقام
            تجريبية.
          </p>
        )}
      </div>
      {rows.length > 0 ? (
        <dl className="trust-grid">
          {rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a href={row.href} rel="noopener noreferrer" target={row.href.startsWith('http') ? '_blank' : undefined}>
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="owner-todo">
          لم تُزوَّد بعد بيانات منشأة قابلة للعرض. أضفها عبر متغيرات البيئة
          الموضحة في ملف الإعدادات، دون وضع قيم وهمية.
        </p>
      )}
    </section>
  )
}
