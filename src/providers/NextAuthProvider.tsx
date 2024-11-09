'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';
import { TokenHandler } from './TokenHandler';

function NextAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, update } = useSession();

  return (
    <SessionProvider>
      {children}
      <TokenHandler session={session} update={update} />
    </SessionProvider>
  );
}

export default NextAuthProvider;
