import type { ArticleBlock } from '@/content/articles'

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        if (block.type === 'p') {
          return <p key={index}>{block.text}</p>
        }
        if (block.type === 'h2') {
          return (
            <h2 id={block.id} key={block.id}>
              {block.text}
            </h2>
          )
        }
        if (block.type === 'h3') {
          return (
            <h3 id={block.id} key={block.id}>
              {block.text}
            </h3>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'callout') {
          return (
            <aside
              key={index}
              className={`callout callout-${block.tone}`}
              role={block.tone === 'warning' ? 'note' : undefined}
            >
              <p>{block.text}</p>
            </aside>
          )
        }
        return (
          <figure className="table-wrap" key={index}>
            <table>
              {block.caption ? <caption>{block.caption}</caption> : null}
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join('-')}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        )
      })}
    </div>
  )
}
