'use client';

import { REMEMBER_ME_KEY } from '@/constants/storage';
import { useFormReset } from '@/hooks/auth/useFormReset';
import { RefreshTokenHandler } from '@/lib/RefreshTokenHandler';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};
export default function AuthProvider({ children }: Props) {
  return (
    <SessionProvider>
      {children}
      <Auth />
    </SessionProvider>
  );
}

function Auth() {
  const rememberMe = localStorage.getItem(REMEMBER_ME_KEY);
  const isLoggedIn = sessionStorage.getItem(REMEMBER_ME_KEY);
  const { data: session, update } = useSession();
  useFormReset();

  useEffect(() => {
    if (
      rememberMe === 'false' &&
      !isLoggedIn &&
      typeof window !== 'undefined'
    ) {
      localStorage.removeItem(REMEMBER_ME_KEY);
      sessionStorage.removeItem(REMEMBER_ME_KEY);
      signOut();
    }
  }, []);

  return (
    <>{session && <RefreshTokenHandler session={session} update={update} />}</>
  );
}
