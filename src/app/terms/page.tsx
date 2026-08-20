import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = createMetadata({
  title: 'شروط الاستخدام',
  description:
    'شروط استخدام cytotc.com: طلب دواء عبر مسار تحقق، ومحتوى معلوماتي بلا استشارة طبية، وبلا تمثيل للشركة المصنعة.',
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
              {SITE.name} يقدّم طلبًا لسايتوتك (ميزوبروستول) يبدأ عبر واتساب،
              وصفحات معلوماتية. الرسالة ليست عملية بيع مكتملة ولا استشارة طبية.
              لا يضمن نتيجة صحية.
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
