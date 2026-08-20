import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleBody } from '@/components/ArticleBody'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { OrderCta } from '@/components/OrderCta'
import { RelatedArticles } from '@/components/RelatedArticles'
import { ReferencesList } from '@/components/ReferencesList'
import { TableOfContents } from '@/components/TableOfContents'
import { TrustBar } from '@/components/TrustBar'
import {
  ARTICLES,
  getArticle,
  getReferencesFor,
  getRelatedArticles,
} from '@/content/articles'
import { getAuthor } from '@/content/authors'
import { createMetadata } from '@/lib/seo'
import { absoluteUrl, SITE } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    ogType: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const author = getAuthor(article.authorSlug)
  const related = getRelatedArticles(article.slug)
  const references = getReferencesFor(article)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: 'ar',
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    author: {
      '@type': 'Organization',
      name: author?.name ?? 'هيئة التحرير',
      url: absoluteUrl(`/authors/${article.authorSlug}`),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/logo.png`,
      },
    },
  }

  return (
    <main id="main">
      <JsonLd data={articleLd} />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'المدونة', path: '/blog' },
            { name: article.title, path: `/blog/${article.slug}` },
          ]}
        />
        <header className="page-hero" style={{ paddingTop: '1.5rem' }}>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </header>
        <TrustBar
          publishedAt={article.publishedAt}
          updatedAt={article.updatedAt}
          medicallyReviewedAt={article.medicallyReviewedAt}
          authorName={author?.name ?? 'هيئة التحرير'}
          authorHref={`/authors/${article.authorSlug}`}
        />
        <MedicalDisclaimer compact />
        <div className="article-layout">
          <TableOfContents headings={article.headings} />
          <article className="article-shell">
            <ArticleBody blocks={article.body} />
            <ReferencesList references={references} />
            <RelatedArticles articles={related} />
            <p>
              راجع أيضًا{' '}
              <a href="/drug-information">معلومات الدواء</a> و{' '}
              <a href="/safety">السلامة</a> و{' '}
              <a href="/faq">الأسئلة الشائعة</a> و{' '}
              <a href="/order-cytotec">طلب سايتوتك عبر واتساب</a>.
            </p>
            <OrderCta />
          </article>
        </div>
      </div>
    </main>
  )
}
