import { baseOptions } from '@/app/api/options';
import { RefreshToken, SignIn } from '@frolog/frolog-api';
import { NextAuthOptions, User } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

const logIn = new SignIn(baseOptions);
const refresh = new RefreshToken(baseOptions);

interface TokenPaylod {
  sub: 'signIn';
  id: string;
  exp: number;
  iat: number;
}

const refreshAccessToken = async (tokenObj: JWT) => {
  try {
    const data = await refresh.fetch({ refresh_token: tokenObj.refreshToken });

    if (data.result) {
      const tokenPaylod = jwt.decode(data.access_token!) as TokenPaylod;
      return {
        ...tokenObj,
        accessToken: data.access_token as string,
        refreshToken: data.refresh_token as string,
        accessTokenExpires: tokenPaylod.exp,
      };
    } else {
      throw new Error('Refresh failed');
    }
  } catch (err) {
    return {
      ...tokenObj,
      error: 'RefreshAccessTokenError',
    };
  }
};

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
          const user: User = {
            id: data.id || '',
            name: '',
            email: '',
            image: '',
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
        const tokenPaylod = jwt.decode(user.accessToken)! as TokenPaylod;

        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = tokenPaylod.exp;
      }

      const timeRemaing =
        token.accessTokenExpires -
        (Math.floor(new Date().getTime() / 1000) + 10 * 60);

      // 유효기간이 지난 경우
      if (timeRemaing <= 0) {
        token = await refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.accessTokenExpires = token.accessTokenExpires;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 14,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
