'use client';

import { REMEMBER_ME_KEY } from '@/constants/storage';
import { useFormReset } from '@/hooks/auth/useFormReset';
import { TokenHandler } from '@/lib/TokenHandler';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function Auth() {
  const { data: session, update } = useSession();
  useFormReset();

  useEffect(() => {
    if (
      session &&
      typeof window !== 'undefined' &&
      localStorage.getItem(REMEMBER_ME_KEY) === 'false' &&
      !sessionStorage.getItem(REMEMBER_ME_KEY)
    ) {
      localStorage.removeItem(REMEMBER_ME_KEY);
      sessionStorage.removeItem(REMEMBER_ME_KEY);
      signOut({ callbackUrl: '/', redirect: true });
    }
  }, [session]);

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
