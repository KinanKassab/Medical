export type Author = {
  slug: string
  name: string
  role: string
  bio: string
  credentials: string[]
}

export const AUTHORS: Author[] = [
  {
    slug: 'editorial-team',
    name: 'هيئة التحرير',
    role: 'فريق تحرير cytotc.com',
    bio: 'هيئة التحرير مسؤولة عن صياغة الصفحات المعلوماتية، وترتيب الاستشهادات، وتحديث النصوص عند تغيّر المصادر. هذا الملف لا يقدّم تشخيصًا أو علاجًا.',
    credentials: [],
  },
]

export function getAuthor(slug: string) {
  return AUTHORS.find((author) => author.slug === slug)
}

export const DEFAULT_AUTHOR = AUTHORS[0]
