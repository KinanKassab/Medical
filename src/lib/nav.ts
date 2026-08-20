export type NavItem = {
  href: string
  label: string
}

export const PRIMARY_NAV: NavItem[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '/order-cytotec', label: 'طلب الدواء' },
  { href: '/drug-information', label: 'معلومات الدواء' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/about', label: 'عن المنشأة' },
  { href: '/contact', label: 'تواصل معنا' },
]

export const FOOTER_INFO_LINKS: NavItem[] = [
  { href: '/order-cytotec', label: 'طلب سايتوتك' },
  { href: '/drug-information', label: 'معلومات عن سايتوتك' },
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/blog', label: 'مقالات تحريرية' },
  { href: '/about', label: 'عن المنشأة' },
  { href: '/authors', label: 'هيئة التحرير' },
]
