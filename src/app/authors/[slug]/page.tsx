import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { PageHero } from '@/components/PageHero'
import { AUTHORS, getAuthor } from '@/content/authors'
import { createMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return AUTHORS.map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}
  return createMetadata({
    title: author.name,
    description: author.bio,
    path: `/authors/${author.slug}`,
  })
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: author.name,
    description: author.bio,
    url: absoluteUrl(`/authors/${author.slug}`),
  }

  return (
    <main id="main">
      <JsonLd data={personLd} />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'الرئيسية', path: '/' },
            { name: 'هيئة التحرير', path: '/authors' },
            { name: author.name, path: `/authors/${author.slug}` },
          ]}
        />
      </div>
      <PageHero title={author.name} lead={author.role} />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <p>{author.bio}</p>
            {author.credentials.length > 0 ? (
              <ul>
                {author.credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <p>
              المقالات الحالية تُنسب إلى هيئة التحرير. راجع{' '}
              <a href="/blog">المدونة</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
