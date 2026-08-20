import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { AUTHORS } from '@/content/authors'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'هيئة التحرير',
  description: 'دليل هيئة التحرير على cytotc.com.',
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
        title="هيئة التحرير"
        lead="الملفات المعروضة هنا تخص فريق تحرير الموقع."
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
        </div>
      </section>
    </main>
  )
}
