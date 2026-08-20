import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { PageHero } from '@/components/PageHero'
import { ReferencesList } from '@/components/ReferencesList'
import { REFERENCES } from '@/content/references'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'سلامة سايتوتك وتحذيرات الحمل',
  description:
    'تحذيرات نشرة سايتوتك (ميزوبروستول) حول الحمل وتمزق الرحم وموانع الاستعمال، مع إحالة إلى DailyMed ووزارة الصحة السعودية دون تعليمات استخدام.',
  path: '/safety',
})

export default function SafetyPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'السلامة', path: '/safety' },
          ]}
        />
      </div>
      <PageHero
        title="السلامة والتحذيرات"
        lead="ميزوبروستول دواء قد يسبب أذى جسيمًا إذا استُخدم أثناء الحمل أو دون إشراف سريري. هذا الملخص ينقل التحذير من النشرة الرسمية ولا يقدّم تعليمات."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <MedicalDisclaimer compact />
            <div className="callout callout-warning">
              <p>
                وفق نشرة DailyMed: إعطاء ميزوبروستول للحوامل قد يسبب عيوبًا
                خلقية أو إجهاضًا أو ولادة مبكرة أو تمزقًا رحميًا. لا تعطِ الدواء
                لشخص آخر.
              </p>
            </div>
            <h2>موانع مذكورة في النشرة</h2>
            <ul>
              <li>
                لا يُستخدم سايتوتك أثناء الحمل لتقليل خطر قرح المعدة المرتبطة
                بمضادات الالتهاب غير الستيرويدية.
              </li>
              <li>لا يُستخدم عند وجود سابقة حساسية للبروستاغلاندينات.</li>
            </ul>
            <h2>تمزق الرحم</h2>
            <p>
              تذكر النشرة أن خطر تمزق الرحم يزداد مع تقدّم عمر الحمل ومع الجراحة
              الرحمية السابقة بما في ذلك الولادة القيصرية. تمزق الرحم قد يؤدي إلى
              نزيف شديد أو استئصال الرحم أو وفاة الأم أو الجنين وفق النص الرسمي.
            </p>
            <h2>أحداث سلبية تكررت في الدراسات</h2>
            <p>
              الإسهال وألم البطن من أكثر الأعراض المعدية المعوية ذكرًا في تجارب
              النشرة. قد تظهر أيضًا أعراض مثل الغثيان والصداع. النسب مرتبطة
              بسياق الدراسة وليست توقعًا لحالتك.
            </p>
            <h2>الرعاية العاجلة</h2>
            <p>
              النزيف الشديد، والألم البطني الحاد، والإغماء، وصعوبة التنفس، أو
              علامات الحساسية الشديدة تستدعي رعاية فورية في منشأة صحية. راجع
              خدمات{' '}
              <a href="https://www.moh.gov.sa/" rel="noopener noreferrer" target="_blank">
                وزارة الصحة السعودية
              </a>
              .
            </p>
            <p>
              شرح أوسع في مقال{' '}
              <a href="/blog/tahdhirat-alhaml-hasab-al-nashra">
                تحذيرات الحمل وفق النشرة الرسمية
              </a>
              . للتعريف العام راجع{' '}
              <a href="/drug-information">معلومات الدواء</a>.
            </p>
            <ReferencesList
              references={[
                REFERENCES.dailymedCytotec,
                REFERENCES.mohSa,
                REFERENCES.sfdaHome,
              ]}
            />
          </article>
        </div>
      </section>
    </main>
  )
}
