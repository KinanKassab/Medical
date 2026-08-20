export type Reference = {
  id: string
  title: string
  publisher: string
  url: string
  note?: string
}

export const REFERENCES = {
  dailymedCytotec: {
    id: 'dailymed-cytotec',
    title: 'DailyMed — CYTOTEC (misoprostol) tablet',
    publisher: 'U.S. National Library of Medicine / FDA label (Pfizer)',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ab12da7-5731-4e06-bf1c-bc3f2e711f12',
    note: 'النشرة الرسمية للدواء كما تظهر في قاعدة DailyMed.',
  },
  dailymedLookup: {
    id: 'dailymed-lookup',
    title: 'DailyMed lookup — CYTOTEC (misoprostol)',
    publisher: 'U.S. National Library of Medicine',
    url: 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ab12da7-5731-4e06-bf1c-bc3f2e711f12',
  },
  sfdaHome: {
    id: 'sfda-home',
    title: 'الهيئة العامة للغذاء والدواء',
    publisher: 'SFDA',
    url: 'https://www.sfda.gov.sa/',
  },
  sfdaSdi: {
    id: 'sfda-sdi',
    title: 'نظام معلومات الأدوية السعودي (SDI)',
    publisher: 'SFDA',
    url: 'https://sdi.sfda.gov.sa/Home/DrugSearch',
    note: 'أداة رسمية للبحث عن معلومات الأدوية المسجّلة في المملكة.',
  },
  sfdaTamani: {
    id: 'sfda-tamani',
    title: 'تطبيق طمني',
    publisher: 'SFDA',
    url: 'https://www.sfda.gov.sa/en',
    note: 'التطبيق الرسمي للتحقق من المنتجات الخاضعة لإشراف الهيئة.',
  },
  mohSa: {
    id: 'moh-sa',
    title: 'وزارة الصحة — المملكة العربية السعودية',
    publisher: 'MOH',
    url: 'https://www.moh.gov.sa/',
  },
  whoEmlMisoprostol: {
    id: 'who-eml-misoprostol',
    title: 'WHO Model List of Essential Medicines — Misoprostol (uterotonics)',
    publisher: 'World Health Organization',
    url: 'https://list.essentialmeds.org/recommendations/908',
  },
  whoUterotonics: {
    id: 'who-uterotonics',
    title: 'WHO recommendations: uterotonics for the prevention of postpartum haemorrhage',
    publisher: 'World Health Organization',
    url: 'https://www.who.int/publications/i/item/9789241550420',
  },
} as const satisfies Record<string, Reference>

export type ReferenceKey = keyof typeof REFERENCES
