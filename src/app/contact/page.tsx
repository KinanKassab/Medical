import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'
import { DISPLAY_PHONE, SITE, WHATSAPP_URL } from '@/lib/site'

export const metadata = createMetadata({
  title: 'تواصل معنا',
  description:
    'بيانات التواصل المتاحة حاليًا لموقع cytotc.com: واتساب مذكور على الموقع. البريد على نطاق cytotc.com غير مؤكد بعد، ولا نعرض عنوانًا على نطاق مختلف.',
  path: '/contact',
})

export default function ContactPage() {
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
        lead="نعرض فقط قنوات يمكن ربطها بالموقع الحالي. الرسائل ليست استشارة طبية."
      />
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="whatsapp" />
                </div>
                <div>
                  <h2>واتساب</h2>
                  <p>
                    <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                      {DISPLAY_PHONE}
                    </a>
                  </p>
                  <p>
                    الرقم مأخوذ من المحتوى الظاهر سابقًا على الموقع. يجب أن يؤكد
                    المشغّل أنه ما زال الرقم الصحيح؛ وُجد رقم مختلف داخل ملف
                    جافاسكربت القديم ولم يُعرض هنا.
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="envelope" />
                </div>
                <div>
                  <h2>البريد الإلكتروني</h2>
                  <p>
                    لا نعرض عنوانًا على نطاق cytotec.com لأن نطاق الموقع هو{' '}
                    {SITE.domain}. لم يُؤكَّد بعد صندوق بريد على هذا النطاق.
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="pin" />
                </div>
                <div>
                  <h2>العنوان</h2>
                  <p>
                    لم يتوفر عنوان مقرّ يمكن التحقق منه. ذُكرت {SITE.countryLabel}{' '}
                    كسياق جغرافي للمحتوى فقط، دون إحداثيات أو حي.
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
