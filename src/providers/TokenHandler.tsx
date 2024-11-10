'use client';

import { PAGES } from '@/constants/page';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/nextjs';
import useSessionStore from '@/store/sessionStore';

interface Props {
  session: Session | null;
  update: (data?: any) => Promise<Session | null>;
}

export function TokenHandler({ session, update }: Props) {
  const setSession = useSessionStore((state) => state.setSession);
  const interval = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  useEffect(() => {
    if (session) {
      setSession({
        userId: session.user.id,
        accessToken: session.user.accessToken,
        defaultWellId: session.user.defaultWellId,
      });
    }

    if (interval.current) {
      clearInterval(interval.current);
    }

    if (session?.user.error === 'RefreshAccessTokenError') {
      Sentry.captureException(session?.user.error);
      signOut({ callbackUrl: PAGES.HOME, redirect: true });
    }

    const watchAndUpdateIfExpire = () => {
      if (session) {
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const timeRemaining =
          session.user.accessTokenExpires - 5 * 60 - nowTime; // 만료 5분전

        if (timeRemaining <= 0) update();
      }
    };

    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 30);

    return () => clearInterval(interval.current);
  }, [session, update]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
