import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      defaultWellId: string | undefined;
      id: string;
      accessToken: string;
      refreshToken: string;
      accessTokenExpires: number;
      error: string;
    };
  }

  interface User {
    id: string;
    defaultWellId: string | undefined;
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    defaultWellId: string | undefined;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    error?: string;
  }
}
