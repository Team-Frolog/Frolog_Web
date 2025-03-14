'use client';

import { PAGES } from '@/constants/page';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/nextjs';

interface Props {
  session: Session | null;
  update: (data?: any) => Promise<Session | null>;
}

/** token refetch handler
 * - 30초마다 accessToken의 만료 시간을 체크합니다.
 * - 만료 5분 전인 경우, accessToken을 재발급합니다. (useSession update 호출)
 */
export function TokenHandler({ session, update }: Props) {
  const interval = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  useEffect(() => {
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
  return null;
}
