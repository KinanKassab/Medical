import { PageHero } from '@/components/PageHero'

export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        title="الصفحة غير موجودة"
        lead="تعذّر العثور على هذا الرابط. يمكنك العودة إلى الصفحات الرئيسية للموقع."
      />
      <section className="content-section">
        <div className="container">
          <article className="prose-page">
            <ul>
              <li>
                <a href="/">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="/drug-information">معلومات الدواء</a>
              </li>
              <li>
                <a href="/faq">الأسئلة الشائعة</a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
