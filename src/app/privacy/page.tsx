import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { getOrganization } from '@/lib/organization'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = createMetadata({
  title: 'سياسة الخصوصية',
  description:
    'كيف يتعامل cytotc.com مع البيانات: الطلب يبدأ عبر واتساب الرسمي، دون نموذج جمع بيانات على الموقع ودون اختراع قنوات تواصل غير مؤكدة.',
  path: '/privacy',
})

export default function PrivacyPage() {
  const org = getOrganization()
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
              الاسم القانوني المعروض هو {org.legalName ?? `مشغّل النطاق ${SITE.domain}`}
              عند توفره في الإعدادات.
            </p>
            <h2>ما نجمعه</h2>
            <ul>
              <li>لا توجد حسابات مستخدمين على الموقع.</li>
              <li>
                طلب الدواء يبدأ عبر واتساب. لا يجمع الموقع نموذج طلب (اسم، جوال،
                وصفة) على خادمنا. أي محادثة لاحقة تخضع لسياسة واتساب ولمنشأتنا.
              </li>
              <li>
                نموذج التواصل، إن ظهر، يفتح واتساب على جهازك عندما يكون الرقم
                الرسمي مُدخلًا.
              </li>
              <li>
                إذا فعّل المشغّل لاحقًا إحصاءات GA4 عبر متغير بيئة، ستُجمع
                بيانات استخدام وفق إعدادات Google، بما في ذلك حدث النقر على زر
                الطلب عبر واتساب دون محتوى المحادثة. لا نعرض معرّف التتبع في
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
