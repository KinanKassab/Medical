export type Author = {
  slug: string
  name: string
  role: string
  bio: string
  /** Only list credentials that have been independently verified. */
  credentials: string[]
  isLicensedClinician: boolean
  reviewStatus: 'not-a-clinician' | 'pending-verification'
}

/**
 * Named clinicians are omitted until the owner provides verifiable licenses.
 * Do not add "د. آية" or similar names from the previous homepage; they were unverified.
 */
export const AUTHORS: Author[] = [
  {
    slug: 'editorial-team',
    name: 'هيئة التحرير',
    role: 'فريق تحرير cytotc.com',
    bio: 'هيئة التحرير مسؤولة عن صياغة الصفحات المعلوماتية، وترتيب الاستشهادات، وتحديث النصوص عند تغيّر المصادر. هذا الملف لا يمثّل طبيبًا أو صيدليًا مرخّصًا، ولا يقدّم تشخيصًا أو علاجًا.',
    credentials: [],
    isLicensedClinician: false,
    reviewStatus: 'not-a-clinician',
  },
]

export function getAuthor(slug: string) {
  return AUTHORS.find((author) => author.slug === slug)
}

export const DEFAULT_AUTHOR = AUTHORS[0]
