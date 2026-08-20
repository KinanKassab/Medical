import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'السياسة التحريرية',
  description:
    'معايير تحرير cytotc.com: مصادر أولية، عدم اختراع الوقائع الطبية، وتمييز المعلومة المؤكدة عما يحتاج توثيق المشغّل.',
  path: '/editorial-policy',
})

export default function EditorialPolicyPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'السياسة التحريرية', path: '/editorial-policy' },
          ]}
        />
      </div>
      <PageHero
        title="السياسة التحريرية"
        lead="كيف نكتب الصفحات المعلوماتية وما الذي نرفض نشره."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <h2>الغرض</h2>
            <p>
              مساعدة القارئ العربي على فهم ما هو سايتوتك وميزوبروستول، وأين يجد
              المصدر الرسمي، دون تحويل الصفحة إلى تعليمات علاج ذاتي.
            </p>
            <h2>المصادر</h2>
            <p>
              نعتمد نشرات DailyMed/FDA، ومواقع الهيئة العامة للغذاء والدواء
              ووزارة الصحة السعودية، ومنظمة الصحة العالمية عند ذكر إدراجات قائمة
              الأدوية الأساسية. لا ننسخ مقالات منافسين.
            </p>
            <h2>ما نرفضه</h2>
            <ul>
              <li>ادعاء الموقع الرسمي أو الصيدلية المرخّصة دون وثائق.</li>
              <li>شهادات عملاء غير قابلة للتحقق.</li>
              <li>أسماء أطباء أو مراجعين بلا ترخيص ظاهر.</li>
              <li>صفحات مدن مكررة لا تضيف معلومة محلية حقيقية.</li>
              <li>حشو كلمات مفتاحية على حساب الوضوح.</li>
            </ul>
            <h2>التحديث</h2>
            <p>
              يظهر تاريخ النشر والتحديث على المقالات. عند تغيّر النشرة الرسمية
              نحدّث النص أو نضيف ملاحظة أن المصدر تغيّر.
            </p>
            <p>
              للكتابة الحالية انظر{' '}
              <a href="/authors/editorial-team">هيئة التحرير</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
