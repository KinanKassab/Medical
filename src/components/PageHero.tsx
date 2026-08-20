export function PageHero({
  title,
  lead,
}: {
  title: string
  lead: string
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  )
}
