import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { Icon } from '@/components/Icon'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import {
  getOrganization,
  officialPhoneDisplay,
  officialWhatsappUrl,
} from '@/lib/organization'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = createMetadata({
  title: 'تواصل معنا',
  description:
    'قنوات الدعم الرسمية لـ cytotc.com عند توفرها. طلب سايتوتك يبدأ بزر واتساب، والدعم النصي لا يتجاوز المراجعة النظامية.',
  path: '/contact',
})

export default function ContactPage() {
  const org = getOrganization()
  const phone = officialPhoneDisplay(org)
  const whatsappUrl = officialWhatsappUrl(org)

  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'تواصل معنا', path: '/contact' },
          ]}
        />
      </div>
      <PageHero
        title="تواصل معنا"
        lead="للطلبات والدعم: يمكنك التواصل معنا عبر القنوات الرسمية المعتمدة أدناه. تبدأ عملية الطلب من خلال واتساب، مع التأكيد أن الصرف لا يتم تلقائيًا قبل المراجعة."
   
      />
      <section className="contact">
        <div className="container">
          <OrderCta
            title="لطلب الدواء عبر واتساب"
            text="اضغط الزر لفتح محادثة بطلب جاهز. التحقق والاعتماد بعد ذلك مع الفريق."
          />
          <div className="contact-content" style={{ marginTop: '2rem' }}>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="whatsapp" />
                </div>
                <div>
                  <h2>واتساب</h2>
                  {whatsappUrl && phone ? (
                    <>
                      <p>
                        <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                          {phone}
                        </a>
                      </p>
                    </>
                  ) : (
                    <p>
                      لم يُدخل بعد رقم واتساب رسمي في إعدادات المنشأة. لن نعرض
                      رقمًا قديمًا غير مؤكد.
                    </p>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="envelope" />
                </div>
                <div>
                  <h2>البريد الإلكتروني</h2>
                  {org.officialEmail ? (
                    <p>
                      <a href={`mailto:${org.officialEmail}`}>{org.officialEmail}</a>
                    </p>
                  ) : (
                    <p>
                      لا نعرض عنوانًا على نطاق مختلف عن {SITE.domain}. أدخل
                      البريد الرسمي في الإعدادات بعد التحقق من السيطرة عليه.
                    </p>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="phone" />
                </div>
                <div>
                  <h2>الهاتف</h2>
                  {org.officialPhone ? (
                    <p>{org.officialPhone}</p>
                  ) : (
                    <p>الهاتف الرسمي غير مُدخل بعد.</p>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="pin" />
                </div>
                <div>
                  <h2>العنوان</h2>
                  {org.physicalAddress ? (
                    <p>{org.physicalAddress}</p>
                  ) : (
                    <p>
                      لم يتوفر عنوان مقرّ يمكن التحقق منه. السياق الجغرافي
                      للمحتوى: {SITE.countryLabel}.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <ContactForm whatsappUrl={whatsappUrl} />
          </div>
        </div>
      </section>
    </main>
  )
}
