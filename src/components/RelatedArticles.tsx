import type { Article } from '@/content/articles'

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null
  return (
    <aside className="related" aria-labelledby="related-heading">
      <h2 id="related-heading">مقالات ذات صلة</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={`/blog/${article.slug}`}>{article.title}</a>
            <p>{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}
