import { WhatsAppOrderCta } from '@/components/WhatsAppOrderCta'
import { officialWhatsappOrderUrl } from '@/lib/organization'

export function OrderCta({
  title = 'طلب سايتوتك عبر واتساب',
  text = 'إرسال الرسالة يبدأ الاستفسار فقط. التحقق من الوصفة والمتطلبات النظامية، ثم تأكيد التوفر والسعر، ثم الاعتماد والدفع والتسليم، تتم مع فريق المنشأة. الرسالة لا تعني صرفًا تلقائيًا.',
}: {
  title?: string
  text?: string
}) {
  const hasWhatsapp = Boolean(officialWhatsappOrderUrl())

  return (
    <aside className="order-cta" aria-label="طلب الدواء عبر واتساب">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="cta-row">
        {hasWhatsapp ? (
          <WhatsAppOrderCta location="order-cta" />
        ) : (
          <p>
            زر واتساب غير ظاهر لأن الرقم الرسمي غير مُدخل بعد. راجع{' '}
            <a href="/order-cytotec">صفحة طلب الدواء</a>.
          </p>
        )}
        <a className="cta-btn-secondary" href="/order-cytotec">
          تفاصيل الطلب والتوفر
        </a>
      </div>
    </aside>
  )
}
