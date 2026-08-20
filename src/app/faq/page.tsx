import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { JsonLd } from '@/components/JsonLd'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { PageHero } from '@/components/PageHero'
import { FAQ_ITEMS } from '@/content/faq'
import { createMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/site'

export const metadata = createMetadata({
  title: 'الأسئلة الشائعة عن سايتوتك وميزوبروستول',
  description:
    'إجابات مباشرة: ما هو سايتوتك، وهل cytotc.com موقع رسمي، وهل هو صيدلية، وكيف تتحقق من دواء عبر الهيئة العامة للغذاء والدواء.',
  path: '/faq',
})

function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.join(' '),
      },
    })),
    url: absoluteUrl('/faq'),
  }
}

export default function FaqPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd()} />
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
        lead="أسئلة حقيقية حول هوية الموقع وحول ميزوبروستول، بإجابات محافظة ومستندة إلى مصادر."
      />
      <section className="faq-section">
        <div className="container">
          <MedicalDisclaimer compact />
          <FaqAccordion />
          <p>
            لمعلومات أوسع اقرأ{' '}
            <a href="/drug-information">صفحة معلومات الدواء</a> و{' '}
            <a href="/safety">صفحة السلامة</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
