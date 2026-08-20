import { Breadcrumbs } from '@/components/Breadcrumbs'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { PageHero } from '@/components/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'من نحن',
  description:
    'cytotc.com موقع معلوماتي مستقل عن سايتوتك وميزوبروستول. لا نمثل شركة فايزر، ولا نعرض ترخيص صيدلة غير موثّق، ونوضح ما هو مؤكد وما يحتاج توثيقًا من المشغّل.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'من نحن', path: '/about' },
          ]}
        />
      </div>
      <PageHero
        title="من نحن"
        lead="صفحة تعريف بالموقع كما يمكن إثباته اليوم، دون اختراع صفة قانونية أو طبية."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <MedicalDisclaimer compact />
            <h2>ما هو cytotc.com؟</h2>
            <p>
              cytotc.com موقع ويب ينشر محتوى عربيًا معلوماتيًا عن سايتوتك
              (Cytotec) والمادة الفعالة ميزوبروستول (Misoprostol). الجمهور
              المستهدف قراء يتحدثون العربية ويهتمون بفهم المعلومة من مصادر قابلة
              للمراجعة.
            </p>
            <h2>ما الذي لا ندّعيه</h2>
            <ul>
              <li>لسنا الموقع الرسمي لسايتوتك أو لشركة فايزر.</li>
              <li>
                لا نعرض هذا النطاق على أنه صيدلية مرخّصة أو منشأة طبية، لأن
                الاسم القانوني ورقم الترخيص لم يُوثَّقا للنشر.
              </li>
              <li>لا نقدّم تشخيصًا أو جرعات أو استشارة طبية.</li>
              <li>لا نثبت أصالة أي منتج يُتداول خارج هذه الصفحات.</li>
            </ul>
            <h2>ما الذي نلتزم به</h2>
            <ul>
              <li>
                الاستشهاد بمصادر أولية مثل نشرة DailyMed ومواقع الهيئة العامة
                للغذاء والدواء ووزارة الصحة ومنظمة الصحة العالمية عند ذكر وقائع
                تنظيمية أو دوائية.
              </li>
              <li>
                إعلان غياب المراجع الطبي المرخّص إلى أن يقدّم المشغّل بيانات
                قابلة للتحقق. انظر{' '}
                <a href="/medical-review-policy">سياسة المراجعة الطبية</a>.
              </li>
              <li>
                تصحيح الأخطاء وفق{' '}
                <a href="/corrections-policy">سياسة التصحيح</a>.
              </li>
            </ul>
            <h2>معلومات تحتاج توثيقًا من المشغّل</h2>
            <div className="owner-todo">
              <p>
                لم يُنشر بعد: الاسم القانوني للمنشأة، السجل التجاري، عنوان
                مقرّ يمكن التحقق منه، وترخيص مزاولة إن وُجد. حتى توفر هذه
                البيانات تبقى صفة الموقع معلوماتية فقط.
              </p>
            </div>
            <p>
              للتواصل استخدم <a href="/contact">صفحة الاتصال</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
