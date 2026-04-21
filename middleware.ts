import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only protect these routes
  const protectedRoutes = ['/dashboard', '/admin']
  const path = request.nextUrl.pathname

  const isProtected = protectedRoutes.some(
    route => path.startsWith(route)
  )

  if (!isProtected) {
    return NextResponse.next()
  }

  // Check for auth cookie — @supabase/ssr stores the JWT as chunked cookies
  // named sb-{projectRef}-auth-token, sb-{projectRef}-auth-token.0, etc.
  const hasSession = request.cookies.getAll().some(c =>
    c.name === 'sb-access-token' ||
    (c.name.startsWith('sb-') && c.name.includes('auth-token'))
  )

  if (!hasSession) {
    return NextResponse.redirect(
      new URL('/auth/login', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
  ]
}