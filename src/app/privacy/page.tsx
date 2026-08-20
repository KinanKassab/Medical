import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = createMetadata({
  title: 'سياسة الخصوصية',
  description:
    'كيف يتعامل موقع cytotc.com مع البيانات في وضعه الحالي: لا يوجد حساب مستخدم، ونموذج التواصل يفتح واتساب على جهازك دون تخزين على خادمنا.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'الخصوصية', path: '/privacy' },
          ]}
        />
      </div>
      <PageHero
        title="سياسة الخصوصية"
        lead="وصف صادق لما يفعله الموقع اليوم، مع بنود تحتاج استكمالًا قانونيًا من المشغّل."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <p>آخر تحديث ظاهر: 20 أغسطس 2026.</p>
            <h2>المسؤول عن الموقع</h2>
            <p>
              الاسم القانوني للمشغّل غير منشور بعد. حتى توثيقه تُنسب هذه السياسة
              إلى مشغّل النطاق {SITE.domain}.
            </p>
            <h2>ما نجمعه</h2>
            <ul>
              <li>لا توجد حسابات مستخدمين على الموقع.</li>
              <li>
                نموذج التواصل لا يُرسل إلى خادمنا؛ يفتح واتساب على جهازك بالنص
                الذي كتبته.
              </li>
              <li>
                إذا فعّل المشغّل لاحقًا إحصاءات GA4 عبر متغير بيئة، ستُجمع
                بيانات استخدام وفق إعدادات Google. لا نعرض معرّف التتبع في
                الشيفرة المصدرية.
              </li>
            </ul>
            <h2>ملفات تعريف الارتباط</h2>
            <p>
              الموقع المعلوماتي الحالي لا يضع كوكيز تسويقية خاصة به. أي كوكيز
              لاحقة من أدوات تحليل يجب الإفصاح عنها هنا بعد تفعيلها.
            </p>
            <h2>روابط خارجية</h2>
            <p>
              صفحاتنا تشير إلى DailyMed والهيئة العامة للغذاء والدواء ووزارة
              الصحة ومصادر أخرى. سياسات تلك المواقع مستقلة عنا.
            </p>
            <h2>التواصل بخصوص الخصوصية</h2>
            <p>
              استخدم <a href="/contact">صفحة التواصل</a>. أضف المشغّل بريدًا
              على نطاق {SITE.domain} هنا بعد التحقق من السيطرة عليه.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
