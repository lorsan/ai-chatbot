export { auth as middleware } from './auth'

export const config = {
  matcher: ['/((?!api|home|_next/static|_next/image|favicon.ico).{1,}))']
}
