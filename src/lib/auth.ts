import { baseOptions } from '@/app/api/options';
import { SignIn } from '@frolog/frolog-api';
import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { refreshAccessToken } from './refreshAccessToken';
import { getExpFromToken } from '@/utils/decodeToken';

const logIn = new SignIn(baseOptions);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const data = await logIn.fetch({
          email: credentials?.email!,
          password: credentials?.password!,
        });

        if (data.result) {
          const user = {
            id: data.id || '',
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
    async jwt({ token, user }) {
      if (user) {
        // 최초 로그인 시에만 실행
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = getExpFromToken(user.accessToken);
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
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
