import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'سياسة التصحيح',
  description:
    'كيف يصحح cytotc.com الأخطاء الوقائعية في المحتوى المعلوماتي عن سايتوتك وميزوبروستول.',
  path: '/corrections-policy',
})

export default function CorrectionsPolicyPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'سياسة التصحيح', path: '/corrections-policy' },
          ]}
        />
      </div>
      <PageHero
        title="سياسة التصحيح"
        lead="الخطأ الوقائعي يُصحَّح في الصفحة نفسها مع تحديث التاريخ."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <h2>ما الذي نصححه</h2>
            <p>
              الأخطاء في نسبة معلومة إلى مصدر، أو في وصف تحذير النشرة، أو في
              بيانات التواصل الظاهرة.
            </p>
            <h2>ما الذي لا نعدّه تصحيحًا تجميليًا</h2>
            <p>
              تحسين الأسلوب دون تغيير المعنى لا يُعرض كتصحيح طبي. تغيير المعنى
              يُحدَّث معه تاريخ الصفحة.
            </p>
            <h2>كيف تبلغنا</h2>
            <p>
              أرسل عبر <a href="/contact">صفحة التواصل</a> رابط الصفحة ووصف
              الخطأ والمصدر الذي تعتمده. لا نعد بنشر كل بلاغ، لكن البلاغ الموثّق
              يُراجع.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
