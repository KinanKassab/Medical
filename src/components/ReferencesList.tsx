import type { Reference } from '@/content/references'

export function ReferencesList({ references }: { references: Reference[] }) {
  return (
    <section className="references" aria-labelledby="references-heading">
      <h2 id="references-heading">المصادر</h2>
      <ol>
        {references.map((reference) => (
          <li key={reference.id}>
            <a href={reference.url} rel="noopener noreferrer" target="_blank">
              {reference.title}
            </a>
            <span> — {reference.publisher}</span>
            {reference.note ? <p className="reference-note">{reference.note}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
