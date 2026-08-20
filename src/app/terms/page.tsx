import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = createMetadata({
  title: 'شروط الاستخدام',
  description:
    'شروط استخدام cytotc.com: محتوى معلوماتي، بلا استشارة طبية، وبلا تمثيل للشركة المصنعة أو لهيئة الغذاء والدواء.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'شروط الاستخدام', path: '/terms' },
          ]}
        />
      </div>
      <PageHero
        title="شروط الاستخدام"
        lead="باستخدامك الموقع توافق على أن المحتوى معلوماتي عام وليس خدمة طبية."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <p>آخر تحديث ظاهر: 20 أغسطس 2026.</p>
            <h2>طبيعة الخدمة</h2>
            <p>
              {SITE.name} يقدّم صفحات معلوماتية عن سايتوتك وميزوبروستول. لا يقدّم
              تشخيصًا أو علاجًا أو وصفة، ولا يضمن نتيجة صحية.
            </p>
            <h2>العلامات والجهات الأخرى</h2>
            <p>
              Cytotec وأي علامات تجارية مذكورة تخص مالكيها. ذكر الاسم للتعريف
              بالمادة المعلوماتية فقط. الموقع لا يمثل فايزر أو الهيئة العامة
              للغذاء والدواء أو وزارة الصحة.
            </p>
            <h2>المسؤولية</h2>
            <p>
              القرار الصحي مسؤوليتك بالتشاور مع مختص مرخّص. المصادر الخارجية قد
              تتحدث أو تتغيّر؛ راجع النص الأصلي.
            </p>
            <h2>القانون الواجب</h2>
            <p>
              لم يُحدد بعد الاسم القانوني ومقرّ التأسيس. يضيف المشغّل الجهة
              القضائية المختصة بعد توثيق الكيان.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
