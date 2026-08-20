import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { JsonLd } from '@/components/JsonLd'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import { getFaqItems } from '@/content/faq'
import { createMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/site'

export const metadata = createMetadata({
  title: 'الأسئلة الشائعة عن سايتوتك وميزوبروستول',
  description:
    'كيف تطلب سايتوتك عبر cytotc.com، وهل الوصفة لازمة، وهل الموقع رسمي لفايزر، وكيف تتحقق من المنشأة ومن الدواء في السعودية.',
  path: '/faq',
})

export default function FaqPage() {
  const items = getFaqItems()
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.join(' '),
      },
    })),
    url: absoluteUrl('/faq'),
  }

  return (
    <main id="main">
      <JsonLd data={faqJsonLd} />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'الأسئلة الشائعة', path: '/faq' },
          ]}
        />
      </div>
      <PageHero
        title="الأسئلة الشائعة"
        lead="إجابات عن الطلب المنظّم، والترخيص عند توفره، ومعلومات ميزوبروستول."
      />
      <section className="faq-section">
        <div className="container">
          <MedicalDisclaimer compact />
          <FaqAccordion items={items} />
          <p>
            ابدأ من{' '}
            <a href="/order-cytotec">طلب سايتوتك</a> أو اقرأ{' '}
            <a href="/drug-information">معلومات الدواء</a> و{' '}
            <a href="/safety">صفحة السلامة</a>.
          </p>
          <OrderCta />
        </div>
      </section>
    </main>
  )
}
