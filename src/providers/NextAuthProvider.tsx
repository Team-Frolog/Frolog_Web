'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';
import { TokenHandler } from './TokenHandler';

/** useSession으로 현재 세션을 가져오고, 토큰 핸들러를 적용하는 컴포넌트 */
function Token() {
  const { data: session, update } = useSession();

  return session && <TokenHandler session={session} update={update} />;
}

/** Next-auth session provider */
function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Token />
    </SessionProvider>
  );
}

export default NextAuthProvider;
