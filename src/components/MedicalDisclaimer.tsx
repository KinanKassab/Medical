export function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={compact ? 'disclaimer disclaimer-compact' : 'disclaimer'} aria-label="تنويه طبي">
      <p>
        <strong>تنويه:</strong> المحتوى معلوماتي عام وليس تشخيصًا أو وصفة أو
        استشارة طبية. سايتوتك (ميزوبروستول) دواء يخضع لتنظيم الجهات الصحية.
        لا يعتمد على هذا الموقع لاتخاذ قرار علاجي. راجع نشرة الدواء المعتمدة
        ومختصًا مرخّصًا. في الحالات الطارئة اطلب الرعاية من جهة صحية معتمدة.
      </p>
    </aside>
  )
}
