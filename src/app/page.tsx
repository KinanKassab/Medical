import type { Metadata } from 'next'
import Image from 'next/image'
import { Icon, type IconName } from '@/components/Icon'
import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'
import {
  displayOrganizationName,
  officialWhatsappOrderUrl,
} from '@/lib/organization'
import { createMetadata } from '@/lib/seo'

const homeMeta = createMetadata({
  title: 'طلب سايتوتك ومعلومات الدواء',
  description:
    'اطلب سايتوتك عبر واتساب من cytotc.com، أو اقرأ معلومات الدواء من مصادر أولية. الرسالة تبدأ الاستفسار فقط وليست صرفًا تلقائيًا.',
  path: '/',
})

export const metadata: Metadata = {
  ...homeMeta,
  title: {
    absolute: 'طلب سايتوتك ومعلومات الدواء | cytotc.com',
  },
}

const hubs: { href: string; title: string; text: string; icon: IconName }[] = [
  {
    href: '/order-cytotec',
    title: 'طلب الدواء',
    text: 'ابدأ عبر واتساب. الفريق يتحقق من الحالة وارسال الدواء المناسب فوراً.',
    icon: 'check',
  },
  {
    href: '/drug-information',
    title: 'معلومات الدواء',
    text: 'ما هو سايتوتك ووفق النشرة الرسمية.',
    icon: 'book',
  },
  {
    href: '/faq',
    title: 'الأسئلة الشائعة',
    text: 'كيف يتم الطلب، وهل الوصفة لازمة، وكيف تتحقق من المنشأة ومن الدواء.',
    icon: 'headset',
  },
]

export default function HomePage() {
  const orgName = displayOrganizationName()

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
          <h1>سايتوتك: طلب منظّم ومعلومات موثّقة</h1>
          <p>
            سايتوتك أقراص تحتوي على موادفعالة قادرة على اجهاض الحمل. عبر هذا الموقع يمكنك تقديم طلب
            للدواء من خلال {orgName}.
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
          <div className="section-title">
            <h2>مسار آمن، مسار موثوق</h2>
            <p>
              إمّا طلب الدواء بطريقة آمنة وموثقة، أو الاطلاع الكامل على التفاصيل والمخاطر.
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
          <div className="about-content" style={{ marginTop: '2.5rem' }}>
            <div className="about-text">
              <h2>توثيق وموثوقية عالية بإشراف د. آية</h2>
              <p>
                الطلب يتم بخطوات واضحة مع متابعة من فريقنا. إشراف طبيب ذو خبرة مثل الدكتورة آية يضمن أعلى درجات الأمان والموثوقية، واهتمام خاص بكل طلب لضمان صحة الإجراءات.
              </p>
              <h3 style={{ marginTop: '1.5rem' }}>كيف يعمل الطلب؟</h3>
              <p>
                اضغط{' '}
                <a href="/order-cytotec">طلب الدواء عبر واتساب</a> من صفحة الطلب أو من الزر الظاهر. بعد الرسالة، يتابع الفريق حالتك، ثم يؤكد التوفر والسعر، وبعد الموافقة يتم الاعتماد والدفع والتسليم.
              </p>
              <p>
                للمحتوى العلمي راجع{' '}
                <a href="/drug-information">معلومات الدواء</a>.
              </p>
              <p>
                لمزيد من التفاصيل عن فريق العمل يمكنك مراجعة{' '}
                <a href="/about">صفحة التعريف بنا</a>.
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
    </main>
  )
}
