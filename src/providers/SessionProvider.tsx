'use client';

import { Session } from 'next-auth';
import React, { memo, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';

function SessionProvider({ session }: { session: Session | null }) {
  const setSession = useSessionStore((state) => state.setSession);

  useEffect(() => {
    if (session) {
      setSession({
        userId: session.user.id,
        accessToken: session.user.accessToken,
        defaultWellId: session.user.defaultWellId,
      });
    }
  }, [session]);

  return <></>;
}

export default memo(SessionProvider);
