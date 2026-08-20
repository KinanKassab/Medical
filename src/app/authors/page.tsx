import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { AUTHORS } from '@/content/authors'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'هيئة التحرير والمراجعون',
  description:
    'دليل الكتّاب والمراجعين على cytotc.com. لا تُعرض أسماء أطباء غير موثّقة. الملف الحالي هو هيئة التحرير فقط.',
  path: '/authors',
})

export default function AuthorsPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'هيئة التحرير', path: '/authors' },
          ]}
        />
      </div>
      <PageHero
        title="هيئة التحرير والمراجعون"
        lead="نعرض فقط ملفات يمكن الدفاع عنها. لا يوجد حاليًا مراجع طبي مرخّص موثّق."
      />
      <section className="content-section">
        <div className="container">
          <div className="hub-grid">
            {AUTHORS.map((author) => (
              <article className="hub-card" key={author.slug}>
                <h2>
                  <a href={`/authors/${author.slug}`}>{author.name}</a>
                </h2>
                <p>{author.role}</p>
                <p>{author.bio}</p>
              </article>
            ))}
          </div>
          <p className="owner-todo" style={{ marginTop: '2rem' }}>
            عند توفر مختص مرخّص موثّق سيُضاف ملف مستقل وفق{' '}
            <a href="/medical-review-policy">سياسة المراجعة الطبية</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
