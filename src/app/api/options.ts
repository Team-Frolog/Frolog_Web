import { BASE_URL } from '@/constants/api';
import { getSession } from 'next-auth/react';

export const baseOptions = {
  baseURL: BASE_URL,
};

export const authOptions = {
  baseURL: BASE_URL,
  accessToken: async () => {
    const session = await getSession();
    return session?.user.accessToken || '';
  },
};
