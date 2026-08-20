import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'سياسة المراجعة الطبية',
  description:
    'cytotc.com لا يعرض مراجعًا طبيًا مرخّصًا حتى يتم التحقق من هويته وترخيصه. السياسة توضح ما سيظهر بعد التعيين.',
  path: '/medical-review-policy',
})

export default function MedicalReviewPolicyPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'سياسة المراجعة الطبية', path: '/medical-review-policy' },
          ]}
        />
      </div>
      <PageHero
        title="سياسة المراجعة الطبية"
        lead="لا نختلق أطباءً لتحسين الثقة. إن لم يوجد مراجع موثّق نعلن ذلك."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <h2>الوضع الحالي</h2>
            <p>
              حتى 20 أغسطس 2026 لا يوجد على الموقع مختص مرخّص تم التحقق من
              هويته وترخيصه كمراجع طبي. المقالات تحمل تنويهًا صريحًا بأنها لم
              تُراجع طبيًا بعد.
            </p>
            <h2>ما نحتاجه قبل عرض مراجع</h2>
            <ul>
              <li>الاسم الكامل كما يظهر في الترخيص.</li>
              <li>جهة الترخيص ورقمه وبلد الإصدار.</li>
              <li>نطاق المراجعة (أي صفحات راجعها) وتاريخ المراجعة.</li>
              <li>إفصاح عن تضارب المصالح إن وُجد.</li>
            </ul>
            <h2>بعد التعيين</h2>
            <p>
              سيظهر اسم المراجع في صفحة مستقلة ضمن{' '}
              <a href="/authors">دليل الكتّاب والمراجعين</a>، مع تاريخ آخر مراجعة
              طبية على كل مقال خضع للمراجعة. المراجعة لا تحول المحتوى إلى
              استشارة شخصية.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
