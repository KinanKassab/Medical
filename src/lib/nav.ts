export type NavItem = {
  href: string
  label: string
}

export const PRIMARY_NAV: NavItem[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '/order-cytotec', label: 'طلب الدواء' },
  { href: '/drug-information', label: 'معلومات الدواء' },
  { href: '/safety', label: 'السلامة' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/about', label: 'عن المنشأة' },
  { href: '/contact', label: 'تواصل معنا' },
]

export const FOOTER_INFO_LINKS: NavItem[] = [
  { href: '/order-cytotec', label: 'طلب سايتوتك (ميزوبروستول)' },
  { href: '/drug-information', label: 'معلومات عن سايتوتك وميزوبروستول' },
  { href: '/safety', label: 'تحذيرات السلامة' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/blog', label: 'مقالات تحريرية' },
]

export const FOOTER_TRUST_LINKS: NavItem[] = [
  { href: '/about', label: 'عن المنشأة والترخيص' },
  { href: '/editorial-policy', label: 'السياسة التحريرية' },
  { href: '/medical-review-policy', label: 'سياسة المراجعة الطبية' },
  { href: '/corrections-policy', label: 'سياسة التصحيح' },
  { href: '/authors', label: 'هيئة التحرير' },
  { href: '/privacy', label: 'الخصوصية' },
  { href: '/terms', label: 'شروط الاستخدام' },
  { href: '/contact', label: 'تواصل معنا' },
]
