import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { JsonLd } from '@/components/JsonLd'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import { getFaqItems } from '@/content/faq'
import { createMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/site'

export const metadata = createMetadata({
  title: 'الأسئلة الشائعة عن سايتوتك ',
  description:
    'كيف تطلب سايتوتك عبر cytotc.com، وهل الوصفة لازمة، وهل الموقع رسمي لفايزر.',
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
        lead="إجابات عن طلب سايتوتك ومعلومات الدواء."
      />
      <section className="faq-section">
        <div className="container">
          
          <FaqAccordion items={items} />
          <p>
            ابدأ من{' '}
            <a href="/order-cytotec">طلب سايتوتك</a> أو اقرأ{' '}
            <a href="/drug-information">معلومات الدواء</a>.
          </p>
          <OrderCta />
        </div>
      </section>
    </main>
  )
}
