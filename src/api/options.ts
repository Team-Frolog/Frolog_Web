import { getSession } from 'next-auth/react';

export const baseOptions = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  accessToken: async () => {
    const session = await getSession();
    return session?.user.accessToken || '';
  },
};
