import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { displayOrganizationName, getOrganization } from '@/lib/organization'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'عن المنشأة',
  description:
    'من يشغّل cytotc.com وكيف يُقدَّم طلب سايتوتك. ليس الموقع الرسمي لشركة فايزر.',
  path: '/about',
})

export default function AboutPage() {
  const orgName = displayOrganizationName(getOrganization())

  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'عن المنشأة', path: '/about' },
          ]}
        />
      </div>
      <PageHero
        title="عن المنشأة"
        lead={`${orgName} يشغّل cytotc.com كبوابة طلب ومعلومات لسايتوتك. حيث يتم الطلب من خلال واتساب ويتم إرسال الدواء المناسب فوراً.`}
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <h2>من يشغّل cytotc.com؟</h2>
            <p>
              النطاق cytotc.com هو الواجهة الرقمية لـ {orgName}. الجمهور المستهدف
              أشخاص يبحثون عن الحصول على سايتوتك عبر مسار منظّم امن ومباشر.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
