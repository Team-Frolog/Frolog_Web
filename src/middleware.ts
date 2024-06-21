import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes: string[] = []; // 로그인이 필요한 페이지 목록
const publicRoutes: string[] = [
  '/landing',
  '/login',
  '/join',
  '/join/finish',
  '/find-password',
]; // 로그인이 되면 접근할 수 없는 페이지 목록

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }); // 로그인 유무 판단
  console.log('token', token, process.env.NEXTAUTH_SECRET);
  const { pathname } = req.nextUrl;

  // pathname이 어느 routes에 속하는지 확인
  const isWithAuth = protectedRoutes.includes(pathname);
  const isWithOutAuth = publicRoutes.includes(pathname);

  // 로그인 여부에 따라 redirect
  if (isWithAuth) return withAuth(req, !!token);
  else if (isWithOutAuth) return withOutAuth(req, !!token);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

function withAuth(req: NextRequest, isLoggedIn: boolean) {
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

function withOutAuth(req: NextRequest, isLoggedIn: boolean) {
  if (isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}
