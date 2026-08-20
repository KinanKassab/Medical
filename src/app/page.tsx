import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { ARTICLES } from '@/content/articles'
import { createMetadata } from '@/lib/seo'
import { WHATSAPP_URL } from '@/lib/site'

const homeMeta = createMetadata({
  title: 'معلومات عن سايتوتك (ميزوبروستول)',
  description:
    'موقع عربي معلوماتي عن سايتوتك (ميزوبروستول): ما هو الدواء، تحذيرات السلامة، وكيفية التحقق عبر الهيئة العامة للغذاء والدواء. ليس الموقع الرسمي للشركة المصنعة.',
  path: '/',
})

export const metadata: Metadata = {
  ...homeMeta,
  title: {
    absolute: 'معلومات عن سايتوتك (ميزوبروستول) | cytotc.com',
  },
}

const hubs = [
  {
    href: '/drug-information',
    title: 'معلومات الدواء',
    text: 'ما هو سايتوتك وميزوبروستول وفق النشرة الرسمية، دون تعليمات استخدام فردية.',
    icon: 'book' as const,
  },
  {
    href: '/safety',
    title: 'السلامة والتحذيرات',
    text: 'تحذير الحمل وتمزق الرحم وموانع الاستعمال كما تظهر في المصدر الأولي.',
    icon: 'alert' as const,
  },
  {
    href: '/faq',
    title: 'الأسئلة الشائعة',
    text: 'إجابات مباشرة: هل هذا الموقع رسمي؟ هل هو صيدلية؟ وكيف تتحقق من دواء في السعودية.',
    icon: 'headset' as const,
  },
  {
    href: '/blog',
    title: 'مقالات تحريرية',
    text: 'شروح أطول مع مصادر وتاريخ نشر وتحديث.',
    icon: 'file' as const,
  },
]

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container">
          <h1>معلومات عن سايتوتك (ميزوبروستول)</h1>
          <p>
            سايتوتك اسم تجاري لدواء يحتوي المادة الفعالة ميزوبروستول. هذا الموقع
            مصدر عربي معلوماتي مستقل. ليس الموقع الرسمي لشركة فايزر، ولا صيدلية
            مرخّصة موثّقة على هذه الصفحات، ولا يقدّم استشارة طبية.
          </p>
          <div className="cta-row">
            <a className="cta-btn" href="/drug-information">
              اقرأ معلومات الدواء
            </a>
            <a className="cta-btn" href="/safety">
              تحذيرات السلامة
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <MedicalDisclaimer />
          <div className="section-title">
            <h2>ماذا تجد في الموقع؟</h2>
            <p>صفحات معلوماتية بروابط لمصادر أولية، لا ادعاءات غير موثّقة.</p>
          </div>
          <div className="hub-grid">
            {hubs.map((hub) => (
              <article className="hub-card" key={hub.href}>
                <div className="feature-icon">
                  <Icon name={hub.icon} />
                </div>
                <h2>
                  <a href={hub.href}>{hub.title}</a>
                </h2>
                <p>{hub.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="section-title">
            <h2>حدود هذا الموقع</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                نُعيد صياغة ما يمكن توثيقه من نشرات دوائية رسمية ومواقع حكومية،
                ونوضح الفجوات عندما لا تتوفر معلومة قابلة للتحقق. لا نعرض تقييمات
                وهمية، ولا ننسب الموقع إلى أي شركة مصنّعة، ولا ندّعي أن منتجًا
                معيّنًا "أصلي 100٪".
              </p>
              <p>
                للتحقق من تسجيل دواء داخل السعودية استخدم{' '}
                <a href="https://sdi.sfda.gov.sa/Home/DrugSearch" rel="noopener noreferrer" target="_blank">
                  نظام معلومات الأدوية السعودي
                </a>{' '}
                وموقع{' '}
                <a href="https://www.sfda.gov.sa/" rel="noopener noreferrer" target="_blank">
                  الهيئة العامة للغذاء والدواء
                </a>
                .
              </p>
              <p>
                للاستفسار العام يمكن{' '}
                <a href="/contact">زيارة صفحة التواصل</a> أو المراسلة عبر{' '}
                <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                  واتساب
                </a>
                . الرسائل عبر التطبيقات ليست بديلاً عن رعاية طبية مرخّصة.
              </p>
            </div>
            <Image
              src="/images/about-image.jpg"
              alt=""
              width={600}
              height={300}
              className="about-image"
              sizes="(max-width: 992px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="section-title">
            <h2>أحدث الشروح التحريرية</h2>
            <p>مقالات محدودة العدد، مكتوبة للإجابة على أسئلة حقيقية.</p>
          </div>
          <div className="posts-grid">
            {ARTICLES.map((article) => (
              <article className="post-card" key={article.slug}>
                <div className="post-content">
                  <h2>
                    <a href={`/blog/${article.slug}`}>{article.title}</a>
                  </h2>
                  <p>{article.excerpt}</p>
                  <a className="read-more" href={`/blog/${article.slug}`}>
                    اقرأ المقال كاملاً
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
