import { baseOptions } from '@/api/options';
import { SignIn } from '@frolog/frolog-api';
import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { getExpFromToken } from '@/utils/auth/decodeToken';
import { getWellList } from '@/features/Well/api/well.api';
import { refreshAccessToken } from './refreshAccessToken';

const logIn = new SignIn(baseOptions);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const data = await logIn.fetch({
          email: credentials.email,
          password: credentials.password,
        });

        // 기본 우물 확인
        let defaultWellId = null;
        
        if (data.id) {
          const res = await getWellList(data.id, 0);
          const isDefault = res.count === 1;

          if (isDefault) {
            defaultWellId = res.wells[0].id;
          }
        }

        if (data.result) {
          const user = {
            id: data.id || '',
            defaultWellId,
            accessToken: data.access_token!,
            refreshToken: data.refresh_token!,
          };
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        // 최초 로그인 시에만 실행
        token.id = user.id;
        token.defaultWellId = user.defaultWellId;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = getExpFromToken(user.accessToken);
      }

      if (trigger === 'update' && session.defaultWellId !== undefined) {
        token.defaultWellId = session.defaultWellId;
      }

      const timeRemaing =
        token.accessTokenExpires -
        (Math.floor(new Date().getTime() / 1000) + 5 * 60); // 10분 전

      // 유효기간이 지난 경우
      if (timeRemaing <= 0) {
        token = await refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.defaultWellId = token.defaultWellId;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.accessTokenExpires = token.accessTokenExpires;
        session.user.error = token.error || '';
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};
