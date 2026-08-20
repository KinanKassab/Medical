import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'cytotc.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostHeader = request.headers.get('host') || ''
  const hostname = hostHeader.split(':')[0].toLowerCase()

  if (hostname === `www.${CANONICAL_HOST}`) {
    url.protocol = 'https:'
    url.hostname = CANONICAL_HOST
    url.port = ''
    return NextResponse.redirect(url, 308)
  }

  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase()
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|webp|xml|txt)$).*)'],
}
