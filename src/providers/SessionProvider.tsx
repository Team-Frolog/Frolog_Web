'use client';

import { Session } from 'next-auth';
import React, { memo, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';

function SessionProvider({ session }: { session: Session | null }) {
  const setSession = useSessionStore((state) => state.setSession);

  useEffect(() => {
    setSession({
      userId: session ? session.user.id : null,
      accessToken: session ? session.user.accessToken : null,
      defaultWellId: session ? session.user.defaultWellId : null,
    });
  }, [session]);

  return <></>;
}

export default memo(SessionProvider);
