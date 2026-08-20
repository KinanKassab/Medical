export function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string }[]
}) {
  return (
    <nav className="toc" aria-label="محتويات المقال">
      <p className="toc-title">في هذه الصفحة</p>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
