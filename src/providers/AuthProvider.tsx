'use client';

import { useEffect } from 'react';
import { REMEMBER_ME_KEY } from '@/constants/storage';
import { useFormReset } from '@/hooks/auth/useFormReset';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { PAGES } from '@/constants/page';
import { TokenHandler } from './TokenHandler';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function Auth() {
  const { data: session, update, status } = useSession();
  useFormReset();

  useEffect(() => {
    if (
      status !== 'loading' &&
      session &&
      typeof window !== 'undefined' &&
      localStorage.getItem(REMEMBER_ME_KEY) === 'false' &&
      !sessionStorage.getItem(REMEMBER_ME_KEY)
    ) {
      localStorage.removeItem(REMEMBER_ME_KEY);
      sessionStorage.removeItem(REMEMBER_ME_KEY);
      signOut({ callbackUrl: PAGES.HOME, redirect: true });
    }
  }, [session, status]);

  return session && <TokenHandler session={session} update={update} />;
}

export default function AuthProvider({ children }: Props) {
  return (
    <SessionProvider>
      {children}
      <Auth />
    </SessionProvider>
  );
}
