import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes: string[] = [
  '/frolog-test',
  '/profile',
  '/join/finish',
  '/flash',
  '/well',
  '/comments',
  '/new-memo',
  '/new-review',
  '/quit',
  '/terms',
  '/store',
]; // 로그인이 필요한 페이지 목록
const publicRoutes: string[] = [
  '/landing',
  '/login',
  '/join',
  '/find-password',
  '/default',
]; // 로그인이 되면 접근할 수 없는 페이지 목록

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: true,
  });

  // 자동 로그인 판별
  const isRemember = req.cookies.get('isRemember');
  const isLoggedIn = req.cookies.get('isLoggedIn');

  if (token && isRemember?.value === 'false' && !isLoggedIn) {
    const response = NextResponse.redirect(new URL('/default', req.url));
    response.cookies.delete(process.env.NEXTAUTH_TOKEN_NAME || '');
    return response;
  }

  const { pathname } = req.nextUrl;
  const defaultWellId = token ? token.defaultWellId : undefined;

  if (pathname === '/') {
    if (!token) {
      return NextResponse.redirect(new URL('/default', req.url));
    } else if (defaultWellId) {
      return NextResponse.redirect(
        new URL(`/${token.id}/well/${defaultWellId}`, req.url)
      );
    }
  }

  // pathname이 어느 routes에 속하는지 확인
  const isWithAuth = protectedRoutes.some((route) => pathname.includes(route));
  const isWithOutAuth = publicRoutes.some((route) => pathname.includes(route));

  // 로그인 여부에 따라 redirect
  if (isWithAuth) return withAuth(req, !!token);
  else if (isWithOutAuth) return withOutAuth(req, !!token);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|$).*)', '/'],
};

function withAuth(req: NextRequest, isLoggedIn: boolean) {
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/landing', req.url));
  }
  return NextResponse.next();
}

function withOutAuth(req: NextRequest, isLoggedIn: boolean) {
  if (isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}
