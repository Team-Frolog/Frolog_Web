import { RefreshToken, RefreshTokenRes } from '@frolog/frolog-api';
import { encode, getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getExpFromToken } from './utils/auth/decodeToken';

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
  '/onboarding',
  '/login',
  '/join',
  '/find-password',
  '/default',
]; // 로그인이 되면 접근할 수 없는 페이지 목록

export async function middleware(req: NextRequest) {
  const sessionToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 자동 로그인 판별
  const isRemember = req.cookies.get('isRemember');
  const isLoggedIn = req.cookies.get('isLoggedIn');

  let response = NextResponse.next();
  let newSessionToken = undefined;

  if (sessionToken && isRemember?.value === 'false' && !isLoggedIn) {
    response = NextResponse.redirect(new URL('/default', req.url));
    response.cookies.set(process.env.NEXTAUTH_TOKEN_NAME || '', '', {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'lax',
      maxAge: 0,
    });
    return response;
  }

  // 토큰 만료 확인 후 재발급
  if (sessionToken) {
    const nowTime = Math.floor(new Date().getTime() / 1000);
    const timeRemaining = sessionToken.accessTokenExpires - nowTime;

    // 만료된 경우
    if (timeRemaining <= 0) {
      // 재발급
      const result: RefreshTokenRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/refresh-token`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh_token: sessionToken.refreshToken }),
        }
      ).then((res) => res.json());

      if (result && result.access_token && result.refresh_token) {
        // 새로운 토큰 세팅
        newSessionToken = await encode({
          token: {
            ...sessionToken,
            refreshToken: result.refresh_token,
            accessToken: result.access_token,
            accessTokenExpires: getExpFromToken(result.access_token),
          },
          secret: process.env.NEXTAUTH_SECRET!,
          maxAge: 30 * 24 * 60 * 60,
        });

        response.cookies.set(
          process.env.NEXTAUTH_TOKEN_NAME!,
          newSessionToken,
          {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60,
          }
        );
      }
    }
  }

  const { pathname } = req.nextUrl;
  const defaultWellId = sessionToken ? sessionToken.defaultWellId : undefined;

  if (pathname === '/') {
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/default', req.url));
    } else if (defaultWellId) {
      // 재발급
      const redirectResponse = NextResponse.redirect(
        new URL(`/${sessionToken.id}/well/${defaultWellId}`, req.url)
      );
      if (newSessionToken) {
        redirectResponse.cookies.set(
          process.env.NEXTAUTH_TOKEN_NAME!,
          newSessionToken,
          {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60,
          }
        );
      }
      return redirectResponse;
    }
  }

  // pathname이 어느 routes에 속하는지 확인
  const isWithAuth = protectedRoutes.some((route) => pathname.includes(route));
  const isWithOutAuth = publicRoutes.some((route) => pathname.includes(route));

  // 로그인 여부에 따라 redirect
  if (isWithAuth) return withAuth(req, !!sessionToken, response);
  else if (isWithOutAuth)
    return withOutAuth(req, !!sessionToken, response, newSessionToken);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|$).*)', '/'],
};

function withAuth(
  req: NextRequest,
  isLoggedIn: boolean,
  response: NextResponse
) {
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }
  return response;
}

function withOutAuth(
  req: NextRequest,
  isLoggedIn: boolean,
  response: NextResponse,
  newSessionToken: string | undefined
) {
  if (isLoggedIn) {
    const redirectResponse = NextResponse.redirect(new URL('/', req.url));

    if (newSessionToken) {
      redirectResponse.cookies.set(
        process.env.NEXTAUTH_TOKEN_NAME!,
        newSessionToken,
        {
          httpOnly: true,
          secure: true,
          path: '/',
          sameSite: 'lax',
          maxAge: 30 * 24 * 60 * 60,
        }
      );
    }
    return redirectResponse;
  }
  return response;
}
