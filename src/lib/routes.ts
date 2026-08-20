import { ARTICLES } from '@/content/articles'
import { AUTHORS } from '@/content/authors'

export const STATIC_INDEXABLE_PATHS = [
  '/',
  '/about',
  '/order-cytotec',
  '/drug-information',
  '/safety',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/editorial-policy',
  '/medical-review-policy',
  '/corrections-policy',
  '/authors',
  '/blog',
] as const

export function allIndexablePaths() {
  return [
    ...STATIC_INDEXABLE_PATHS,
    ...AUTHORS.map((author) => `/authors/${author.slug}`),
    ...ARTICLES.map((article) => `/blog/${article.slug}`),
  ]
}
