import type { MetadataRoute } from 'next'
import { allIndexablePaths } from '@/lib/routes'
import { SITE } from '@/lib/site'
import { ARTICLES } from '@/content/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModByPath = new Map<string, string>()
  for (const article of ARTICLES) {
    lastModByPath.set(`/blog/${article.slug}`, article.updatedAt)
  }

  return allIndexablePaths().map((path) => ({
    url: path === '/' ? SITE.url : `${SITE.url}${path}`,
    lastModified: lastModByPath.get(path) ?? '2026-08-20',
    changeFrequency: path.startsWith('/blog') ? 'monthly' : 'monthly',
    priority:
      path === '/'
        ? 1
        : path === '/order-cytotec' ||
            path === '/drug-information' ||
            path === '/safety'
          ? 0.9
          : 0.7,
  }))
}
