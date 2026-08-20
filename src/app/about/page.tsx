import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import { TrustSection } from '@/components/TrustSection'
import {
  canClaimLicensedEstablishment,
  displayOrganizationName,
  getOrganization,
} from '@/lib/organization'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'عن المنشأة',
  description:
    'من يشغّل cytotc.com، وكيف يُقدَّم طلب سايتوتك (ميزوبروستول)، وكيف يمكن التحقق من المنشأة عند توفر بيانات الترخيص. ليس الموقع الرسمي لشركة فايزر.',
  path: '/about',
})

export default function AboutPage() {
  const org = getOrganization()
  const licensed = canClaimLicensedEstablishment(org)
  const orgName = displayOrganizationName(org)

  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'عن المنشأة', path: '/about' },
          ]}
        />
      </div>
      <PageHero
        title="عن المنشأة"
        lead={`${orgName} يشغّل cytotc.com كبوابة طلب ومعلومات لسايتوتك (ميزوبروستول). لا نختلق أرقام ترخيص أو عناوين.`}
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <MedicalDisclaimer compact />
            <h2>من يشغّل cytotc.com؟</h2>
            <p>
              النطاق cytotc.com هو الواجهة الرقمية لـ {orgName}. الجمهور المستهدف
              أشخاص يبحثون عن الحصول على ميزوبروستول عبر مسار منظّم، أو عن فهم
              المعلومة من مصادر قابلة للمراجعة.
            </p>
            <h2>الهوية القانونية والترخيص</h2>
            {licensed ? (
              <p>
                تُعرض صفة منشأة دوائية مرخّصة لأن الاسم القانوني ورقم الترخيص
                وجهة الإصدار أُدخلت في الإعدادات. تحقق بنفسك عبر الرابط الرسمي
                إن وُجد أدناه، ولا تعتمد على هذه الصفحة وحدها.
              </p>
            ) : (
              <p>
                الترخيص قائم لدى المشغّل حسب إفادته، لكن هذه الصفحة لا تعلن
                «صيدلية مرخّصة» حتى تُملأ الحقول: الاسم القانوني، رقم الترخيص
                الدوائي، وجهة الترخيص. ذلك لمنع نشر أرقام غير قابلة للتحقق.
              </p>
            )}
            <TrustSection heading="البيانات المتاحة للتحقق" />
            <h2>كيف تُجلب الأدوية؟</h2>
            <p>
              لم يُزوَّد بعد وصف تفصيلي قابل للنشر لسلسلة التوريد (الموزّع
              المعتمد أو الوكيل). حتى ذلك الحين لا ندّعي مصدرًا تجاريًا محددًا
              ولا نستخدم عبارة «أصلي 100٪». يمكن التحقق من تسجيل المنتج عبر{' '}
              <a
                href="https://sdi.sfda.gov.sa/Home/DrugSearch"
                rel="noopener noreferrer"
                target="_blank"
              >
                نظام معلومات الأدوية السعودي
              </a>
              .
            </p>
            <h2>كيف يعمل التحقق من الوصفة؟</h2>
            <p>
              الطلب يبدأ برسالة واتساب من{' '}
              <a href="/order-cytotec">صفحة طلب سايتوتك</a> أو من زر «طلب الدواء
              عبر واتساب». الرسالة لا تصرف الدواء. عند الحاجة يتحقق الفريق من
              الوصفة والمتطلبات النظامية، ثم يؤكد التوفر والسعر، ثم يعتمد الطلب
              قبل الدفع والتسليم.
            </p>
            <h2>ما الذي لا ندّعيه</h2>
            <ul>
              <li>لسنا الموقع الرسمي لسايتوتك أو لشركة فايزر.</li>
              <li>لا نقدّم تشخيصًا أو جرعات أو استشارة طبية عن بُعد عبر الدردشة.</li>
              <li>لا نعرض تقييمات أو أعداد مخزون وهمية.</li>
            </ul>
            <p>
              السياسات التحريرية في{' '}
              <a href="/editorial-policy">السياسة التحريرية</a> و{' '}
              <a href="/medical-review-policy">سياسة المراجعة الطبية</a>.
            </p>
            <OrderCta />
          </article>
        </div>
      </section>
    </main>
  )
}
