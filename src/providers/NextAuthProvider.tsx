'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';
import { TokenHandler } from './TokenHandler';

function Token() {
  const { data: session, update } = useSession();

  return session && <TokenHandler session={session} update={update} />;
}

function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Token />
    </SessionProvider>
  );
}

export default NextAuthProvider;
