'use client';

import { Session } from 'next-auth';
import { memo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import useSessionStore from '../store/sessionStore';

/** 초기 세션 값을 가져와 전역 store에 저장하는 핸들러 */
function SessionHandler({ session }: { session: Session | null }) {
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

  return null;
}

export default memo(SessionHandler);
