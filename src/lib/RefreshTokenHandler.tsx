import { Session } from 'next-auth';
import { useEffect, useRef } from 'react';

export const RefreshTokenHandler = ({
  session,
  update,
}: {
  session: Session | null;
  update: (data?: any) => Promise<Session | null>;
}) => {
  const interval = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    const watchAndUpdateIfExpire = () => {
      if (session) {
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const timeRemaining =
          session.user.accessTokenExpires - 5 * 60 - nowTime; // 만료 5분전

        if (timeRemaining <= 0) update();
      }
    };

    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 10);

    return () => clearInterval(interval.current);
  }, [session, update]);

  return <></>;
};
