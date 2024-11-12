import useSessionStore from '@/store/sessionStore';

export const baseOptions = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  accessToken: () => useSessionStore.getState().accessToken || '',
};
