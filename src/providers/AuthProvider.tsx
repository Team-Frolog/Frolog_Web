'use client';

import { useFormReset } from '@/hooks/auth/useFormReset';
import { RefreshTokenHandler } from '@/lib/RefreshTokenHandler';
import { SessionProvider, useSession } from 'next-auth/react';

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

  return (
    <>{session && <RefreshTokenHandler session={session} update={update} />}</>
  );
}
