'use client';

import { REMEMBER_ME_KEY } from '@/constants/storage';
import { useFormReset } from '@/hooks/auth/useFormReset';
import { TokenHandler } from '@/lib/TokenHandler';
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
  const { data: session, update } = useSession();
  useFormReset();

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem(REMEMBER_ME_KEY) === 'false' &&
      !sessionStorage.getItem(REMEMBER_ME_KEY)
    ) {
      localStorage.removeItem(REMEMBER_ME_KEY);
      sessionStorage.removeItem(REMEMBER_ME_KEY);
      signOut();
    }
  }, []);

  return <>{session && <TokenHandler session={session} update={update} />}</>;
}
