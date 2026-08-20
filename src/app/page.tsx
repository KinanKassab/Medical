import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@/components/Icon'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { OrderCta } from '@/components/OrderCta'
import { TrustSection } from '@/components/TrustSection'
import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'
import { ARTICLES } from '@/content/articles'
import {
  canClaimLicensedEstablishment,
  displayOrganizationName,
  getOrganization,
  officialWhatsappOrderUrl,
} from '@/lib/organization'
import { createMetadata } from '@/lib/seo'

const homeMeta = createMetadata({
  title: 'طلب سايتوتك (ميزوبروستول) ومعلومات الدواء',
  description:
    'اطلب سايتوتك (ميزوبروستول) عبر واتساب من cytotc.com، أو اقرأ معلومات الدواء وتحذيرات السلامة من مصادر أولية. الرسالة تبدأ الاستفسار فقط وليست صرفًا تلقائيًا.',
  path: '/',
})

export const metadata: Metadata = {
  ...homeMeta,
  title: {
    absolute: 'طلب سايتوتك (ميزوبروستول) ومعلومات الدواء | cytotc.com',
  },
}

const hubs = [
  {
    href: '/order-cytotec',
    title: 'طلب الدواء',
    text: 'ابدأ عبر واتساب. الفريق يتحقق من المتطلبات والوصفة عند الحاجة قبل تأكيد التوفر والاعتماد.',
    icon: 'check' as const,
  },
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
    text: 'كيف يتم الطلب، وهل الوصفة لازمة، وكيف تتحقق من المنشأة ومن الدواء.',
    icon: 'headset' as const,
  },
]

export default function HomePage() {
  const org = getOrganization()
  const licensed = canClaimLicensedEstablishment(org)
  const orgName = displayOrganizationName(org)

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
          <p className="hero-kicker">{orgName} — cytotc.com</p>
          <h1>سايتوتك (ميزوبروستول): طلب منظّم ومعلومات موثّقة</h1>
          <p>
            سايتوتك أقراص تحتوي ميزوبروستول. عبر هذا الموقع يمكنك تقديم طلب
            للدواء من خلال {orgName}، أو قراءة المعلومات والتحذيرات. لسنا الموقع
            الرسمي لشركة فايزر.
            {licensed
              ? ' نعرض صفة المنشأة الدوائية المرخّصة وفق بيانات الترخيص المُدخلة.'
              : ' صفة «صيدلية مرخّصة» تظهر علنًا فقط بعد إدخال الاسم القانوني ورقم الترخيص وجهة الإصدار.'}
          </p>
          <div className="cta-row">
            {officialWhatsappOrderUrl() ? (
              <WhatsAppOrderCta location="homepage-hero" />
            ) : (
              <a className="cta-btn-secondary" href="/order-cytotec">
                شرح كيفية الطلب
              </a>
            )}
            <a className="cta-btn-secondary" href="/drug-information">
              معلومات الدواء
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <MedicalDisclaimer />
          <div className="section-title">
            <h2>مساران واضحان</h2>
            <p>
              الحصول على الدواء عبر طلب موثّق، أو فهم المادة الفعالة ومخاطرها.
            </p>
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
          <TrustSection heading="المنشأة والترخيص" />
          <div className="about-content" style={{ marginTop: '2.5rem' }}>
            <div className="about-text">
              <h2>كيف يعمل الطلب؟</h2>
              <p>
                اضغط{' '}
                <a href="/order-cytotec">طلب الدواء عبر واتساب</a> من صفحة
                الطلب أو من الزر الظاهر عند توفر الرقم الرسمي. بعد الرسالة يتولى
                فريق المنشأة التحقق من المتطلبات والوصفة عند الحاجة، ثم تأكيد
                التوفر والسعر، ثم الاعتماد والدفع والتسليم. الرسالة لا تعني
                صرفًا تلقائيًا.
              </p>
              <p>
                للمحتوى العلمي راجع{' '}
                <a href="/drug-information">معلومات ميزوبروستول</a> و{' '}
                <a href="/safety">صفحة السلامة</a>. للتحقق من تسجيل دواء في
                السعودية استخدم{' '}
                <a
                  href="https://sdi.sfda.gov.sa/Home/DrugSearch"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  نظام معلومات الأدوية السعودي
                </a>
                .
              </p>
              <p>
                تعريف أوسع بالمنشأة في{' '}
                <a href="/about">صفحة عن المنشأة</a>.
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
          <OrderCta />
          <div className="section-title" style={{ marginTop: '3rem' }}>
            <h2>شروح تحريرية</h2>
            <p>مقالات محدودة العدد للإجابة على أسئلة حقيقية.</p>
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
