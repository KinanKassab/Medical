import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import { ReferencesList } from '@/components/ReferencesList'
import { REFERENCES } from '@/content/references'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'معلومات عن سايتوتك ',
  description:
    'شرح معلوماتي لسايتوتك (Cytotec) : الاسم التجاري، المادة الفعالة، والاستطباب المذكور في النشرة الرسمية، مع روابط للهيئة العامة للغذاء والدواء.',
  path: '/drug-information',
})

export default function DrugInformationPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'معلومات الدواء', path: '/drug-information' },
          ]}
        />
      </div>
      <PageHero
        title="معلومات عن سايتوتك"
        lead="سايتوتك اسم تجاري لأقراص. الملخص أدناه يعتمد على النشرة الرسمية في DailyMed ولا يغني عن النشرة المحلية المعتمدة."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            
            <h2>الإجابة المباشرة</h2>
            <p>
              مماثل اصطناعي لبروستاغلاندين E1. نشرة سايتوتك في
              DailyMed تصف أقراصًا فموية بتركيز 100 أو 200 ميكروغرام، وتذكر أن
              يستخدم لـ" تقليل خطر قرح المعدة " و" حالات الإجهاض الطبي ".
            </p>
       
            <h2>الأسماء التي قد يبحث بها القارئ</h2>
            <p>
              يظهر الاسم التجاري Cytotec بالعربية غالبًا سايتوتك، وقد يُكتب
              سايتوتيك. الاسم العلمي Misoprostol يُكتب. وجود أكثر
              من رسم إملائي لا يعني وجود أكثر من مادة فعالة.
            </p>
            <h2>التسجيل في السعودية</h2>
            <p>
              تسجيل دواء في المملكة يُتحقق منه عبر الهيئة العامة للغذاء والدواء،
              لا عبر موقع مستقل. راجع{' '}
              <a href="/blog/kayfa-tatahaqqaq-min-dawa-fi-alsaudiya">
                كيفية التحقق من دواء في السعودية
              </a>
              .
            </p>
            <p>
              ابدأ طلبًا منظّمًا من{' '}
            <a href="/order-cytotec">صفحة طلب سايتوتك</a> أو لمزيد من الشرح راجع مقال{' '}
              <a href="/blog/ma-huwa-cytotec-misoprostol">
                ما هو سايتوتك؟
              </a>
              .
            </p>
            <OrderCta />
            <ReferencesList
              references={[
                REFERENCES.dailymedCytotec,
                REFERENCES.whoEmlMisoprostol,
                REFERENCES.sfdaSdi,
              ]}
            />
          </article>
        </div>
      </section>
    </main>
  )
}
