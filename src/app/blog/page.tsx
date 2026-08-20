import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OrderCta } from '@/components/OrderCta'
import { PageHero } from '@/components/PageHero'
import { ARTICLES } from '@/content/articles'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'المدونة',
  description:
    'مقالات معلوماتية محدودة العدد عن سايتوتك ووالتحذيرات والتحقق من الأدوية في السعودية، مع مصادر وتاريخ نشر.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <main id="main">
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'المدونة', path: '/blog' },
          ]}
        />
      </div>
      <PageHero
        title="المدونة"
        lead="شروح تحريرية للإجابة على أسئلة حقيقية. لا ننشر مئات الصفحات المتشابهة."
      />
      <section className="blog-section">
        <div className="container">
          <OrderCta />
          <div className="posts-grid">
            {ARTICLES.map((article) => (
              <article className="post-card" key={article.slug}>
                <div className="post-content">
                  <p className="post-date">
                    نُشر <time dateTime={article.publishedAt}>{article.publishedAt}</time>
                  </p>
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
