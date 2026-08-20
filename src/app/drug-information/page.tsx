import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { PageHero } from '@/components/PageHero'
import { ReferencesList } from '@/components/ReferencesList'
import { REFERENCES } from '@/content/references'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'معلومات عن سايتوتك وميزوبروستول',
  description:
    'شرح معلوماتي لسايتوتك (Cytotec) وميزوبروستول: الاسم التجاري، المادة الفعالة، والاستطباب المذكور في النشرة الرسمية، مع روابط للهيئة العامة للغذاء والدواء.',
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
        title="معلومات عن سايتوتك (ميزوبروستول)"
        lead="سايتوتك اسم تجاري لأقراص ميزوبروستول. الملخص أدناه يعتمد على النشرة الرسمية في DailyMed ولا يغني عن النشرة المحلية المعتمدة."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <MedicalDisclaimer compact />
            <h2>الإجابة المباشرة</h2>
            <p>
              ميزوبروستول مماثل اصطناعي لبروستاغلاندين E1. نشرة سايتوتك في
              DailyMed تصف أقراصًا فموية بتركيز 100 أو 200 ميكروغرام، وتذكر أن
              الاستطباب المعتمد هناك هو تقليل خطر قرح المعدة المرتبطة بمضادات
              الالتهاب غير الستيرويدية لدى مرضى مرتفعي الخطورة.
            </p>
            <h2>الأسماء التي قد يبحث بها القارئ</h2>
            <p>
              يظهر الاسم التجاري Cytotec بالعربية غالبًا سايتوتك، وقد يُكتب
              سايتوتيك. الاسم العلمي Misoprostol يُكتب ميزوبروستول. وجود أكثر
              من رسم إملائي لا يعني وجود أكثر من مادة فعالة.
            </p>
            <h2>ماذا تقول النشرة عن المفعول</h2>
            <p>
              النشرة تصف تأثيرًا مضادًا لإفراز الحمض المعدي، وتذكر أيضًا أن
              الدواء قد يسبب تقلصات رحمية تعرّض الحمل للخطر. لذلك وُضع تحذير
              بارز يتعلق بالحمل. التفاصيل في{' '}
              <a href="/safety">صفحة السلامة</a> وفي مقال{' '}
              <a href="/blog/tahdhirat-alhaml-hasab-al-nashra">
                تحذيرات الحمل وفق النشرة
              </a>
              .
            </p>
            <h2>سياقات تُذكر خارج الاستطباب الأمريكي المعتمد</h2>
            <p>
              منظمة الصحة العالمية تدرج ميزوبروستول ضمن قائمة الأدوية الأساسية
              في أبواب تتعلق بالرعاية المحيطة بالولادة، بما في ذلك ظروف سريرية
              محددة للنزف بعد الولادة. هذه إدراجات لأنظمة صحية وليست دليل استخدام
              منزلي. لا نعرض هنا أي جدول جرعات.
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
              لمزيد من الشرح راجع مقال{' '}
              <a href="/blog/ma-huwa-cytotec-misoprostol">
                ما هو سايتوتك (ميزوبروستول)؟
              </a>
              .
            </p>
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
