'use client'

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>حدث خطأ غير متوقع</h1>
          <p>تعذّر عرض هذه الصفحة. يمكنك المحاولة مرة أخرى أو العودة للرئيسية.</p>
          <div className="cta-row">
            <button className="cta-btn" type="button" onClick={reset}>
              إعادة المحاولة
            </button>
            <a className="cta-btn" href="/">
              الصفحة الرئيسية
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
