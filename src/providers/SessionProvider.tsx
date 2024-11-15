'use client';

import { Session } from 'next-auth';
import React, { memo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import useSessionStore from '../store/sessionStore';

function SessionProvider({ session }: { session: Session | null }) {
  const { data: clientSession } = useSession();
  const setSession = useSessionStore((state) => state.setSession);

  useEffect(() => {
    if ((session && clientSession) || clientSession) {
      setSession({
        userId: clientSession?.user.id,
        accessToken: clientSession?.user.accessToken,
        defaultWellId: clientSession?.user.defaultWellId || null,
      });
    } else if (session) {
      setSession({
        userId: session?.user.id,
        accessToken: session?.user.accessToken,
        defaultWellId: session?.user.defaultWellId || null,
      });
    } else {
      setSession({
        userId: undefined,
        accessToken: undefined,
        defaultWellId: null,
      });
    }
  }, [session, clientSession]);

  return <></>;
}

export default memo(SessionProvider);
