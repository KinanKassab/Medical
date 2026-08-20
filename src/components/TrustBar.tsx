function formatDate(iso: string) {
  return new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${iso}T00:00:00Z`))
}

export function TrustBar({
  publishedAt,
  updatedAt,
  medicallyReviewedAt,
  authorName,
  authorHref,
}: {
  publishedAt: string
  updatedAt: string
  medicallyReviewedAt: string | null
  authorName: string
  authorHref?: string
}) {
  return (
    <dl className="trust-bar">
      <div>
        <dt>الكاتب</dt>
        <dd>
          {authorHref ? <a href={authorHref}>{authorName}</a> : authorName}
        </dd>
      </div>
      <div>
        <dt>نُشر</dt>
        <dd>
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        </dd>
      </div>
      <div>
        <dt>حُدّث</dt>
        <dd>
          <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
        </dd>
      </div>
      <div>
        <dt>مراجعة طبية</dt>
        <dd>
          {medicallyReviewedAt ? (
            <time dateTime={medicallyReviewedAt}>
              {formatDate(medicallyReviewedAt)}
            </time>
          ) : (
            'لم تُراجع بعد'
          )}
        </dd>
      </div>
    </dl>
  )
}
