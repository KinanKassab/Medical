import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OrderWorkflow } from '@/components/OrderWorkflow'
import { PageHero } from '@/components/PageHero'
import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'
import {
  displayOrganizationName,
  getOrganization,
  officialWhatsappOrderUrl,
} from '@/lib/organization'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'طلب سايتوتك عبر واتساب',
  description:
    'اطلب سايتوتك عبر واتساب من cytotc.com. الرسالة تبدأ الاستفسار فقط؛ التحقق من الوصفة والتوفر والاعتماد والدفع تتم مع فريق المنشأة.',
  path: '/order-cytotec',
})

export default function OrderPage() {
  const org = getOrganization()
  const hasWhatsapp = Boolean(officialWhatsappOrderUrl())

  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'طلب الدواء', path: '/order-cytotec' },
          ]}
        />
      </div>
      <PageHero
        title="طلب سايتوتك عبر واتساب"
        lead={`${displayOrganizationName(org)} يستقبل طلبات هذا الدواء عبر واتساب. إرسال الرسالة لا يعني بيعًا أو صرفًا تلقائيًا.`}
      />
      <section className="content-section">
        <div className="container">
          <div className="order-cta" style={{ marginBottom: '2rem' }}>
            {hasWhatsapp ? (
              <WhatsAppOrderCta location="order-page-top" />
            ) : (
              <p>
                زر الطلب عبر واتساب سيظهر هنا بعد إدخال الرقم الرسمي في إعدادات
                الموقع.
              </p>
            )}
          </div>
          <article className="prose-page">
            
            <h2>هوية الدواء</h2>
            <p>
              سايتوتك اسم تجاري شائع لأقراص تحتوي المادة الفعالة.
              هذا الموقع ليس الموقع الرسمي لشركة فايزر. راجع{' '}
              <a href="/drug-information">معلومات الدواء</a> قبل بدء الطلب.
            </p>
            {org.registeredPresentation ? (
              <p>
                الشكل المسجّل المعروض وفق إعدادات المنشأة:{' '}
                <strong>{org.registeredPresentation}</strong>
              </p>
            ) : (
              <p>
                الشكل الصيدلاني المسجّل محليًا يُعرض هنا فقط بعد تزويد بيان
                التسجيل المعتمد من المشغّل.
              </p>
            )}
            <div id="availability">
              <h2>السعر والتوفر</h2>
              {org.currentPrice ? (
                <p>
                  السعر الحالي المُدخل من المشغّل: {org.currentPrice}{' '}
                  {org.priceCurrency}
                </p>
              ) : (
                <p>
                  لا يُعرض سعر حتى يزوّد المشغّل السعر المعتمد الحالي. لن نضع
                  رقمًا تقديريًا. السعر النهائي يُؤكَّد مع الفريق بعد التحقق.
                </p>
              )}
              {org.availabilityNote ? (
                <p>{org.availabilityNote}</p>
              ) : (
                <p>
                  حالة المخزون تُؤكَّد بعد التواصل ومراجعة المتطلبات، وليست
                  رقمًا تسويقيًا على الصفحة.
                </p>
              )}
            </div>
            <h2>المتطلبات التنظيمية</h2>
            {org.prescriptionRequired ? (
              <p>
                يُعامل هنا كدواء قد يستلزم تحققًا من الوصفة أو ما
                يعادلها قبل الصرف. فريق المنشأة يتولى هذا التحقق بعد رسالة
                واتساب. الرسالة وحدها لا تتجاوز المراجعة النظامية.
              </p>
            ) : (
              <p>
                متطلب الوصفة غير مفعّل في الإعدادات الحالية. يبقى الاعتماد
                الداخلي قبل أي صرف. يلزم تأكيد قانوني مستقل إذا كان ذلك متوافقًا
                مع التنظيم المحلي.
              </p>
            )}
            <h2>كيف يعمل الطلب؟</h2>
            <OrderWorkflow />
            <p>
              واتساب يبدأ الطلب فقط. لا يوجد شراء فوري من الموقع، ولا يعني فتح
              المحادثة موافقة على الصرف.
            </p>
            {hasWhatsapp ? (
              <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
                <WhatsAppOrderCta location="order-page-bottom" />
              </div>
            ) : null}
          </article>
        </div>
      </section>
    </main>
  )
}
