import { baseOptions } from '@/app/api/options';
import { SignIn } from '@frolog/frolog-api';
import { NextAuthOptions, User } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

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
          const user: User = {
            id: data.id!,
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
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
